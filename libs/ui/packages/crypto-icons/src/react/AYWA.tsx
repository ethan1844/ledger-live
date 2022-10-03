import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#3355B5";

function AYWA({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 17.828a8.828 8.828 0 110-17.656 8.828 8.828 0 010 17.655z"  /><path fillRule="evenodd" clipRule="evenodd" d="M14.467 10.125l-.022-.082-.023-.083-.022-.09-.03-.075-.022-.082-.03-.075-.038-.083-.03-.075-.037-.068-.038-.075-.038-.067-.045-.067-.037-.06-.045-.068-.045-.052-.053-.06-.045-.053-.045-.053-.052-.044-.053-.046-.052-.044-.052-.038-.06-.037-.053-.03-.06-.038-.053-.023-.06-.03-.06-.022-.06-.023-.067-.014-.06-.015-.06-.015-.067-.008-.068-.008-.06-.007h-.202l-.068.008-.067.007-.075.008-.068.014-.068.015-.067.015-.075.023-.067.022-.075.023-.075.03-.068.03-.075.038-.068.03-.075.037-.075.045-.067.037-.075.045-.075.053-.067.045-.075.053-.075.06-.075.052-.068.06-.075.06-.067.068-.075.067-.075.068-.068.074-.075.075-.068.075-.067.075-.075.083-.068.082-.067.083-.067.09-.068.09-.067.098-.09.127-.09.135-.09.143-.083.135-.082.15-.083.142-.075.142-.075.15-.067.15-.068.15-.06.15-.052.12 5.392-1.762-.008-.06zM9.6 12.758l4.777-.038.023-.105.022-.105.023-.105.022-.112.015-.105.023-.106.015-.105.008-.104.014-.105.008-.106.007-.097.008-.105.008-.105v-.218L9.6 12.758z"  /><path d="M12 3.42a8.58 8.58 0 100 17.16 8.58 8.58 0 000-17.16zm4.86 9.27l-.15.885h-1.343l-.045.15-.082.225-.082.225-.09.225-.068.225-.098.217-.104.218-.105.217-.113.21-.113.21-.12.203-.12.202-.127.203-.15.195-.067.098-.068.097-.697-1.17.067-.098.067-.097.06-.098.06-.097.06-.098.06-.097.06-.098.053-.097.053-.105.052-.105.052-.105.053-.105.045-.105.045-.105.045-.105.045-.105.045-.105.038-.105v-.09l-5.453.045v1.387l-1.395.968V13.65h-.405l-.15.053-.255-.893 1.26-.412V12.3l.053-.158.075-.142.052-.15.06-.15.06-.15.06-.15.06-.15.068-.15.067-.15.068-.15.067-.143.075-.142.075-.143.075-.142.075-.143.083-.142.082-.135.083-.135L9 9.532l.083-.134.09-.128.09-.127L9.345 9l.09-.127.09-.12.098-.12.127-.105.098-.113.097-.112.098-.113.105-.105.104-.105.105-.105.106-.098.105-.097.104-.098.083-.082.112-.09.113-.083.112-.082.113-.083.113-.074.112-.068.113-.067.112-.06.113-.06.097-.083.135-.037.105-.045.105-.046.105-.037h1.808l.082.037.082.038.083.045.083.045.075.053.074.052.075.06.075.06.068.068.067.067.068.075.068.075.06.083.06.082.06.083.06.09.052.09.053.097.052.098.045.104.045.105.045.105.045.113.037.112V9.75l.75-.24.255.893-.96.314v1.223l-.037.225-.045.225-.053.225v.098l1.313-.023z"  /></Svg>;
}

AYWA.DefaultColor = DefaultColor;
export default AYWA;