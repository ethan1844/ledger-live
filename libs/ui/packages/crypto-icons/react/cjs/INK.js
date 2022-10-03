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
  default: () => INK_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#fff";
function INK({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M11.145 8.645a.493.493 0 01.587.284c.23.526.437 1.069.675 1.594.143.316.628.357.818.066.318-.527.572-1.086.882-1.62.254-.332.714-.17 1.064-.202.365-.024.635.437.428.753-1 1.87-2.008 3.732-3.009 5.602-.167.34-.715.34-.865-.016-.223-.543-.398-1.11-.612-1.652-.128-.356-.675-.412-.858-.072-.31.558-.58 1.141-.89 1.691-.15.251-.468.21-.714.21-.238-.015-.524.058-.706-.145a.522.522 0 01-.072-.631c.937-1.774 1.89-3.554 2.827-5.343.111-.203.206-.454.445-.518zm-3.272.138c.277-.016.556-.016.834 0 .31.033.508.43.357.713-.93 1.756-1.866 3.505-2.795 5.253-.112.195-.199.454-.437.518-.278.041-.563.017-.842.017-.34.016-.627-.43-.42-.729.969-1.813 1.937-3.635 2.906-5.456.08-.154.214-.308.397-.316zm9.855.016c.301-.09.62-.024.929-.049.238.008.54-.04.715.17.214.22.15.632-.12.77-.548.348-1.088.72-1.643 1.06-.35.243-.866-.17-.715-.575.135-.324.325-.622.477-.939.087-.162.166-.372.357-.437zm-2.63 4.841c.16-.097.359-.064.51.017.42.21.84.437 1.27.64.183.08.373.234.38.452.033.292-.214.575-.5.551-.61 0-1.222.007-1.826 0-.301 0-.54-.356-.429-.647.08-.211.2-.398.294-.6.072-.153.143-.34.302-.413z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.145 8.645a.493.493 0 01.587.284c.23.526.437 1.068.675 1.594.143.316.628.357.818.066.318-.527.572-1.086.882-1.62.254-.332.714-.17 1.064-.202.365-.024.635.437.428.753-1 1.87-2.008 3.732-3.009 5.602-.167.34-.715.34-.865-.016-.223-.543-.398-1.11-.612-1.652-.128-.356-.675-.412-.858-.072-.31.558-.58 1.141-.89 1.691-.15.251-.468.21-.714.21-.238-.015-.524.058-.706-.145a.522.522 0 01-.072-.631c.937-1.774 1.89-3.554 2.827-5.344.111-.202.206-.453.445-.517zm-3.272.138c.277-.016.556-.016.834 0 .31.032.508.43.357.713-.93 1.756-1.866 3.505-2.795 5.253-.112.195-.199.454-.437.518-.278.041-.563.017-.842.017-.34.016-.627-.43-.42-.729.969-1.813 1.937-3.635 2.906-5.456.08-.154.214-.308.397-.316zm9.855.016c.301-.09.62-.024.929-.049.238.008.54-.04.715.17.214.22.15.632-.12.77-.548.348-1.088.72-1.643 1.06-.35.243-.866-.17-.715-.575.135-.324.325-.622.477-.939.087-.162.166-.372.357-.437zm-2.63 4.841c.16-.097.359-.064.51.017.42.21.84.437 1.27.64.183.08.373.234.38.452.033.292-.214.575-.5.551-.61 0-1.222.007-1.826 0-.301 0-.54-.356-.429-.647.08-.211.2-.398.294-.6.072-.153.143-.34.302-.413z"
  }));
}
INK.DefaultColor = DefaultColor;
var INK_default = INK;
//# sourceMappingURL=INK.js.map
