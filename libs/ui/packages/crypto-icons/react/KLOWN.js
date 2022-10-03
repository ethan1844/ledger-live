import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#EA0017";
function KLOWN({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M15.716 11.673a.365.365 0 00-.128-.053c-.024 0-.138.123-.254.271l-.545.703-.873 1.127-.708.913v2.487l.069.085c.058.069.076.077.106.048.032-.032.108-.384.177-.829.031-.21.069-.26.104-.14.047.17.002.862-.075 1.17-.013.058-.003.074.106.127.066.032.124.053.133.045.005-.005.09-.214.187-.461.185-.471.218-.535.258-.495.031.032-.012.207-.173.689-.121.365-.132.413-.104.492.038.098.043.175.014.175a3.83 3.83 0 01-.312-.146c-.365-.183-.519-.224-.614-.172-.083.048-.103.082-.14.228a.72.72 0 01-.136.232.55.55 0 00-.1.133c.053.023.107.045.161.066.182.073.408.222.634.412l.113.099.225.206.114-.087c.389-.294.754-.524 1.014-.64.555-.25.912-.485 1.257-.834.312-.318.431-.55.527-1.022.031-.159.118-.318.195-.357.048-.027.05-.024.037.044l-.01.04a1.917 1.917 0 01-.024.099c-.014.049-.008.055.031.041.228-.081.353-.354.308-.683-.05-.378-.165-.492-.431-.428-.08.018-.218.066-.311.108a.529.529 0 01-.18.059.459.459 0 01.038-.17c.13-.376.147-.81.042-.953-.095-.13-.27-.111-.543.053l-.11.064c-.13.075-.124.05-.046-.078.135-.23.27-.503.32-.653.088-.252.049-.503-.084-.546-.098-.031-.315.107-.624.398-.165.156-.3.277-.3.27 0-.027.095-.199.294-.527.116-.193.285-.5.375-.683.133-.27.165-.36.173-.492.013-.194-.056-.355-.188-.435zM10.829 15.248c-.088-.123-.144-.102-.395.138a5.49 5.49 0 01-.31.276c-.18.128-.574.308-.868.398-.172.053-.302.106-.291.116.047.043.322.077.627.077.177 0 .334.009.342.016.01.01-.005.05-.035.09-.12.167-.056.218.3.203l.087-.004.323-.019.045.069c.023.037.037.087.028.113-.023.07-.219.27-.386.398-.399.301-.381.334.186.352.338.01.431.021.45.053.039.063.031.119-.037.213-.229.316-.336.488-.329.526.016.092.188.139.477.131.479-.013.614-.007.728.029.027.01.055.018.083.023l.03.002.017-.003c.013-.016-.088-.22-.578-1.157-.072-.138-.098-.217-.087-.26.032-.127.015-.502-.024-.6a.845.845 0 00-.109-.166l-.05-.057-.122-.13v-.237c0-.289-.036-.5-.102-.59z" }),
        React.createElement("path", { d: "M11.487 13.633c-.031-.284-.06-.52-.073-.527h.007c-.007-.006-.013.005-.013.026 0 .05-.18 1.75-.198 1.885-.009.061-.006.098.01.093.016-.003.121-.096.238-.201.117-.106.217-.18.225-.168.011.014.048.369.082.79.034.38.068.732.08.83l.002.022.014.09.166-.183c.07-.075.138-.151.206-.228l.03-.034.072-.08.047.056.079.102.244.317c.254.328.318.397.318.338a56.11 56.11 0 00-.742-2.15c-.01 0-.052.149-.095.332-.04.182-.082.33-.09.33-.008 0-.042-.283-.077-.63-.07-.752-.084-.852-.105-.852-.008 0-.085.109-.173.239-.085.132-.164.238-.177.238-.013 0-.024-.027-.024-.062 0-.031-.023-.29-.053-.573zM8.785 11.692a2.659 2.659 0 00-.768-.047c-.511.07-1.07.375-1.385.76-.396.48-.563.987-.537 1.625.019.394.082.67.228.966a1.755 1.755 0 001.162.953c.284.072.302.05.071-.086-.407-.234-.71-.513-.897-.825-.633-1.04-.021-2.578 1.188-2.989.192-.063.25-.07.583-.07h.108c.229.002.313.014.461.06.298.102.578.25.831.437.2.151.264.203.272.196.005-.005-.011-.032-.031-.071-.066-.133-.502-.555-.68-.66a2.537 2.537 0 00-.606-.25z" }),
        React.createElement("path", { d: "M7.189 13.873c-.101-.28-.107-.288-.146-.166a.8.8 0 00-.018.311c.06.686.344 1.155.825 1.38.199.09.408.143.408.1 0-.01-.077-.098-.17-.195a4.264 4.264 0 01-.9-1.43zM9.396 9.81c.218-.1.201-.106-.132-.055-.58.087-1.382.41-1.93.775a5.466 5.466 0 00-.865.739c-.194.22-.416.528-.403.566.005.016.071-.021.154-.087.18-.146.412-.313.431-.313a2.35 2.35 0 00.228-.13c.296-.17.62-.289.956-.349.233-.031.597-.018.78.032.26.08.512.185.752.312.109.061.202.109.207.109.016 0 .304.196.523.355.382.272.943.777 1.192 1.07.088.102.175.187.193.187.019.003.043.024.05.048.068.111.14.22.217.324.304.42.588.852.85 1.298.345.586.345.586.368.571l.003-.002c.013-.009.023-.129.026-.285v-.43l-.329-.31a8.986 8.986 0 01-.997-1.119c-.24-.32-.341-.484-1.011-1.641-.249-.432-.315-.516-.44-.582-.317-.159-.775-.284-1.247-.339-.153-.019-.277-.045-.277-.059 0-.05.299-.173.505-.211.168-.024.337-.038.506-.04.294 0 .299 0 .315-.063.04-.16.037-.162-.447-.175-.381-.012-.491-.029-.431-.072l.02-.013c.015-.01.086-.043.17-.082l.063-.029zM7.485 12.838c-.124-.071-.127-.05-.03.217.16.434.425.829.803 1.213.299.3.696.623.824.676l.025.007.014-.003c.019-.018-.061-.244-.175-.484a3.98 3.98 0 00-1.204-1.454 4.29 4.29 0 00-.257-.172z" }),
        React.createElement("path", { d: "M8.787 12.46c-.166-.077-.45-.151-.45-.12.085.098.174.192.265.284.318.331.582.711.781 1.125.1.224.14.312.159.307.013-.002.018-.046.027-.116a1.504 1.504 0 00-.07-.646 1.303 1.303 0 00-.712-.834zM12.808 7.899c-.021-.01-.051-.002-.13.021-.986.289-1.982.746-2.376 1.091l-.067.063-.103.106.082.302a8.68 8.68 0 001.44 2.999c.233.307.887.95 1.175 1.152.262.182.532.343.58.343.047 0 .829-.913.8-.94a8.099 8.099 0 00-.297-.102c-.532-.178-.998-.434-1.321-.73-.265-.242-.492-.594-.243-.374.217.19 1.018.526 1.482.621l.034.007c.088.016.155.028.157.026 0 0-.056-.08-.127-.175a3.71 3.71 0 01-.477-.927c-.087-.259-.18-.391-.323-.468-.06-.03-.133-.034-.33-.021-.692.045-1.29-.26-1.613-.821-.177-.31-.442-.831-.429-.845.008-.007.45.17.985.395.991.415 1.14.472 1.323.502l.03.004.129.018-.015-.514a6.514 6.514 0 00-.07-.828c-.055-.315-.184-.747-.256-.858-.017-.025-.026-.04-.04-.047zM16.04 10.983a4.37 4.37 0 01-.452-.128c-.342-.11-.405-.124-.39-.084.14.138.285.272.432.402.187.167.372.336.553.508a.604.604 0 00.138.117c.008-.005-.027-.188-.074-.405l-.087-.395-.12-.015zM15.667 8.825a6.488 6.488 0 00-.16-.63c-.01-.013-.026.01-.037.054-.026.14-.548 1.715-.6 1.817-.03.059-.048.11-.04.114.01.014.797-.574.9-.674l.074-.072-.137-.609z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.901 7.078a.414.414 0 00-.165-.053c-.103-.01-2.982.665-3.097.726a.427.427 0 00-.18.246c-.013.055.133.738.504 2.348.288 1.247.529 2.279.54 2.29.01.01.232-.254.492-.591.45-.583.476-.608.56-.608.146 0 .371.135.458.277.128.205.12.49-.015.797a.555.555 0 00-.055.159c.01.01 1.897-.4 2.02-.44a.511.511 0 00.155-.105c.018-.018.033-.034.045-.051.09-.128.028-.365-.531-2.552-.318-1.247-.599-2.3-.623-2.334a.438.438 0 00-.108-.11zm.06 3.124c.112-.106.207-.183.213-.172.007.02-.758 1.86-.787 1.89-.01.01-.108-.062-.217-.16-.108-.1-.455-.412-.776-.695-.318-.284-.566-.52-.555-.521.225.06.449.127.67.203l.648.209.302-.283c.164-.156.391-.368.502-.47zm-2.166-.056c0-.032.477-1.509.675-2.094.019-.05.059-.037.114.035.265.287.533.571.805.852.41.43.75.797.75.816 0 .047-.983.965-1.036.965-.024 0-.339-.097-.701-.214-.62-.204-.718-.249-.633-.302.016-.008.026-.034.026-.058z" }),
        React.createElement("path", { d: "M9.74 7.462c0-.045-.177-.018-.622.093-.423.108-.838.241-1.244.4-.533.209-1.43.69-1.361.727.064.02.13.033.196.04.513.059 1.373.27 1.783.434l.094.04.188.088-.107.018c-.693.124-1.347.41-1.845.804-.23.185-.608.578-.733.758-.042.06-.067.096-.062.102.008.008.08-.046.253-.176.45-.34 1.186-.733 1.765-.95.474-.175 1.139-.34 1.544-.38.097-.01.177-.029.177-.04 0-.041-.307-.25-.548-.375a8.988 8.988 0 00-1.403-.534l-.114-.027-.092-.022.106-.09c.145-.126.531-.351.834-.483a9.242 9.242 0 011.053-.372c.074-.015.138-.042.138-.055zM11.926 10.2c-.006.008 0 .026.013.063.035.106.151.167.315.167.175 0 .167-.043-.026-.136-.08-.04-.185-.079-.23-.09-.044-.008-.065-.012-.072-.004z" }),
        React.createElement("path", { d: "M9.655 7.973l.02-.19H9.61c-.106.002-.421.11-.672.232-.197.096-.522.345-.522.4 0 .008.093.05.207.092.313.121.616.268.905.44.124.072.236.127.251.125.032-.013.021-.313-.024-.615-.02-.156-.039-.211-.069-.211-.045 0-.055-.039-.04-.198l.009-.075zM15.008 6.406c-.164-.085-.357-.07-1.284.106-.942.177-1.649.349-2.356.574-.384.13-.761.279-1.13.448-.156.079-.18.1-.223.211-.044.12-.044.144 0 .55.04.371.048.5.09.511.026.008.065-.03.133-.081.227-.164.468-.307.72-.427 1.04-.521 2.406-.915 4.071-1.177.228-.038.376-.072.376-.09 0-.042-.175-.405-.24-.495a.511.511 0 00-.157-.13zM11.175 4.724h.008c.015 0 .063.075.111.162.225.41.68 1.679.625 1.734a.304.304 0 01-.12.04l-.092.016-.135-.29c-.27-.563-.755-1.33-.813-1.275a.512.512 0 00.04.173c.135.386.318 1.252.318 1.498 0 .074-.013.097-.067.122a.311.311 0 01-.103.031c-.015 0-.103-.095-.188-.211-.084-.117-.164-.204-.174-.194a2.582 2.582 0 00-.059.297c-.04.273-.08.367-.121.3a5.768 5.768 0 01-.053-.597 11.43 11.43 0 00-.045-.635c-.008-.04-.003-.071.01-.071a1.4 1.4 0 01.228.195c.111.106.206.188.212.178.021-.04-.265-.895-.445-1.33-.015-.036.01-.05.162-.073.175-.03.623-.074.701-.07zM9.512 5.16c-.118-.049-.298-.004-.51.131-.063.038-.268.155-.464.267l-.03.017c-.682.38-1.29.815-1.274.91.004.021.023.037.042.032a6.725 6.725 0 00.339-.085c.395-.108.803-.16 1.213-.154l.2.003.493.013.018-.187c.01-.187.017-.373.019-.56V5.38c0-.182-.01-.207-.046-.22zM11.824 4.982l-.16-.27h-.129c-.069 0-.127.006-.127.013.06.115.122.227.189.338.234.42.449.851.645 1.29.018.05.041.097.068.143.032.037.21-.008.21-.053 0-.104-.374-.897-.644-1.371l-.052-.09zM12.859 4.778c-.267-.021-.567-.04-.665-.04-.09 0-.142-.005-.157.016-.02.03.032.11.155.32.174.303.592 1.162.592 1.218 0 .077.069.077.414.005.317-.063.636-.12.955-.17.018-.012-.162-.486-.283-.753-.185-.397-.248-.498-.331-.517l-.133-.026a10.656 10.656 0 00-.547-.053z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.22 4.982a8.159 8.159 0 00-6.144-.938 8.166 8.166 0 00-3.425 1.769c-.315.277-.829.81-1.054 1.09a8.175 8.175 0 00-1.678 6.485c.371 2.115 1.546 3.981 3.322 5.268 1.51 1.096 3.537 1.665 5.372 1.506 1.723-.145 3.234-.749 4.539-1.805a10.026 10.026 0 001.432-1.488 8.424 8.424 0 001.2-2.295 7.72 7.72 0 00.416-2.615c0-1.414-.353-2.732-1.073-4.005a8.36 8.36 0 00-2.907-2.972zm-6.117-.29a7.72 7.72 0 012.39-.224c.774.058 1.366.177 1.972.394.895.323 1.491.651 2.271 1.249a7.103 7.103 0 01.894.846c.05.06.123.146.184.216.85.985 1.448 2.319 1.686 3.761.069.405.066 1.655-.003 2.112-.19 1.282-.637 2.359-1.448 3.495-.434.606-1.302 1.408-1.98 1.826-1.469.909-3.025 1.295-4.687 1.162a7.709 7.709 0 01-2.872-.83 7.45 7.45 0 01-3.225-3.235c-.585-1.144-.839-2.195-.839-3.45 0-1.561.431-2.958 1.331-4.301.279-.415 1.017-1.225 1.356-1.488l.278-.22c.682-.545 1.758-1.07 2.692-1.312z" }));
}
KLOWN.DefaultColor = DefaultColor;
export default KLOWN;
