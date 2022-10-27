import {
  broadcastTransactionLogic,
  completeExchangeLogic,
  receiveOnAccountLogic,
  signMessageLogic,
  WalletAPIContext,
} from "./logic";

import { AppManifest } from "./types";
import {
  createFixtureAccount,
  createFixtureCryptoCurrency,
} from "../mock/fixtures/cryptoCurrencies";
import {
  OperationType,
  SignedOperation,
  SignedOperationRaw,
  TokenAccount,
} from "@ledgerhq/types-live";
import BigNumber from "bignumber.js";

import * as converters from "./converters";
import * as serializers from "./serializers";
import * as signMessage from "../hw/signMessage/index";
import { DerivationMode } from "../derivation";
import { TokenCurrency } from "@ledgerhq/types-cryptoassets";
import { RawWalletAPITransaction } from "./rawTypes";
import { setSupportedCurrencies } from "../currencies";
import { Transaction as EthereumTransaction } from "../families/ethereum/types";
import { TrackingAPI } from "./tracking";

describe("receiveOnAccountLogic", () => {
  // Given
  const mockWalletAPIReceiveRequested = jest.fn();
  const mockWalletAPIReceiveFail = jest.fn();
  const context = createContextContainingAccountId(
    {
      receiveRequested: mockWalletAPIReceiveRequested,
      receiveFail: mockWalletAPIReceiveFail,
    },
    "11",
    "12"
  );
  const uiNavigation = jest.fn();

  beforeEach(() => {
    mockWalletAPIReceiveRequested.mockClear();
    mockWalletAPIReceiveFail.mockClear();
    uiNavigation.mockClear();
  });

  describe("when nominal case", () => {
    // Given
    const accountId = "ethereumjs:2:ethereum:0x012:";
    const expectedResult = "Function called";

    beforeEach(() => uiNavigation.mockResolvedValueOnce(expectedResult));

    it("calls uiNavigation callback with an accountAddress", async () => {
      // Given
      const convertedAccount = {
        ...createWalletAPIAccount(),
        address: "Converted address",
      };
      jest
        .spyOn(converters, "accountToWalletAPIAccount")
        .mockReturnValueOnce(convertedAccount);

      // When
      const result = await receiveOnAccountLogic(
        context,
        accountId,
        uiNavigation
      );

      // Then
      expect(uiNavigation).toBeCalledTimes(1);
      expect(uiNavigation.mock.calls[0][2]).toEqual("Converted address");
      expect(result).toEqual(expectedResult);
    });

    it("calls the tracking for success", async () => {
      // When
      await receiveOnAccountLogic(context, accountId, uiNavigation);

      // Then
      expect(mockWalletAPIReceiveRequested).toBeCalledTimes(1);
      expect(mockWalletAPIReceiveFail).toBeCalledTimes(0);
    });
  });

  describe("when account cannot be found", () => {
    // Given
    const nonFoundAccountId = "ethereumjs:2:ethereum:0x010:";

    it("returns an error", async () => {
      // When
      await expect(async () => {
        await receiveOnAccountLogic(context, nonFoundAccountId, uiNavigation);
      }).rejects.toThrowError("Account required");

      // Then
      expect(uiNavigation).toBeCalledTimes(0);
    });

    it("calls the tracking for error", async () => {
      // When
      await expect(async () => {
        await receiveOnAccountLogic(context, nonFoundAccountId, uiNavigation);
      }).rejects.toThrow();

      // Then
      expect(mockWalletAPIReceiveRequested).toBeCalledTimes(1);
      expect(mockWalletAPIReceiveFail).toBeCalledTimes(1);
    });
  });
});

describe("completeExchangeLogic", () => {
  // Given
  const mockWalletAPICompleteExchangeRequested = jest.fn();
  const context = createContextContainingAccountId(
    {
      completeExchangeRequested: mockWalletAPICompleteExchangeRequested,
    },
    "11",
    "12"
  );
  const uiNavigation = jest.fn();

  beforeAll(() => {
    setSupportedCurrencies(["bitcoin", "ethereum"]);
  });
  afterAll(() => {
    setSupportedCurrencies([]);
  });

  beforeEach(() => {
    mockWalletAPICompleteExchangeRequested.mockClear();
    uiNavigation.mockClear();
  });

  describe("when nominal case", () => {
    // Given
    const expectedResult = "Function called";

    beforeEach(() => uiNavigation.mockResolvedValueOnce(expectedResult));

    it("calls uiNavigation callback", async () => {
      // Given
      const fromAccount = createFixtureAccount("17");
      context.accounts = [...context.accounts, fromAccount];
      const rawTransaction = createRawEtherumTransaction();
      const completeExchangeRequest = {
        provider: "provider",
        fromAccountId: "ethereumjs:2:ethereum:0x017:",
        toAccountId: "ethereumjs:2:ethereum:0x042:",
        transaction: rawTransaction,
        binaryPayload: "binaryPayload",
        signature: "signature",
        feesStrategy: "medium",
        exchangeType: 8,
      };

      const expectedTransaction: EthereumTransaction = {
        family: "ethereum",
        amount: new BigNumber("1000000000"),
        recipient: "0x0123456",
        nonce: 8,
        data: Buffer.from("Some data...", "hex"),
        gasPrice: new BigNumber("700000"),
        userGasLimit: new BigNumber("1200000"),
        feesStrategy: "medium",
        estimatedGasLimit: null,
        feeCustomUnit: { name: "Gwei", code: "Gwei", magnitude: 9 },
        mode: "send",
        networkInfo: null,
        useAllAmount: false,
      };

      // When
      const result = await completeExchangeLogic(
        context,
        completeExchangeRequest,
        uiNavigation
      );

      // Then
      expect(uiNavigation).toBeCalledTimes(1);
      expect(uiNavigation.mock.calls[0][0]).toEqual({
        provider: "provider",
        exchange: {
          fromAccount,
          fromParentAccount: null,
          toAccount: undefined,
          toParentAccount: null,
        },
        transaction: expectedTransaction,
        binaryPayload: "binaryPayload",
        signature: "signature",
        feesStrategy: "medium",
        exchangeType: 8,
      });
      expect(result).toEqual(expectedResult);
    });

    it.each(["slow", "medium", "fast", "custom"])(
      "calls uiNavigation with a transaction that has the %s feeStrategy",
      async (expectedFeeStrategy) => {
        // Given
        const fromAccount = createFixtureAccount("17");
        context.accounts = [...context.accounts, fromAccount];
        const rawTransaction = createRawEtherumTransaction();
        const completeExchangeRequest = {
          provider: "provider",
          fromAccountId: "ethereumjs:2:ethereum:0x017:",
          toAccountId: "ethereumjs:2:ethereum:0x042:",
          transaction: rawTransaction,
          binaryPayload: "binaryPayload",
          signature: "signature",
          feesStrategy: expectedFeeStrategy,
          exchangeType: 8,
        };

        // When
        await completeExchangeLogic(
          context,
          completeExchangeRequest,
          uiNavigation
        );

        // Then
        expect(uiNavigation).toBeCalledTimes(1);
        expect(
          uiNavigation.mock.calls[0][0]["transaction"].feesStrategy
        ).toEqual(expectedFeeStrategy);
      }
    );

    it("calls the tracking for success", async () => {
      // Given
      const completeExchangeRequest = {
        provider: "provider",
        fromAccountId: "ethereumjs:2:ethereum:0x012:",
        toAccountId: "ethereumjs:2:ethereum:0x042:",
        transaction: createRawEtherumTransaction(),
        binaryPayload: "binaryPayload",
        signature: "signature",
        feesStrategy: "feeStrategy",
        exchangeType: 8,
      };

      // When
      await completeExchangeLogic(
        context,
        completeExchangeRequest,
        uiNavigation
      );

      // Then
      expect(mockWalletAPICompleteExchangeRequested).toBeCalledTimes(1);
    });
  });

  describe("when Account is from a different family than the transaction", () => {
    // Given
    const expectedResult = "Function called";

    beforeEach(() => uiNavigation.mockResolvedValueOnce(expectedResult));

    it("returns an error", async () => {
      // Given
      const fromAccount = createFixtureAccount("17");
      context.accounts = [...context.accounts, fromAccount];
      const rawTransaction = createRawBitcoinTransaction();
      const completeExchangeRequest = {
        provider: "provider",
        fromAccountId: "ethereumjs:2:ethereum:0x017:",
        toAccountId: "ethereumjs:2:ethereum:0x042:",
        transaction: rawTransaction,
        binaryPayload: "binaryPayload",
        signature: "signature",
        feesStrategy: "feeStrategy",
        exchangeType: 8,
      };

      // When
      await expect(async () => {
        await completeExchangeLogic(
          context,
          completeExchangeRequest,
          uiNavigation
        );
      }).rejects.toThrowError(
        "Account and transaction must be from the same family"
      );

      // Then
      expect(uiNavigation).toBeCalledTimes(0);
    });
  });
});

describe("broadcastTransactionLogic", () => {
  // Given
  const mockWalletAPIBroadcastFail = jest.fn();
  const context = createContextContainingAccountId(
    {
      broadcastFail: mockWalletAPIBroadcastFail,
    },
    "11",
    "12"
  );
  const uiNavigation = jest.fn();

  beforeEach(() => {
    mockWalletAPIBroadcastFail.mockClear();
    uiNavigation.mockClear();
  });

  describe("when nominal case", () => {
    // Given
    const accountId = "ethereumjs:2:ethereum:0x012:";
    const rawSignedTransaction = createSignedOperationRaw();

    it("calls uiNavigation callback with a signedOperation", async () => {
      // Given
      const expectedResult = "Function called";
      const signedOperation = createSignedOperation();
      jest
        .spyOn(serializers, "deserializeWalletAPISignedTransaction")
        .mockReturnValueOnce(signedOperation);
      uiNavigation.mockResolvedValueOnce(expectedResult);

      // When
      const result = await broadcastTransactionLogic(
        context,
        accountId,
        rawSignedTransaction,
        uiNavigation
      );

      // Then
      expect(uiNavigation).toBeCalledTimes(1);
      expect(uiNavigation.mock.calls[0][2]).toEqual(signedOperation);
      expect(result).toEqual(expectedResult);
    });

    it("calls the tracking for success", async () => {
      // When
      await broadcastTransactionLogic(
        context,
        accountId,
        rawSignedTransaction,
        uiNavigation
      );

      // Then
      expect(mockWalletAPIBroadcastFail).toBeCalledTimes(0);
    });
  });

  describe("when account cannot be found", () => {
    // Given
    const nonFoundAccountId = "ethereumjs:2:ethereum:0x010:";
    const rawSignedTransaction = createSignedOperationRaw();

    it("returns an error", async () => {
      // Given
      const expectedResult = "Function called";
      const signedOperation = createSignedOperation();
      jest
        .spyOn(serializers, "deserializeWalletAPISignedTransaction")
        .mockReturnValueOnce(signedOperation);
      uiNavigation.mockResolvedValueOnce(expectedResult);

      // When
      await expect(async () => {
        await broadcastTransactionLogic(
          context,
          nonFoundAccountId,
          rawSignedTransaction,
          uiNavigation
        );
      }).rejects.toThrowError("Account required");

      // Then
      expect(uiNavigation).toBeCalledTimes(0);
    });

    it("calls the tracking for error", async () => {
      // When
      await expect(async () => {
        await broadcastTransactionLogic(
          context,
          nonFoundAccountId,
          rawSignedTransaction,
          uiNavigation
        );
      }).rejects.toThrow();

      // Then
      expect(mockWalletAPIBroadcastFail).toBeCalledTimes(1);
    });
  });
});

describe("signMessageLogic", () => {
  // Given
  const mockWalletAPISignMessageRequested = jest.fn();
  const mockWalletAPISignMessageFail = jest.fn();
  const context = createContextContainingAccountId(
    {
      signMessageRequested: mockWalletAPISignMessageRequested,
      signMessageFail: mockWalletAPISignMessageFail,
    },
    "11",
    "12"
  );
  const uiNavigation = jest.fn();

  beforeEach(() => {
    mockWalletAPISignMessageRequested.mockClear();
    mockWalletAPISignMessageFail.mockClear();
    uiNavigation.mockClear();
  });

  describe("when nominal case", () => {
    // Given
    const accountId = "ethereumjs:2:ethereum:0x012:";
    const messageToSign = "Message to sign";
    const spyPrepareMessageToSign = jest.spyOn(
      signMessage,
      "prepareMessageToSign"
    );

    beforeEach(() => spyPrepareMessageToSign.mockClear());

    it("calls uiNavigation callback with a signedOperation", async () => {
      // Given
      const expectedResult = "Function called";
      const formattedMessage = createMessageData();
      spyPrepareMessageToSign.mockReturnValueOnce(formattedMessage);
      uiNavigation.mockResolvedValueOnce(expectedResult);

      // When
      const result = await signMessageLogic(
        context,
        accountId,
        messageToSign,
        uiNavigation
      );

      // Then
      expect(uiNavigation).toBeCalledTimes(1);
      expect(uiNavigation.mock.calls[0][1]).toEqual(formattedMessage);
      expect(result).toEqual(expectedResult);
    });

    it("calls the tracking for success", async () => {
      // When
      await signMessageLogic(context, accountId, messageToSign, uiNavigation);

      // Then
      expect(mockWalletAPISignMessageRequested).toBeCalledTimes(1);
      expect(mockWalletAPISignMessageFail).toBeCalledTimes(0);
    });
  });

  describe("when account cannot be found", () => {
    // Given
    const nonFoundAccountId = "ethereumjs:2:ethereum:0x010:";
    const messageToSign = "Message to sign";

    it("returns an error", async () => {
      // When
      await expect(async () => {
        await signMessageLogic(
          context,
          nonFoundAccountId,
          messageToSign,
          uiNavigation
        );
      }).rejects.toThrowError("account not found");

      // Then
      expect(uiNavigation).toBeCalledTimes(0);
    });

    it("calls the tracking for error", async () => {
      // When
      await expect(async () => {
        await signMessageLogic(
          context,
          nonFoundAccountId,
          messageToSign,
          uiNavigation
        );
      }).rejects.toThrow();

      // Then
      expect(mockWalletAPISignMessageRequested).toBeCalledTimes(1);
      expect(mockWalletAPISignMessageFail).toBeCalledTimes(1);
    });
  });

  describe("when account found is not of type 'Account'", () => {
    // Given
    const tokenAccountId = "15";
    const messageToSign = "Message to sign";
    context.accounts = [
      createTokenAccount(tokenAccountId),
      ...context.accounts,
    ];

    it("returns an error", async () => {
      // When
      await expect(async () => {
        await signMessageLogic(
          context,
          tokenAccountId,
          messageToSign,
          uiNavigation
        );
      }).rejects.toThrowError("account provided should be the main one");

      // Then
      expect(uiNavigation).toBeCalledTimes(0);
    });

    it("calls the tracking for error", async () => {
      // When
      await expect(async () => {
        await signMessageLogic(
          context,
          tokenAccountId,
          messageToSign,
          uiNavigation
        );
      }).rejects.toThrow();

      // Then
      expect(mockWalletAPISignMessageRequested).toBeCalledTimes(1);
      expect(mockWalletAPISignMessageFail).toBeCalledTimes(1);
    });
  });

  describe("when inner call prepareMessageToSign raise an error", () => {
    // Given
    const accountId = "ethereumjs:2:ethereum:0x012:";
    const messageToSign = "Message to sign";
    const spyPrepareMessageToSign = jest.spyOn(
      signMessage,
      "prepareMessageToSign"
    );

    beforeEach(() => spyPrepareMessageToSign.mockClear());

    it("returns an error", async () => {
      // Given
      spyPrepareMessageToSign.mockImplementationOnce(() => {
        throw new Error("Some error");
      });

      // When
      await expect(async () => {
        await signMessageLogic(context, accountId, messageToSign, uiNavigation);
      }).rejects.toThrowError("Some error");

      // Then
      expect(uiNavigation).toBeCalledTimes(0);
    });

    it("calls the tracking for error", async () => {
      // Given
      spyPrepareMessageToSign.mockImplementationOnce(() => {
        throw new Error("Some error");
      });

      // When
      await expect(async () => {
        await signMessageLogic(context, accountId, messageToSign, uiNavigation);
      }).rejects.toThrow();

      // Then
      expect(mockWalletAPISignMessageRequested).toBeCalledTimes(1);
      expect(mockWalletAPISignMessageFail).toBeCalledTimes(1);
    });
  });
});

function createAppManifest(id = "1"): AppManifest {
  return {
    id,
    private: false,
    name: "New App Manifest",
    url: "https://www.ledger.com",
    homepageUrl: "https://www.ledger.com",
    supportUrl: "https://www.ledger.com",
    icon: null,
    platform: "all",
    apiVersion: "1.0.0",
    manifestVersion: "1.0.0",
    branch: "debug",
    params: undefined,
    categories: [],
    currencies: "*",
    content: {
      shortDescription: {
        en: "short description",
      },
      description: {
        en: "description",
      },
    },
    permissions: [],
    domains: [],
  };
}

function createContextContainingAccountId(
  tracking: Partial<TrackingAPI>,
  ...accountIds: string[]
): WalletAPIContext {
  return {
    manifest: createAppManifest(),
    accounts: [
      ...accountIds.map((val) => createFixtureAccount(val)),
      createFixtureAccount(),
    ],
    tracking: tracking as TrackingAPI,
  };
}

function createSignedOperation(): SignedOperation {
  const operation = {
    id: "42",
    hash: "hashed",
    type: "IN" as OperationType,
    value: new BigNumber(0),
    fee: new BigNumber(0),
    senders: [],
    recipients: [],
    blockHeight: null,
    blockHash: null,
    accountId: "14",
    date: new Date(),
    extra: {},
  };
  return {
    operation,
    signature: "Signature",
    expirationDate: null,
  };
}

function createSignedOperationRaw(): SignedOperationRaw {
  const rawOperation = {
    id: "12",
    hash: "123456",
    type: "CREATE" as OperationType,
    value: "0",
    fee: "0",
    senders: [],
    recipients: [],
    blockHeight: null,
    blockHash: null,
    accountId: "12",
    date: "01/01/1970",
    extra: {},
  };
  return {
    operation: rawOperation,
    signature: "Signature",
    expirationDate: null,
  };
}

function createWalletAPIAccount() {
  return {
    id: "12",
    name: "",
    address: "",
    currency: "",
    balance: new BigNumber(0),
    spendableBalance: new BigNumber(0),
    blockHeight: 0,
    lastSyncDate: new Date(),
  };
}

function createMessageData() {
  return {
    currency: createFixtureCryptoCurrency("eth"),
    path: "path",
    derivationMode: "ethM" as DerivationMode,
    message: "default message",
    rawMessage: "raw default message",
  };
}

function createTokenAccount(id = "32"): TokenAccount {
  return {
    type: "TokenAccount",
    id,
    parentId: "whatever",
    token: createTokenCurrency(),
    balance: new BigNumber(0),
    spendableBalance: new BigNumber(0),
    creationDate: new Date(),
    operationsCount: 0,
    operations: [],
    pendingOperations: [],
    starred: false,
    balanceHistoryCache: {
      WEEK: { latestDate: null, balances: [] },
      HOUR: { latestDate: null, balances: [] },
      DAY: { latestDate: null, balances: [] },
    },
    swapHistory: [],
  };
}

function createTokenCurrency(): TokenCurrency {
  return {
    type: "TokenCurrency",
    id: "3",
    contractAddress: "",
    parentCurrency: createFixtureCryptoCurrency("eth"),
    tokenType: "",
    //-- CurrencyCommon
    name: "",
    ticker: "",
    units: [],
  };
}

function createRawEtherumTransaction(): RawWalletAPITransaction {
  return {
    family: "ethereum" as any,
    amount: "1000000000",
    recipient: "0x0123456",
    nonce: 8,
    data: "Some data...",
    gasPrice: "700000",
    gasLimit: "1200000",
  };
}

function createRawBitcoinTransaction(): RawWalletAPITransaction {
  return {
    family: "bitcoin" as any,
    amount: "1000000000",
    recipient: "0x0123456",
    feePerByte: "900000",
  };
}
