import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#FD7A3D";

function BNTY({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M18.896 14.55a1.1 1.1 0 01.385 1.607c-.32.567-1.058.756-1.635.44a1.223 1.223 0 01-.61-.976h-2.951l-1.412 2.393c0 .032-.032.063-.064.095.32.189.546.567.546.976 0 .63-.546 1.165-1.188 1.165a1.173 1.173 0 01-1.186-1.165c0-.41.225-.756.545-.976 0-.032-.032-.063-.064-.095L9.85 15.622H6.9a1.254 1.254 0 01-.61.975c-.578.315-1.315.127-1.636-.44a1.168 1.168 0 01.45-1.606c.384-.22.801-.22 1.154-.032.032-.031.032-.094.064-.126L7.766 12 6.354 9.607a.237.237 0 01-.064-.126c-.353.157-.802.189-1.155-.032a1.168 1.168 0 01-.449-1.606c.32-.566 1.059-.755 1.636-.44.385.22.578.598.61.976h2.983l1.411-2.393c0-.032.032-.063.064-.095a1.147 1.147 0 01-.545-.976c0-.63.545-1.165 1.187-1.165.641 0 1.186.504 1.186 1.165 0 .41-.225.756-.545.976 0 .032.032.063.065.095l1.41 2.392H17.1c.032-.409.256-.755.61-.975.577-.315 1.314-.126 1.635.44a1.168 1.168 0 01-.45 1.606c-.384.22-.8.22-1.154.032-.032.031-.032.094-.064.126L16.266 12l1.411 2.393a.238.238 0 01.065.126c.352-.157.801-.189 1.155.032l-.001-.001zm-5.357-3.338c0-.66-.545-1.196-1.218-1.196h-1.54a.287.287 0 00-.267.174.285.285 0 00-.022.11v3.4c0 .158.128.284.289.284h1.54c.673 0 1.218-.536 1.218-1.197 0-.283-.096-.567-.288-.756.16-.252.288-.504.288-.819z"  /></Svg>;
}

BNTY.DefaultColor = DefaultColor;
export default BNTY;