import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/MultiComboBox.css.ts", content: `:host{vertical-align:middle}:host{width:var(--_ui5-v1-23-1_input_width);min-width:calc(var(--_ui5-v1-23-1_input_min_width) + (var(--_ui5-v1-23-1-input-icons-count)*var(--_ui5-v1-23-1_input_icon_width)));margin:var(--_ui5-v1-23-1_input_margin_top_bottom) 0;height:var(--_ui5-v1-23-1_input_height);color:var(--sapField_TextColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);font-style:normal;border:var(--_ui5-v1-23-1-input-border);border-radius:var(--_ui5-v1-23-1_input_border_radius);box-sizing:border-box;text-align:start;transition:var(--_ui5-v1-23-1_input_transition);background:var(--sapField_BackgroundStyle);background-color:var(--_ui5-v1-23-1_input_background_color)}:host(:not([readonly])),:host([readonly][disabled]){box-shadow:var(--sapField_Shadow)}:host([focused]:not([opened])){border-color:var(--_ui5-v1-23-1_input_focused_border_color);background-color:var(--sapField_Focus_Background)}.ui5-input-focusable-element{position:relative}:host([focused]:not([opened])) .ui5-input-focusable-element:after{content:var(--ui5-v1-23-1_input_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5-v1-23-1_input_focus_outline_color);border-radius:var(--_ui5-v1-23-1_input_focus_border_radius);top:var(--_ui5-v1-23-1_input_focus_offset);bottom:var(--_ui5-v1-23-1_input_focus_offset);left:var(--_ui5-v1-23-1_input_focus_offset);right:var(--_ui5-v1-23-1_input_focus_offset)}:host([focused][readonly]:not([opened])) .ui5-input-focusable-element:after{top:var(--_ui5-v1-23-1_input_readonly_focus_offset);bottom:var(--_ui5-v1-23-1_input_readonly_focus_offset);left:var(--_ui5-v1-23-1_input_readonly_focus_offset);right:var(--_ui5-v1-23-1_input_readonly_focus_offset);border-radius:var(--_ui5-v1-23-1_input_readonly_focus_border_radius)}.ui5-input-root:before{content:"";position:absolute;width:calc(100% - 2px);left:1px;bottom:-2px;border-bottom-left-radius:8px;border-bottom-right-radius:8px;height:var(--_ui5-v1-23-1_input_bottom_border_height);transition:var(--_ui5-v1-23-1_input_transition);background-color:var(--_ui5-v1-23-1_input_bottom_border_color)}.ui5-input-root{width:100%;height:100%;position:relative;background:transparent;display:inline-block;outline:none;box-sizing:border-box;color:inherit;transition:border-color .2s ease-in-out;border-radius:var(--_ui5-v1-23-1_input_border_radius);overflow:hidden}:host([disabled]){opacity:var(--_ui5-v1-23-1_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v1-23-1-input_disabled_background);border-color:var(--_ui5-v1-23-1_input_disabled_border_color)}:host([disabled]) .ui5-input-root:before,:host([readonly]) .ui5-input-root:before{content:none}[inner-input]{background:transparent;color:inherit;border:none;font-style:inherit;-webkit-appearance:none;-moz-appearance:textfield;padding:var(--_ui5-v1-23-1_input_inner_padding);box-sizing:border-box;min-width:var(--_ui5-v1-23-1_input_min_width);width:100%;text-overflow:ellipsis;flex:1;outline:none;font-size:inherit;font-family:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;text-align:inherit}.ui5-input-value-state-icon{height:100%;display:var(--_ui5-v1-23-1-input-value-state-icon-display);align-items:center}.ui5-input-value-state-icon>svg{margin-right:8px}[inner-input]::selection{background:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}:host([disabled]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([disabled]) [inner-input]::-moz-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-moz-placeholder{visibility:hidden}[inner-input]::-webkit-input-placeholder{font-weight:400;font-style:var(--_ui5-v1-23-1_input_placeholder_style);color:var(--_ui5-v1-23-1_input_placeholder_color);padding-right:.125rem}[inner-input]::-moz-placeholder{font-weight:400;font-style:var(--_ui5-v1-23-1_input_placeholder_style);color:var(--_ui5-v1-23-1_input_placeholder_color);padding-right:.125rem}:host([value-state="Error"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v1-23-1-input_error_placeholder_color);font-weight:var(--_ui5-v1-23-1_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Error"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v1-23-1-input_error_placeholder_color);font-weight:var(--_ui5-v1-23-1_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Warning"]) [inner-input]::-webkit-input-placeholder{font-weight:var(--_ui5-v1-23-1_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Warning"]) [inner-input]::-moz-placeholder{font-weight:var(--_ui5-v1-23-1_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Success"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v1-23-1_input_placeholder_color)}:host([value-state="Success"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v1-23-1_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v1-23-1_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v1-23-1_input_placeholder_color)}.ui5-input-content{height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:flex-end;overflow:hidden;outline:none;background:transparent;color:inherit;border-radius:var(--_ui5-v1-23-1_input_border_radius)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v1-23-1_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v1-23-1_input_readonly_background)}:host([value-state="None"]:not([readonly]):hover),:host(:not([value-state]):not([readonly]):hover){border:var(--_ui5-v1-23-1_input_hover_border);border-color:var(--_ui5-v1-23-1_input_focused_border_color);box-shadow:var(--sapField_Hover_Shadow);background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background)}:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover){box-shadow:none}:host([focused]):not([opened]) .ui5-input-root:before{content:none}:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])){border-width:var(--_ui5-v1-23-1_input_state_border_width)}:host([value-state="Error"]) [inner-input],:host([value-state="Warning"]) [inner-input]{font-style:var(--_ui5-v1-23-1_input_error_warning_font_style);text-indent:var(--_ui5-v1-23-1_input_error_warning_text_indent)}:host([value-state="Error"]) [inner-input]{font-weight:var(--_ui5-v1-23-1_input_error_font_weight)}:host([value-state="Warning"]) [inner-input]{font-weight:var(--_ui5-v1-23-1_input_warning_font_weight)}:host([value-state="Error"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v1-23-1_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Error"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v1-23-1_input_focused_value_state_error_background);border-color:var(--_ui5-v1-23-1_input_focused_value_state_error_border_color)}:host([value-state="Error"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v1-23-1_input_focused_value_state_error_focus_outline_color)}:host([value-state="Error"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v1-23-1-input-value-state-error-border-botom-color)}:host([value-state="Error"]:not([readonly]):not([focused]):hover),:host([value-state="Error"]:not([readonly])[focused][opened]:hover){background-color:var(--_ui5-v1-23-1_input_value_state_error_hover_background);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Error"]:not([readonly]):not([disabled])),:host([value-state="Warning"]:not([readonly]):not([disabled])),:host([value-state="Information"]:not([readonly]):not([disabled])){border-style:var(--_ui5-v1-23-1_input_error_warning_border_style)}:host([value-state="Warning"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v1-23-1_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Warning"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v1-23-1_input_focused_value_state_warning_background);border-color:var(--_ui5-v1-23-1_input_focused_value_state_warning_border_color)}:host([value-state="Warning"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v1-23-1_input_focused_value_state_warning_focus_outline_color)}:host([value-state="Warning"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v1-23-1_input_value_state_warning_border_botom_color)}:host([value-state="Warning"]:not([readonly]):not([focused]):hover),:host([value-state="Warning"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Success"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v1-23-1_input_value_state_success_border_color);border-width:var(--_ui5-v1-23-1_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Success"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v1-23-1_input_focused_value_state_success_background);border-color:var(--_ui5-v1-23-1_input_focused_value_state_success_border_color)}:host([value-state="Success"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v1-23-1_input_focused_value_state_success_focus_outline_color)}:host([value-state="Success"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v1-23-1_input_value_state_success_border_botom_color)}:host([value-state="Success"]:not([readonly]):not([focused]):hover),:host([value-state="Success"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v1-23-1_input_value_state_information_border_color);border-width:var(--_ui5-v1-23-1_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Information"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v1-23-1_input_focused_value_state_information_background);border-color:var(--_ui5-v1-23-1_input_focused_value_state_information_border_color)}:host([value-state="Information"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v1-23-1_input_value_success_information_border_botom_color)}:host([value-state="Information"]:not([readonly]):not([focused]):hover),:host([value-state="Information"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}.ui5-input-icon-root{min-width:var(--_ui5-v1-23-1_input_icon_min_width);height:100%;display:flex;justify-content:center;align-items:center}::slotted([ui5-icon][slot="icon"]){align-self:start;padding:var(--_ui5-v1-23-1_input_custom_icon_padding);box-sizing:content-box!important}:host([value-state="Error"]) [input-icon],:host([value-state="Warning"]) [input-icon]{padding:var(--_ui5-v1-23-1_input_error_warning_icon_padding)}:host([value-state="Error"][focused]) [input-icon],:host([value-state="Warning"][focused]) [input-icon]{padding:var(--_ui5-v1-23-1_input_error_warning_focused_icon_padding)}:host([value-state="Information"]) [input-icon]{padding:var(--_ui5-v1-23-1_input_information_icon_padding)}:host([value-state="Information"][focused]) [input-icon]{padding:var(--_ui5-v1-23-1_input_information_focused_icon_padding)}:host([value-state="Error"]) ::slotted([input-icon][ui5-icon]),:host([value-state="Error"]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Warning"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v1-23-1_input_error_warning_custom_icon_padding)}:host([value-state="Error"][focused]) ::slotted([input-icon][ui5-icon]),:host([value-state="Error"][focused]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Warning"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v1-23-1_input_error_warning_custom_focused_icon_padding)}:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v1-23-1_input_information_custom_icon_padding)}:host([value-state="Information"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v1-23-1_input_information_custom_focused_icon_padding)}:host([value-state="Error"]) [input-icon]:active,:host([value-state="Error"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-23-1_input_error_icon_box_shadow);color:var(--_ui5-v1-23-1_input_icon_error_pressed_color)}:host([value-state="Error"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-23-1_input_error_icon_box_shadow)}:host([value-state="Warning"]) [input-icon]:active,:host([value-state="Warning"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-23-1_input_warning_icon_box_shadow);color:var(--_ui5-v1-23-1_input_icon_warning_pressed_color)}:host([value-state="Warning"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-23-1_input_warning_icon_box_shadow)}:host([value-state="Information"]) [input-icon]:active,:host([value-state="Information"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-23-1_input_information_icon_box_shadow);color:var(--_ui5-v1-23-1_input_icon_information_pressed_color)}:host([value-state="Information"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-23-1_input_information_icon_box_shadow)}:host([value-state="Success"]) [input-icon]:active,:host([value-state="Success"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-23-1_input_success_icon_box_shadow);color:var(--_ui5-v1-23-1_input_icon_success_pressed_color)}:host([value-state="Success"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-23-1_input_success_icon_box_shadow)}.ui5-input-clear-icon-wrapper{height:var(--_ui5-v1-23-1_input_icon_wrapper_height);padding:0;width:var(--_ui5-v1-23-1_input_icon_width);min-width:var(--_ui5-v1-23-1_input_icon_width);display:flex;justify-content:center;align-items:center;box-sizing:border-box}:host([value-state]:not([value-state="None"]):not([value-state="Success"])) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v1-23-1_input_icon_wrapper_state_height);vertical-align:top}:host([value-state="Success"]) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v1-23-1_input_icon_wrapper_success_state_height)}[ui5-icon].ui5-input-clear-icon{padding:0;color:inherit}[inner-input]::-webkit-outer-spin-button,[inner-input]::-webkit-inner-spin-button{-webkit-appearance:inherit;margin:inherit}[input-icon]{color:var(--_ui5-v1-23-1_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v1-23-1_input_icon_padding);border-inline-start:var(--_ui5-v1-23-1_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v1-23-1_input_icon_border_radius)}[input-icon][pressed]{background:var(--_ui5-v1-23-1_input_icon_pressed_bg);box-shadow:var(--_ui5-v1-23-1_input_icon_box_shadow);border-inline-start:var(--_ui5-v1-23-1_select_hover_icon_left_border);color:var(--_ui5-v1-23-1_input_icon_pressed_color)}[input-icon]:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v1-23-1_input_icon_box_shadow);border-inline-start:var(--_ui5-v1-23-1_select_hover_icon_left_border);color:var(--_ui5-v1-23-1_input_icon_pressed_color)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5-v1-23-1_input_icon_hover_bg);box-shadow:var(--_ui5-v1-23-1_input_icon_box_shadow)}[input-icon]:hover{border-inline-start:var(--_ui5-v1-23-1_select_hover_icon_left_border);box-shadow:var(--_ui5-v1-23-1_input_icon_box_shadow)}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{min-width:calc(var(--_ui5-v1-23-1_input_min_width) + (var(--_ui5-v1-23-1-input-icons-count)*var(--_ui5-v1-23-1_input_icon_width)))}:host([tokenizer-available]){min-width:calc(var(--_ui5-v1-23-1_input_min_width) + (var(--_ui5-v1-23-1-input-icons-count)*var(--_ui5-v1-23-1_input_icon_width)) + var(--_ui5-v1-23-1_input_tokenizer_min_width))}:host(:not([hidden])){display:inline-block}.ui5-multi-combobox-root{display:flex;overflow:hidden;width:100%;height:100%;border-radius:var(--_ui5-v1-23-1_input_border_radius)}.ui5-multi-combobox-tokenizer{min-width:var(--_ui5-v1-23-1_input_tokenizer_min_width);max-width:calc(100% - 3rem - var(--_ui5-v1-23-1-input-icons-count) * var(--_ui5-v1-23-1_input_icon_min_width));border:none;width:auto;height:100%}:host([readonly]) .ui5-multi-combobox-tokenizer::part(n-more-text){color:var(--sapLinkColor)}.ui5-multi-combobox-tokenizer::part(n-more-text){padding-inline-end:var(--_ui5-v1-23-1_input_inner_space_to_n_more_text)}[inner-input][inner-input-with-icon]{padding:var(--_ui5-v1-23-1_input_inner_padding_with_icon)}:host([tokenizer-available]) [inner-input]{padding-inline-start:var(--_ui5-v1-23-1_input_inner_space_to_tokenizer)}:host(:not([tokenizer-available])) .ui5-multi-combobox-tokenizer{--_ui5-v1-23-1_input_tokenizer_min_width: 0px;width:var(--_ui5-v1-23-1_input_tokenizer_min_width)}
` };
export default styleData;
//# sourceMappingURL=MultiComboBox.css.js.map