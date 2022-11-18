import React, { memo, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import { useNftMetadata } from "@ledgerhq/live-common/nft/index";

import { NFTMetadata, NFTStandard, ProtoNFT } from "@ledgerhq/types-live";
import { NFTResource } from "@ledgerhq/live-common/nft/NftMetadataProvider/types";
import { Box, Flex, Tag, Text } from "@ledgerhq/native-ui";

import { useNavigation } from "@react-navigation/native";
import styled, { BaseStyledProps } from "@ledgerhq/native-ui/components/styled";
import { useTranslation } from "react-i18next";
import { getCryptoCurrencyById } from "@ledgerhq/live-common/currencies/index";
import CurrencyIcon from "../CurrencyIcon";
import NftMedia from "./NftMedia";
import Skeleton from "../Skeleton";
import { NavigatorName, ScreenName } from "../../const";
import { track } from "../../analytics";

type Props = {
  nft: ProtoNFT;
  ownedNftsInCollection?: number;
};

const StyledTouchableOpacity = styled.TouchableOpacity<BaseStyledProps>`
  margin-bottom: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii[1]}px;
  background-color: ${props => props.theme.colors.background.main};
`;

const displayText = (text?: string | null) => text ?? "--";

const NftCardView = ({
  nft,
  status,
  metadata,
  ownedNftsInCollection,
}: {
  nft: ProtoNFT;
  status: NFTResource["status"];
  metadata: NFTMetadata;
  ownedNftsInCollection?: number;
}) => {
  const navigation = useNavigation();

  const loading = status === "loading";

  const currency = useMemo(
    () => getCryptoCurrencyById(nft.currencyId),
    [nft.currencyId],
  );

  const navigateToNftViewer = useCallback(() => {
    track("NFT_clicked", {
      NFT_collection: metadata?.tokenName,
      NFT_title: metadata?.nftName,
    });

    navigation.navigate(NavigatorName.NftNavigator, {
      screen: ScreenName.NftViewer,
      params: {
        nft,
      },
    });
  }, [metadata, navigation, nft]);

  return (
    <StyledTouchableOpacity bg="background.main" onPress={navigateToNftViewer}>
      <NftMediaComponent
        status={status}
        metadata={metadata}
        standard={nft.standard}
        ownedNftsInCollection={ownedNftsInCollection}
      />
      <Box height={36} mb={4}>
        <Skeleton loading={loading} height={8} width={115} borderRadius={4}>
          <Flex flexDirection="column">
            <Text
              variant="body"
              fontWeight="medium"
              color="neutral.c100"
              ellipsizeMode="tail"
              numberOfLines={1}
              flexGrow={1}
            >
              {displayText(metadata?.nftName)}
            </Text>

            <Flex flexDirection="row" alignItems="center">
              <CurrencyIcon currency={currency} size={20} />

              <Text
                variant="paragraph"
                fontWeight="medium"
                color="neutral.c80"
                ellipsizeMode="tail"
                numberOfLines={1}
                ml={2}
                flexGrow={1}
                flexShrink={1}
              >
                {displayText(metadata?.tokenName)}
              </Text>
            </Flex>
          </Flex>
        </Skeleton>
      </Box>
    </StyledTouchableOpacity>
  );
};

const NftCardMemo = memo(NftCardView);
// this technique of splitting the usage of context and memoing the presentational component is used to prevent
// the rerender of all NftCards whenever the NFT cache changes (whenever a new NFT is loaded)
const NftListItem = ({ nft, ownedNftsInCollection }: Props) => {
  const nftMetadata = useNftMetadata(
    nft?.contract,
    nft?.tokenId,
    nft?.currencyId,
  );
  // FIXME: wtf is this metadata property and where does it come from?
  const { status, metadata } = nftMetadata as NFTResource & {
    metadata: NFTMetadata;
  };

  return (
    <NftCardMemo
      nft={nft}
      status={status}
      metadata={metadata}
      ownedNftsInCollection={ownedNftsInCollection}
    />
  );
};

type NftMediaProps = {
  status: NFTResource["status"];
  metadata: NFTMetadata;
  standard: NFTStandard;
  ownedNftsInCollection?: number;
};
const NftMediaComponent = ({
  standard,
  status,
  metadata,
  ownedNftsInCollection,
}: NftMediaProps) => {
  const { t } = useTranslation();
  if (
    standard === "ERC1155" &&
    ownedNftsInCollection &&
    ownedNftsInCollection > 1
  ) {
    return (
      <Box position="relative">
        <NftMedia
          style={styles.image}
          metadata={metadata}
          mediaFormat="preview"
          status={status}
        />
        <Tag
          position="absolute"
          top="10px"
          right="10px"
          backgroundColor="neutral.c30"
          borderRadius={1}
        >
          {t("wallet.nftGallery.media.tag", { count: ownedNftsInCollection })}
        </Tag>
      </Box>
    );
  }
  return (
    <NftMedia
      style={styles.image}
      metadata={metadata}
      mediaFormat="preview"
      status={status}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    borderRadius: 8,
    marginBottom: 12,
    width: "100%",
    aspectRatio: 1,
    overflow: "hidden",
  },
});

export default memo<Props>(NftListItem);
