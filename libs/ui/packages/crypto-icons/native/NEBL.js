import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#50479E";
function NEBL({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M15.27 10.245v3.588l-3.23 1.775v-3.586l3.23-1.776v-.001zm3.855-.92v5.349c0 .38-.105.752-.302 1.075a2.207 2.207 0 01-.828.79l-2.41 1.323v-3.53l.305-.167v-4.26l2.95-1.621c.184.315.285.67.285 1.042zm-13.12 7.213a2.208 2.208 0 01-.806-.755 2.072 2.072 0 01-.324-1.109V11.25l3.318 2.591v.144l.005.149.258.152 3.312 1.82.273.15V19.5a2.347 2.347 0 01-1.171-.287l-4.865-2.676v.001zm-.138-8.993l3.508-1.92 2.385 2.31-3.567 1.967v.3l-3.31 1.818-.008-2.695c0-.38.105-.754.304-1.077.174-.285.41-.525.688-.704zm12.128-.083c.351.192.643.475.846.82l-2.95 1.623v-.027l-.305-.167-3.25-1.787 3.25-1.787 2.409 1.325zm-13.113 4.56l3.311-1.82v3.64l-3.31-1.821zm7.16-4.237V4.5c.38.006.754.104 1.088.287l2.456 1.35-3.25 1.787-.295-.14zm-.274.15L8.462 6.118l2.552-1.403A2.355 2.355 0 0112.04 4.5v3.285l-.273.15zm.294 8.333l.273-.15 3.212 1.766-2.417 1.329c-.334.182-.708.28-1.089.286v-3.242l.021.011zm3.524-1.936v3.53l-.04.022-3.21-1.766 3.25-1.786z" }));
}
NEBL.DefaultColor = DefaultColor;
export default NEBL;
