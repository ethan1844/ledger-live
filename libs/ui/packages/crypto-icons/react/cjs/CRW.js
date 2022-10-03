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
  default: () => CRW_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#0F1529";
function CRW({
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
    d: "M18.625 11.51c-.151.033-.255.053-.356.08-.633.166-1.272.297-1.932.272-.882-.034-1.64-.388-2.307-.96-.27-.232-.521-.487-.779-.733-.125-.119-.155-.254-.06-.408l.244-.396.329.362c.475.526.982 1.006 1.652 1.261.658.25 1.328.214 2 .1.951-.158 1.83-.538 2.69-.965.03-.014.06-.023.144-.056-.057.107-.088.17-.125.23-1.256 2.114-2.514 4.228-3.772 6.34-.155.26-.212.28-.48.148-1.775-.871-3.634-1.037-5.552-.707-.3.052-.354.026-.497-.281-.156-.336-.155-.327.2-.396.988-.193 2-.234 3.001-.122.937.105 1.87.243 2.73.684.123.064.188.01.25-.091.545-.91 1.09-1.821 1.639-2.73.293-.487.592-.97.887-1.455.026-.042.046-.087.094-.177zm-13.24.09c.125.213.251.425.379.636l2.523 4.185c.12.2.12.206-.088.301-.448.206-.392.26-.666-.199-.968-1.623-1.934-3.249-2.9-4.873l-.783-1.316c-.037-.063-.067-.13-.1-.195l.03-.04c.11.05.22.095.33.146.661.31 1.331.598 2.04.773.911.227 1.81.253 2.678-.18.54-.269.985-.666 1.386-1.118.64-.726 1.161-1.54 1.633-2.39l.115-.205c.062.093.102.164.152.225.277.34.211.64-.022.992-.52.783-1.045 1.558-1.738 2.194-.619.569-1.313.998-2.13 1.193-.64.154-1.284.123-1.926.004-.294-.055-.587-.116-.88-.175l-.034.042z"
  }));
}
CRW.DefaultColor = DefaultColor;
var CRW_default = CRW;
//# sourceMappingURL=CRW.js.map
