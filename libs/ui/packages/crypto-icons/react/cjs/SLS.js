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
  default: () => SLS_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#8E9495";
function SLS({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M5.717 15.533a5.18 5.18 0 01-.38-1.16 4.047 4.047 0 01-.087-.64h.67a4.643 4.643 0 00.408 1.535c.402.852 1.012 1.338 1.899 1.338.693 0 1.23-.277 1.608-.766.32-.413.502-.961.502-1.422 0-.59-.223-1.025-.67-1.393-.362-.3-.78-.51-1.643-.869l-.152-.063c-.897-.371-1.311-.575-1.714-.893-.556-.44-.852-.985-.852-1.683 0-.836.301-1.545.84-2.046a2.747 2.747 0 011.87-.721c.96 0 1.694.4 2.181 1.1v-.952h2.166v9.56h.644v-2.683a.66.66 0 010-.066l.67.023v.034a4.467 4.467 0 00.395 1.502c.4.851 1.011 1.338 1.897 1.338.693 0 1.23-.278 1.608-.767.321-.413.502-.961.502-1.422 0-.59-.223-1.025-.67-1.393-.362-.3-.78-.51-1.642-.869l-.153-.063c-.897-.371-1.31-.575-1.714-.893-.556-.44-.851-.985-.851-1.683 0-.836.3-1.545.839-2.046a2.747 2.747 0 011.871-.72c.96 0 1.693.4 2.18 1.1v-.912h.671v3.317h-.67c0-.693-.16-1.395-.473-1.913-.368-.613-.923-.948-1.708-.948a2.063 2.063 0 00-1.405.539c-.405.378-.635.919-.635 1.583 0 .495.2.863.607 1.185.338.266.716.452 1.554.8l.152.063c.925.383 1.383.614 1.815.97.59.488.903 1.099.903 1.883 0 .597-.227 1.28-.634 1.808-.502.647-1.235 1.025-2.147 1.025-.632 0-1.175-.192-1.62-.547a2.976 2.976 0 01-.672-.77v1.17h-1.984V7.541h-.825v2.713h-.671c0-.693-.159-1.395-.472-1.913-.369-.613-.924-.948-1.708-.948a2.063 2.063 0 00-1.405.539c-.405.378-.635.919-.635 1.583 0 .495.2.863.607 1.185.338.266.716.452 1.553.8l.153.063c.925.383 1.383.614 1.815.97.59.488.903 1.099.903 1.883 0 .597-.227 1.28-.635 1.808-.502.647-1.234 1.025-2.146 1.025-.633 0-1.175-.192-1.62-.547a2.995 2.995 0 01-.687-.79v1.149h-.67v-3.33h.67v2.18a3.982 3.982 0 01-.203-.379z"
  }));
}
SLS.DefaultColor = DefaultColor;
var SLS_default = SLS;
//# sourceMappingURL=SLS.js.map
