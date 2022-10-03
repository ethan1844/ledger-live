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
  default: () => XBC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#fff";
function XBC({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M19.483 14.816l-.409 1.637-1.091-.272.408-1.638-1.637-.408.272-1.091 1.637.408.409-1.637 1.091.272-.408 1.637 1.637.408-.272 1.092-1.637-.409zm-4.026-4.496c-.152 1.012-.704 1.505-1.434 1.68.999.527 1.504 1.34 1.011 2.758-.612 1.76-2.044 1.916-3.946 1.56l-.472 1.891-1.115-.277.466-1.868a41.16 41.16 0 01-.888-.23l-.468 1.875-1.113-.277.472-1.896c-.26-.067-.525-.138-.795-.205l-1.451-.362.561-1.307s.821.218.81.202c.317.078.458-.133.514-.273l.745-2.991.119.029a.91.91 0 00-.117-.037l.533-2.136c.015-.242-.065-.547-.518-.66.018-.011-.809-.2-.809-.2l.304-1.219 1.537.384-.001.005c.231.058.47.113.713.168l.467-1.874 1.114.278-.458 1.837c.3.068.6.137.893.21l.455-1.825 1.115.278-.467 1.874c1.407.488 2.434 1.225 2.223 2.608zm-2.57 3.664c.368-1.478-2.056-1.845-2.812-2.034l-.625 2.51c.756.188 3.086.94 3.439-.477h-.002zm.365-3.672c.335-1.345-1.693-1.633-2.322-1.79l-.568 2.278c.63.157 2.569.8 2.89-.488z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.925 15.18l-.41 1.638-1.09-.271.408-1.639-1.638-.407.273-1.092 1.637.408.409-1.637 1.09.272-.407 1.637 1.637.409-.272 1.091-1.637-.408zm-4.026-4.495c-.152 1.013-.704 1.505-1.434 1.68.999.527 1.504 1.34 1.011 2.758-.612 1.76-2.044 1.916-3.946 1.56l-.473 1.892-1.114-.278.466-1.867c-.297-.074-.593-.15-.888-.23l-.468 1.874-1.113-.277.472-1.896c-.26-.067-.525-.137-.795-.205l-1.451-.362.56-1.307s.822.219.81.203c.317.077.458-.134.515-.274l.745-2.991.119.03a.88.88 0 00-.117-.038l.533-2.135c.015-.243-.065-.547-.518-.66.018-.012-.809-.201-.809-.201l.304-1.218 1.537.384-.001.005c.23.058.47.112.712.167l.468-1.873 1.114.277-.458 1.838c.3.067.6.136.892.21l.456-1.825 1.115.277-.467 1.875c1.407.487 2.433 1.224 2.223 2.607zm-2.57 3.664c.368-1.478-2.056-1.845-2.812-2.034l-.625 2.51c.756.188 3.086.94 3.439-.477l-.002.001zm.365-3.672c.335-1.345-1.693-1.633-2.322-1.79l-.568 2.278c.63.158 2.569.8 2.89-.488z"
  }));
}
XBC.DefaultColor = DefaultColor;
var XBC_default = XBC;
//# sourceMappingURL=XBC.js.map
