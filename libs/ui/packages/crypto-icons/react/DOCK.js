import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#786DBC";
function DOCK({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12.698 8.186l-1.222-1.224a.858.858 0 011.186-1.241l.029.029 2.727 2.727a.857.857 0 010 1.212l-2.73 2.727a.857.857 0 01-1.212-1.212l1.28-1.28a4.271 4.271 0 103.529 4.223V4.714a.858.858 0 011.714 0v9.546a6 6 0 11-5.302-6.078v.003z" }));
}
DOCK.DefaultColor = DefaultColor;
export default DOCK;
