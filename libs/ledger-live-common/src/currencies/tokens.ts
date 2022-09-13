import { convertERC20, addTokens } from "@ledgerhq/cryptoassets";
import network from "../network";

export let loaded = false;

export const fetchERC20Tokens = async () => {
  let tokens;
  try {
    const { data } = await network({ url: "http://localhost:3000" });

    tokens = data.map(convertERC20);
  } catch (e) {
    tokens = [];
  }

  return tokens;
};

export const preloadTokens = async () => {
  await fetchERC20Tokens();
};
