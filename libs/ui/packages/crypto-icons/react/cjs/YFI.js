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
  default: () => YFI_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#006AE3";
function YFI({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M11.408 16.77V7.315h1.029v9.455h-1.03z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.648 10.465l-3.18.843-.709-3.3.945-.213.373 1.563s.86-1.408-.286-2.868c-.675-.75-.995-.781-1.752-.9-.666-.095-2.214.13-2.675 1.937-.195 1.164.024 2.025 1.524 3.152l-.083 1.255s-1.675-1.18-2.107-2.007c-.334-.655-.908-1.948.127-3.748.557-.9 1.655-1.763 3.589-1.672.972.04 3.347 1.23 2.979 4.006-.064.52-.334 1.214-.334 1.214l1.305-.29.284 1.028zm-1.816 7.398c-.582.885-1.703 1.718-3.632 1.578-.973-.066-3.314-1.319-2.873-4.085.078-.517.366-1.202.366-1.202l-1.311.255-.257-1.034 3.203-.76.622 3.319-.952.189-.332-1.575s-.896 1.383.21 2.874c.653.768.972.808 1.729.945.661.114 2.215-.072 2.724-1.865.226-1.157.027-2.025-1.44-3.193l.118-1.253s1.643 1.223 2.052 2.062c.314.666.852 1.975-.227 3.745z"
  }));
}
YFI.DefaultColor = DefaultColor;
var YFI_default = YFI;
//# sourceMappingURL=YFI.js.map
