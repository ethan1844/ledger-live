import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#E6007A";
function DOT({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M15.91 2.516C15.91 1.125 13.934 0 11.5 0 9.062 0 7.09 1.125 7.09 2.516c0 1.39 1.973 2.52 4.41 2.52 2.434 0 4.41-1.13 4.41-2.52zm0 0M15.91 21.48c0-1.39-1.976-2.515-4.41-2.515-2.438 0-4.41 1.125-4.41 2.515 0 1.391 1.973 2.52 4.41 2.52 2.434 0 4.41-1.129 4.41-2.52zm0 0M5.336 3.512C4.109 2.816 2.125 3.93.906 6-.309 8.07-.3 10.313.926 11.008c1.226.695 3.21-.422 4.426-2.488 1.218-2.07 1.21-4.313-.016-5.008zm0 0M22.07 12.992c-1.226-.695-3.207.422-4.425 2.488-1.215 2.07-1.211 4.313.015 5.008 1.23.696 3.211-.418 4.43-2.488 1.215-2.07 1.207-4.313-.02-5.008zm0 0M5.355 15.48c-1.218-2.07-3.203-3.183-4.43-2.488C-.3 13.687-.308 15.93.91 18c1.215 2.07 3.2 3.184 4.426 2.488 1.226-.695 1.234-2.937.02-5.008zm0 0M22.09 6c-1.219-2.07-3.2-3.184-4.426-2.488-1.227.695-1.234 2.937-.016 5.004 1.215 2.07 3.2 3.187 4.426 2.492 1.227-.695 1.235-2.938.016-5.008zm0 0" }));
}
DOT.DefaultColor = DefaultColor;
export default DOT;
