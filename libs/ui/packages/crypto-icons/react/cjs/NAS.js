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
  default: () => NAS_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#222";
function NAS({
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
    d: "M9.547 13.991l2.36 4.787 1.212-3.58-3.57-1.207h-.002zm-4.314-2.076l3.573 1.212 1.213-3.577-4.786 2.364zm4.523 1.518c.056.03.08.047.106.056 1.152.392 2.302.786 3.457 1.168.094.03.227.005.32-.04 1.32-.645 2.637-1.296 3.954-1.947.375-.185.749-.372 1.158-.576-.09-.035-.137-.054-.186-.07-1.115-.38-2.23-.76-3.349-1.129a.523.523 0 00-.358.023c-1.404.682-2.803 1.376-4.202 2.067l-.9.447zm4.874-3.05c-.847-1.72-1.684-3.415-2.542-5.155l-2.61 7.7 5.152-2.544zM3.75 12.003c.82-.406 1.595-.792 2.37-1.174 1.319-.65 2.637-1.301 3.958-1.947a.49.49 0 00.273-.31c.516-1.54 1.04-3.077 1.561-4.615.02-.057.043-.112.079-.206.053.102.091.174.127.247 1.01 2.047 2.016 4.095 3.034 6.138.049.099.18.181.291.22 1.527.526 3.057 1.043 4.586 1.563l.221.078c-.141.072-.245.126-.35.178-1.971.973-3.941 1.948-5.915 2.914a.66.66 0 00-.37.424c-.51 1.525-1.031 3.046-1.55 4.569-.014.041-.031.082-.065.169-.133-.266-.248-.494-.36-.721-.918-1.862-1.837-3.723-2.75-5.588a.538.538 0 00-.34-.304c-1.532-.512-3.06-1.035-4.59-1.555-.055-.019-.11-.042-.21-.08z"
  }));
}
NAS.DefaultColor = DefaultColor;
var NAS_default = NAS;
//# sourceMappingURL=NAS.js.map
