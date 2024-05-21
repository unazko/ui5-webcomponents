import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav1, ltr, accData } from "./v1/add-polygon.js";
import { pathData as pathDatav2 } from "./v2/add-polygon.js";

const pathData = isLegacyThemeFamily() ? pathDatav1 : pathDatav2;

export default "business-suite/add-polygon";
export { pathData, ltr, accData };