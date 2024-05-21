import { isLegacyThemeFamilyAsync } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/travel-expense-report.js";
import { pathData as pathDatav5 } from "./v5/travel-expense-report.js";

const getPathData = async() => {
	return await isLegacyThemeFamilyAsync() ? pathDatav4 : pathDatav5;
};

export default "travel-expense-report";
export { getPathData, ltr, accData };