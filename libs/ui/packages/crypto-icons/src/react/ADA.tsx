import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#0D1E30";

function ADA({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M11.798 4.549c.359-.185.798.243.607.596-.112.288-.532.365-.747.145-.227-.21-.153-.627.14-.742zm-3.867.41c.219-.09.495.107.473.342.022.254-.293.441-.515.32-.295-.112-.261-.583.042-.663zm7.919.67c-.341-.041-.395-.57-.068-.676.255-.121.49.107.527.345-.054.203-.227.389-.46.33zm-7.039.948c.365-.227.886.11.83.529-.02.42-.588.665-.909.38-.31-.224-.263-.737.08-.91zm5.573.241c.162-.412.822-.426 1.008-.024.183.313-.042.7-.369.807-.432.08-.843-.38-.64-.783zm-3.052.76c-.004-.355.325-.62.667-.644.228.045.476.14.573.366.183.312.02.74-.307.883-.15.083-.329.052-.492.042-.25-.12-.46-.357-.441-.647zm-5.75.518c.334-.203.784.165.657.522-.069.308-.49.433-.73.237-.258-.185-.218-.628.074-.76zm12.347-.002c.283-.216.75.032.715.383.02.32-.384.563-.665.398-.309-.137-.341-.605-.05-.78zm-4.98.638a1.127 1.127 0 011.287.443c.35.5.165 1.262-.38 1.55-.564.34-1.389.052-1.598-.57-.236-.554.109-1.249.69-1.423zm-2.74.055c.518-.24 1.214-.039 1.464.482.294.507.067 1.212-.459 1.474-.526.295-1.27.071-1.524-.472-.286-.527-.032-1.242.52-1.484zm-2.743.922c.04-.328.354-.542.672-.564a.735.735 0 01.652.643c-.022.337-.287.666-.65.664-.4.034-.75-.358-.674-.743zm8.102-.492c.41-.235.98.106.961.57.028.491-.602.837-1.01.549-.424-.24-.391-.915.049-1.12zm-6.473 1.73c.479-.13 1.028.092 1.263.526a1.085 1.085 0 01-.248 1.363c-.514.47-1.46.28-1.732-.36-.315-.587.067-1.374.717-1.53v.001zm5.196-.002c.465-.131 1.013.045 1.263.463.332.477.174 1.19-.32 1.498-.517.358-1.316.17-1.601-.39-.345-.577.002-1.395.658-1.571zm-8.28.544c.414-.153.873.296.705.7-.102.368-.63.504-.902.233-.319-.255-.2-.822.197-.933zm11.226.587a.627.627 0 01.591-.656c.284.045.56.27.537.574.027.401-.465.674-.813.485-.162-.081-.246-.246-.315-.403zm-13.263-.387c.25-.107.558.105.5.377-.013.308-.476.428-.645.17-.15-.18-.06-.455.145-.548zm15.712-.007c.176-.122.458-.034.527.167.117.22-.099.522-.35.486-.355.031-.469-.5-.177-.653zm-9.238 1.48c.656-.167 1.36.37 1.365 1.035.042.671-.652 1.266-1.323 1.111-.519-.082-.926-.574-.909-1.09-.001-.493.377-.952.867-1.056zm2.597 0c.665-.184 1.391.364 1.38 1.043.036.659-.637 1.234-1.294 1.103-.619-.078-1.075-.747-.902-1.338.087-.393.421-.712.816-.81v.001zm-5.007.408c.46-.077.892.427.706.858-.137.459-.815.583-1.115.208-.35-.36-.088-1.017.409-1.066zm7.615.02c.411-.17.915.18.884.619.016.482-.606.815-1.007.533-.456-.253-.372-.997.123-1.152zm2.129 2.1c-.16-.295.131-.685.465-.63.165-.004.281.125.387.233.022.174.058.383-.09.517-.2.25-.653.179-.762-.12zM5.58 15.141c.311-.203.759.1.688.458-.037.317-.442.498-.708.318-.287-.163-.276-.627.02-.776zm6.145.662c.407-.176.926.173.887.614.03.487-.611.825-1.01.532-.442-.25-.368-.99.123-1.146zm-2.846.654c.347-.18.812.13.78.513.01.313-.3.58-.615.534-.26-.006-.43-.236-.514-.454.005-.238.105-.503.35-.593zm5.765.006c.357-.218.864.094.83.502.009.428-.564.7-.896.42-.321-.22-.282-.748.066-.922zm1.002 2.437c-.159-.235.028-.52.285-.574.208.042.428.195.384.43-.03.321-.506.419-.669.145zm-7.958-.205c.063-.187.216-.372.44-.324.327.023.423.507.138.657-.257.17-.555-.063-.578-.333zm3.84.216c.062-.278.426-.412.666-.265.16.067.206.241.246.39a6.718 6.718 0 00-.06.232c-.098.114-.225.23-.388.225-.304.036-.579-.303-.465-.582h.001z"  /></Svg>;
}

ADA.DefaultColor = DefaultColor;
export default ADA;