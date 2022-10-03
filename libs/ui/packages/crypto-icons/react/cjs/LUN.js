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
  default: () => LUN_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#F55749";
function LUN({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M11.86 4.536a.286.286 0 01.279 0L18.308 8a.27.27 0 010 .47l-5.366 3.026a1.243 1.243 0 00-.73-.405V9.446a1.21 1.21 0 001.025-1.183c0-.664-.552-1.202-1.234-1.202-.682 0-1.234.538-1.234 1.202 0 .59.439 1.081 1.016 1.182v1.648a1.24 1.24 0 00-.72.402L5.699 8.483a.269.269 0 010-.471l6.162-3.474-.001-.002zm6.466 4.365a.284.284 0 01.38.098.271.271 0 01.039.137l.005 6.724a.27.27 0 01-.14.236l-5.973 3.367c-.186.105-.418-.026-.418-.235l-.005-5.77a1.24 1.24 0 00.74-.416l1.492.836a1.17 1.17 0 00-.027.471c.094.658.719 1.115 1.393 1.023.675-.093 1.145-.701 1.05-1.359-.094-.658-.72-1.115-1.394-1.022a1.231 1.231 0 00-.841.508l-1.463-.82a1.153 1.153 0 00-.019-.859l5.181-2.92V8.9zm-13.07.234c0-.159.133-.272.279-.272.049 0 .098.013.14.037l5.186 2.924c-.115.273-.121.577-.018.855l-1.461.82a1.234 1.234 0 00-.842-.508c-.675-.093-1.298.365-1.393 1.022-.096.657.375 1.265 1.05 1.358.675.093 1.297-.365 1.393-1.022a1.17 1.17 0 00-.027-.472l1.491-.836c.187.22.447.366.733.416l-.005 5.77c0 .21-.232.34-.418.236l-5.975-3.368a.27.27 0 01-.139-.235l.006-6.725z"
  }));
}
LUN.DefaultColor = DefaultColor;
var LUN_default = LUN;
//# sourceMappingURL=LUN.js.map
