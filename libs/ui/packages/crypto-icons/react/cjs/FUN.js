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
  default: () => FUN_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#ED1968";
function FUN({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9.594 20.11a7.26 7.26 0 01-2.625-1.35 8.671 8.671 0 01-1.95-2.1 8.423 8.423 0 01-1.2-2.775 8.325 8.325 0 010-3.6 9.833 9.833 0 011.125-2.85 7.74 7.74 0 013.15-2.85 8.13 8.13 0 011.425-.6c.75.9 1.5 1.875 2.25 2.85.075.15.225.225.3.375a5.775 5.775 0 00-2.175.525A5.13 5.13 0 008.319 9.01a6.316 6.316 0 00-.975 1.875c-.2.816-.174 1.672.075 2.475l3.225-2.55c.75.975 1.5 1.875 2.25 2.85-1.05.825-2.175 1.65-3.225 2.55 1.05 1.35 2.175 2.775 3.225 4.2a8.01 8.01 0 01-3.3-.3zm7.147-9.086a4.627 4.627 0 00-.097-.364c-.101.08-2.332 1.785-3.225 2.55-.75-.975-1.5-1.875-2.25-2.85 1.05-.825 2.175-1.65 3.225-2.55-1.05-1.35-2.1-2.7-3.225-4.125 0-.075-.075-.075-.075-.15h1.05a8.25 8.25 0 015.25 1.95 8.1 8.1 0 011.8 2.1c.56.859.919 1.833 1.05 2.85a9.262 9.262 0 01-.075 3.525 7.41 7.41 0 01-1.2 2.7 8.048 8.048 0 01-1.875 2.025 6.577 6.577 0 01-2.475 1.35 52.319 52.319 0 01-1.875-2.4 5.718 5.718 0 01-.6-.825 4.62 4.62 0 003.675-1.8 4.853 4.853 0 00.9-1.875c.14-.57.147-1.273.022-2.11zm-3.542 6.28c.518.708 1.056 1.4 1.613 2.078a6.104 6.104 0 001.94-1.144 7.535 7.535 0 001.759-1.905 6.843 6.843 0 001.108-2.492 8.756 8.756 0 00.068-3.334 6.293 6.293 0 00-.976-2.634 7.547 7.547 0 00-1.68-1.958 7.685 7.685 0 00-4.82-1.817c.695.885 1.4 1.787 2.627 3.367l.33.423-.408.349a42.24 42.24 0 01-1.633 1.32c-.053.042-.69.531-1.169.902.197.251.426.537.775.975.345.431.574.718.771.97.348-.288.728-.59 1.183-.942.073-.057 1.272-.98 1.61-1.245l.642-.504.242.78c.28.898.31 1.856.085 2.77a5.41 5.41 0 01-1.001 2.09 5.182 5.182 0 01-3.093 1.92l.027.031z"
  }));
}
FUN.DefaultColor = DefaultColor;
var FUN_default = FUN;
//# sourceMappingURL=FUN.js.map
