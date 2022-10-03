import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#49C1BF";
function ZIL({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M6.765 5.477l8.336 4.037 2.134-.961-8.301-4.037-2.169.96z", fillOpacity: 0.2 }),
        React.createElement("path", { d: "M15.1 9.504l2.135-.96v2.148l-2.134.961V9.504zm0 9.963v-6.702l2.135-.972v6.714l-2.134.96z", fillOpacity: 0.5 }),
        React.createElement("path", { d: "M6.765 5.48v2.172l5.77 2.803-5.77 2.857v2.142l8.336 4.03v-2.156L9.44 14.575l5.66-2.91v-2.15L6.766 5.48z" }));
}
ZIL.DefaultColor = DefaultColor;
export default ZIL;
