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
  default: () => ELF_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#2B5EBB";
function ELF({
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
    d: "M19.5 11.971c0 1.752-1.358 3.119-3.091 3.114-1.698-.006-3.077-1.41-3.068-3.125.009-1.714 1.402-3.112 3.092-3.101 1.724.011 3.068 1.375 3.067 3.112zM6.817 17.94a2.265 2.265 0 01-2.265-2.29c.003-1.28 1.004-2.314 2.262-2.285.361.008.724.143 1.077.253.5.157.99.351 1.49.515.309.102.605.03.879-.14.398-.247.735-.546.95-.984a.873.873 0 011.153-.422c.408.176.62.62.503 1.052-.133.486-.533.747-1.031.66-.442-.078-.88-.22-1.328-.057-.803.291-1.155.956-1.42 1.714-.143.415-.296.85-.554 1.193-.414.552-1.023.794-1.716.79zM6.77 6.06c1.026 0 1.824.6 2.172 1.588.138.39.345.755.522 1.131.438.93 1.535 1.022 2.231.767.616-.225 1.21.171 1.225.81.01.443-.218.765-.633.896a.906.906 0 01-1.007-.377c-.08-.12-.155-.244-.244-.357-.612-.773-1.292-.975-2.213-.629-.32.12-.622.3-.923.467A2.265 2.265 0 014.723 9.34C4.006 7.816 5.101 6.06 6.77 6.06zm7.148 11.931c-.009.84-.694 1.523-1.511 1.508-.79-.015-1.45-.695-1.47-1.46-.022-.866.614-1.57 1.498-1.578.846-.009 1.493.689 1.484 1.53h-.001zM10.945 6.015c0-.85.665-1.523 1.497-1.515.808.007 1.485.7 1.478 1.513-.006.856-.646 1.542-1.49 1.527-.959-.018-1.524-.792-1.485-1.525z"
  }));
}
ELF.DefaultColor = DefaultColor;
var ELF_default = ELF;
//# sourceMappingURL=ELF.js.map
