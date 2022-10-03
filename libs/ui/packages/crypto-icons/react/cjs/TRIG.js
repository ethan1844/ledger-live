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
  default: () => TRIG_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#30C0F2";
function TRIG({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7.592 4.5h8.83s.235 1.165 1.486 1.244c0 0 4.141 9.637-5.94 13.756 0 0-9.299-2.953-6.017-13.678 0 0 1.407-.079 1.641-1.322zm8.363.767h-7.89l-.01.168c-.067.367-.25.623-.52.795a1.418 1.418 0 01-.549.204l-.138.013-.039.133c-.727 2.483-.751 4.628-.179 6.458.47 1.5 1.32 2.73 2.439 3.712.59.519 1.245.96 1.946 1.315a8.174 8.174 0 00.896.386l.073.023.072-.03c2.779-1.188 4.46-2.983 5.214-5.22.622-1.845.567-3.81.102-5.67a10.657 10.657 0 00-.354-1.136L16.97 6.3l-.128-.008c-.364-.024-.596-.173-.74-.411a1.024 1.024 0 01-.138-.42l-.01-.194zm-7.534.409c4.775 0 7.163.002 7.163.002.033.14.086.28.165.413.191.319.5.534.932.595.113.318.21.64.292.968.447 1.79.5 3.68-.093 5.44-.71 2.106-2.285 3.8-4.914 4.943a7.63 7.63 0 01-.764-.337 8.953 8.953 0 01-1.86-1.255c-1.067-.937-1.874-2.104-2.319-3.528-.539-1.721-.524-3.745.145-6.1.209-.048.408-.13.59-.243.326-.205.563-.526.663-.898zm5.52 4.187h-.227c.022-.457-.079-1.45-1.313-1.726a1.959 1.959 0 00-1.083.05c-.481.171-1.056.6-1.077 1.676h-.168a.645.645 0 00-.645.64v2.682a.645.645 0 00.645.641h3.869a.645.645 0 00.645-.641v-2.681a.645.645 0 00-.645-.641h-.001zm-1.504 3.031h-.86l.228-1.13a.504.504 0 01.203-.968.505.505 0 11.202.968l.227 1.13zm-1.64-3.031c.02-.351.169-1.182 1.093-1.244 0 0 1.22-.067 1.198 1.244h-2.292z"
  }));
}
TRIG.DefaultColor = DefaultColor;
var TRIG_default = TRIG;
//# sourceMappingURL=TRIG.js.map
