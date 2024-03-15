import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "top-panel-layout";
const pathData = "M91.5 1h330c41 0 74 32 74 72v335c0 40-33 72-74 72h-330c-41 0-75-32-75-72V73c0-40 34-72 75-72zm0 48c-15 0-27 11-27 24v48h383V73c0-13-11-24-26-24h-330zm330 383c15 0 26-11 26-24V168h-383v240c0 13 12 24 27 24h330z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/top-panel-layout";
export { pathData, ltr, accData };