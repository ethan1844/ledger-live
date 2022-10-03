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
  default: () => CRPT_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#00BDCD";
function CRPT({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M16.75 7.308a5.823 5.823 0 00-3.794-1.385c-3.146 0-5.737 2.488-5.953 5.668h-.617c.216-3.558 3.085-6.298 6.57-6.298 1.543 0 3.023.567 4.226 1.575l-.432.44zm-.216 2.078a4.397 4.397 0 00-3.578-1.857c-2.436 0-4.41 2.015-4.41 4.471 0 2.487 1.974 4.503 4.41 4.503 1.414 0 2.744-.69 3.578-1.858l.433.44c-.957 1.291-2.438 2.048-4.01 2.048-2.777 0-5.029-2.3-5.029-5.133 0-2.802 2.252-5.101 5.028-5.101a4.991 4.991 0 014.01 2.047l-.432.44zm.71-1.605l.432-.441c.154.157.277.314.4.472l-.431.44a5.521 5.521 0 00-.402-.472zm-4.319 10.957c-3.485 0-6.354-2.739-6.57-6.297h.617c.216 3.18 2.807 5.668 5.953 5.668a5.824 5.824 0 003.794-1.386l.432.44a6.516 6.516 0 01-4.226 1.576v-.001zm4.318-2.487c.155-.158.278-.315.402-.473l.431.44c-.123.158-.246.316-.4.473l-.433-.44zM5.493 12c0 4.188 3.36 7.62 7.463 7.62 2.221 0 4.318-.976 5.738-2.77l.431.44c-1.542 1.89-3.763 2.96-6.169 2.96-4.472 0-8.081-3.716-8.081-8.25 0-4.566 3.64-8.25 8.081-8.25 2.374 0 4.628 1.07 6.169 2.96l-.432.441c-1.419-1.763-3.516-2.771-5.738-2.771-4.102 0-7.463 3.432-7.463 7.62z"
  }));
}
CRPT.DefaultColor = DefaultColor;
var CRPT_default = CRPT;
//# sourceMappingURL=CRPT.js.map
