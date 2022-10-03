import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#FFF300";
function GRIN({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M17.028 7.15c-.255-.57-.492-1.698-1.144-1.95-.84-.322-1.358 1.792-1.482 2.326h-.125c-.212-.915-.495-2.213-1.5-2.5-.465 1.953.486 4.06 1.375 5.75.95-.454 1.412-1.874 1.5-2.875h.125l1 3c.806-.23 1.085-1.027 1.376-1.75.624-1.551 1.147-3.46.75-5.126-1.2.34-1.566 2.057-1.875 3.126zM5.025 11.153c1.074-.513 1.585-2.138 1.75-3.251H6.9c.127.537.467 1.921 1.137 2.01.855.113 1.303-1.783 1.363-2.385h.125c.273.94.56 2.166 1.5 2.625.348-1.458-.067-3.012-.6-4.376-.138-.35-.419-1.296-.903-1.296-.792 0-1.237 2.088-1.372 2.672h-.125l-1-3.001c-1.76.84-2.715 5.308-2 7.002zm-1.876 1.5c1.305 5.695 7.328 8.925 12.754 6.519a8.83 8.83 0 004.443-4.394c.233-.505.691-1.42.424-2.085-.266-.661-2.846.419-3.491.702a.29.29 0 00-.17.22.502.502 0 00.46.58l1.084.084c-1.961 3.796-7.265 5.475-11.003 2.442-.837-.679-1.583-1.485-2.085-2.442-.243-.463-.47-1.055-.882-1.373-.397-.304-.999-.41-1.534-.253z" }));
}
GRIN.DefaultColor = DefaultColor;
export default GRIN;
