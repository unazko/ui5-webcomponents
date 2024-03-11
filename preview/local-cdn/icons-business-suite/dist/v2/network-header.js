import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "network-header";
const pathData = "M64.5 432h383V301h-383v131zm360-382h-336v107h336V50zm-101 203h148c14 0 24 11 24 24v179c0 13-10 24-24 24h-431c-13 0-24-11-24-24V277c0-13 11-24 24-24h150v-48h-126c-13 0-24-11-24-24V26c0-13 11-24 24-24h384c14 0 25 11 25 24v155c0 13-11 24-25 24h-125v48zm-48-48v48h-37v-48h37zm120 202h-279c-8 0-15-7-15-15v-51c0-8 7-15 15-15h279c8 0 15 7 15 15v51c0 8-7 15-15 15zm-259-321h240c10 0 18 8 18 18 0 9-8 18-18 18h-240c-9 0-17-9-17-18 0-10 8-18 17-18z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/network-header";
export { pathData, ltr, accData };