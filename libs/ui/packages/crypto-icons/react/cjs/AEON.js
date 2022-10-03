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
  default: () => AEON_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#134451";
function AEON({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10.506 12.251c-.373 0-.655.063-.85.182a.578.578 0 00-.282.524.53.53 0 00.169.41c.113.1.272.15.47.15.308 0 .564-.096.768-.285.205-.192.344-.46.413-.805l.031-.176h-.72.001zm3.948-1.627c-.113-.099-.272-.148-.47-.148-.308 0-.564.096-.768.285-.204.192-.344.46-.412.805l-.032.175.72-.003c.372 0 .654-.063.849-.182a.577.577 0 00.282-.524.512.512 0 00-.169-.408z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20.23 11.042c-.245-2.223-4.132-3.598-8.677-3.071-4.545.526-8.03 2.756-7.784 4.98.247 2.223 4.13 3.598 8.678 3.071 4.549-.527 8.03-2.757 7.784-4.98zm-4.755 1.113c-.46.329-1.131.49-2.012.494l-.856.003-.026.123a.325.325 0 00-.013.082c-.004.017-.004.034-.004.047a.45.45 0 00.26.42c.172.097.427.143.761.143.318 0 .623-.036.911-.102.285-.067.561-.166.823-.299l-.217 1.167c-.327.08-.641.142-.953.182-.3.043-.601.065-.904.067-.415 0-.758-.05-1.034-.156-.285-.11-.603-.348-.761-.69-.294.28-.634.507-1.005.67a2.762 2.762 0 01-1.09.221c-.473.004-.846-.112-1.112-.34-.269-.229-.402-.548-.405-.948-.004-.617.227-1.084.684-1.409.46-.327 1.131-.49 2.013-.493l.855-.003.026-.123a.33.33 0 00.014-.083c.003-.016.003-.033.003-.046a.451.451 0 00-.26-.42c-.171-.097-.427-.143-.761-.143-.318 0-.623.036-.911.102a3.609 3.609 0 00-.824.299l.218-1.166c.327-.08.641-.143.952-.183.3-.043.602-.065.905-.066.415 0 .759.05 1.035.156.285.11.602.348.761.689a3.48 3.48 0 011.005-.67 2.763 2.763 0 011.09-.222c.473-.003.845.113 1.11.341.27.23.403.548.406.948.004.613-.223 1.083-.683 1.408z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.399 16.287a16.85 16.85 0 01-1.942.112c-1.504 0-2.91-.211-4.081-.626a6.608 6.608 0 01-1.38-.662c-.16.838-.053 1.577.359 2.127 1.183 1.58 4.492 1.077 7.767-1.05-.24.036-.48.069-.723.099zm-.768-8.548c2.22-.259 4.36-.076 6.023.513.484.167.948.39 1.381.663.158-.838.052-1.577-.36-2.127-1.184-1.58-4.493-1.077-7.767 1.05.24-.04.483-.073.723-.099z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.216 18.208a6.826 6.826 0 01-1.32.183c.334.885.856 1.504 1.547 1.736 1.666.56 3.822-1.275 5.348-4.314-.36.1-.732.189-1.108.265-1.492 1.054-3.047 1.8-4.467 2.13zm5.699-12.414c.433-.102.875-.16 1.32-.176-.332-.885-.85-1.507-1.541-1.742-1.663-.567-3.828 1.258-5.365 4.287.36-.1.733-.185 1.112-.258 1.491-1.05 3.05-1.787 4.473-2.111z"
  }));
}
AEON.DefaultColor = DefaultColor;
var AEON_default = AEON;
//# sourceMappingURL=AEON.js.map
