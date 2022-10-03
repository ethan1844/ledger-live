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
  default: () => GABI_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#000";
function GABI({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22.56c5.832 0 10.56-4.728 10.56-10.56 0-5.832-4.728-10.56-10.56-10.56-3.549 0-6.689 1.75-8.604 4.435h3.908a.845.845 0 010 1.69h-4.89c-.19.409-.354.832-.49 1.267h11.591a.845.845 0 110 1.69H1.542c-.064.459-.099.927-.102 1.404h4.124a.845.845 0 010 1.69H1.562c.07.457.17.905.297 1.34h11.656a.845.845 0 110 1.69h-11c.249.51.538.995.863 1.454h3.926a.845.845 0 110 1.69H4.869A10.522 10.522 0 0012 22.56zm3.835-5.913a.845.845 0 110-1.69.845.845 0 010 1.69zm-.845-6.97a.845.845 0 101.69 0 .845.845 0 00-1.69 0zM8.645 18.95a.845.845 0 101.69 0 .845.845 0 00-1.69 0zM9.49 7.565a.845.845 0 110-1.69.845.845 0 010 1.69zm.037 5.205c0 .467.379.845.845.845h9.502a.845.845 0 100-1.69h-9.502a.845.845 0 00-.845.845zm-1.565.845a.845.845 0 110-1.69.845.845 0 010 1.69z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M23.76 12c0 6.495-5.265 11.76-11.76 11.76S.24 18.495.24 12 5.505.24 12 .24 23.76 5.505 23.76 12z",
    stroke: "#000",
    strokeWidth: 0.48
  }));
}
GABI.DefaultColor = DefaultColor;
var GABI_default = GABI;
//# sourceMappingURL=GABI.js.map
