import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "male";
const pathData = "M486 0q11 0 18.5 7t7.5 18v109q0 11-7.5 18.5T486 160t-18-7.5-7-18.5V87L317 231q17 22 26 48.5t9 56.5q0 36-14 68t-38 56-56 38-68 14-68-14-56-38-38-56-14-68q0-37 14-69t38-56 56-37.5 68-13.5q29 0 56 9t49 25L425 51h-47q-11 0-18.5-7.5T352 25t7.5-18T378 0h108zM51 336q0 25 10 48t27 39.5 39.5 26.5 48.5 10 48.5-10 39.5-26.5 27-39.5 10-48q0-26-10-48.5T264 248t-39.5-27-48.5-10-48.5 10T88 248t-27 39.5T51 336z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/male";
export { pathData, ltr, accData };