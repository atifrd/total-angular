import { LayoutColor, LayoutDIR, LayoutMode, LayoutType, LayoutWidth } from "../enums";

export class LayoutSettings {
    constructor(
        public width: LayoutWidth = LayoutWidth.MAX_WIDTH_1024PX,
        public layout: LayoutType = LayoutType.VERTICAL, // vertical, horizontal, compact
        public dir: LayoutDIR = LayoutDIR.RTL,
        public mode: LayoutMode = LayoutMode.LIGHT, // light-mode, dark-mode, auto
        public color = LayoutColor.BLUE, // blue-theme, indigo-theme, purple-theme, pink-theme, red-theme, orange-theme, yellow-theme, green-theme, teal-theme, cyan-theme
        public isBoxContainer: boolean = false, // false true
        public themeContrast: boolean = false, //true false
        public menuCaption: boolean = false, // true false
        public isLanding: boolean = true) { }
}
