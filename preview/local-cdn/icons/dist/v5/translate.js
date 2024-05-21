import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "translate";
const pathData = "M276 305q12 7 12 21 0 11-7.5 18.5T262 352q-7 0-14-4-2-2-20-14.5T186 300L76 409q-7 7-18 7t-18.5-7.5T32 390q0-10 8-18l109-107q-6-6-15-16t-17-21-14-22.5-6-21.5 6.5-17 17.5-7q17 0 26 20 5 8 14 20.5t23 26.5q14-17 28-42t23-57H26q-11 0-18.5-7.5T0 102t7.5-18T26 77h134V58q0-11 7.5-18.5T186 32t18 7.5 7 18.5v19h115q11 0 18.5 7t7.5 18-7.5 18.5T326 128h-39q-8 38-25 71.5T221 263zm234 141q2 2 2 8 0 11-7.5 18.5T486 480q-8 0-14.5-4.5T462 463l-19-54h-86l-19 54q-3 8-9.5 12.5T314 480q-11 0-18.5-7.5T288 454q0-4 2-8l86-237q7-17 24-17t24 17zm-86-88l-24-66-24 66h48z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/translate";
export { pathData, ltr, accData };