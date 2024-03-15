import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav1, ltr, accData } from "./v1/resequencing2.js";
import { pathData as pathDatav2 } from "./v2/resequencing2.js";

const pathData = isLegacyThemeFamily() ? pathDatav1 : pathDatav2;

export default "business-suite/resequencing2";
export { pathData, ltr, accData };