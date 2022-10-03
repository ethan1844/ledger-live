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
  default: () => MNZ_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#7F368A";
function MNZ({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M19.177 16.558c.049.197-.148.296-.296.247h-2.458c-.148 0-.246-.05-.345-.1-.147-.049-.245-.245-.295-.442v-.05L13.472 7.69c-.05 0-.197.147-.246.147-.05.05-.148.099-.197.05-.098-.05-.148-.197-.098-.296.097-.246.344-.395.59-.444.295-.05.54-.05.835-.05h1.82c.148 0 .296 0 .443.05.148.099.197.296.246.444.098.345.147.69.246 1.035l1.18 4.435.442 1.774c.148.542.345 1.134.443 1.725zm-5.705 0c.049.197-.148.296-.295.247h-2.46c-.147 0-.245-.05-.345-.1-.146-.049-.245-.245-.294-.442v-.05L7.767 7.69c-.05 0-.197.147-.246.147-.05.05-.148.099-.197.05-.098-.05-.147-.197-.098-.296.098-.246.344-.395.59-.444.295-.05.54-.05.836-.05h1.82c.147 0 .295 0 .442.05.148.099.197.296.246.444.098.345.148.69.246 1.035l1.18 4.435.443 1.774c.148.542.344 1.134.443 1.725zm-4.525-1.873l-.59 1.873a.472.472 0 01-.443.345H5.308a.493.493 0 01-.492-.493v-.099L6.88 8.526c.05-.1.148-.198.246-.198.148 0 .246.099.246.198l1.574 6.16zm5.803-.147l-.344 1.035c-.05.098-.098.147-.197.147-.098 0-.147-.05-.197-.147L12.291 9.56l.345-1.232c0-.099.098-.147.197-.147.097 0 .196.048.196.147l1.721 6.21z"
  }));
}
MNZ.DefaultColor = DefaultColor;
var MNZ_default = MNZ;
//# sourceMappingURL=MNZ.js.map
