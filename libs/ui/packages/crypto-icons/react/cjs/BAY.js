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
  default: () => BAY_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#6356AB";
function BAY({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17.088 11.98c.043-.048.092-.097.141-.146.158-.17.33-.35.493-.525a3.656 3.656 0 001.017-2.527c0-.066.011-.334.011-.372-.076-2.154-1.89-3.91-4.033-3.91h-6.75v2.723H5.25V19.5h9.575c2.128 0 3.925-1.892 3.925-4.134.005-1.603-.985-2.734-1.662-3.386zM9.32 8.59l5.375.006-3.377 3.424 3.34 3.39H9.32V8.59zm5.505 9.538H6.603V8.585h1.365v8.186h6.69c.552 0 1.045-.333 1.256-.847a1.373 1.373 0 00-.293-1.493l-2.386-2.417 2.424-2.456c.39-.394.504-.979.293-1.492a1.356 1.356 0 00-1.257-.848h-5.37V5.862h5.398c1.429 0 2.63 1.165 2.68 2.58 0 .06-.012.296-.012.301v.027a2.29 2.29 0 01-.643 1.592c-.169.175-.342.36-.498.525-.266.279-.493.52-.602.63l-.487.48.482.488c.065.065.146.141.243.234.563.525 1.511 1.4 1.511 2.636.005 1.476-1.196 2.773-2.572 2.773z"
  }));
}
BAY.DefaultColor = DefaultColor;
var BAY_default = BAY;
//# sourceMappingURL=BAY.js.map
