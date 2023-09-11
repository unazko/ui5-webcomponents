import{x as M}from"./lit-element.3a4d34a1.js";import{l as s}from"./if-defined.d89d00ab.js";import{o as r}from"./unsafe-html.3b27b0e6.js";import{D as h}from"./docs.51924474.js";import{M as b}from"./MessageStripDesign.440deab2.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.be39b920.js";import"./iframe.ef306bc9.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.0dbfee3b.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const w={design:{control:"select",options:["Information","Negative","Positive","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}}},$={package:"@ui5/webcomponents",since:"0.9.0"};var o=Object.freeze,x=Object.defineProperty,q=(e,y)=>o(x(e,"raw",{value:o(y||e.slice())})),a;const C="ui5-message-strip",z={title:"Main/Message Strip",component:"MessageStrip",parameters:{docs:{page:h({...$,component:C})}},argTypes:w},v=e=>M`<ui5-message-strip 
    design="${s(e.design)}"
    ?hide-icon="${s(e.hideIcon)}"
    ?hide-close-button="${s(e.hideCloseButton)}"
>
    ${r(e.icon)}
    ${r(e.default)}
</ui5-message-strip>
`,t=v.bind({});t.args={design:b.Information,default:"Information MessageStrip"};const i=()=>M(a||(a=q([`
<div class="wrapper">
    <ui5-button id="button1">Generate MessageStrip</ui5-button>
</div>
<script>
    const container = document.querySelector(".wrapper");
    const button =  document.querySelector("#button1");
    button.addEventListener("click", function(event) {
        let invisibleMessage =  window["sap-ui-webcomponents-bundle"].invisibleMessage;
        const messageStrip = document.querySelector("#msgStrip");
        const types = ["Information", "Warning", "Negative", "Positive"];
        const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.";
        let type = types[Math.round(Math.random() * 3)];
        if (messageStrip) {
            container.removeChild(messageStrip);
        }
        let generatedMsgStrip = document.createElement("ui5-message-strip");
        generatedMsgStrip.id = "msgStrip";
        generatedMsgStrip.design = type;
        generatedMsgStrip.textContent = text;
        invisibleMessage.announce(\`New Information Bar of type \${type} \${text}\`, "Assertive");
        container.appendChild(generatedMsgStrip);
    });
<\/script>
`],[`
<div class="wrapper">
    <ui5-button id="button1">Generate MessageStrip</ui5-button>
</div>
<script>
    const container = document.querySelector(".wrapper");
    const button =  document.querySelector("#button1");
    button.addEventListener("click", function(event) {
        let invisibleMessage =  window["sap-ui-webcomponents-bundle"].invisibleMessage;
        const messageStrip = document.querySelector("#msgStrip");
        const types = ["Information", "Warning", "Negative", "Positive"];
        const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.";
        let type = types[Math.round(Math.random() * 3)];
        if (messageStrip) {
            container.removeChild(messageStrip);
        }
        let generatedMsgStrip = document.createElement("ui5-message-strip");
        generatedMsgStrip.id = "msgStrip";
        generatedMsgStrip.design = type;
        generatedMsgStrip.textContent = text;
        invisibleMessage.announce(\\\`New Information Bar of type \\\${type} \\\${text}\\\`, "Assertive");
        container.appendChild(generatedMsgStrip);
    });
<\/script>
`]))),n=v.bind({});n.args={design:b.Negative,icon:'<img src="../assets/images/loading.gif" width="16" height="16" slot="icon">',default:"Custom MessageStrip with animated gif"};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => html\`<ui5-message-strip 
    design="\${ifDefined(args.design)}"
    ?hide-icon="\${ifDefined(args.hideIcon)}"
    ?hide-close-button="\${ifDefined(args.hideCloseButton)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-message-strip>
\``,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => html\`
<div class="wrapper">
    <ui5-button id="button1">Generate MessageStrip</ui5-button>
</div>
<script>
    const container = document.querySelector(".wrapper");
    const button =  document.querySelector("#button1");
    button.addEventListener("click", function(event) {
        let invisibleMessage =  window["sap-ui-webcomponents-bundle"].invisibleMessage;
        const messageStrip = document.querySelector("#msgStrip");
        const types = ["Information", "Warning", "Negative", "Positive"];
        const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.";
        let type = types[Math.round(Math.random() * 3)];
        if (messageStrip) {
            container.removeChild(messageStrip);
        }
        let generatedMsgStrip = document.createElement("ui5-message-strip");
        generatedMsgStrip.id = "msgStrip";
        generatedMsgStrip.design = type;
        generatedMsgStrip.textContent = text;
        invisibleMessage.announce(\\\`New Information Bar of type \\\${type} \\\${text}\\\`, "Assertive");
        container.appendChild(generatedMsgStrip);
    });
<\/script>
\``,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var l,f,S;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => html\`<ui5-message-strip 
    design="\${ifDefined(args.design)}"
    ?hide-icon="\${ifDefined(args.hideIcon)}"
    ?hide-close-button="\${ifDefined(args.hideCloseButton)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-message-strip>
\``,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const F=["Basic","Dynamic","Custom"];export{t as Basic,n as Custom,i as Dynamic,F as __namedExportsOrder,z as default};
//# sourceMappingURL=MessageStrip.stories.57785543.js.map
