import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#AA15DD";

function ECA({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M11.999 19.209c.18 0 .326.15.327.333a.33.33 0 01-.326.333.331.331 0 01-.303-.46.33.33 0 01.303-.206h-.001zM5.414 8.519a.338.338 0 01.019-.59.327.327 0 01.463.214.337.337 0 01-.118.351.324.324 0 01-.364.024zm0 6.97a.325.325 0 01.447.122.336.336 0 01-.12.455.323.323 0 01-.447-.123.336.336 0 01.12-.454zm13.17-6.97a.325.325 0 01-.447-.123.34.34 0 01.022-.371.325.325 0 01.51-.016.336.336 0 01-.085.51zM12 4.79a.33.33 0 01-.322-.333c0-.135.08-.257.203-.308a.323.323 0 01.358.075.338.338 0 01-.055.512.327.327 0 01-.184.054zm5.85 10.645a.678.678 0 00.166.864l-5.363 3.15a.663.663 0 00-.653-.576.662.662 0 00-.652.576L5.983 16.3a.678.678 0 00-.189-1.161.654.654 0 00-.463.01v-6.3a.653.653 0 00.816-.286.678.678 0 00-.162-.862l5.363-3.15a.663.663 0 00.652.577.662.662 0 00.653-.578l5.365 3.15a.678.678 0 00.188 1.161c.151.053.316.049.463-.011v6.296a.655.655 0 00-.819.29zm-4.584-.965a2.72 2.72 0 01-3.58-.745l3.538-2.073 1.206-.708.572-.338.033-.016 2.43-1.43a.323.323 0 00-.073-.586.305.305 0 00-.24.035l-1.786 1.054a4.217 4.217 0 00-3.02-1.845V5.772a.328.328 0 00-.325-.33.327.327 0 00-.324.33V7.8a4.12 4.12 0 00-1.89.565A4.249 4.249 0 008.49 9.571L6.853 8.61a.31.31 0 00-.428.117.322.322 0 00.115.435l1.625.955a4.323 4.323 0 00-.443 2.252l.151.858c.068.232.152.459.256.677l-1.59.934a.323.323 0 00.077.585.31.31 0 00.24-.032l1.595-.934a4.241 4.241 0 003.243 1.837v1.934c0 .182.146.33.325.33a.327.327 0 00.324-.33v-1.95a4.023 4.023 0 001.65-.548 4.155 4.155 0 001.4-1.366l1.752 1.026c.15.085.34.032.426-.12a.323.323 0 00-.111-.434L15.696 13.8c.004-.01.015-.021.015-.033.535-1.233-.898-1.763-1.217-.813a2.78 2.78 0 01-1.23 1.516h.002zm5.319 1.018a.337.337 0 01.036.552.323.323 0 01-.363.025.336.336 0 01.077-.61.323.323 0 01.25.033zM9.213 12.44c-.033-1.25.116-2.122 1.3-2.818a2.715 2.715 0 013.095.237L9.213 12.44z"  /></Svg>;
}

ECA.DefaultColor = DefaultColor;
export default ECA;