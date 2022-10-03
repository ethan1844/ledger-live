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
  default: () => BCBC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#004AB5";
function BCBC({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9.362 5.845a6.566 6.566 0 108.062 9.32l-5.746-3.176 2.331-6.139a6.566 6.566 0 00-4.647-.005zm.41 1.18a5.317 5.317 0 013.763.004L11.647 12l4.653 2.573a5.317 5.317 0 11-6.529-7.547zm2.201-3.29a8.27 8.27 0 012.61.533L11.647 12 18.885 16a8.272 8.272 0 11-6.912-12.266zm5.647 2.86c.198 0 .383.023.552.07.5.138.837.448 1.012.931.108.294.131.582.071.864a1.54 1.54 0 01-.39.758 1.68 1.68 0 011.013.256c.288.182.5.46.636.834.192.53.134 1.013-.175 1.451-.306.43-.853.79-1.641 1.076l-3.123 1.137-2.198-6.04 2.95-1.074c.483-.175.914-.264 1.293-.264zm-.457 1.249c-.18 0-.388.043-.625.13l-1.39.505.518 1.424 1.39-.506c.345-.125.585-.28.718-.466.136-.186.16-.397.073-.633-.085-.235-.238-.378-.459-.429a.915.915 0 00-.226-.025zm1.171 2.341c-.189.003-.411.05-.666.143l-1.63.593.543 1.493 1.63-.594c.367-.134.623-.294.762-.482.146-.19.172-.411.081-.665-.12-.328-.36-.49-.72-.488z"
  }));
}
BCBC.DefaultColor = DefaultColor;
var BCBC_default = BCBC;
//# sourceMappingURL=BCBC.js.map
