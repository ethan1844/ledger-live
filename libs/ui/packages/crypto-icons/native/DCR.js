import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#fff";
function DCR({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.142 13.215h3.315a2.24 2.24 0 002.233-2.247 2.24 2.24 0 00-2.233-2.246h-1.055l-2.26-1.972h3.315a4.202 4.202 0 014.116 3.409 4.224 4.224 0 01-2.534 4.717l2.613 2.282H15.66l-4.517-3.944v.001zm1.618-2.52H9.445A2.24 2.24 0 007.21 12.94a2.24 2.24 0 002.234 2.247H10.5l2.259 1.972H9.445a4.201 4.201 0 01-4.116-3.408 4.224 4.224 0 012.534-4.718L5.25 6.75h2.994l4.515 3.945z" }),
        React.createElement(Path, { d: "M11.19 13.26h3.316a2.24 2.24 0 002.233-2.247 2.24 2.24 0 00-2.233-2.246H13.45l-2.26-1.972h3.315a4.202 4.202 0 014.116 3.41 4.224 4.224 0 01-2.534 4.717l2.613 2.281h-2.993l-4.517-3.943zm1.619-2.52H9.494a2.24 2.24 0 00-2.234 2.246 2.24 2.24 0 002.234 2.246h1.055l2.259 1.973H9.494a4.201 4.201 0 01-4.116-3.41 4.224 4.224 0 012.534-4.717L5.3 6.795h2.994l4.515 3.945z" }));
}
DCR.DefaultColor = DefaultColor;
export default DCR;
