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
  default: () => EON_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#443F54";
function EON({
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
    d: "M12.53 3.508c1.108 1.615 3.647 5.306 3.647 5.306v.001c.116.163.174.268.179.384l.006-.015s1.107 5.261 1.615 7.615c.092.323 0 .508-.323.692-1.604.946-4.672 2.88-5.323 3.291a.498.498 0 01-.308.126c-.06 0-.16-.02-.235-.06l.004.012s-3.647-2.307-5.447-3.369c-.322-.184-.414-.37-.322-.692.554-2.354 1.661-7.661 1.661-7.661l.009.028c.014-.104.071-.203.176-.35 0 0 2.538-3.74 3.646-5.308.185-.277.37-.416.508-.416.139 0 .277.138.508.416zm-4.523 6.65a276.758 276.758 0 00-1.476 6.641c0 .093 0 .231.184.37.34.237.703.45 1.056.655l.375.221 1.89 1.15 1.427.868a192.89 192.89 0 00-1.101-3.217c-.595-1.783-1.877-5.361-2.355-6.689zm4.599 9.862a3062.01 3062.01 0 013.248-1.975c.124-.075.252-.15.38-.225.351-.204.713-.416 1.05-.652.185-.138.185-.276.185-.369-.456-2.14-.956-4.46-1.457-6.562a649.666 649.666 0 00-2.328 6.61c-.218.686-.754 2.24-1.078 3.173zM8.61 9.46c1.131 3.264 2.268 6.526 3.412 9.785.935-2.765 2.873-8.465 3.321-9.785H8.611zm.062-.507c.563-.824 2.481-3.632 3.304-4.847.822 1.215 2.74 4.023 3.303 4.847H8.674z"
  }));
}
EON.DefaultColor = DefaultColor;
var EON_default = EON;
//# sourceMappingURL=EON.js.map
