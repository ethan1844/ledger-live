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
  default: () => SOC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#199248";
function SOC({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zm2.057 16.677a7.947 7.947 0 11-3.446-15.502 7.948 7.948 0 013.446 15.502z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.197 5.465c0 .388 0 .775.016 1.163a7.312 7.312 0 00-1.61-.422c-.022-.351.078-.738-.025-1.071A9.985 9.985 0 0011.4 5.12c-.02.362-.012.725 0 1.088a7.397 7.397 0 00-1.61.43c.012-.391.016-.782.01-1.174a6.9 6.9 0 000 13.078c0-.384-.003-.766-.01-1.149.514.202 1.051.34 1.599.412 0 .352 0 .704-.021 1.052.42.06.846.06 1.266 0a19.83 19.83 0 01-.03-1.04 7.594 7.594 0 001.605-.409c-.012.38-.012.76 0 1.14A6.9 6.9 0 0014.2 5.471l-.002-.006zm1.028 10.451c-.906.822-2.193 1.016-3.375.999-1.037 0-2.135-.281-2.884-1.032-.398-.384-.623-.897-.825-1.406.725-.188 1.473-.251 2.202-.407a1.278 1.278 0 00.854.958c.662.207 1.483.236 2.035-.237.391-.324.402-1.034-.083-1.277-1.138-.588-2.555-.389-3.63-1.133-1.482-.934-1.591-3.41-.142-4.418 1.109-.778 2.59-.875 3.876-.563 1.163.294 1.992 1.28 2.39 2.371-.715.124-1.43.25-2.145.371-.188-1.136-1.78-1.406-2.57-.744-.45.375-.334 1.172.228 1.371 1.23.51 2.708.363 3.797 1.217 1.266.858 1.398 2.907.271 3.93h.001z"
  }));
}
SOC.DefaultColor = DefaultColor;
var SOC_default = SOC;
//# sourceMappingURL=SOC.js.map
