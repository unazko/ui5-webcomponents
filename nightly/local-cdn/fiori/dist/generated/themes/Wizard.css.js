import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/Wizard.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;height:100%;width:100%;overflow:auto}:host([_breakpoint="S"])::part(navigator),:host([_breakpoint="S"])::part(step-content){padding-left:1rem;padding-right:1rem}:host([_breakpoint="M"])::part(navigator),:host([_breakpoint="M"])::part(step-content){padding-left:2rem;padding-right:2rem}:host([_breakpoint="L"])::part(navigator),:host([_breakpoint="L"])::part(step-content){padding-left:2rem;padding-right:2rem}:host([_breakpoint="XL"])::part(navigator),:host([_breakpoint="XL"])::part(step-content){padding-left:3rem;padding-right:3rem}.ui5-wiz-root{height:100%;width:100%;position:relative}.ui5-wiz-content{position:relative;overflow:auto;height:calc(100% - 4rem);box-sizing:border-box;background:var(--sapBackgroundColor)}.ui5-wiz-content-item{display:block;box-sizing:border-box;padding-top:1rem;padding-bottom:1rem}:host([content-layout="SingleStep"]) .ui5-wiz-content-item:not([selected]){display:none}.ui5-wiz-content-item-wrapper{display:block;padding:var(--_ui5-v2-0-0-rc-3_wiz_content_item_wrapper_padding);background-color:var(--_ui5-v2-0-0-rc-3_wiz_content_item_wrapper_bg);border-radius:var(--sapElement_BorderCornerRadius)}.ui5-wiz-content-item[hidden]{display:none}.ui5-wiz-content-item[stretch]{min-height:100%}[ui5-wizard-tab][data-ui5-wizard-expanded-tab=true]+[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]{width:2rem;padding-left:.5rem}[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]{width:.25rem;padding:0}.ui5-wiz-nav-list{display:table;table-layout:fixed;position:relative;list-style:none;margin:0;box-sizing:border-box;width:100%;height:2rem;padding:0}[ui5-wizard-tab]{display:table-cell;position:relative}.ui5-wiz-nav{box-sizing:border-box;height:4rem;padding-top:1rem;padding-bottom:1rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--sapObjectHeader_Background);font-size:.875rem;box-shadow:var(--sapContent_HeaderShadow);outline:none;display:flex;align-items:center}[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]+[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]{width:.25rem}[ui5-wizard-tab][data-ui5-wizard-expanded-tab-prev=true],[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]+[ui5-wizard-tab][data-ui5-wizard-expanded-tab-prev=true]{width:2rem;padding-right:.75rem}
` };
export default styleData;
//# sourceMappingURL=Wizard.css.js.map