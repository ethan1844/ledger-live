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
  default: () => CNX_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#4C6BAE";
function CNX({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    opacity: 0.5,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.787 12.758l-1.037.107c.555-1.553 1.652-2.795 3.293-3.726.155 1.287.765 2.351 1.83 3.194l-.975.101a4.127 4.127 0 003.415 3.634 4.562 4.562 0 01-2.24.889c.51.9 1.115 1.637 1.813 2.21a7.255 7.255 0 01-6.099-6.41zm14.426-1.515l1.037-.108c-.555 1.553-1.652 2.795-3.293 3.726-.155-1.287-.765-2.351-1.83-3.194l.975-.101a4.127 4.127 0 00-3.47-3.643 4.564 4.564 0 012.23-.88c-.516-.907-1.125-1.647-1.83-2.222a7.255 7.255 0 016.18 6.421z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.691 19.22l.108 1.03c-1.553-.555-2.795-1.652-3.726-3.293 1.286-.155 2.35-.765 3.193-1.83l.102.982a4.127 4.127 0 003.709-3.477c.486.652.79 1.421.88 2.23.906-.516 1.647-1.125 2.222-1.83a7.255 7.255 0 01-6.487 6.188zM11.242 4.787l-.107-1.037c1.553.555 2.795 1.652 3.726 3.293-1.287.155-2.351.765-3.194 1.83l-.101-.975a4.127 4.127 0 00-3.643 3.47 4.563 4.563 0 01-.88-2.23c-.907.516-1.647 1.125-2.222 1.83a7.256 7.256 0 016.421-6.18z"
  }));
}
CNX.DefaultColor = DefaultColor;
var CNX_default = CNX;
//# sourceMappingURL=CNX.js.map
