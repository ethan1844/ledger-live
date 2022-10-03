import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#0082C6";

function SYS({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M13.534 11.327a.087.087 0 00-.085.03.082.082 0 00.017.118c3.284 2.383-1.39 7.84-10.466 2.033 7.695 7.241 18.41-.757 10.534-2.18zM9.151 8.141c-6.814 2.18.993 7.322 1.67 4.725a.081.081 0 00-.009-.065.082.082 0 00-.053-.038.09.09 0 00-.048.001c-1.003.326-6.526-1.218-1.56-4.623zM21 9.451c-5.9-4.207-16.971-.738-11.26 2.233a.09.09 0 00.118-.035.082.082 0 00.002-.074C7.538 6.667 19.336 8.16 21 9.451zm-4.896 6.114c3.12-1.418.583-6.271-3.543-5.334a.087.087 0 01-.104-.064.08.08 0 01.03-.083c3.21-2.412 9.236 3.22 3.617 5.48z"  /></Svg>;
}

SYS.DefaultColor = DefaultColor;
export default SYS;