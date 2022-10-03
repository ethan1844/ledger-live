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
  default: () => CC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#36B0F3";
function CC({
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
    d: "M10.56 3.199c.6-.12 1.212-.172 1.823-.155.381 0 .762.035 1.138.103.731.1 1.436.333 2.124.594.5.223 1.024.433 1.43.813.114.082.053.247-.047.313-.233.149-.512.192-.778.25-1.197.206-2.415.298-3.59.617-.528.118-1.035.312-1.537.512-.932.417-1.79 1.03-2.41 1.849-.118.173-.232.35-.342.528-.098.192-.197.383-.277.583-.06.143-.116.288-.168.434-.106.31-.158.633-.236.95-.025.209-.04.419-.083.625-.028.473-.014.945-.01 1.418 0 .157.042.312.045.47.002.146.022.29.061.43.075.394.167.793.334 1.162.217.522.554 1.012 1.034 1.323.398.296.891.422 1.374.497.645.084 1.3.007 1.935-.108.332-.06.662-.135.99-.223.208-.059.422-.098.627-.167.079-.014.159-.021.239-.023-.258.23-.516.458-.807.643-.992.639-2.145.972-3.294 1.186-.52.107-1.049.17-1.572.26-.597.086-1.215.158-1.752.45-.16.112-.285.265-.397.424-.034.07-.098 0-.135-.024-.122-.14-.28-.243-.412-.373a15.69 15.69 0 01-.417-.417c-.218-.254-.442-.505-.635-.779a8.087 8.087 0 01-.973-1.674l-.043-.02c-.032-.171-.119-.323-.177-.486a7.942 7.942 0 01-.33-1.095 2.828 2.828 0 01-.077-.346 1.701 1.701 0 01-.072-.405c-.073-.323-.06-.656-.106-.981 0-.272-.018-.545.015-.816.036-.225.02-.456.067-.68.046-.182.037-.373.095-.552a7.33 7.33 0 01.315-1.179c.054-.14.102-.283.153-.425.03-.065.054-.132.075-.2l.04-.047c.047-.141.11-.277.185-.405a6.09 6.09 0 01.243-.46c.026-.053.054-.104.084-.157.473-.74 1.025-1.441 1.69-2.02A9.442 9.442 0 018.794 3.69a8.962 8.962 0 011.766-.492z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.424 5.545c.165-.096.278-.251.392-.399a9.002 9.002 0 01.975 12.713 8.85 8.85 0 01-5.464 3.01c-.97.142-1.958.105-2.927-.028a8.469 8.469 0 01-2.158-.604c-.375-.165-.747-.358-1.04-.651-.076-.066-.124-.175-.074-.27.075-.117.21-.175.337-.216a8.886 8.886 0 011.113-.224c.676-.118 1.36-.194 2.03-.341 1.116-.241 2.231-.582 3.196-1.208a5.504 5.504 0 001.658-1.616c.61-.92.892-2.024.96-3.117.034-.814.015-1.635-.155-2.435-.156-.69-.428-1.385-.943-1.888-.394-.404-.93-.655-1.484-.751-.918-.172-1.857-.006-2.757.196-.421.1-.837.225-1.263.308.606-.57 1.348-.979 2.127-1.258.448-.166.913-.276 1.376-.385 1.014-.228 2.052-.315 3.075-.49.357-.075.72-.147 1.026-.346z"
  }));
}
CC.DefaultColor = DefaultColor;
var CC_default = CC;
//# sourceMappingURL=CC.js.map
