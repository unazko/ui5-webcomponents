import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/NotificationStateIcon.css.ts", content: `.ui5-state-icon{min-width:1rem;min-height:1rem;padding-inline-end:var(--_ui5-v2-0-0-rc-3-notification_item-state-icon-padding)}
` };
export default styleData;
//# sourceMappingURL=NotificationStateIcon.css.js.map