// @flow
import { setSupportedCurrencies } from "@ledgerhq/live-common/currencies/index";
import { setPlatformVersion } from "@ledgerhq/live-common/platform/version";

setPlatformVersion("1.1.0");

setSupportedCurrencies([
  "bitcoin",
  "ethereum",
  "bsc",
  "polkadot",
  "solana",
  "ripple",
  "litecoin",
  "polygon",
  "bitcoin_cash",
  "stellar",
  "dogecoin",
  "cosmos",
  "crypto_org",
  "celo",
  "dash",
  "tron",
  "tezos",
  "elrond",
  "ethereum_classic",
  "zcash",
  "decred",
  "digibyte",
  "algorand",
  "qtum",
  "bitcoin_gold",
  "komodo",
  "pivx",
  "zencash",
  "vertcoin",
  "peercoin",
  "viacoin",
  "stakenet",
  "bitcoin_testnet",
  "ethereum_ropsten",
  "ethereum_goerli",
  "ethereum_rinkeby",
  "cosmos_testnet",
  "hedera",
  "cardano",
]);
