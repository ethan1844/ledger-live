import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#F8C24A";

function BTCZ({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 20.25c-4.55 0-8.25-3.7-8.25-8.25S7.453 3.75 12 3.75c4.547 0 8.25 3.703 8.25 8.25 0 .752-.102 1.5-.304 2.225a.666.666 0 01-1.282-.359A6.926 6.926 0 0012 5.082 6.926 6.926 0 005.082 12a6.926 6.926 0 009.023 6.592.668.668 0 01.804.943.666.666 0 01-.401.326c-.81.258-1.657.39-2.508.389zm2.531-8.27c.285.239.477.584.576 1.035.065.26.06.531-.012.789a1.593 1.593 0 01-.37.637 2.353 2.353 0 01-.651.478c-.257.133-.317.175-.623.243l-.191.046a.223.223 0 00-.164.264l.112.504a.224.224 0 01-.09.23.221.221 0 01-.08.035l-.507.112a.223.223 0 01-.23-.09.223.223 0 01-.035-.079l-.11-.5a.224.224 0 00-.179-.17.221.221 0 00-.087.001l-1.374.305a.541.541 0 01-.645-.413L8.633 9.813a.541.541 0 01.413-.645l1.375-.304a.222.222 0 00.168-.265l-.112-.504a.224.224 0 01.09-.23.221.221 0 01.08-.034l.508-.113a.223.223 0 01.264.169l.111.501a.222.222 0 00.265.168l.42-.091c.218-.051.445-.048.66.01.206.057.398.153.565.284.34.27.577.65.67 1.075.071.315.057.643-.04.953-.1.32-.302.6-.575.794.38.019.742.158 1.036.4zm-4.072-1.197l.073.32a.541.541 0 00.645.412l.98-.218a.687.687 0 00.413-.268c.106-.14.133-.33.08-.567-.049-.22-.144-.375-.285-.468a.574.574 0 00-.459-.086l-1.035.229a.541.541 0 00-.412.646zm2.931 2.825h.002a.713.713 0 00.083-.559.817.817 0 00-.295-.485.574.574 0 00-.498-.117l-1.242.275a.542.542 0 00-.412.645l.087.395a.543.543 0 00.646.413l1.177-.26a.686.686 0 00.452-.307zm2.474 4.037l1.15-1.374a.208.208 0 00-.048-.309.208.208 0 00-.112-.032h-.774a.208.208 0 01-.208-.208v-.162c0-.115.092-.208.208-.208h1.769a.208.208 0 01.207.208v.213a.207.207 0 01-.045.13l-1.1 1.38a.208.208 0 00.163.338h.788c.115 0 .209.093.209.208v.161a.207.207 0 01-.209.208h-1.839a.208.208 0 01-.208-.208v-.21a.21.21 0 01.049-.135z"  /></Svg>;
}

BTCZ.DefaultColor = DefaultColor;
export default BTCZ;