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
  default: () => APPC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#FD875E";
function APPC({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10.245 13.415l1.79-5.334 1.822 5.334h-3.612zm7.584 3.373l-1.48-3.982h.884a.637.637 0 00.637-.627.591.591 0 00-.178-.42.616.616 0 00-.43-.175h-1.38l-.22-.62h1.57a.63.63 0 00.635-.605.613.613 0 00-.186-.443.643.643 0 00-.451-.182h-2.04l-1.105-2.976a2.682 2.682 0 00-.793-1.096 1.874 1.874 0 00-1.247-.41 1.927 1.927 0 00-1.253.41 2.706 2.706 0 00-.795 1.095L8.839 9.76H6.811a.607.607 0 00-.612.598c0 .344.284.622.635.622h1.54l-.237.603h-1.38a.606.606 0 00-.614.6c0 .34.28.616.627.617h.886L6.15 16.787a2.041 2.041 0 00-.151.706c.015.34.166.66.42.892.28.238.637.367 1.005.363a1.35 1.35 0 001.38-.98l.582-1.7h5.358l.583 1.741a1.36 1.36 0 001.38.93c.232.006.46-.052.663-.165.174-.127.33-.277.46-.448a1.2 1.2 0 00.169-.633 4.075 4.075 0 00-.171-.695v-.01z"
  }));
}
APPC.DefaultColor = DefaultColor;
var APPC_default = APPC;
//# sourceMappingURL=APPC.js.map
