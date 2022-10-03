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
  default: () => ITC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#102044";
function ITC({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18.04 14.512a.863.863 0 01-.291 1.675.877.877 0 01-.433-.105l-4.523 2.468a.871.871 0 01-1.472.71.87.87 0 01-.27-.608l-2.205-1.263h-.05v-.026l-2.324-1.328a.866.866 0 01-.493.153.87.87 0 01-.866-.745.865.865 0 01.624-.953V9.528a.868.868 0 01-.63-.76.865.865 0 01.494-.853.877.877 0 01.98.155l4.477-2.565A.87.87 0 0111.92 4.5a.87.87 0 01.853 1.05l4.371 2.503a.867.867 0 01.584-.223.864.864 0 11.312 1.675v5.008zm-3.088-1.953v4.262l2.004-1.093a.87.87 0 01.598-1.255V9.545a.87.87 0 01-.669-1.086l-1.9-1.089v3.963h-.002l-.008.26-.107.05-.685.41.655.39.104.049.003.046.004.02h.003zm-3.03-6.327a.874.874 0 01-.652-.29L9.283 7.08v4.209l.816.486 1.03-.606a.769.769 0 011.08-.844.77.77 0 01.441.814l1.064.633.79-.473V7.093l-1.961-1.122a.868.868 0 01-.621.26zm.51 6.316l.812-.489-.816-.487a.776.776 0 01-1.064.018l-.802.465.799.477a.776.776 0 011.07.016zm-5.646 3.11l2.01 1.152v-4.119l.004-.132.033-.034.168-.1.624-.366-.564-.333-.261-.133v-.16h-.003V7.357l-1.971 1.13c.116.45-.15.91-.6 1.038v4.968a.873.873 0 01.542.458c.107.223.114.48.018.707zm5.136 2.095c.273 0 .53.128.694.347l1.853-1.013v-4.302l-.755-.45-1.065.64a.769.769 0 01-1.087.807.768.768 0 01-.432-.83l-1.045-.62-.805.47v4.285l1.893 1.085a.87.87 0 01.749-.419z"
  }));
}
ITC.DefaultColor = DefaultColor;
var ITC_default = ITC;
//# sourceMappingURL=ITC.js.map
