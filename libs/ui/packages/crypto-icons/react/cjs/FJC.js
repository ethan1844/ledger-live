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
  default: () => FJC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#00AFEC";
function FJC({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M15.23 8.843c.036-.06.07-.138.103-.206A9.028 9.028 0 0016.5 4.205a8.716 8.716 0 00-3.448-1.148c.457 1.996 1.105 3.93 2.042 5.751l.136.035zm-6.171-.341l-.034-.008-.263-.06V8.43h-.004l.237-1.03c.175.037.35.079.523.121h.004a24.393 24.393 0 001.483-4.464 8.983 8.983 0 00-4.436 1.766v.003A9.011 9.011 0 003 11.82V12c.96.553 2.014.925 3.108 1.1l.005-.005a24.83 24.83 0 002.948-4.593h-.002zm5.634 1.518c.197.105.27.255.364.55.13.443.042.91-.05 1.35l1.088.252.27-1.172c1.099 1.691 2.318 3.438 3.797 4.809-.268.61-.435.823-.83 1.358a25.01 25.01 0 00-7.538-1.116l.217-.866-.723-.169a.488.488 0 01-.295-.178c-.084-.112-.084-.26-.056-.393l.453-1.967c.233.056.478.093.697.197a.703.703 0 01.42.478c.059.299-.068.585-.12.872l.974.225.812-3.516-.083-.027-.063-.012c.225-.237.421-.447.624-.703l.042.028zm-8.556 3.306l.023-.033c.189.042.334.027.528.047.692.061 1.364.075 2.053-.023.053-.007.107-.012.16-.015l-.16.614a.545.545 0 01-.186.324.447.447 0 01-.354.061c-.247-.05-.495-.117-.745-.165-.076.342-.158.686-.237 1.026l1.663.385c-.068.31-.085.394-.155.7-1.384.19-2.75.488-4.087.892-.393-.534-.562-.663-.826-1.274.841-.78 1.599-1.648 2.322-2.54zm3.858 2.478l.667.154-.023.132-.711.051.067-.337zm-1.229-2.685c.052-.007.104-.011.156-.013v-.003L9.78 9.39c.034-.168.101-.337.048-.506a.416.416 0 00-.261-.26l-.028-.01c-.142-.037-.033-.01-.178-.044-.015-.004-.087.02-.104.017a24.314 24.314 0 01-2.919 4.535c.189.04.158.029.346.048a9.028 9.028 0 002.081-.05h.001zM10.672 7.785v.003c.133-.558.256-1.117.391-1.674l1.109.255-.386 1.674.664.155c.066-.278.131-.557.195-.836l.097-.419.096-.418 1.108.252-.048.225c-.107.486-.226.966-.333 1.453l1.275.297c-.937-1.822-1.557-3.727-2.014-5.724-.286-.034-.407-.022-.697-.028h-.177c-.318 0-.436-.008-.748.028-.35 1.532-.765 3.14-1.402 4.577l.87.18zm1.471 1.431l.034.008.004-.008h-.038z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.146 9.216l-.514 2.23c.32.07.652.188.98.095a.676.676 0 00.445-.453c.062-.197.093-.4.147-.596l.543.138c.024.004-.004.018.012.002l.013-.01c.225-.242.48-.506.683-.762a3.946 3.946 0 00-1.052-.352l-1.257-.292zm8.078-.877c-.776-1.736-1.883-3.042-3.527-3.995-.002 1.554-.375 2.941-1.139 4.295a3.064 3.064 0 00-.127.26c.515.113.836.182 1.35.297v.005l-.331 1.49c1.096 1.691 2.32 3.553 3.796 4.925A8.972 8.972 0 0021 12.213v-.422a9.04 9.04 0 00-.776-3.453zM3 12.197v.13c.017 1.199.274 2.185.754 3.285a21.578 21.578 0 002.213-2.374c-1.091-.174-2.01-.486-2.967-1.041zm8.764 4.05l-.377 1.642h-.003l-1.114-.255.31-1.347-.709.05-.262 1.142h-.002l-1.114-.256c.057-.253.112-.5.175-.75-1.327.18-2.636.468-3.915.863A9.011 9.011 0 0011.845 21h.369a9.035 9.035 0 007.034-3.664 24.612 24.612 0 00-7.484-1.09z"
  }));
}
FJC.DefaultColor = DefaultColor;
var FJC_default = FJC;
//# sourceMappingURL=FJC.js.map
