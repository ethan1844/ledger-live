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
  default: () => BCH_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#85BB65";
function BCH({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M15.866 7.914c-.582-1.48-2.041-1.613-3.74-1.283l-.606-2.11-1.284.369.59 2.055c-.338.096-.681.202-1.023.307l-.592-2.068-1.283.367.603 2.11c-.276.085-.547.17-.813.246l-.003-.008-1.771.508.394 1.373s.943-.291.932-.269c.52-.15.776.104.9.351l.69 2.403c.035-.01.082-.022.138-.03l-.136.04.965 3.367c.024.17.003.459-.36.564.02.01-.934.267-.934.267l.185 1.607 1.671-.48c.311-.088.619-.17.92-.255l.612 2.134 1.283-.368L12.599 17c.344-.091.687-.186 1.029-.285l.601 2.102 1.285-.368-.61-2.13c2.123-.743 3.478-1.72 3.084-3.803-.316-1.675-1.293-2.184-2.603-2.127.636-.592.91-1.393.481-2.475zm-.487 5.077c.457 1.595-2.325 2.197-3.195 2.447l-.81-2.827c.87-.25 3.527-1.283 4.004.38zm-1.742-3.817c.416 1.45-1.91 1.935-2.635 2.142l-.735-2.564c.724-.208 2.936-1.091 3.37.422z"
  }));
}
BCH.DefaultColor = DefaultColor;
var BCH_default = BCH;
//# sourceMappingURL=BCH.js.map
