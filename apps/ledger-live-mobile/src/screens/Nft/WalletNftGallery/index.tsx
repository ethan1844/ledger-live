import React, { useMemo } from "react";
import { Box } from "@ledgerhq/native-ui";
import { useSelector } from "react-redux";
import { orderByLastReceived } from "@ledgerhq/live-common/lib/nft/helpers";
import { NftList } from "../../../components/Nft/NftList";
import { accountsSelector } from "../../../reducers/accounts";
import NftGalleryEmptyState from "../NftGallery/NftGalleryEmptyState";
import { CollapsibleScrollView } from "@r0b0t3d/react-native-collapsible";

const WalletNftGallery = () => {
  const accounts = useSelector(accountsSelector);
  const nfts = accounts.map(a => a.nfts ?? []).flat();

  const nftsOrdered = useMemo(
    () => orderByLastReceived(accounts, nfts),
    [accounts, nfts],
  );
  const hasNFTs = nftsOrdered.length > 0;
  return (
    <CollapsibleScrollView headerSnappable={false}>

    <Box mx={6} mt={6} mb={12} flex={1}>
      {hasNFTs ? <NftList data={nftsOrdered} /> : <NftGalleryEmptyState />}
    </Box>
    </CollapsibleScrollView>
  );
};

export default WalletNftGallery;
