import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#0B1C26";
function SNM({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 20.25c-4.551-.014-8.25-3.707-8.25-8.25S7.449 3.764 12 3.75c4.551.014 8.25 3.707 8.25 8.25s-3.699 8.241-8.25 8.25zm7.316-6.938a.836.836 0 01-1.084.442c.291.304.474.713.474 1.162 0 .132-.018.255-.045.378.309-.627.53-1.294.655-1.98v-.002zm-.765.083zm.186-4.52a3.46 3.46 0 01-.62 3.402.847.847 0 01.43-.122c.433 0 .787.331.824.759a7.26 7.26 0 00-.634-4.039zm-.423 1.158a2.869 2.869 0 00-4.897-2.025 2.869 2.869 0 00-.843 2.025 2.869 2.869 0 004.896 2.024 2.872 2.872 0 00.844-2.024zm-2.984 4.885c0-.623.345-1.195.898-1.486-.7.163-1.434.106-2.1-.164a3.488 3.488 0 011.202 1.713c.005-.027 0-.046 0-.063zm.164 1.108c0 .276-.034.55-.1.817a.805.805 0 01.72-.444c.043 0 .085.004.127.013a1.697 1.697 0 01-.784-.84c.024.15.036.302.037.454zm1.521-.05a1.064 1.064 0 001.067-1.059c0-.585-.479-1.058-1.067-1.058a1.06 1.06 0 00-1.061 1.058c0 .586.479 1.059 1.062 1.059zm.701-2.989a.85.85 0 01.105-.4c-.302.28-.65.505-1.03.667.074-.008.147-.017.224-.017.303-.001.601.08.861.236a.819.819 0 01-.159-.487v.001zM12 12.537c.45 0 .896.086 1.313.254a3.466 3.466 0 01-1.313-2.19 3.474 3.474 0 01-1.312 2.19A3.588 3.588 0 0112 12.536v.001zm0-4.63c-.317 0-.628-.089-.897-.258.473.499.786 1.128.898 1.806a3.495 3.495 0 01.898-1.807c-.269.17-.58.26-.898.259zm1.704-1.699c0 .38-.128.75-.364 1.05a3.473 3.473 0 011.185-.582c-.019 0-.032.005-.046.005a.833.833 0 01-.775-.527c-.003.018 0 .037 0 .054zm1.294-1.003c.188.154.31.381.31.64a.828.828 0 01-.497.759 3.5 3.5 0 013.298 1.172 7.529 7.529 0 00-3.11-2.572l-.001.001zm-.524.232a.414.414 0 10-.002.829.414.414 0 00.002-.83zm-1.959-.85a1.697 1.697 0 011.13 1.195.829.829 0 01.826-.768c.027 0 .054.004.08.009a7.53 7.53 0 00-2.036-.436zm-1.59 1.622a1.076 1.076 0 002.15 0 1.076 1.076 0 00-2.149 0zm-1.48-1.186a.502.502 0 01.082-.01.825.825 0 01.825.769 1.698 1.698 0 011.13-1.195c-.711.054-1.395.2-2.036.436zm.852 1.186c0-.019 0-.037.005-.055a.834.834 0 01-.774.527c-.02 0-.033-.005-.046-.005.427.117.83.316 1.185.582a1.673 1.673 0 01-.37-1.05zm-1.184-.36a.414.414 0 10.828 0 .414.414 0 00-.828 0zM5.892 7.78a3.485 3.485 0 013.297-1.172.825.825 0 01-.187-1.4 7.461 7.461 0 00-3.11 2.572zm-.206 2.253a2.869 2.869 0 004.897 2.025 2.869 2.869 0 00.843-2.024 2.868 2.868 0 00-2.87-2.863 2.874 2.874 0 00-2.87 2.862zm2.984 4.885c0 .018-.005.04-.005.059a3.508 3.508 0 011.203-1.713c-.667.27-1.4.326-2.1.163a1.687 1.687 0 01.902 1.49zm-2.387-1.932a.789.789 0 01-.165.486c.26-.155.558-.236.861-.235.075-.001.15.005.224.018a3.432 3.432 0 01-1.03-.668c.072.12.11.259.11.4zm-.365 1.931a1.061 1.061 0 102.122 0 1.061 1.061 0 00-2.122 0zm1.836 1.495c.042-.004.083-.014.128-.014.305 0 .583.172.72.445a3.465 3.465 0 01-.1-.817c0-.154.011-.307.031-.459a1.678 1.678 0 01-.779.845zm-3.13-3.502a.83.83 0 01.825-.76c.151.002.3.044.428.124a3.461 3.461 0 01-.62-3.403 7.343 7.343 0 00-.632 4.038zm.825-.337a.414.414 0 10-.001.828.414.414 0 00.001-.828zm-.154 2.345c0-.435.17-.852.473-1.163a.837.837 0 01-1.084-.441c.127.699.347 1.363.656 1.98a1.692 1.692 0 01-.045-.377zm2.131 1.621a1.684 1.684 0 01-1.59-.39 7.511 7.511 0 001.422 1.567.802.802 0 01-.187-.509c0-.268.134-.517.356-.667v-.001zm.064.667a.391.391 0 10.783 0 .391.391 0 00-.783 0zm3.503 2.159a3.506 3.506 0 01-2.304-2.23c0 .022.009.044.009.072a.81.81 0 01-1.162.728 7.434 7.434 0 003.457 1.43zm3.873-3.339a2.865 2.865 0 10-5.731 0A2.867 2.867 0 0012 18.887a2.87 2.87 0 002.865-2.862v.001zm1.603 1.908a.809.809 0 01-1.162-.727c.001-.024.004-.049.01-.073a3.507 3.507 0 01-2.306 2.231 7.476 7.476 0 003.457-1.431h.001zm.041-.728a.391.391 0 100 .001zm1.653-1.057a1.683 1.683 0 01-1.59.39c.223.15.356.4.356.667a.803.803 0 01-.187.51 7.501 7.501 0 001.421-1.568v.001z" }));
}
SNM.DefaultColor = DefaultColor;
export default SNM;
