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
  default: () => SAN_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#2B77B3";
function SAN({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M20.25 12.03c-.035 4.58-3.748 8.254-8.308 8.22-4.564-.034-8.229-3.763-8.192-8.334.037-4.528 3.76-8.196 8.287-8.166 4.56.031 8.246 3.747 8.213 8.28zm-15.903-.027c.008 4.215 3.418 7.618 7.642 7.628 4.227.007 7.677-3.419 7.662-7.638-.015-4.395-3.656-7.71-7.846-7.638-4.052.069-7.466 3.513-7.458 7.648zm9.664-3.582l-.305.977c-.569-.094-1.095-.206-1.629-.258-.316-.03-.645.052-.767.408-.126.365-.141.754.161 1.036.31.29.675.518 1.016.774.313.236.657.441.93.717.74.747.871 1.653.568 2.63-.18.578-.61.944-1.159 1.166-.84.34-2.27.173-3.073-.367l.352-1.023c.512.135.98.297 1.461.373.46.073.94.002 1.176-.466.237-.473.162-.97-.21-1.35-.286-.292-.645-.515-.98-.759-.224-.162-.474-.29-.691-.459a2.353 2.353 0 01-.716-2.835 1.557 1.557 0 011.102-.923c.941-.223 1.854-.122 2.764.36zm-6.06 3.443a.952.952 0 01-.943.952.976.976 0 01-.962-.978.971.971 0 01.971-.933.945.945 0 01.934.959zm9.07-.932c.523-.001.913.385.92.912a.95.95 0 01-.957.972.955.955 0 01-.94-.958c0-.55.398-.926.976-.926z"
  }));
}
SAN.DefaultColor = DefaultColor;
var SAN_default = SAN;
//# sourceMappingURL=SAN.js.map
