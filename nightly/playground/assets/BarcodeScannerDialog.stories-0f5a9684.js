import{x as c}from"./lit-element-c5a2b594.js";import{D as d}from"./docs-6b98569a.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-2ff5cf3c.js";import"./iframe-6b96fe34.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-ac11f6c5.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const l={close:{description:"Closes the dialog and the scan session.",table:{category:"methods"}},show:{description:"Shows a dialog with the camera videostream. Starts a scan session.",table:{category:"methods"}},"scan-error":{description:"Fires when the scan fails with error.",table:{category:"events"},UI5CustomData:{parameters:[{name:"message",type:"string",description:"the error message"}]}},"scan-success":{description:"Fires when the scan is completed successfuuly.",table:{category:"events"},UI5CustomData:{parameters:[{name:"text",type:"string",description:"the scan result as string"},{name:"rawBytes",type:"Object",description:"the scan result as a Uint8Array"}]}}},m={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.15"};var t=Object.freeze,p=Object.defineProperty,g=(e,i)=>t(p(e,"raw",{value:t(i||e.slice())})),a;const u="ui5-barcode-scanner-dialog",O={title:"Fiori/BarcodeScannerDialog",component:"BarcodeScannerDialog",parameters:{docs:{page:d({...m,component:u})}},argTypes:l},b=e=>c`
    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>
`,n=b.bind({});n.decorators=[e=>c(a||(a=g([" ",`
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
        <\/script>`])),e())];var r,s,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:'args => html`\n    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>\n`',...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const R=["Basic"];export{n as Basic,R as __namedExportsOrder,O as default};
//# sourceMappingURL=BarcodeScannerDialog.stories-0f5a9684.js.map
