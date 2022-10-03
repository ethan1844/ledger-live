import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#FBBF02";
function MUSIC({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12.001 24c-1.17 0-2.334-.172-3.454-.51 2.254-.399 3.915-1.72 3.915-3.284 0-.182 2.679-14.618 2.679-14.618s4.072.618 5.478 4.848c0 0 1.818-2.448-.254-7.03A11.956 11.956 0 0124 11.767C23.875 5.248 18.55 0 12 0a12 12 0 011.988.17l-3.042 17.673C9.965 17.2 8.595 16.8 7.08 16.8c-2.206 0-4.109.836-4.934 2.048A12.02 12.02 0 01.001 12c0 6.627 5.373 12 12 12z" }));
}
MUSIC.DefaultColor = DefaultColor;
export default MUSIC;
