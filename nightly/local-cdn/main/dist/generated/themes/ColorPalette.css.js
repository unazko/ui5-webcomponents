import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/ColorPalette.css.ts", content: `:host(:not([hidden])){display:inline-block}:host(:not([hidden])[popup-mode]),:host(:not([hidden])[on-phone]){width:100%;overflow:hidden}.ui5-cp-root{display:flex;flex-direction:column}.ui5-cp-root.ui5-cp-root-phone,.ui5-cp-separator,.ui5-cp-root.ui5-cp-root-phone .ui5-cp-more-colors-wrapper,.ui5-cp-root.ui5-cp-root-phone .ui5-cp-default-color-button-wrapper,.ui5-cp-recent-colors-wrapper{width:100%}.ui5-cp-root.ui5-cp-root-phone .ui5-cp-item-container{padding:.375rem .625rem;width:100%;max-width:100%;max-height:100%;box-sizing:border-box}.ui5-cp-root-phone .ui5-cp-default-color-button,.ui5-cp-root-phone .ui5-cp-more-colors,.ui5-cp-root-phone .ui5-cp-more-colors-wrapper,.ui5-cp-root-phone .ui5-cp-default-color-button-wrapper{height:2.875rem}.ui5-cp-root-phone .ui5-cp-item-container{display:grid;grid-template-columns:repeat(5,1fr);grid-gap:.75rem}.ui5-cp-root-phone .ui5-cp-recent-colors-container{padding:.375rem .625rem;display:grid;grid-template-columns:repeat(5,1fr);grid-gap:.75rem;width:100%;box-sizing:border-box}.ui5-cp-root-phone .ui5-cp-recent-colors-wrapper{max-width:100%;padding:0;display:flex;justify-content:center;flex-flow:wrap;max-height:var(--_ui5-v2-0-0-rc-0_color-palette-row-height);overflow:hidden}.ui5-cp-recent-colors-wrapper{display:flex;align-items:center;flex-direction:column}.ui5-cp-root.ui5-cp-root-phone{display:flex}.ui5-cp-item-container{display:flex;max-width:var(--_ui5-v2-0-0-rc-0_color-palette-row-width);flex-flow:wrap;max-height:var(--_ui5-v2-0-0-rc-0_color-palette-row-height);overflow:hidden;padding:var(--_ui5-v2-0-0-rc-0_color-palette-swatch-container-padding)}.ui5-cp-more-colors,.ui5-cp-default-color-button{width:100%;height:var(--_ui5-v2-0-0-rc-0_color-palette-button-height);text-align:center;border:none}.ui5-cp-more-colors-wrapper,.ui5-cp-default-color-button-wrapper{display:flex;flex-direction:column}.ui5-cp-separator{height:.0625rem;background:var(--sapToolbar_SeparatorColor)}.ui5-cp-default-color-button,.ui5-cp-more-colors{padding:.0625rem}
` };
export default styleData;
//# sourceMappingURL=ColorPalette.css.js.map