import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "created";
const pathData = "M112.5 432h288V49h-159l-10 10v61c0 27-20 48-47 48h-62l-10 10v254zm328-424c5 5 7 11 7 17v431c0 12-9 24-23 24h-336c-15 0-24-12-24-24V168c0-6 1-10 7-16l144-144c5-5 9-7 16-7h191c7 0 12 2 18 7zm-222 328l-48-49c-10-9-10-24 0-33 9-9 24-9 33 0l31 32 79-80c9-10 25-10 35 0 9 9 9 25 0 35l-97 95c-9 9-24 9-33 0z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/created";
export { pathData, ltr, accData };