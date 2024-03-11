import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "content-enricher";
const pathData = "M0 236q0-13 9-23 8-8 24-8h95q16 0 23 8 10 10 10 23v97q0 14-10 23-7 8-23 8H33q-15 0-24-7.5T0 333v-97zm307 120q-9 0-14-6-6-5-6-13t6-13l18-19H203q-8 0-13.5-5.5T184 285q0-8 5.5-13t13.5-5h109l-19-19q-6-5-6-13.5t6-14.5q5-5 13-5t14 5l52 52q5 6 5 14t-5 13l-52 51q-6 6-13 6zm147 123H261q-24 0-41-20t-17-48q0-11 7.5-18.5T229 385t18 7.5 7 18.5q0 8 2.5 12t4.5 4h193q1 0 3.5-4t2.5-12V161q0-8-2.5-12t-4.5-5H261q-2 1-4.5 5t-2.5 12q0 11-7 18t-18 7-18.5-7-7.5-18q0-28 17-48t41-20h193q24 0 41 20t17 48v250q0 28-17 48t-41 20z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/content-enricher";
export { pathData, ltr, accData };