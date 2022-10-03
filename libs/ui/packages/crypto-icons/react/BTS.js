import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#35BAEB";
function BTS({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M6.772 3.556l4.705 4.174c.055.05.114.092.16.146a.522.522 0 01.007.097c-.002 1.798.004 3.594-.002 5.39-.236.048-.461.135-.668.258L6.817 9.465a.122.122 0 01-.044-.11c.004-1.933 0-3.865.004-5.797l-.005-.002zm5.585 6.455a5.227 5.227 0 013.084 1.274c-.245.262-.51.51-.764.767-.535.534-1.067 1.073-1.604 1.601a2.03 2.03 0 00-.715-.29c-.006-1.116 0-2.233 0-3.352h-.001zm-5.583.501c1.221 1.21 2.435 2.428 3.653 3.64a2.219 2.219 0 00-.301.722H6.772V10.51l.002.002zm8.705 1.75c.16-.153.306-.317.474-.465a5.207 5.207 0 011.275 3.075c-1.1.005-2.203 0-3.303.002-.066.015-.066-.061-.079-.102a1.872 1.872 0 00-.269-.609c.63-.634 1.267-1.266 1.902-1.899v-.002zm-8.707 3.326h2.866c.164 0 .328-.008.495.003.05.254.15.495.29.711l-2.325 2.32c-.017.013-.046.054-.066.022a5.189 5.189 0 01-1.26-3.056zm7.096.003c.473-.01.94 0 1.413-.003h1.947a5.163 5.163 0 01-1.243 3.033L14.63 17.27c-.34-.341-.685-.677-1.02-1.022.125-.201.213-.424.258-.657zm-.94 1.298c.052-.03.105-.062.157-.088l2.367 2.363a5.202 5.202 0 01-3.095 1.28v-3.347c.2-.04.391-.111.569-.21l.002.002zm-3.443 1.345c.481-.477.957-.96 1.443-1.432.218.14.46.24.713.295v3.347a5.202 5.202 0 01-3.084-1.274c.302-.317.62-.62.928-.933v-.003z" }));
}
BTS.DefaultColor = DefaultColor;
export default BTS;
