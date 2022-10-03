import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#201A2D";
function WBTC({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M17.169 7.245l-.45.45a6.37 6.37 0 010 8.598l.45.45a7.014 7.014 0 000-9.508v.01zm-9.464.039a6.37 6.37 0 018.598 0l.45-.45a7.014 7.014 0 00-9.508 0l.46.45zm-.421 9.014a6.37 6.37 0 010-8.594l-.45-.45a7.014 7.014 0 000 9.508l.45-.465zm9.013.415a6.37 6.37 0 01-8.598 0l-.45.45a7.014 7.014 0 009.509 0l-.46-.45zm-1.456-6.215c-.09-.938-.9-1.253-1.925-1.35V7.857h-.792v1.268h-.633V7.855h-.786v1.303H9.1v.847s.585-.01.576 0a.41.41 0 01.45.348v3.564a.277.277 0 01-.096.194.273.273 0 01-.204.069c.01.008-.576 0-.576 0l-.15.946h1.591v1.323h.792v-1.304h.633v1.298h.794v-1.308c1.338-.081 2.27-.411 2.388-1.663.094-1.008-.38-1.458-1.137-1.64.46-.227.745-.647.68-1.334zm-1.11 2.818c0 .983-1.686.871-2.223.871v-1.746c.537.002 2.223-.153 2.223.874zm-.368-2.46c0 .9-1.407.79-1.854.79v-1.587c.447 0 1.854-.141 1.854.796z" }),
        React.createElement(Path, { d: "M11.998 20.195a8.195 8.195 0 11.004-16.39 8.195 8.195 0 01-.004 16.39zm0-15.75a7.55 7.55 0 00.007 15.102 7.55 7.55 0 10-.007-15.103z" }));
}
WBTC.DefaultColor = DefaultColor;
export default WBTC;
