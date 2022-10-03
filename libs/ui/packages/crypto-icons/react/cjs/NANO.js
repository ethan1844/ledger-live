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
  default: () => NANO_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#4A90E2";
function NANO({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18.712 8.25c-.643 0-1.187.52-1.187 1.187 0 .94-.148 1.188-1.188 1.188h-.099a1.161 1.161 0 00-1.063 1.162v.025c0 .915-.173 1.138-1.188 1.138-.049 0-.098 0-.123.025-.594.074-1.064.569-1.064 1.162 0 .644.52 1.188 1.188 1.188.618 0 1.137-.495 1.162-1.088v-.1c0-.84.272-1.162 1.162-1.187h.025c.619 0 1.139-.495 1.163-1.113v-.075c0-.865.272-1.187 1.188-1.187.643 0 1.187-.519 1.187-1.187 0-.618-.52-1.138-1.163-1.138zm-6.976 2.374a1.198 1.198 0 011.089 1.139c0 .668-.52 1.187-1.188 1.187a1.188 1.188 0 01-1.187-1.187c0-.841-.272-1.162-1.188-1.162-.915 0-1.187.32-1.187 1.187v.074c-.024.593-.544 1.088-1.162 1.088a1.188 1.188 0 01-1.188-1.187c0-.619.47-1.114 1.064-1.162h.099c1.039 0 1.187-.223 1.187-1.163a1.188 1.188 0 012.375 0c0 .94.148 1.186 1.187 1.186h.099zm-7.174 4.7a1.187 1.187 0 110-2.373 1.187 1.187 0 010 2.374z"
  }));
}
NANO.DefaultColor = DefaultColor;
var NANO_default = NANO;
//# sourceMappingURL=NANO.js.map
