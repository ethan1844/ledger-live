var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => TEN_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#0899CD";
function TEN({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M20.227 12.65c-.14 2.002-.939 3.728-2.396 5.181a8.804 8.804 0 01-1.155.979.782.782 0 00-.057-.076l3.517-6.094c.03.005.06.009.091.01zM16.3 19.061c-1.268.793-2.702 1.189-4.3 1.189-1.528 0-2.905-.362-4.133-1.086a7.4 7.4 0 00.563.3.598.598 0 00.048-.098h7.044a.58.58 0 00.047.098c.25-.12.493-.255.73-.403zm-8.976-.247a8.829 8.829 0 01-1.163-.983c-1.452-1.453-2.248-3.18-2.388-5.18a.602.602 0 00.09-.011l3.518 6.093a.586.586 0 00-.057.08zM3.75 11.873c.03-2.226.832-4.13 2.41-5.712C7.774 4.553 9.72 3.75 12 3.75s4.224.804 5.831 2.411c1.605 1.605 2.412 3.542 2.419 5.808 0-.202-.008-.404-.023-.605a.601.601 0 00-.09.011L16.622 5.27a.604.604 0 00.059-.08 7.768 7.768 0 00-1.108-.655.637.637 0 00-.051.107H8.478a.629.629 0 00-.051-.107 7.79 7.79 0 00-1.107.651c.017.03.037.06.061.087l-3.518 6.102a.599.599 0 00-.091-.011 9.468 9.468 0 00-.021.51l-.001-.002zm16.01-.28a.628.628 0 00-.118.194h-2.907a.65.65 0 00-.154-.233.65.65 0 00-.234-.154V5.679l3.412 5.915zm-.118.633a.63.63 0 00.117.193l-3.412 5.909v-5.715a.65.65 0 00.234-.153.652.652 0 00.154-.234h2.907zm-15.284-.438a.628.628 0 00-.117-.194L7.652 5.68v5.722a.65.65 0 00-.234.154.651.651 0 00-.154.233H4.358zM8.47 5.095a.082.082 0 00.008-.015h7.044c.027.07.067.136.117.193l-2.153 3.72a.618.618 0 00-.431.073L8.471 5.095zm.008 6.693a.65.65 0 00-.154-.233.65.65 0 00-.234-.154V5.679l3.416 5.908a.638.638 0 00-.112.2H8.479zm5.499-1.933a.653.653 0 00.04-.23.623.623 0 00-.15-.413L15.91 5.68v5.72a.605.605 0 00-.096.044l-1.837-1.59v.001zm-1.203-.46a.596.596 0 00-.044.23.61.61 0 00.154.413l-.771 1.33a.583.583 0 00-.227 0L8.712 5.88l4.063 3.515zm-.165 2.393a.654.654 0 00-.116-.2l.768-1.331c.147.03.3.003.43-.073l1.838 1.59a.105.105 0 01-.007.015H12.61v-.001zm3.067.672c.065.068.145.12.234.154v5.714l-3.417-5.918a.622.622 0 00.11-.184h2.919a.652.652 0 00.154.234zm-3.782.176a.73.73 0 00.219-.004l3.175 5.499-4.06-3.511a.651.651 0 00-.109-.643l.775-1.341zm3.635 6.277a.123.123 0 01-.007.015H8.479a.635.635 0 00-.113-.195l2.148-3.712c.147.03.3.003.43-.073l4.586 3.965zm-4.79-5.156a.617.617 0 00-.431.073L8.47 12.242a.095.095 0 00.008-.016h2.919a.635.635 0 00.113.19l-.771 1.341zm-.713.402a.596.596 0 00-.043.23c0 .158.051.295.154.413l-2.047 3.53v-5.719a.606.606 0 00.095-.043l1.841 1.59zM7.42 12.46c.066.068.146.12.234.154v5.714L4.241 12.42a.63.63 0 00.117-.194h2.907a.653.653 0 00.154.234z"
  }));
}
TEN.DefaultColor = DefaultColor;
var TEN_default = TEN;
//# sourceMappingURL=TEN.js.map
