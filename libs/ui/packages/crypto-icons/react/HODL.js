import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#D59143";
function HODL({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M5.98 12.24c-.389.31-.735.859-.718 1.698.013.58.325.978.718 1.248v1.036c0 .648.315 1.255.846 1.626l3.64 2.49V7.618L5.98 8.931v3.31zm.977-.305c.755.552.755 3.837.755 3.837s-.854-.083-1.56-.477c.582.195 1.05.152 1.253.174l.013.001h.003l.01.002.03.002.009.001h.01s.12-2.866-.748-3.369c-.141-.048-.39-.02-.665.068.35-.236.715-.315.89-.24zm3.823 5.178h2.447v3.23H10.78v-3.23zm-.555-9.735L5.98 8.594V4.041a.383.383 0 01.652-.272l3.81 3.825-.217-.217zm.555 4.553h2.447v4.87H10.78v-4.87zm2.995-4.553l-.158.158 3.75-3.765a.382.382 0 01.653.27v4.552l-4.245-1.215zm-2.995.241h2.447v3.998H10.78V7.619zm7.24 4.622V8.93l-4.478-1.31v12.721l3.632-2.494a1.984 1.984 0 00.846-1.625v-1.037c.393-.27.705-.668.718-1.248.018-.84-.33-1.388-.718-1.697zm-1.47 3.28h.019l.013-.002h.003l.026-.002h.002l.012-.002.111-.013h.005c.245-.031.545-.028 1.006-.172l.102-.034c-.707.395-1.56.477-1.56.477s0-3.283.755-3.836c.174-.077.54.003.889.24-.275-.088-.523-.116-.665-.068-.868.502-.719 3.413-.719 3.413h.001z" }));
}
HODL.DefaultColor = DefaultColor;
export default HODL;
