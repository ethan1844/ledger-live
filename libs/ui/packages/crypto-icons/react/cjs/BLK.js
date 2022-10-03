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
  default: () => BLK_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#181818";
function BLK({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M16.95 8.348a2.852 2.852 0 01-1.827 2.799s.76-.75.724-2.673C15.811 6.552 14.4 5.602 14.4 5.602s2.515.56 2.55 2.745zM8.577 18.614L6 18.741v-.24s1.577-.163 1.577-2.993v-7.23C7.577 5.882 6 5.468 6 5.468V5.25l2.577.126v13.238zm4.12.135c-1.122.01-3.202-.147-3.202-.147V5.395c1.371-.019 1.85-.208 2.98-.045 1.13.162 2.1 1.29 2.366 2.42.264 1.128-.018 2.203-.38 2.79-.362.586-1.156.993-1.156.993s1.2.416 1.624.776c.424.362 1.245 1.346.927 3.486-.318 2.14-2.04 2.925-3.16 2.934zm2.978-.487s1.222-1.065 1.168-3.226c-.054-2.16-1.168-3.176-1.168-3.176s2.299.577 2.325 3.151c.026 2.574-2.325 3.252-2.325 3.252v-.001zm-2.325-7.75c.823-1.096.564-3.158-.433-3.863-.998-.705-2.048-.353-2.25-.154-.204.199-.195 4.823-.195 4.823s2.053.29 2.877-.807zm.152 1.968c-.771-.343-3.03-.253-3.03-.253s-.035 1.167.047 3.353c.082 2.185.812 2.173 1.571 2.203.76.03 2.207-.024 2.683-1.908.477-1.884-.5-3.052-1.271-3.395z"
  }));
}
BLK.DefaultColor = DefaultColor;
var BLK_default = BLK;
//# sourceMappingURL=BLK.js.map
