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
  default: () => BTT_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#000";
function BTT({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M20.77 10.2a8.922 8.922 0 00-1.35-3.206 8.903 8.903 0 00-1.092-1.322 8.899 8.899 0 00-2.847-1.919 8.914 8.914 0 00-6.962 0 8.898 8.898 0 00-2.847 1.92 8.899 8.899 0 00-1.919 2.846 8.915 8.915 0 000 6.962 8.906 8.906 0 001.92 2.847 8.895 8.895 0 002.846 1.919 8.914 8.914 0 006.962 0 8.895 8.895 0 002.847-1.92 8.896 8.896 0 001.92-2.846 8.915 8.915 0 00.523-5.281zm-8.762 9.634a7.825 7.825 0 01-7.824-7.825c0-4.316 3.509-7.825 7.824-7.825 4.317 0 7.825 3.509 7.825 7.825 0 4.316-3.508 7.825-7.825 7.825z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.147 19.154h.212c.036 0 .072 0 .11-.01h.009c.037 0 .064 0 .1-.008h.028c.028 0 .056 0 .083-.01h.027c.028 0 .056-.009.093-.009h.018c.036 0 .073-.01.11-.01.037 0 .064-.008.101-.017h.018c.028 0 .056-.01.083-.01h.018c.037-.009.065-.009.102-.018a1.47 1.47 0 00.21-.046h.02c.026-.009.063-.009.09-.018h.01l.211-.055a8.208 8.208 0 01-2.047-.193c-1.011-.22-1.975-.615-2.793-1.295a5.658 5.658 0 01-2.038-4.399A5.345 5.345 0 018.18 9.64a5.455 5.455 0 014.059-1.93h.211V6.49h-.238a6.622 6.622 0 00-2.7.615c-.432.202-.837.45-1.213.735-.39.295-.743.634-1.056 1.01a6.25 6.25 0 00-.762 1.13c-.21.388-.38.797-.506 1.22a6.677 6.677 0 00-.247 1.278l-.028.403v.239a6.63 6.63 0 00.615 2.7c.23.505.644 1.25 1.259 1.81a7.103 7.103 0 004.407 1.524h.166z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.149 17.978a9.34 9.34 0 01-1.35-.147c-1.891-.34-3.518-1.497-4.114-3.241-.726-2.122.386-4.418 2.498-5.115a3.908 3.908 0 011.248-.203c.543 0 1.084.11 1.58.312l.514-1.093a9.854 9.854 0 00-.468-.174 5.41 5.41 0 00-1.626-.248 5.152 5.152 0 00-1.625.266 5.108 5.108 0 00-1.809 1.047 5.264 5.264 0 00-.688.745 5.178 5.178 0 00-1.038 2.792 5.221 5.221 0 00.275 2.056c.234.68.61 1.304 1.102 1.828.45.487.974.854 1.607 1.194.661.349 1.479.532 2.332.652a14.86 14.86 0 001.718.092c.377-.138.533-.203.735-.285.175-.082.349-.165.524-.266.174-.102.202-.12.495-.312a.508.508 0 00.074-.056c-1.01.175-1.268.165-1.984.156z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.409 16.61c-.285.018-.69.045-1.149.045-.817 0-1.818-.073-2.672-.358-1.323-.44-2.572-1.57-2.572-2.966a2.514 2.514 0 012.517-2.516c.945 0 1.763.524 2.195 1.286l1.093-.542a3.555 3.555 0 00-.653-.872 3.727 3.727 0 00-6.364 2.635c.002.513.112 1.02.322 1.488.192.422.46.818.799 1.185.597.642 1.414 1.157 2.287 1.45.835.276 2.066.377 3.26.295.33-.028.578-.056 1-.147a6.89 6.89 0 001.103-1.093c-.285.028-.809.082-1.166.11z"
  }));
}
BTT.DefaultColor = DefaultColor;
var BTT_default = BTT;
//# sourceMappingURL=BTT.js.map
