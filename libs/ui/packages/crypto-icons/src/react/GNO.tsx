import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#00A6C4";

function GNO({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M18.583 7.875l.15.248a8.112 8.112 0 011.142 4.153c-.014 4.401-3.536 7.974-7.875 7.974h-.014c-4.338 0-7.874-3.6-7.861-8.002 0-1.476.408-2.91 1.156-4.152l.136-.234.721.73a2.835 2.835 0 00-.34.676 3.068 3.068 0 001.823 3.918 3.018 3.018 0 002.706-.345L12 14.553l1.918-1.945c.177.124.38.221.598.304a2.943 2.943 0 003.768-1.808 3 3 0 00-.3-2.621l.599-.607zM7.023 9.489l2.257 2.276a1.54 1.54 0 01-.98.345c-.883 0-1.605-.731-1.605-1.627 0-.373.123-.718.327-.994zm7.874 2.138l2.23-2.262c.178.263.272.58.272.91 0 .897-.72 1.628-1.605 1.628-.34 0-.639-.097-.897-.276zm-2.87 1.711L5.526 6.716l.258-.276a8.337 8.337 0 016.148-2.69h.014a8.39 8.39 0 016.257 2.827l.245.277-6.42 6.484h-.001zm-5.44-6.622l5.44 5.532L17.4 6.827c-1.441-1.463-3.4-2.304-5.44-2.304h-.014a7.561 7.561 0 00-5.359 2.193z"  /></Svg>;
}

GNO.DefaultColor = DefaultColor;
export default GNO;