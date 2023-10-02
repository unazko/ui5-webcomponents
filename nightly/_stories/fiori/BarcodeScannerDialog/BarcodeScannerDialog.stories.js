import { html } from "lit";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../.storybook/docs";
const component = "ui5-barcode-scanner-dialog";
export default {
    title: "Fiori/Barcode Scanner Dialog",
    component: "BarcodeScannerDialog",
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component }),
        },
    },
    argTypes,
};
const Template = (args) => html `
    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>
`;
export const Basic = Template.bind({});
Basic.decorators = [
    (story) => html ` ${story()}
        <ui5-button id="btnScan" icon="camera" tooltip="Start Camera"
            >Scan</ui5-button
        >
        <div>
            <ui5-label id="scanResult"></ui5-label>
            <ui5-label id="scanError"></ui5-label>
        </div>
        <script>
            const btnScan = document.getElementById("btnScan");
            const dlgScan = document.getElementById("dlgScan");
            const scanResult = document.getElementById("scanResult");
            const scanError = document.getElementById("scanError");

            btnScan.addEventListener("click", (event) => {
                dlgScan.show();
            });

            dlgScan.addEventListener("scan-success", (event) => {
                scanResult.innerHTML = event.detail.text;
                dlgScan.close();
            });

            dlgScan.addEventListener("scan-error", (event) => {
                scanError.innerHTML = event.detail.message;
                dlgScan.close();
            });
        </script>`,
];
//# sourceMappingURL=BarcodeScannerDialog.stories.js.map