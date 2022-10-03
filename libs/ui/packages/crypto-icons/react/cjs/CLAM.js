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
  default: () => CLAM_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#20C5D3";
function CLAM({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M13.357 5.902v-.066c.133-.057.397-.11.85.012.518.14.918.66 1.102.94l-.002.18c-.008 1.005-.328 3.486-.882 5.345-.483 1.626-1.539 3.788-1.753 4.22a2.674 2.674 0 00-.32-.05c.09-.549.479-2.99.724-5.216.26-2.36.28-4.702.28-5.364h.002zm2.175 1.069v-.009c.195-.004.627.031 1.12.348.476.307.723.89.825 1.204l-.048.185c-.116.452-.977 2.779-1.903 4.533-.786 1.487-2.041 3.131-2.315 3.484a2.462 2.462 0 00-.319-.125c.256-.515 1.273-2.619 1.748-4.215.56-1.88.882-4.39.892-5.405zm.193 6.363c.882-1.67 1.772-4.014 1.92-4.573.194.07.61.257.882.628.233.316.308.744.333 1.014l-.09.211c-.176.407-1.245 2.284-2.323 3.621-.933 1.158-2.335 2.532-2.671 2.858a2.38 2.38 0 00-.366-.27c.316-.409 1.54-2.023 2.315-3.49zm-7.471-6.19l-.027-.205c.123-.266.393-.71.91-.947.562-.256 1-.186 1.195-.13l.002.045c.014.446.132 2.643.42 5.236.264 2.372.689 4.895.77 5.374-.112.02-.222.048-.33.083-.209-.443-1.137-2.453-1.761-4.467-.696-2.246-1.095-4.33-1.18-4.988zM10.557 5.9l-.003-.102c.205-.185.684-.547 1.282-.547s1.086.362 1.297.548v.104c0 .66-.02 2.991-.28 5.34a115.06 115.06 0 01-.726 5.229l-.058-.002c-.108 0-.215.006-.323.017-.079-.462-.506-2.99-.77-5.367a83.953 83.953 0 01-.419-5.22zm1.512 10.79c1.213 0 1.771.736 1.94 1.017-.918.645-1.666 1.044-1.93 1.044s-.92-.33-1.953-1.076c.165-.267.722-.984 1.943-.984zm6.9-5.975c.185.12.564.443.529 1.065-.047.819-1.451 2.442-3.216 4.084a21.894 21.894 0 01-2.092 1.715 2.31 2.31 0 00-.256-.33c.342-.33 1.75-1.71 2.688-2.876 1.08-1.34 2.155-3.221 2.348-3.658zm-13.854-.16a10.4 10.4 0 01-.155-.41 1.47 1.47 0 01.172-.696c.257-.465.908-.678 1.166-.747l.001.005.028.098c.187.653.625 2.184 1.779 4.396 1.03 1.975 2.149 3.34 2.462 3.705-.084.057-.164.12-.24.188a25.362 25.362 0 01-2.932-2.997c-1.111-1.344-1.878-2.535-2.281-3.541zm5.055 6.697c-.082.09-.158.187-.225.29a34.317 34.317 0 01-1.898-1.522c-2.259-1.931-3.495-3.274-3.544-4.122-.038-.648.291-1.013.45-1.15.421 1.002 1.183 2.175 2.27 3.489a25.652 25.652 0 002.947 3.014zM6.515 8.645a7.716 7.716 0 01-.069-.251c.058-.274.2-.686.55-.939.299-.217.663-.326 1.033-.308l.003.025c.085.664.486 2.766 1.187 5.025.621 2.004 1.54 4.003 1.765 4.482a2.38 2.38 0 00-.224.108c-.274-.317-1.409-1.683-2.454-3.687-1.144-2.194-1.577-3.71-1.762-4.357l-.029-.098z"
  }));
}
CLAM.DefaultColor = DefaultColor;
var CLAM_default = CLAM;
//# sourceMappingURL=CLAM.js.map
