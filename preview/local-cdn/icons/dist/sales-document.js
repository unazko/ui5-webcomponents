import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/sales-document.js";
import { pathData as pathDatav5 } from "./v5/sales-document.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "sales-document";
export { pathData, ltr, accData };