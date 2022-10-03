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
  default: () => SLR_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#FDA616";
function SLR({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9.316 16.5c.087.273 1.173 1.398 2.303 1.398 1.676 0 2.655-1.011 2.655-2.473 0-1.355-.678-2.129-2.391-2.882-2.071-.838-3.351-2.065-3.351-4.108 0-2.257 1.638-3.935 4.104-3.935 1.299 0 2.615.817 3.052 1.364l-1.048 1.09c-.414-.257-.912-.906-2.06-.906-1.732 0-2.392 1.183-2.392 2.172 0 1.355.773 2.022 2.523 2.796 2.146.947 3.238 2.13 3.238 4.258 0 2.237-1.458 4.226-4.451 4.226-1.224 0-2.531-.817-3.317-1.818L9.316 16.5zm1.396-7.727c-.262-.546-.087-1.09-.087-1.09 6.633-1.092 5.411 5.362 5.411 5.362-.523-1-1.047-1.181-1.047-1.181.087-3.728-4.277-3.091-4.277-3.091zm2.968 5.909c.262.637-.04 1.299-.04 1.299-7.553.973-5.513-5.932-5.515-5.932.4 1.06.898 1.308.898 1.308-.142 4.325 4.657 3.325 4.657 3.325z"
  }));
}
SLR.DefaultColor = DefaultColor;
var SLR_default = SLR;
//# sourceMappingURL=SLR.js.map
