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
  default: () => HUSH_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#292929";
function HUSH({
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
    d: "M11.255 13.993c0-.345.002-.69 0-1.034-.001-.095.026-.169.116-.208.082-.036.168-.01.24.074.215.25.428.502.642.754.075.088.15.175.223.265a.131.131 0 01.029.075c.001.364.002.728 0 1.091a.636.636 0 01-.578.641.631.631 0 01-.666-.544c-.007-.041-.006-.084-.006-.126v-.988zm.002-6.757l-.002-.045V5.142c0-.315.217-.58.51-.632a.623.623 0 01.737.616c.007.698.003 1.397.004 2.095l-.004.036c-.145-.249-.346-.373-.62-.372-.272 0-.475.12-.625.35zm-.002 9.46c.153.232.357.35.63.35.274-.001.473-.126.621-.357v1.736c0 .17.005.342-.01.51a.621.621 0 01-.653.565.629.629 0 01-.586-.625c-.004-.67-.002-1.339-.002-2.01v-.17zm1.251-6.62v1.245c0 .119-.037.184-.127.22a.232.232 0 01-.27-.071l-.543-.636c-.094-.11-.188-.218-.28-.33a.13.13 0 01-.03-.075c-.002-.535-.002-1.072 0-1.607a.63.63 0 01.574-.632c.297-.033.59.188.66.498a.749.749 0 01.015.16l.001 1.228zm1.298-2.533V5.878c.002-.301.174-.547.44-.631.406-.129.81.177.813.618.002.416 0 .831 0 1.246v2.096c0 .31-.186.56-.47.638a.627.627 0 01-.778-.562 1.465 1.465 0 01-.004-.115V7.543zm-3.783 8.027v1.924a.634.634 0 01-.52.635c-.36.07-.719-.223-.73-.598-.002-.107 0-.214 0-.321v-3.565c0-.3.192-.552.471-.624a.625.625 0 01.779.609c.002.646 0 1.294 0 1.94zm0-7.084v2.624a.634.634 0 01-.492.63.626.626 0 01-.757-.607c-.004-.38 0-.759-.002-1.138v-4.13c0-.309.201-.567.49-.632a.626.626 0 01.76.616c.003.674 0 1.348 0 2.022l.001.615zm3.783 6.14v-2.85c0-.285.122-.496.375-.614.407-.189.863.112.878.572v5.736c0 .314-.18.563-.462.643a.626.626 0 01-.786-.555 1.503 1.503 0 01-.004-.12v-2.814.001zm3.82-2.9v4.455a.638.638 0 01-.502.639c-.37.08-.737-.215-.747-.6V7.28c0-.288.144-.518.389-.62.412-.173.86.138.86.598v4.467zm-9.999-.007v4.462a.634.634 0 01-.489.637c-.375.09-.75-.205-.761-.599V7.266c0-.306.184-.555.465-.633a.625.625 0 01.784.601c.004.491.001.983.001 1.475v3.01z"
  }));
}
HUSH.DefaultColor = DefaultColor;
var HUSH_default = HUSH;
//# sourceMappingURL=HUSH.js.map
