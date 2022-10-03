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
  default: () => OOT_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#25AAE1";
function OOT({
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
    d: "M12.26 18.745c-1.23.013-2.263-.209-3.236-.693-.06-.03-.105-.031-.165.003a5.387 5.387 0 01-1.914.646c-.288.038-.579.078-.868.019a1.024 1.024 0 01-.56-1.695c.343-.39.601-.849.757-1.345a.161.161 0 00-.02-.15 6.43 6.43 0 01-.958-2.788c-.22-2.192.461-4.07 2.033-5.608a6.437 6.437 0 013.647-1.803c1.903-.278 3.637.161 5.16 1.34 1.359 1.054 2.205 2.44 2.5 4.134.373 2.144-.168 4.053-1.605 5.685-1.063 1.206-2.413 1.922-4.002 2.177-.301.048-.607.062-.77.078zm-4.823-1.791c.05-.014.078-.021.105-.03a4.56 4.56 0 001.196-.613c.264-.186.524-.195.802-.036a4.86 4.86 0 001.923.628c1.116.119 2.168-.093 3.11-.698 1.627-1.044 2.437-2.547 2.349-4.493-.056-1.247-.545-2.323-1.429-3.2-1.066-1.056-2.362-1.537-3.865-1.434-1.012.07-1.927.419-2.706 1.07-1.51 1.26-2.093 2.875-1.758 4.812.11.637.363 1.222.722 1.762a.825.825 0 01.128.674 6.123 6.123 0 01-.36 1.087c-.067.153-.139.302-.216.47zm4.569-7.81l.427.868c.15.308.305.615.45.926.038.08.088.11.172.12.63.088 1.26.18 1.888.271l.07.015c-.115.12-.223.237-.337.348-.355.347-.711.693-1.07 1.036-.062.06-.087.116-.07.209.112.632.217 1.266.324 1.9.002.015.002.032.004.062-.034-.013-.06-.021-.085-.034-.556-.293-1.113-.586-1.668-.884-.075-.04-.133-.044-.211-.002-.558.298-1.118.591-1.679.885-.022.013-.046.023-.09.044.028-.17.052-.323.078-.474.089-.512.177-1.024.27-1.535.014-.075-.028-.11-.07-.151-.447-.44-.894-.877-1.343-1.314-.025-.026-.061-.04-.093-.06l.024-.036.687-.099c.432-.061.863-.124 1.296-.183.069-.01.1-.047.129-.105.282-.577.568-1.152.852-1.728.01-.02.023-.04.045-.078z"
  }));
}
OOT.DefaultColor = DefaultColor;
var OOT_default = OOT;
//# sourceMappingURL=OOT.js.map
