import{x as l}from"./lit-element.57026f9a.js";import{l as a}from"./if-defined.08fba587.js";import{o as s}from"./unsafe-html.5df53a7b.js";import{D as S}from"./docs.c0974812.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.dd88aaa2.js";import"./iframe.22e03dd9.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.fd2d0cd6.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const y={files:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},change:{description:"Event is fired when the value of the file path has been changed. <b>Note:</b> Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"files",type:"FileList",description:"The current files."}]}}},L={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var o=Object.freeze,M=Object.defineProperty,U=(e,D)=>o(M(e,"raw",{value:o(D||e.slice())})),d;const u="ui5-file-uploader",z={title:"Main/FileUploader",component:u,parameters:{docs:{page:S({...L,component:u})}},argTypes:y},r=e=>l`<ui5-file-uploader
    accept="${a(e.accept)}"
    ?hide-input="${a(e.hideInput)}"
    ?disabled="${a(e.disabled)}"
    ?multiple="${a(e.multiple)}"
    name="${a(e.name)}"
    placeholder="${a(e.placeholder)}"
    value="${a(e.value)}"
    valueState="${a(e.valueState)}"
    id="${a(e.id)}"
>
    ${s(e.default)}
    ${s(e.valueStateMessage)}
</ui5-file-uploader>`,t=r.bind({});t.args={default:'<ui5-button icon="upload" accessible-name-ref="upload-single-file-label">Upload Single File</ui5-button>'};t.decorators=[e=>l`<ui5-label id="upload-single-file-label" style="display: none">File Uploader, which accepts only one file.</ui5-label>
    ${e()}`];const n=r.bind({});n.storyName="With Custom Design ";n.args={hideInput:!0,default:"<ui5-badge>Upload File</ui5-badge>"};const i=r.bind({});i.storyName="Image Uploader";i.args={id:"fileuploader",accept:"image/*",default:'<ui5-button icon="upload" accessible-name-ref="upload-img-label">Upload Images</ui5-button>',multiple:!0};i.decorators=[e=>l(d||(d=U([`<ui5-label id="upload-img-label" style="display: none">File Uploader, which accepts only images.</ui5-label>
    `,`
    <div id="result"></div>
    <script>
        var fileUploader = document.querySelector("#fileuploader"),
            resultDiv = document.querySelector("#result");
        fileUploader.addEventListener("change", function(event) {
            var files = event.target.files;
            if (!files.length) {
                resultDiv.innerHTML = "<ui5-label>No Files Selected</ui5-label>";
            } else {
                resultDiv.innerHTML = "";
                resultDiv.style.marginTop = "1rem";
                for (var i = 0; i < files.length; i++) {
                    var img = document.createElement("img");
                    img.src = URL.createObjectURL(files[i]);
                    img.width = 100;
                    img.height = 100;
                    img.onload = function() {
                        URL.revokeObjectURL(img.src);
                    }
                    resultDiv.appendChild(img);
                }
            }
        })
    <\/script>`])),e())];i.parameters={docs:{story:{inline:!1}}};var p,f,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...(c=(f=t.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};var m,g,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,$,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...(b=($=i.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const A=["Basic","Custom","Advanced"];export{i as Advanced,t as Basic,n as Custom,A as __namedExportsOrder,z as default};
//# sourceMappingURL=FileUploader.stories.b4dd8e45.js.map
