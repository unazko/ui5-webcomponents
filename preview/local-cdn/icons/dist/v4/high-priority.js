import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "high-priority";
const pathData = "M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm0 96q-15 0-25.5 11t-9.5 26l11 164q0 10 7 16.5t17 6.5 17-6.5 7-16.5l11-164q1-15-9.5-26T256 96zm0 329q15 0 25.5-11t10.5-26-11-25.5-26-10.5-25 10.5-10 25.5 10 26 26 11z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/high-priority";
export { pathData, ltr, accData };