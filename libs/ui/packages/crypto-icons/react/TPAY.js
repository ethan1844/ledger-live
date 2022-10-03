import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#3058A6";
function TPAY({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 20.417a8.418 8.418 0 110-16.835 8.418 8.418 0 010 16.835zm0-17.37c-4.937 0-8.953 4.016-8.953 8.953 0 4.937 4.016 8.953 8.953 8.953 4.937 0 8.953-4.016 8.953-8.953 0-4.937-4.016-8.953-8.953-8.953z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.153 15.203l-.467 2.024-.113.49h-.502l-2.584-.002h-.01c-1.036-.017-1.85-.293-2.383-.779.461.813 1.439 1.283 2.804 1.305h.01l2.584.002h.502l.113-.49.468-2.024-.365-.773-.057.247zm-.812-8.679l-.37-.767-.052.24-.35 1.595h.537l.235-1.068zm1.865 1.846l-.465 1.969-.115.486h-2.8l-.711 3.246a1.752 1.752 0 00-.024.24.32.32 0 00.01.089c.053.02.11.03.167.028h.306l.673-3.076h2.8l.115-.487.465-1.969-.362-.777-.06.251h.001zm-6.947 2.455H7.31l.672.527h1.164l.114-.527z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.33 15.06h-.072c-.543-.013-.8-.296-.8-.75 0-.107.018-.25.037-.358l.823-3.759h2.808l.465-1.968h-2.808l.519-2.363h-2.29l-.52 2.363H8.006l-.447 1.968h2.486l-.968 4.422a2.811 2.811 0 00-.071.59c0 1.261.995 1.854 2.481 1.879h2.583l.467-2.023H12.33z" }));
}
TPAY.DefaultColor = DefaultColor;
export default TPAY;
