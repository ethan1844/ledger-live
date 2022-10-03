import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#0FACF3";
function EDOGE({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M6.728 6.762h4.074c1.616 0 2.418-.051 3.623.06 1.205.127 2.41.619 3.19 1.561.919 1.095 1.187 2.573 1.127 3.948-.06 1.367-.53 2.8-1.604 3.735-.953.858-2.287 1.172-3.553 1.18-2.462.008-4.915 0-7.377 0-.268-.017-.572.008-.78-.178-.363-.365-.147-1.146.434-1.113 1.37-.042 2.747 0 4.117-.025-.026-1.154-.009-2.309-.009-3.455-1.057-.009-2.106 0-3.163 0-.235-.009-.495-.009-.677-.162-.216-.195-.216-.525-.121-.78.121-.28.45-.331.728-.331 1.075-.01 2.159 0 3.233 0 .018-1.053-.017-2.106.018-3.15-1.206-.008-2.41 0-3.615 0-.269-.008-.572-.008-.78-.195-.216-.28-.173-.68.009-.96.346-.17.745-.135 1.126-.135zm4.75 4.44c.494.008.988-.035 1.483.034.59.084.59 1.12-.01 1.205-.485.076-.987.025-1.481.034.009 1.002 0 1.995 0 2.997.009.17.017.424.234.441.59.051 1.102.034 1.768.034.988.043 2.028-.262 2.721-.985.711-.755.971-1.807.989-2.81.026-1.111-.183-2.334-.998-3.166-.736-.747-1.845-1.002-2.877-.942-.588 0-1.092-.018-1.638.033-.173.051-.182.264-.19.417V11.2z" }));
}
EDOGE.DefaultColor = DefaultColor;
export default EDOGE;
