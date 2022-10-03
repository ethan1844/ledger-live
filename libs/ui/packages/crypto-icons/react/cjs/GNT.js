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
  default: () => GNT_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#001D57";
function GNT({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M14.924 4.046l.902.903-1.708 1.755c.36.547.553 1.193.553 1.859a3.335 3.335 0 01-.943 2.348 3.136 3.136 0 01-1.663.92v1.529c.633.13 1.212.45 1.66.915.613.629.953 1.474.947 2.352a3.338 3.338 0 01-.947 2.351 3.196 3.196 0 01-2.303.976 3.179 3.179 0 01-2.302-.976 3.356 3.356 0 01-.946-2.351c0-.885.336-1.724.944-2.35a3.138 3.138 0 011.662-.918v-1.53a3.205 3.205 0 01-1.66-.915 3.355 3.355 0 01-.946-2.352c0-.885.336-1.724.947-2.351a3.197 3.197 0 012.302-.977c.645 0 1.265.196 1.796.561l1.705-1.75zm-3.5 10.542a1.896 1.896 0 00-1.393.593 2.063 2.063 0 00-.582 1.446c0 .544.207 1.051.582 1.445a1.936 1.936 0 002.784 0c.375-.387.584-.906.582-1.445 0-.544-.207-1.052-.584-1.448a1.896 1.896 0 00-1.39-.59zm1.389-4.567c.377-.388.586-.908.583-1.448a2.023 2.023 0 00-.58-1.446 1.934 1.934 0 00-1.393-.593 1.897 1.897 0 00-1.393.593 2.063 2.063 0 00-.58 1.446c0 .543.206 1.051.58 1.445a1.936 1.936 0 002.783.003z"
  }));
}
GNT.DefaultColor = DefaultColor;
var GNT_default = GNT;
//# sourceMappingURL=GNT.js.map
