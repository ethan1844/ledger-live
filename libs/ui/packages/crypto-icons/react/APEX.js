import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#1F4C9F";
function APEX({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.5 15.188L12 5.624l7.5 9.563v3.187L12 8.812l-7.5 9.563v-3.188zm7.875.937a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75z" }));
}
APEX.DefaultColor = DefaultColor;
export default APEX;
