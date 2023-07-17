import{x as i}from"./lit-element.57026f9a.js";import{D as l}from"./docs.c0974812.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.dd88aaa2.js";import"./iframe.22e03dd9.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.fd2d0cd6.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const m={close:{description:"Closes the dialog and the scan session.",table:{category:"methods"}},show:{description:"Shows a dialog with the camera videostream. Starts a scan session.",table:{category:"methods"}},"scan-error":{description:"Fires when the scan fails with error.",table:{category:"events"},UI5CustomData:{parameters:[{name:"message",type:"string",description:"the error message"}]}},"scan-success":{description:"Fires when the scan is completed successfuuly.",table:{category:"events"},UI5CustomData:{parameters:[{name:"text",type:"string",description:"the scan result as string"},{name:"rawBytes",type:"Object",description:"the scan result as a Uint8Array"}]}}},p={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.15"};var t=Object.freeze,g=Object.defineProperty,u=(e,d)=>t(g(e,"raw",{value:t(d||e.slice())})),a;const r="ui5-barcode-scanner-dialog",C={title:"Fiori/BarcodeScannerDialog",component:r,parameters:{docs:{page:l({...p,component:r})}},argTypes:m},b=e=>i`
    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>
`,n=b.bind({});n.decorators=[e=>i(a||(a=u([" ",`
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
        <\/script>`])),e())];var s,c,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`\n    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>\n`',...(o=(c=n.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const O=["Basic"];export{n as Basic,O as __namedExportsOrder,C as default};
//# sourceMappingURL=BarcodeScannerDialog.stories.c25ce29b.js.map
