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
  default: () => XMCC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#fff";
function XMCC({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17.012 5.25h-3.87L11.99 7.239 10.844 5.25H6.973L3 12.131l3.847 6.66 2.607-4.514L12 18.672l2.538-4.395 2.614 4.545L21 12.162 17.012 5.25zM6.842 16.158l-2.327-4.025 1.85-3.203 2.325 4.027-1.85 3.205v-.004h.002zm.288-8.552l.613-1.065h2.318l1.166 2.02-1.773 3.074L7.13 7.606zm4.86 8.425l-1.772-3.077 1.773-3.073.792 1.369.982 1.705-1.774 3.072-.002.004zm.762-7.47l1.169-2.02h2.318l.621 1.065-2.34 4.029-1.768-3.075zm5.976 4.902l-1.57 2.723-1.866-3.24 2.325-4.019.627 1.08 1.24 2.148-.756 1.308z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.012 5.214h-3.87L11.99 7.203l-1.147-1.989H6.973L3 12.095l3.847 6.66 2.607-4.514L12 18.636l2.538-4.395 2.614 4.545L21 12.126l-3.988-6.912zM6.842 16.122l-2.327-4.024 1.85-3.205 2.325 4.028-1.85 3.205v-.004h.002zM7.13 7.57l.613-1.065h2.318l1.166 2.02-1.773 3.074L7.13 7.57zm4.86 8.425l-1.772-3.077 1.773-3.073.792 1.369.982 1.705-1.774 3.072-.002.004zm.762-7.47l1.169-2.02h2.318l.621 1.065-2.34 4.029-1.768-3.075zm5.976 4.902l-1.57 2.724-1.866-3.24 2.325-4.02.627 1.08 1.24 2.147-.756 1.31z"
  }));
}
XMCC.DefaultColor = DefaultColor;
var XMCC_default = XMCC;
//# sourceMappingURL=XMCC.js.map
