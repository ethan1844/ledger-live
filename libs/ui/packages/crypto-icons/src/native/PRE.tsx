import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#fff";

function PRE({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M10.102 13.534h1.259c.36 0 .715-.078 1.04-.231.308-.153.582-.363.808-.621a2.89 2.89 0 00.513-.901c.124-.333.188-.686.186-1.041a2.544 2.544 0 00-.202-1.01 3.107 3.107 0 00-.543-.885 2.726 2.726 0 00-.824-.636 2.23 2.23 0 00-1.038-.248H7.994v8.027h2.111l-.003-2.454zm0-3.635h1.07c.15.01.289.077.39.187.124.124.202.342.202.683s-.077.544-.188.654a.478.478 0 01-.356.186h-1.118V9.9z"  /><Path d="M5.267 6.022v11.916c0 .428.346.773.773.773h11.916a.772.772 0 00.772-.772V6.023a.772.772 0 00-.772-.774H6.04a.772.772 0 00-.773.773zM16.37 17.125H7.61a.772.772 0 01-.773-.772v-8.76a.773.773 0 01.773-.773h8.76c.428 0 .773.345.773.772v8.76a.772.772 0 01-.773.773z"  /><Path d="M11.05 14.482h4.955v1.522H11.05v-1.522z"  /><Path d="M10.105 13.554h1.258c.36 0 .715-.078 1.04-.231.308-.153.582-.363.808-.621.224-.267.398-.573.513-.901a2.94 2.94 0 00.186-1.041 2.544 2.544 0 00-.202-1.01 3.109 3.109 0 00-.543-.885 2.727 2.727 0 00-.824-.636 2.23 2.23 0 00-1.038-.249H7.996v8.028h2.112l-.003-2.454zm0-3.635h1.07c.149.01.288.077.388.187.125.124.203.342.203.683s-.077.544-.188.654a.477.477 0 01-.356.186h-1.117V9.92z"  /><Path d="M5.27 6.042v11.916c0 .428.345.773.772.773h11.916a.772.772 0 00.773-.773V6.042a.772.772 0 00-.773-.773H6.042a.772.772 0 00-.773.773zm11.102 11.103h-8.76a.772.772 0 01-.774-.772v-8.76a.773.773 0 01.774-.773h8.76c.427 0 .772.345.772.772v8.76a.772.772 0 01-.772.773z"  /><Path d="M11.052 14.502h4.955v1.522h-4.955v-1.522z"  /></Svg>;
}

PRE.DefaultColor = DefaultColor;
export default PRE;