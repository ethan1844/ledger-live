import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#F5342E";
function SIN({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M4.5 12.093a7.647 7.647 0 01.38-2.461c.295-.9.757-1.737 1.362-2.465a7.34 7.34 0 012.527-1.973 7.09 7.09 0 012.05-.617 7.094 7.094 0 011.29-.072 7.215 7.215 0 012.479.537c.012.005.026.01.028.025.001.02-.016.026-.03.032l-.27.105c-.589.228-1.163.49-1.722.783-.62.328-1.216.695-1.769 1.134-.48.382-.919.806-1.275 1.315-.24.342-.429.71-.532 1.12-.132.518-.1 1.032.05 1.541.11.377.276.73.459 1.073.231.435.493.851.734 1.28.219.39.423.788.558 1.219.093.3.15.609.143.925-.01.41-.115.813-.309 1.176-.227.438-.538.807-.885 1.147-.32.314-.668.591-1.027.855-.053.04-.094.038-.149.01a7.37 7.37 0 01-1.458-.977 7.482 7.482 0 01-1.4-1.598A7.63 7.63 0 014.5 12.093z" }),
        React.createElement(Path, { d: "M9.035 18.93c.014-.032.047-.033.073-.042.524-.191 1.04-.405 1.545-.642a13.63 13.63 0 001.715-.948c.426-.278.828-.591 1.2-.938.366-.345.69-.723.942-1.158.204-.352.342-.728.387-1.134a2.857 2.857 0 00-.103-1.097 5.435 5.435 0 00-.487-1.127c-.237-.433-.506-.848-.754-1.274a6.925 6.925 0 01-.55-1.126 2.85 2.85 0 01-.178-1.191c.02-.278.092-.545.204-.801.168-.386.41-.723.691-1.033.411-.455.889-.833 1.387-1.188.055-.04.1-.044.161-.014.53.266 1.025.582 1.482.958a7.56 7.56 0 011.244 1.3 7.414 7.414 0 011.48 3.924c.016.236.031.472.024.71a7.68 7.68 0 01-.324 2.034 7.519 7.519 0 01-2.08 3.319 7.646 7.646 0 01-7.985 1.514c-.027-.012-.059-.015-.074-.045z" }));
}
SIN.DefaultColor = DefaultColor;
export default SIN;
