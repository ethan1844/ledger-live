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
  default: () => CHAT_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#1C98F7";
function CHAT({
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
    d: "M12.21 17.494a8.586 8.586 0 001.563-.255c.632.192 1.3.236 1.952.127a.474.474 0 01.078-.006c.232 0 .537.135.982.42v-.469a.457.457 0 01.233-.398c.194-.11.374-.235.538-.374.648-.549 1.014-1.281 1.014-2.057 0-.26-.041-.512-.12-.754.197-.365.355-.75.471-1.147.376.563.577 1.224.579 1.902 0 1.053-.49 2.036-1.339 2.754-.141.12-.29.23-.446.332v1.096a.466.466 0 01-.742.37c-.29-.218-.59-.42-.9-.608-.088-.053-.18-.1-.276-.14a5.265 5.265 0 01-.779.057 4.934 4.934 0 01-2.807-.85h-.001zm-5.6-2.192c-1.338-1.134-2.11-2.68-2.11-4.337 0-3.385 3.194-6.09 7.093-6.09 3.9 0 7.093 2.705 7.093 6.09 0 3.386-3.194 6.09-7.093 6.09-.438 0-.872-.033-1.296-.1-.184.043-.918.48-1.977 1.252-.383.28-.926.01-.926-.462v-1.869a6.95 6.95 0 01-.784-.574zm3.712.5c.033 0 .066.002.098.007.382.065.775.098 1.173.098 3.294 0 5.93-2.234 5.93-4.942s-2.636-4.941-5.93-4.941c-3.293 0-5.93 2.233-5.93 4.941 0 1.31.615 2.543 1.704 3.465.274.231.575.441.897.624.181.102.293.293.293.498v1.078c.837-.562 1.387-.828 1.765-.828zM8.57 12.115a.925.925 0 01-.93-.92c0-.508.416-.92.93-.92.513 0 .93.412.93.92s-.417.92-.93.92zm3.023 0a.925.925 0 01-.93-.92c0-.508.416-.92.93-.92s.93.412.93.92-.416.92-.93.92zm3.023 0a.925.925 0 01-.93-.92c0-.508.416-.92.93-.92s.93.412.93.92-.416.92-.93.92z"
  }));
}
CHAT.DefaultColor = DefaultColor;
var CHAT_default = CHAT;
//# sourceMappingURL=CHAT.js.map
