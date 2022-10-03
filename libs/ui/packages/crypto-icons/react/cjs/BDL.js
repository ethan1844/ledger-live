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
  default: () => BDL_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#fff";
function BDL({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M6.996 6.463c-.015-.11.088-.176.148-.252.745-.737 1.487-1.478 2.226-2.223-.01 2.037.006 4.074-.009 6.11 1.537-.847 3.473-.884 5.053-.125-.002.131-.002.261-.002.393-1.26-.678-2.811-.764-4.156-.292-1.547.533-2.78 1.843-3.262 3.402.002-2.339-.001-4.676.002-7.013zm10.043 8.746a4.99 4.99 0 01-1.423 3.304 5.023 5.023 0 01-6.378.682 5.023 5.023 0 01-2.158-3.222 4.994 4.994 0 01.376-3.09 5.03 5.03 0 016.954-2.295 228.28 228.28 0 000 3.362c-.223-.463-.555-.877-.993-1.151-.868-.56-2.074-.534-2.912.073-.922.635-1.339 1.893-.972 2.951.328 1.044 1.365 1.81 2.462 1.797 1.054.027 2.072-.663 2.45-1.646.24-.557.18-1.173.184-1.762.005-3.041-.007-6.083-.005-9.123 0-.383.007-.765-.016-1.146.818.805 1.628 1.62 2.438 2.434-.017 2.944 0 5.888-.008 8.833z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.982 6.475c-.015-.11.088-.176.147-.251.746-.738 1.488-1.48 2.226-2.224-.01 2.037.006 4.074-.008 6.11 1.537-.847 3.473-.884 5.052-.125l-.001.394c-1.261-.678-2.811-.765-4.156-.293-1.547.533-2.78 1.843-3.263 3.402.003-2.338 0-4.675.003-7.013zm10.042 8.746a4.99 4.99 0 01-1.423 3.304 5.023 5.023 0 01-6.377.683 5.023 5.023 0 01-2.158-3.222 4.994 4.994 0 01.375-3.09 5.03 5.03 0 016.954-2.295 228.28 228.28 0 00.001 3.361c-.223-.463-.555-.877-.994-1.151-.867-.56-2.073-.534-2.911.073-.923.635-1.339 1.893-.972 2.952.328 1.043 1.365 1.809 2.461 1.797 1.055.026 2.073-.663 2.45-1.647.24-.557.18-1.173.185-1.762.005-3.041-.007-6.083-.006-9.123 0-.383.008-.765-.015-1.146.818.805 1.628 1.62 2.438 2.434-.017 2.944 0 5.888-.008 8.833z"
  }));
}
BDL.DefaultColor = DefaultColor;
var BDL_default = BDL;
//# sourceMappingURL=BDL.js.map
