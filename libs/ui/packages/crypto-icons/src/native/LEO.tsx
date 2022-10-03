import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#11021E";

function LEO({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M8.204 10.853h.007l.115.043.122.043.115.044.122.05.115.043.122.036.116.043.115.05.23.087.122.036.115.05.122.043.116.043.122.044.115.042.122.044.115.043.122.043.115.05.123.036v-1.675H8.038l-.115.058-.273.144-.28.143-.273.144-.274.144-.28.144-.28.143-.274.144-.273.144-.28.143-.273.144-.252.137-.029 4.12.28.195.274.194.28.187.547.388.28.194.122.093.158-.194.274-.36.02-.035-.02-.022-.274-.194-.28-.201-.28-.194-.274-.195-.273-.193-.079-.051.021-3.329.058-.028.273-.137.274-.144.28-.13.28-.143.274-.137.273-.136.28-.137.273-.136.28-.145z"  /><Path d="M12.963 18.718l-.237.094-.26.1-.258.108-.259.1-.114.051-.137-.071-.26-.13-.25-.13-.26-.129-.258-.13-.259-.128-.259-.13-.26-.137-.258-.122-.251-.136-.259-.13-.252-.122-.259-.137-.028-.014v-3.357h-.748v3.817l1.035.518.252.129.259.137.251.122.259.137.26.129.258.122.259.137.517.258.252.13.36.18.15-.065.26-.1.258-.101.259-.108.258-.108.26-.093-.26-.647-.02-.044zm4.594-4.68l.015 1.589-.072.05-.439.31-.43.316-.44.31-.438.316-.446.301-.431.317-.439.316-.259.187-.18-.144-.43-.33-.44-.338-.438-.331-.432-.338-.078-.05v-1.71l.078-.073.432-.46.438-.453.44-.46.43-.453.425-.445H9.196l.438.46.432.452.446.453.438.46.432.453.057.065v2.07l.381.295.438.33.432.34.438.33.44.337.43.331.165.13.274-.201.439-.31.431-.316.446-.31.438-.308.44-.31.43-.316.44-.309.437-.309.36-.266.071-1.949-.43-.014-.382-.015zM5.594 10.364h.05l.008-2.114.287-.18.345-.207.352-.209.338-.223.352-.209.345-.215.345-.209.345-.208.345-.216.353-.209.007-.007.331.195.353.193.69.403.345.194.352.195.338.2.338.188.015-.03.345-.617-.345-.202-.353-.194-.338-.194-.352-.195-.345-.207-.345-.195-.345-.194-.353-.194-.337-.194-.015-.008-.338.203-.345.215-.345.208-.345.216-.345.208-.352.209-.339.216-.352.208-.345.216-.345.215-.345.209-.338.208-.015 2.524h.353l.345.007z"  /><Path d="M19.11 8.423l-.173-.137-.186-.15-.18-.144-.18-.144-.18-.15-.18-.138-.186-.144-.18-.15-.187-.144-.13-.108-.05.057-.18.223-.186.23-.043.065.043.05.187.152.18.143.18.158.186.152.18.15.187.159.18.15.086.072.008 3.4-.094.059-.18.122-.188.108-.179.122-.187.107-.18.123-.18.108-.186.122-.18.108-.18.122-.18.108-.18.122-.186.108-.18.122-.18.108-.18.122-.186.108.187.287.18.295.035.05.144-.093.18-.115.187-.107.18-.116.18-.115.18-.114.18-.108.185-.116.18-.107.18-.116.187-.114.18-.116.187-.107.18-.116.18-.107.18-.115.18-.115.186-.116.18-.107-.008-4.163zm-5.924 2.028v1.474l.058-.023.237-.1.244-.093.237-.1.245-.095.244-.1.237-.1.245-.094.244-.1.238-.095.244-.1.238-.093V6.374l-.273-.165-.28-.158-.275-.165-.28-.166-.28-.158-.28-.165-.273-.166-.274-.158-.28-.165-.28-.165-.28-.16-.275-.164-.273-.165-.28-.16-.143-.078-.137.064-.28.159-.274.144-.273.15-.28.159-.281.144-.28.15.28.165.28.159.173.1.108-.05.273-.15.274-.144.28-.144.115-.058.165.094.28.165.547.316.56.331.28.158.548.331.28.158.56.331.087.043v3.286h-1.963"  /><Path d="M13.186 11.925l2.71-1.093-2.717-.755.007 1.848zm-2.494 0v-1.82l-2.481.741 2.48 1.071"  /></Svg>;
}

LEO.DefaultColor = DefaultColor;
export default LEO;