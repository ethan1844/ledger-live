import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#F49E00";

function AGRS({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M14.816 13c1.684-2.638 2.996-7 2.996-7l-2.809.637-1.028 3.638c-.097-2.727-1.966-3.726-1.966-3.726-1.498-.73-2.833-.408-3.795.093-1.191.62-2.058 1.7-2.472 2.943-.59 1.77-.518 3.755-.44 4.653.032.422.125.837.278 1.233 1.033 2.68 3.896 2.527 3.896 2.527 2.623-.093 4.216-3.181 4.216-3.181l.752 2.27c.673 1.14 2.165.713 2.472.65.054-.013.102-.019.157-.03l1.677-.256v-.73c-3.651.099-3.934-3.72-3.934-3.72zm-3.554 2.746c-.226.231-.51.397-.824.478-.68.17-1.203-.116-1.564-.466a2.953 2.953 0 01-.794-1.484c-.661-3.742.253-5.382.86-6.136a1.694 1.694 0 011.401-.648c2.358.123 2.888 5.056 2.888 5.056-.668 1.752-1.528 2.768-1.967 3.2z"  /></Svg>;
}

AGRS.DefaultColor = DefaultColor;
export default AGRS;