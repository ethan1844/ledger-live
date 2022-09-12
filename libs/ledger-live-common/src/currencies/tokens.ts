import { convertERC20, addTokens } from "@ledgerhq/cryptoassets";
import network from "../network";

export let loaded = false;

export const fetchERC20Tokens = async () => {
  const { data } = await network({ url: "http://localhost:3000" });

  const tokens = data.map(convertERC20);

  return tokens;
};

export const preloadTokens = async () => {
    await fetchERC20Tokens();
};
