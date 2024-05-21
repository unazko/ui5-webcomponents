import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/appear-offline.js";
import { pathData as pathDatav5 } from "./v5/appear-offline.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "appear-offline";
export { pathData, ltr, accData };