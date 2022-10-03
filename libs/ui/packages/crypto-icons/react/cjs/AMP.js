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
  default: () => AMP_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#2DAEE4";
function AMP({
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
    d: "M5.852 8.593h.083c.722-.013 1.35-.286 1.882-.818.518-.56.777-1.2.777-1.924a1.3 1.3 0 01.4-.952 1.323 1.323 0 01.971-.399c.368 0 .686.133.951.4.267.266.4.583.4.951s-.127.686-.379.952a1.281 1.281 0 01-.91.42c-.778-.029-1.446.238-2.006.797-.56.56-.825 1.214-.798 1.965.027.777.308 1.425.84 1.944.586.518 1.24.77 1.964.757a1.28 1.28 0 01.91.42c.252.265.378.576.378.93 0 .383-.132.707-.399.973a1.3 1.3 0 01-.95.399c-.383 0-.706-.134-.973-.4a1.322 1.322 0 01-.399-.971 2.565 2.565 0 00-.777-1.883 2.679 2.679 0 00-1.883-.84 1.275 1.275 0 01-.664-.122 1.207 1.207 0 01-.45-.399 1.758 1.758 0 01-.276-1.197c.177-.668.613-1.003 1.308-1.003zm.02 4.093c.354 0 .664.13.93.39.266.258.406.566.42.92-.014.75.245 1.405.777 1.964.532.546 1.173.819 1.924.819h.061c.737 0 1.37-.273 1.903-.819a2.61 2.61 0 00.798-1.965 2.594 2.594 0 00-.84-1.902c-.538-.512-1.164-.772-1.88-.778h-.084a1.284 1.284 0 01-.91-.42 1.334 1.334 0 01-.379-.951c0-.368.134-.686.4-.952.225-.225.493-.355.802-.39l.09-.009.034.001h.107c.705-.008 1.319-.275 1.843-.799.56-.56.833-1.22.818-1.985 0-.3.103-.573.308-.818l.02-.02.02-.022c0-.013.008-.02.02-.02l.022-.02v-.02h.02v-.022c.013 0 .02-.007.02-.02l.02-.02h.042c0-.015.007-.022.02-.022l.02-.02v-.02h.041c0-.014.008-.021.02-.021l.022-.02.02-.02h.02c0-.014.008-.02.021-.02.014 0 .02-.008.02-.022h.02l.02-.02h.042v-.02h.02l.021-.021h.04v-.019h.042l.02-.02h.042l.02-.02h.061l.02-.022h.062c.014 0 .02-.006.02-.02h.43l.01.01c.007.007.017.01.03.01h.042l.01.011c.007.007.017.01.03.01h.042l.02.02h.041l.02.021h.042c.013.013.027.02.04.02l.021.021h.04v.02h.022l.02.02.01.011c.007.008.017.01.03.01l.021.021h.02c0 .013.014.02.041.02l.021.02v.021h.02c0 .014.014.02.042.02 0 .014.006.021.02.021v.021h.02l.021.02c.014.014.027.02.04.02l.02.021c0 .014.008.02.022.02v.021h.02c0 .013.004.024.01.03l.01.011c0 .014.008.02.021.02l.02.02c0 .014.004.025.01.031l.01.011.021.02.021.02v.042l.02.02v.02h.02c0 .014.004.023.011.03l.01.01c0 .014.007.021.02.021v.021c0 .013.004.023.01.03l.011.01.02.02c0 .028.008.042.021.042v.02c0 .014.003.024.01.031l.01.01v.041l.02.021v.061c.014.014.021.027.021.041v.061c.014.014.021.027.021.042v.162c0 .723.259 1.365.777 1.924a2.675 2.675 0 001.904.818c.367-.013.695.113.982.38.286.265.43.589.43.971s-.134.705-.4.972a1.3 1.3 0 01-.952.4 1.334 1.334 0 01-.95-.38 1.305 1.305 0 01-.42-.931c.014-.75-.26-1.412-.818-1.985a2.633 2.633 0 00-1.985-.798 2.678 2.678 0 00-1.883.84 2.563 2.563 0 00-.778 1.882v.063c.015.698.273 1.318.777 1.86a2.67 2.67 0 001.902.82c.49-.028.867.15 1.125.532.26.367.342.757.246 1.166-.19.682-.627 1.023-1.31 1.023h-.06c-.765.027-1.4.307-1.903.84-.52.518-.778 1.152-.778 1.902 0 .368-.133.685-.4.952a1.298 1.298 0 01-.95.399h-.041c-.369 0-.683-.133-.942-.4a1.315 1.315 0 01-.389-.951c0-.75-.259-1.384-.777-1.903a2.679 2.679 0 00-1.882-.839 1.346 1.346 0 01-1.013-.379 1.313 1.313 0 01-.42-.992 1.3 1.3 0 01.4-.952 1.323 1.323 0 01.971-.399v.001z"
  }));
}
AMP.DefaultColor = DefaultColor;
var AMP_default = AMP;
//# sourceMappingURL=AMP.js.map
