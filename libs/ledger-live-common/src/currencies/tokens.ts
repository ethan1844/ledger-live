import { convertERC20, addTokens } from "@ledgerhq/cryptoassets";
import network from "../network";

export let loaded = false;

const fetchERC20Tokens = async () => {
  const { data } = await network({ url: "http://localhost:3000" });

  addTokens(data.map(convertERC20));
};

export const preloadTokens = async () => {
    await fetchERC20Tokens();
    loaded = true;
};
