import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Tokenizer.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{display:inline-block;box-sizing:border-box;border:1px solid black;height:2.25rem}.ui5-tokenizer-root{height:100%;display:flex;align-items:center;overflow-x:scroll;box-sizing:border-box;font-family:"72override",var(--sapFontFamily)}.ui5-tokenizer-no-padding{padding:0}.ui5-tokenizer-root.ui5-tokenizer-nmore--wrapper{overflow:hidden}.ui5-tokenizer--token--wrapper{display:inline-flex;align-items:center;box-sizing:border-box;height:100%}:host([expanded]) .ui5-tokenizer--content{display:inline-flex;white-space:nowrap;overflow:hidden}.ui5-tokenizer--content{display:flex;flex-wrap:nowrap;align-items:center;overflow:hidden;padding-inline-start:var(--_ui5-v1-24-0-rc-0_tokenizer_padding);height:100%;box-sizing:border-box}:host([_tokens-count="1"]) .ui5-tokenizer--content{padding-inline-end:4px;box-sizing:border-box;max-width:100%;flex:1}.ui5-tokenizer-more-text{display:inline-block;margin-inline-start:.25rem;cursor:pointer;white-space:nowrap;font-size:var(--sapFontSize);font-weight:400;color:var(--_ui5-v1-24-0-rc-0_tokenizer_n_more_text_color)}
` };
export default styleData;
//# sourceMappingURL=Tokenizer.css.js.map