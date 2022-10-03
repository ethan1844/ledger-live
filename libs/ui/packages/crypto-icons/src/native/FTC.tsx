import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#27323A";

function FTC({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M18.452 4.5s1.235 1.098.359 3.332c-.167.411-.398.792-.686 1.13l-3.049 3.577-2.446 3.194s-2.81-.462-3.902.671l4.63.206s-.988 1.082-4.89.307c0 0 .053 1.086 1.823 1.395 0 0-1.563.517-2.5-.98 0 0 0 1.086 1.093 1.548 0 0-.885.205-1.614-.722l-1.248 1.338s-.258.051-.103-.205l1.04-1.236s.104-.877-.522-.569c0 0-.415.154-.26.62 0 0-.625-.513.105-1.184l-1.407-1.394 1.82.979-.78-1.907 1.3 1.65s-.109-1.855.466-2.369c0 0 .155 1.805.885 1.96l-.053-3.764.782-.67.103 2.368s.207.256.414-.051c0 0 .47-.774.47-3.04l1.248-1.186.156.929s.21.359.47.05l.259-1.803S14.08 6.767 18.452 4.5zm-8.325 10.463c4.316-3.968 6.608-7.833 6.603-7.833-2.131 1.492-6.603 7.833-6.603 7.833z"  /></Svg>;
}

FTC.DefaultColor = DefaultColor;
export default FTC;