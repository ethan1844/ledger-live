import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#2A5284";

function VTHO({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path opacity={0.5} d="M14.71 3.794h2.267l-4.261 5.688h3.824L7.405 20.206l2.955-7.577H7.023l3.365-8.835h4.322z"  /><path d="M14.71 3.794h.137l-3.83 6.534h3.502l-7.114 9.878 2.955-7.577H7.023l3.365-8.835h4.322z"  /></Svg>;
}

VTHO.DefaultColor = DefaultColor;
export default VTHO;