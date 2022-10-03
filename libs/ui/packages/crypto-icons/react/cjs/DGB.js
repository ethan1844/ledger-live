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
  default: () => DGB_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#006AD2";
function DGB({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.901 18.75l.36-.962-.638.064-.23.607c-.018.046-.033.094-.056.137-.05.094-.128.152-.235.153H6.686c-.011 0-.022-.007-.047-.015l.301-.814c-.55-.015-1.084-.024-1.617-.084.01-.1 3.047-7.759 3.168-7.99.03-.002.065-.007.101-.007h2.452c.025 0 .05 0 .074.002.248.018.386.229.3.467-.115.315-.236.629-.354.942L9.52 15.355l-.048.143c.043.002.077.007.11.005 2.323-.101 4.027-1.21 5.128-3.292.24-.456.41-.945.502-1.452.055-.296.072-.593-.002-.889a1.322 1.322 0 00-.524-.773 1.967 1.967 0 00-1.171-.363H5.25c.018-.045.026-.075.04-.102l1.041-1.875a.565.565 0 01.53-.314h4.4l.45-1.192h1.337c.033 0 .066-.003.097.002.096.015.15.09.136.187a.567.567 0 01-.036.119l-.279.744c-.016.042-.028.085-.045.135h.604c.015-.032.03-.065.043-.099l.372-.988c.038-.1.04-.1.139-.1.423 0 .847-.002 1.27 0 .178 0 .242.095.178.267-.101.277-.205.552-.309.827l-.045.13c.041.007.075.015.109.02a5.83 5.83 0 011.706.45c.413.187.788.43 1.098.772.418.462.626 1.013.659 1.635a4.477 4.477 0 01-.28 1.748c-.473 1.331-1.147 2.541-2.122 3.56a8.957 8.957 0 01-2.298 1.712c-.918.487-1.888.829-2.893 1.07-.09.023-.137.061-.168.15-.11.308-.227.614-.343.92-.071.187-.143.238-.339.238H8.901z"
  }));
}
DGB.DefaultColor = DefaultColor;
var DGB_default = DGB;
//# sourceMappingURL=DGB.js.map
