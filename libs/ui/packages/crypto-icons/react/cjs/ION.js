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
  default: () => ION_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#57BEEA";
function ION({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M6.02 14.257a2.036 2.036 0 01-2.27-2.025 2.034 2.034 0 012.012-2.039c.72-3.307 3.652-5.783 7.159-5.783.655 0 1.29.086 1.894.247a2.025 2.025 0 013.125-.308c.38.382.594.9.592 1.44 0 .351-.088.682-.244.97a7.357 7.357 0 011.962 5.014 7.358 7.358 0 01-2.178 5.24c.245.335.389.75.389 1.198a2.033 2.033 0 01-2.03 2.039 2.03 2.03 0 01-1.89-1.293c-.53.12-1.074.18-1.62.18-3.18 0-5.887-2.035-6.901-4.88zm.367-.079c.975 2.676 3.533 4.586 6.534 4.586.521 0 1.029-.058 1.517-.166a2.032 2.032 0 013.388-1.867 6.986 6.986 0 002.053-4.958 6.978 6.978 0 00-1.804-4.694 2.02 2.02 0 01-3.008.15 2.035 2.035 0 01-.593-1.44c0-.281.057-.549.16-.792a6.94 6.94 0 00-1.713-.213c-3.312 0-6.084 2.325-6.785 5.44a2.036 2.036 0 011.672 2.008 2.039 2.039 0 01-1.422 1.946h.001zm6.534-.363a2.036 2.036 0 01-2.031-2.041c0-1.128.909-2.041 2.031-2.041s2.032.913 2.032 2.04a2.038 2.038 0 01-2.032 2.042z"
  }));
}
ION.DefaultColor = DefaultColor;
var ION_default = ION;
//# sourceMappingURL=ION.js.map
