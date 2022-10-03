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
  default: () => FAIR_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#C99705";
function FAIR({
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
    d: "M6 18.19l.032-.13c.116-.449.42-.725.875-.85.462-.127.902-.079 1.302.193a.81.81 0 01.294.343c.018.039.053.07.08.105.03-.034.073-.064.088-.103.099-.262.209-.52.283-.788.402-1.455.795-2.91 1.19-4.366.015-.057.025-.116.04-.185h-.3c-.331-.006-.664.003-.994-.022-.45-.035-.755-.311-.763-.737-.008-.372.212-.657.633-.73.294-.051.603-.032.905-.037.29-.004.58 0 .87-.003.026 0 .07-.03.077-.053.074-.258.142-.518.21-.778.005-.015.001-.032.001-.058-.328 0-.653.01-.977-.003a1.325 1.325 0 01-.714-.215c-.265-.182-.338-.442-.295-.73.044-.291.23-.486.529-.568.105-.029.219-.04.328-.041.469-.005.937-.004 1.405.003.113.002.164-.035.209-.13.156-.324.309-.652.49-.963a7.123 7.123 0 011.196-1.565c.633-.609 1.377-1.04 2.27-1.199.592-.105 1.19-.13 1.771.07.35.12.61.342.773.662.103.203.202.403.191.64-.032.676-.606 1.105-1.126 1.122-.399.013-.742-.095-1.008-.383-.25-.272-.28-.588-.18-.924l.027-.075-.02-.026c-.052.033-.11.06-.152.1a3.06 3.06 0 00-.563.74 9.024 9.024 0 00-.73 1.774c-.005.019-.004.04-.007.072.162 0 .322.002.48 0 .231-.004.46-.003.68.08.268.1.473.264.527.545.055.286-.002.51-.269.729-.217.178-.472.215-.738.224-.356.012-.713.015-1.068.02-.048.002-.085 0-.099.06-.057.246-.12.49-.181.735-.003.012 0 .026.002.047.25 0 .498-.008.746.001.266.01.512.08.706.272.237.235.27.573.072.837-.064.087-.142.165-.211.248-.146.17-.35.23-.565.238-.37.015-.74.02-1.11.017-.1 0-.14.03-.163.118-.131.52-.257 1.043-.403 1.56-.292 1.04-.618 2.07-1.152 3.027a5.44 5.44 0 01-.96 1.263c-.558.541-1.218.912-2.007 1.05-.538.093-1.081.125-1.612-.036-.45-.137-.761-.417-.881-.866L6 18.39v-.2z"
  }));
}
FAIR.DefaultColor = DefaultColor;
var FAIR_default = FAIR;
//# sourceMappingURL=FAIR.js.map
