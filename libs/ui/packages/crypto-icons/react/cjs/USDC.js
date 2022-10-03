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
  default: () => USDC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#2775C9";
function USDC({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 20.813A8.812 8.812 0 013.187 12 8.812 8.812 0 0112 3.187a8.812 8.812 0 110 17.625zM11.475 8.73a1.935 1.935 0 00-1.838 1.852c0 .908.556 1.5 1.733 1.748l.825.195c.803.188 1.133.457 1.133.915s-.578.908-1.328.908a1.425 1.425 0 01-1.35-.683.51.51 0 00-.457-.292H9.75a.262.262 0 00-.21.307 2.048 2.048 0 001.958 1.56v.63a.529.529 0 001.057 0v-.637a1.965 1.965 0 001.943-1.936c0-.952-.548-1.5-1.845-1.777l-.75-.165c-.75-.188-1.103-.435-1.103-.855s.45-.885 1.2-.885a1.23 1.23 0 011.193.607.6.6 0 00.54.346h.352a.315.315 0 00.232-.375 1.988 1.988 0 00-1.784-1.5v-.518a.529.529 0 10-1.058 0v.555zM5.393 12a6.592 6.592 0 004.5 6.247h.104a.337.337 0 00.338-.337v-.157A.706.706 0 009.9 17.1a5.52 5.52 0 010-10.238.698.698 0 00.435-.644v-.173a.314.314 0 00-.42-.3A6.593 6.593 0 005.393 12zm13.215 0a6.592 6.592 0 00-4.5-6.24h-.113a.353.353 0 00-.352.353v.112a.75.75 0 00.457.675 5.52 5.52 0 010 10.23.75.75 0 00-.45.668v.127a.352.352 0 00.465.33A6.592 6.592 0 0018.608 12z"
  }));
}
USDC.DefaultColor = DefaultColor;
var USDC_default = USDC;
//# sourceMappingURL=USDC.js.map
