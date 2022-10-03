import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#101010";

function OMG({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12.212 13.45L10.69 9.252H9.395v5.492h.933v-3.87l1.413 3.87h.918l1.412-3.87v3.87h.957V9.252h-1.294l-1.522 4.198zm-6.29-4.332c-1.685 0-2.753 1.271-2.753 2.884 0 1.612 1.068 2.88 2.754 2.88s2.755-1.26 2.755-2.88c0-1.622-1.067-2.884-2.756-2.884zm0 4.787c-1.074 0-1.717-.808-1.717-1.9 0-1.091.643-1.905 1.718-1.905 1.074 0 1.72.816 1.72 1.902 0 1.085-.644 1.903-1.72 1.903zm12.351-1.16h1.576c-.093.801-.675 1.178-1.42 1.178-1.067 0-1.662-.786-1.662-1.916 0-1.06.524-1.93 1.64-1.93.729 0 1.318.372 1.381.997h1.043c-.142-1.255-1.1-1.954-2.393-1.954-1.837 0-2.692 1.413-2.692 2.919 0 1.617.99 2.84 2.527 2.84.901 0 1.405-.416 1.608-.769v.628h.95V11.8h-2.558v.945z"  /></Svg>;
}

OMG.DefaultColor = DefaultColor;
export default OMG;