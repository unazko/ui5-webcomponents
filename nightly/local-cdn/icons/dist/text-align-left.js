import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/text-align-left.js";
import { pathData as pathDatav5 } from "./v5/text-align-left.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "text-align-left";
export { pathData, ltr, accData };