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
  default: () => GLXT_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#005396";
function GLXT({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9.245 3.45a9.029 9.029 0 015.72.068 9.024 9.024 0 014.309 3.221c.247.33.456.685.657 1.045.233.456.444.926.603 1.412.21.669.367 1.36.416 2.062.026.152.01.306.03.458.008.19.005.379 0 .57-.02.152-.004.307-.03.459a8.771 8.771 0 01-.355 1.863c-.152.501-.348.989-.585 1.456a9.024 9.024 0 01-4.058 4.002 8.23 8.23 0 01-1.525.58 8.95 8.95 0 01-2.713.334c-.152-.02-.31-.004-.458-.03a8.83 8.83 0 01-2.013-.4A9.025 9.025 0 013.53 15c-.293-.851-.48-1.741-.503-2.643-.03-.433.003-.868.038-1.3.065-.639.21-1.27.406-1.88a9.03 9.03 0 013.266-4.452 8.98 8.98 0 011.045-.657 9.159 9.159 0 011.463-.62zm1.732 3.247V8.8c-.004.037.03.058.05.084.322.339.647.675.97 1.015a742.146 742.146 0 010-3.2c-.34 0-.68-.003-1.02 0zM6.545 7.785c.077.05.133.125.199.189.694.701 1.391 1.4 2.082 2.106.634.64 1.27 1.278 1.9 1.919-.763.783-1.542 1.553-2.304 2.335L6.594 16.18a.981.981 0 01-.05.037c.899 0 1.799.002 2.699-.004.918-.962 1.842-1.92 2.758-2.883.919.96 1.84 1.921 2.759 2.883.897.006 1.795.002 2.692.004-.137-.11-.245-.247-.373-.367-.643-.65-1.29-1.3-1.932-1.952-.621-.633-1.254-1.258-1.872-1.896.15-.15.29-.306.444-.454 1.176-1.184 2.348-2.374 3.523-3.56.07-.067.13-.147.21-.202-.9 0-1.797-.003-2.695.001-.918.961-1.84 1.92-2.758 2.88-.917-.963-1.84-1.921-2.759-2.88-.897-.002-1.797-.002-2.695-.002zm5.458 6.311c0 1.07.003 2.139-.002 3.21.341-.003.683 0 1.022 0v-2.105a.07.07 0 00-.024-.06c-.172-.188-.355-.363-.525-.55-.155-.168-.32-.322-.47-.495z"
  }));
}
GLXT.DefaultColor = DefaultColor;
var GLXT_default = GLXT;
//# sourceMappingURL=GLXT.js.map
