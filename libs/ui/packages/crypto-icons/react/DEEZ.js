import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#939393";
function DEEZ({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.28 14.895a538.68 538.68 0 013.906-2.403c1.293-.79 1.293-.79 1.27-.868-.022-.094-8.025-4.957-8.107-5.005-.152-.09-.302-.182-.451-.277.147-.102.433-.297.775-.53l.832-.562.571.342c.705.421 8.445 5.169 9.53 5.845-.443.266-2.01 1.194-4.118 2.435l-4.187 2.468a27.023 27.023 0 01-.015-.656 34.518 34.518 0 01-.005-.788v-.001zm-1.776-4.722c.139.082.379.227.675.411l.771.479.017 1.447c.048 4.183.048 4.183.11 4.225l.04.028.045-.016c.022-.007.03-.01 8.153-4.802l.435-.256-.143 2.012-.053.03a3819.396 3819.396 0 01-10.041 5.748c-.004-.524-.008-2.314-.009-4.647v-4.659zM6.75 18.6l.019-11.975.29.171c.235.137 1.813 1.1 3.596 2.19 1.276.782 2.555 1.562 3.835 2.338l.536.323-1.773 1.084-.354-.206c-.71-.429-1.417-.862-2.122-1.299-.688-.426-1.378-.848-2.07-1.266l-.49-.285-.003 5.077-.005 4.749a83.44 83.44 0 01-.681-.42L6.75 18.6z" }));
}
DEEZ.DefaultColor = DefaultColor;
export default DEEZ;
