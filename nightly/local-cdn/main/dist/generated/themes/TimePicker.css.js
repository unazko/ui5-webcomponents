import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/TimePicker.css.ts", content: `:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[input-icon]{color:var(--_ui5-v1-24-0-rc-0_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v1-24-0-rc-0_input_icon_padding);border-inline-start:var(--_ui5-v1-24-0-rc-0_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v1-24-0-rc-0_input_icon_border_radius)}[input-icon][pressed]{background:var(--_ui5-v1-24-0-rc-0_input_icon_pressed_bg);box-shadow:var(--_ui5-v1-24-0-rc-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v1-24-0-rc-0_select_hover_icon_left_border);color:var(--_ui5-v1-24-0-rc-0_input_icon_pressed_color)}[input-icon]:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v1-24-0-rc-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v1-24-0-rc-0_select_hover_icon_left_border);color:var(--_ui5-v1-24-0-rc-0_input_icon_pressed_color)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5-v1-24-0-rc-0_input_icon_hover_bg);box-shadow:var(--_ui5-v1-24-0-rc-0_input_icon_box_shadow)}[input-icon]:hover{border-inline-start:var(--_ui5-v1-24-0-rc-0_select_hover_icon_left_border);box-shadow:var(--_ui5-v1-24-0-rc-0_input_icon_box_shadow)}:host(:not([hidden])){display:inline-block;line-height:normal;letter-spacing:normal;word-spacing:normal}:host{min-width:calc(var(--_ui5-v1-24-0-rc-0_input_min_width) + var(--_ui5-v1-24-0-rc-0_input_icon_width));color:var(--sapField_TextColor);background-color:var(--sapField_Background);border-radius:var(--_ui5-v1-24-0-rc-0-time_picker_border_radius);margin:var(--_ui5-v1-24-0-rc-0_input_margin_top_bottom) 0;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}:host([value-state="Error"]){background-color:var(--sapField_InvalidBackground)}:host(:not([disabled]):hover){background:var(--sapField_Hover_Background)}.ui5-time-picker-root{line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host .ui5-time-picker-input{width:100%;color:inherit;background-color:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;margin:inherit}.ui5-time-picker-input-icon-button{border-left:.0625rem solid transparent}.ui5-time-picker-input-icon-button:hover{cursor:pointer;border-left:var(--_ui5-v1-24-0-rc-0_time_picker_border);background:var(--sapButton_Hover_Background)}.ui5-time-picker-input-icon-button:active,.ui5-time-picker-input-icon-button[pressed]{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}
` };
export default styleData;
//# sourceMappingURL=TimePicker.css.js.map