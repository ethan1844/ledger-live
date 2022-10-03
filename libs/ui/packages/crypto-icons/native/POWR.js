import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#05BCA9";
function POWR({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M20.996 11.965a.155.155 0 01-.086.174l-.057.027-1.73 1.734.671 2.508a.155.155 0 01-.108.19l-2.407.645-.664 2.483a.153.153 0 01-.187.11l-2.543-.683-1.798 1.802a.154.154 0 01-.218 0l-1.777-1.781-2.461.661a.154.154 0 01-.161-.055.153.153 0 01-.027-.054l-.664-2.482-2.406-.647a.154.154 0 01-.109-.189l.649-2.427-1.868-1.873a.154.154 0 010-.218l1.816-1.821-.649-2.427a.155.155 0 01.11-.19l2.516-.676.656-2.452a.155.155 0 01.189-.11l2.38.64 1.806-1.81a.157.157 0 01.218 0l1.827 1.831 2.462-.662a.154.154 0 01.188.11l.017.064.009.03.63 2.358 2.517.677c.082.022.13.106.108.189l-.67 2.508 1.693 1.697a.153.153 0 01.128.119zm-1.964 1.59l1.01-1.01-1.139.53.129.481zm.368 2.57l-.527-1.973-1.048 1.05 1.575.924zm-1.658-.614l-.37 1.389 1.878-.505-1.508-.884zm-1.348 3.852l.542-2.028-1.48.398.938 1.63zm-1.878-.844l-.38.382 1.491.4-1.111-.782zm-2.384 1.954l1.41-1.413-1.41-.38v1.793zm-.308-1.764l-1.388.372 1.387 1.392V18.71h.001zm-3.892.726l1.91-.513-1.023-1.026-.887 1.539zm-.81-2.1l.424 1.586.128-1.437-.552-.149zm-2.317-.94l1.882.505-.375-1.4-1.507.894zm1.355-1.163l-.996-1-.505 1.89 1.501-.89zm-2.61-3.053l1.455 1.458.39-1.458H3.55zm1.56-1.181l-.157-.585-1.225 1.228 1.382-.643zM4.606 7.92l.506 1.896 1.013-1.015-1.519-.88zm1.754.645l.387-1.446-1.988.534 1.59.922.01-.01zm1.329-3.78l-.507 1.898 1.385-.372-.878-1.525zm1.756.687l.367-.367-1.437-.386 1.07.753zm2.38-1.948l-1.418 1.421 1.417.381V3.525zm.307 1.83l1.44-.387-1.44-1.443v1.83zm4.047-.768l-2.013.54 1.078 1.082.935-1.622zm.227 1.971l.47.126-.361-1.355-.11 1.229zm2.887 1.095l-1.981-.533.382 1.434 1.599-.902zM17.85 8.82l1.074 1.076.53-1.982-1.604.906zm2.581 3.023l-1.348-1.35-.361 1.35h1.71zm-1.774.308l.165.619 1.328-.619h-1.493zm-.233.804l.115-.052-.05-.188-.064.24zm-.103.389l-.338 1.26.797-.798-.16-.602-.3.14zm-.931 2.292l-1.712 1.716 1.35-.362.362-1.354zm-2.15 1.72l2.309-2.315.408-1.528-3.887 1.811 1.17 2.032zm-.066.503l-.437.437 1.158.815-.721-1.252zm-.819.168l.126.089.168-.168-.294.08zm-.387.104l-1.344.361 1.169.315.468-.47-.293-.206zm-2.533.361l-2.165-.582.915.918 1.25-.336zm-3.418-1.4l-.015.16.238.063-.223-.224zm-.284-.286L6.706 15.78l.324 1.213.671.18.032-.364v-.002zm-1.62-2.06l-.544-2.03-.313 1.171.856.86zm-.77-2.876l-.153-.57-1.224.57h1.377zm.348-.805l-.217.102.095.357.122-.459zm.105-.388L6.2 9.162l-.996.999.188.705.403-.188zm.999-2.548l1.394-1.397-1.1.295-.294 1.103V8.13zm2.013-2.018l.417-.417-1.107-.78.69 1.197zm.87-.099l-.198-.138-.262.262.46-.124zm.387-.104l1.37-.367-1.28-.344-.454.455.364.256zm2.558-.367L14.7 6.1l-.877-.88-1.2.322zm3.433 1.48l.02-.234-.347-.093.327.327zm.283.285l.962.964-.333-1.243-.59-.159-.039.438zm1.556 1.995l.594 2.223.343-1.283-.937-.94zm-4.33 5.146l.35.61 4.146-1.932.26-.973h-2.41l-.123 1.375a.154.154 0 01-.285.066l-.749-1.268-1.19 2.122zm-.589 1.048l.66-.308-.247-.427-.413.735zm-2.614-.278l3.665 2.58.962-.259-1.2-2.082-1.116.52a.154.154 0 01-.199-.216l.7-1.247-2.422.027-.39.676v.001zm-.155.268L9.03 17.529l3 .805 1.61-.432-3.433-2.416zm.187-.941l-.973.01.688.485.285-.495zM8.45 12.179l-.399 4.514.7.7 1.202-2.086-1.1-.774a.154.154 0 01.086-.28l1.488-.017-1.215-2.057h-.762zm-.307 0h-2.4l.802 3.004 1.223 1.225.375-4.229zm.886-.308l-.479-.812-.072.812h.551zm1.088-2.867l-4.062 1.893-.26.974H8.17l.116-1.316a.154.154 0 01.285-.065l.752 1.273L10.5 9.668l-.383-.664zm-.155-.267L8.741 6.615 6.636 8.726l-.477 1.783 3.804-1.772zm3.756.121l-3.713-2.614-.972.262 1.21 2.1 1.2-.56a.154.154 0 01.198.217l-.702 1.25 2.416-.026.363-.629zm.154-.268l1.193-2.073-3.037-.816-1.635.44 3.48 2.449zm-.159.892l.878-.009-.62-.437-.258.447zm1.887 2.67h-.592l.515.872.077-.871zm-4.926-2.797l.465-.827-.742.346.277.482zm2.672 4.85l1.226-2.185-1.309-2.215-.004-.009-2.495.028-1.26 2.246 1.279 2.162 2.548-.029c.006 0 .01.002.015.003zm2.957-6.497l-.367 4.137h2.32l-.797-2.978-1.156-1.16zm-.675 4.137l.391-4.422-.71-.712-1.185 2.056 1.035.728a.155.155 0 01-.087.281l-1.459.016 1.213 2.053h.801zm.475-5.368l.12-1.352-.69 1.198.57.154zM7.975 17.565l-.124 1.393.713-1.236-.589-.157z" }));
}
POWR.DefaultColor = DefaultColor;
export default POWR;
