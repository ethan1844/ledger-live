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
  default: () => VIBE_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#338BE5";
function VIBE({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M16.972 11.938c.548.147 1.088.318 1.574.617.216.133.418.289.6.464.27.3.252.617.006.934-.216.276-.51.452-.823.6-.792.381-1.632.598-2.49.727-.697.106-1.405.165-2.107.253a.255.255 0 00-.162.112c-.492.733-.978 1.468-1.47 2.202-.04.048-.076.1-.108.153-.52-.78-1.034-1.563-1.543-2.35a.246.246 0 00-.21-.123c-1.405-.1-2.79-.282-4.118-.757-.42-.147-.822-.33-1.17-.605-.018-.018-.042-.03-.06-.048-.51-.428-.522-.886-.03-1.327.39-.353.87-.552 1.368-.705.498-.153 1.002-.264 1.507-.393.024-.006.048-.006.09-.018-1.087-1.662-2.16-3.307-3.26-4.975.067-.006.115-.012.157-.012.678-.006 1.356 0 2.034-.006a.245.245 0 01.234.135c1.643 2.505 3.284 5.01 4.923 7.519a.732.732 0 00.084.117c.378-.57.744-1.116 1.104-1.662 1.32-1.995 2.64-3.988 3.961-5.98.048-.07.084-.123.192-.123.714.006 1.429.006 2.143.006.034 0 .067.002.102.006-1.115 1.681-2.231 3.361-3.35 5.04.283.07.553.129.823.2zm-10.299 1.41c.14.156.304.29.486.393.75.4 1.58.546 2.438.675-.012-.04-.012-.058-.018-.07-.487-.734-.967-1.474-1.453-2.208a.174.174 0 00-.15-.047 6.974 6.974 0 00-.835.335 1.67 1.67 0 00-.462.376.388.388 0 00-.006.546zm9.453.634c.327-.088.627-.258.87-.493.241-.24.241-.511 0-.758a.92.92 0 00-.203-.165c-.258-.129-.528-.252-.793-.38-.09-.048-.144-.013-.198.07-.282.435-.57.862-.858 1.292-.18.27-.36.546-.546.828a.578.578 0 00.144 0c.528-.129 1.062-.247 1.584-.394zM16.132 6l-4.11 6.549L7.856 6h8.276z"
  }));
}
VIBE.DefaultColor = DefaultColor;
var VIBE_default = VIBE;
//# sourceMappingURL=VIBE.js.map
