import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#00843D";
function TRTL({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12.002 4.054c.295 0 .586.077.841.225l5.37 3.1a1.684 1.684 0 01.842 1.46v6.325c0 .601-.32 1.157-.842 1.458l-5.37 3.101a1.683 1.683 0 01-1.684 0l-5.372-3.101a1.684 1.684 0 01-.842-1.458V8.838c0-.601.321-1.157.842-1.458l5.37-3.1A1.69 1.69 0 0112 4.052H12v.001zM12 2.884c-.5 0-.992.132-1.426.382l-5.372 3.1a2.862 2.862 0 00-1.427 2.472v6.325a2.862 2.862 0 001.427 2.472l5.37 3.1c.884.51 1.972.51 2.855 0l5.37-3.1a2.862 2.862 0 001.428-2.472V8.838a2.862 2.862 0 00-1.427-2.472l-5.37-3.102A2.857 2.857 0 0012 2.882v.001z" }),
        React.createElement(Path, { d: "M11.343 12.994a.351.351 0 01-.305-.175l-.646-1.12a.35.35 0 010-.351l.646-1.12a.352.352 0 01.305-.175h1.318a.353.353 0 01.304.175l.646 1.12a.351.351 0 010 .35l-.646 1.12a.351.351 0 01-.304.176h-1.318zM9.58 11.231a.352.352 0 00.304-.176l.646-1.12a.351.351 0 000-.35l-.805-1.396-1.573.858a.35.35 0 00-.182.316c.012.628.086 1.254.218 1.868H9.58zm4.841 0a.35.35 0 01-.304-.176l-.646-1.12a.351.351 0 010-.35l.805-1.396 1.572.858a.351.351 0 01.183.315 9.864 9.864 0 01-.217 1.869h-1.393zM12.17 7.038a.35.35 0 00-.336 0l-1.595.87.8 1.384a.351.351 0 00.304.176h1.318a.35.35 0 00.304-.176l.8-1.384-1.595-.87zm-3.836 4.778c.301 1.07.782 2.081 1.422 2.99l.776-1.344a.351.351 0 000-.35l-.647-1.12a.351.351 0 00-.303-.176H8.334zm7.334 0a9.804 9.804 0 01-1.42 2.99l-.777-1.344a.351.351 0 010-.35l.647-1.12a.351.351 0 01.304-.176h1.247-.001zm-4.325 1.763a.351.351 0 00-.305.176l-.9 1.56a9.905 9.905 0 001.65 1.619.352.352 0 00.43 0 9.901 9.901 0 001.648-1.62l-.9-1.56a.35.35 0 00-.304-.175h-1.32z" }));
}
TRTL.DefaultColor = DefaultColor;
export default TRTL;
