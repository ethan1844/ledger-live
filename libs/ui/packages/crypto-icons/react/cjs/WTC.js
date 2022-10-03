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
  default: () => WTC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#fff";
function WTC({
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
    d: "M13.81 9.874L13.3 10c-.46.112-.783.517-.783.982v3.404l-1.685.412a.517.517 0 01-.642-.492V8.64a.51.51 0 01.392-.492l2.586-.633a.517.517 0 01.642.491v1.868zm-5.689-.031L7.482 10c-.46.112-.784.517-.784.982v3.435l-1.555.381a.517.517 0 01-.643-.492V8.64a.51.51 0 01.391-.492l2.587-.633a.518.518 0 01.642.491v1.838l.001-.001zm8.15-1.68l2.586-.632a.517.517 0 01.643.491v5.667a.508.508 0 01-.392.491l-2.586.633a.517.517 0 01-.642-.491V8.655c0-.233.161-.435.391-.491z"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: 0.504,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.673 9.986v4.32c0 .083.01.165.03.246a1.035 1.035 0 001.133.76v.704a.508.508 0 01-.392.492l-2.585.633a.518.518 0 01-.628-.369.498.498 0 01-.015-.123v-5.667c0-.232.161-.435.391-.491l2.066-.505zm5.69.031v4.305c0 .083.01.165.03.246.139.542.7.872 1.255.737l.007-.002v.712a.51.51 0 01-.391.492l-2.587.633a.518.518 0 01-.627-.368.5.5 0 01-.015-.123v-5.667c0-.232.161-.435.392-.491l1.934-.474h.001z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.81 9.547l-.51.125c-.46.112-.783.517-.783.982v3.404l-1.685.412a.517.517 0 01-.642-.492V8.312a.51.51 0 01.392-.492l2.586-.633a.517.517 0 01.642.491v1.869zm-5.689-.032l-.639.157c-.46.112-.784.517-.784.982v3.435l-1.555.381a.517.517 0 01-.643-.492V8.312a.51.51 0 01.391-.492l2.587-.633a.518.518 0 01.642.491v1.838h.001zm8.15-1.68l2.586-.632a.517.517 0 01.643.491v5.667a.508.508 0 01-.392.491l-2.586.633a.517.517 0 01-.642-.49V8.326c0-.232.161-.435.391-.491z"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: 0.504,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.673 9.658v4.32c0 .083.01.165.03.246a1.035 1.035 0 001.133.76v.704a.508.508 0 01-.392.492l-2.585.633a.518.518 0 01-.628-.369.497.497 0 01-.015-.123v-5.667c0-.232.161-.435.391-.49l2.066-.506zm5.69.031v4.305c0 .083.01.165.03.246.139.542.7.872 1.255.737l.007-.002v.713a.51.51 0 01-.391.492l-2.587.633a.517.517 0 01-.642-.492v-5.667c0-.232.161-.435.392-.49l1.934-.475h.001z"
  }));
}
WTC.DefaultColor = DefaultColor;
var WTC_default = WTC;
//# sourceMappingURL=WTC.js.map
