import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#03E8B0";

function PART({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M11.568 4.62c.483-.21.828.235 1.127.534.532.452 1.04.933 1.52 1.44.274.3.163.85-.212 1.017-.288.158-.64.04-.86-.18-.58-.555-1.134-1.137-1.735-1.668-.374-.305-.297-.967.16-1.143zm5.276 1.538c.327-.176.852-.033.943.358.139.347-.084.69-.328.921a78.329 78.329 0 00-1.58 1.617.674.674 0 01-.793.168c-.387-.16-.492-.743-.2-1.038.658-.67 1.238-1.42 1.958-2.025v-.001zm-10.476.108c.34-.206.763-.07 1.016.21.568.574 1.155 1.128 1.729 1.693.38.35.114 1.095-.416 1.098-.444.067-.68-.372-.976-.612-.52-.43-.998-.91-1.47-1.395-.267-.275-.188-.78.117-.994zm.44 3.39c.573-.221 1.132.5.775.997-.423.55-.972.994-1.433 1.514-.272.28-.525.71-.979.655-.53-.02-.796-.757-.41-1.115.696-.667 1.249-1.51 2.048-2.052zm11.608 1.595c.393-.257.987.035 1 .51.058.446-.385.681-.628.981-.43.516-.9.998-1.386 1.461-.356.335-1.019.1-1.083-.386-.083-.502.388-.813.685-1.134.492-.457.908-.995 1.412-1.432zM8.302 14.78c.382-.229.962.043.971.507.071.448-.372.686-.614.985-.428.518-.905.993-1.386 1.461-.313.317-.98.165-1.069-.29-.151-.438.22-.791.504-1.066.55-.515 1.028-1.103 1.594-1.597zm6.796-.017c.212-.073.48-.08.659.074.662.63 1.367 1.213 1.99 1.885.192.195.209.522.081.756-.18.42-.796.43-1.095.133-.605-.57-1.185-1.17-1.793-1.737-.367-.285-.281-.946.158-1.111zm-5.1 1.608c.315-.17.686-.009.912.231.568.57 1.147 1.13 1.736 1.678.39.37.126 1.123-.424 1.129-.444.052-.675-.389-.973-.63a17.386 17.386 0 01-1.462-1.388c-.28-.298-.167-.855.211-1.02zM8.986 5.191a.651.651 0 11-1.302 0 .651.651 0 011.301 0zm1.896 1.731a.65.65 0 11-1.301 0 .65.65 0 011.3 0zm-5.08 1.59a.651.651 0 11-1.302.044.651.651 0 011.301-.044zM16.13 5.14a.65.65 0 11-1.303 0 .65.65 0 011.304 0zm3.37 3.21a.65.65 0 11-1.301 0 .65.65 0 011.301 0zm-1.778 1.87a.65.65 0 11-1.302 0 .65.65 0 011.302 0zm1.775 5.254a.65.65 0 11-1.302 0 .65.65 0 011.302 0zm-5.074 1.587a.651.651 0 11-1.302.044.651.651 0 011.302-.044zm1.872 1.779a.651.651 0 11-1.302.044.651.651 0 011.302-.044zm-7.125 0a.65.65 0 11-1.302 0 .651.651 0 011.3 0h.002zm-1.588-5.096a.65.65 0 11-1.3.045.65.65 0 011.3-.045zm-1.78 1.891a.652.652 0 11-1.303.044.652.652 0 011.302-.044z"  /></Svg>;
}

PART.DefaultColor = DefaultColor;
export default PART;