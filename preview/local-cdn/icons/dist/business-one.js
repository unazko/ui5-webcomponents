import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/business-one.js";
import { pathData as pathDatav5 } from "./v5/business-one.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "business-one";
export { pathData, ltr, accData };