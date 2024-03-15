import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "progress-group";
const pathData = "M53 458h406V53H53v405zm108-133h158q3 0 5-2l44-67-44-68q-2-2-5-2H161l37 55q10 14 0 29zm324 186H27q-11 0-19-7.5T0 485V26Q0 15 8 7.5T27 0h458q11 0 19 7.5t8 18.5v459q0 11-8 18.5t-19 7.5zM319 379H111q-14 0-23-14-8-14 2-28l54-81-54-82q-10-13-2-28 9-14 23-14h208q32 0 49 27l54 82q11 14 0 29l-54 82q-17 27-49 27z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/progress-group";
export { pathData, ltr, accData };