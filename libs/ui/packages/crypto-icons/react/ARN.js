import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#0092B5";
function ARN({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M8.82 10.201l3.211-5.653c.006-.01.018-.017.06 0l3.056 5.55a.732.732 0 00.018 1.15l-2.822 5.09a.756.756 0 00-.645-.004L8.793 11.16a.728.728 0 00.026-.959zm-.308 1.151l2.916 5.194a.73.73 0 00-.135.267c-2.354-.564-3.817-.913-4.389-1.047a7.166 7.166 0 01-.633-1.079l1.87-3.29c.125.017.253.001.371-.044v-.001zM8.108 9.94L5.793 5.815C7.37 4.977 9.329 4.537 11.669 4.5L8.547 9.995a.756.756 0 00-.44-.055zm-.315.132a.733.733 0 00.025 1.206L6.101 14.3a7.098 7.098 0 01-.503-2.215l-.347-5.537a.667.667 0 01.25-.56l2.292 4.084zm4.95 6.748a.732.732 0 00-.131-.266l2.863-5.165a.765.765 0 00.372-.018l1.856 3.37a7.297 7.297 0 01-.543.934l-4.417 1.145zm-.556.9a.745.745 0 00.56-.554l4.092-1.061a7.244 7.244 0 01-1.752 1.569l-2.717 1.735a.687.687 0 01-.183.083V17.72zm-.34 0v1.78a.689.689 0 01-.218-.09l-2.717-1.736a7.248 7.248 0 01-1.685-1.487c.743.176 2.095.499 4.057.968.06.28.28.502.563.566zm4.027-7.75a.758.758 0 00-.423-.021l-2.998-5.447c2.274.05 4.185.485 5.731 1.301l-2.31 4.167zm.287.18l2.318-4.179a.668.668 0 01.27.577l-.347 5.537a7.097 7.097 0 01-.525 2.27l-1.736-3.153a.73.73 0 00.02-1.052zM12 8.05a.412.412 0 00-.406.401v1.465L9.429 11.25l.232.5 1.933-.633v1.466l-.542.4v.4l.948-.268.947.267v-.4l-.542-.4v-1.466l1.9.668.265-.534-2.165-1.334V8.451a.413.413 0 00-.405-.4z" }));
}
ARN.DefaultColor = DefaultColor;
export default ARN;
