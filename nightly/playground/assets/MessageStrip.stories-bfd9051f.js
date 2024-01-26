import{x as b}from"./lit-element-c5a2b594.js";import{l as s}from"./if-defined-c29cffe1.js";import{o as r}from"./unsafe-html-0ddd83da.js";import{D as h}from"./docs-65fd78d9.js";import{M}from"./MessageStripDesign-392e00c5.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-2a6467c7.js";import"./index-6397ff69.js";import"./iframe-e61154d2.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-09d86f83.js";import"./client-fb0f3103.js";const w={design:{control:"select",options:["Information","Positive","Negative","Warning"]},default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}},icon:{control:{type:"text"},table:{type:{summary:"Array<IIcon>"}}}},$={package:"@ui5/webcomponents",since:"0.9.0"};var o=Object.freeze,x=Object.defineProperty,q=(e,y)=>o(x(e,"raw",{value:o(y||e.slice())})),a;const C="ui5-message-strip",F={title:"Main/Message Strip",component:"MessageStrip",parameters:{docs:{page:h({...$,component:C})}},argTypes:w},v=e=>b`<ui5-message-strip 
    design="${s(e.design)}"
    ?hide-icon="${s(e.hideIcon)}"
    ?hide-close-button="${s(e.hideCloseButton)}"
>
    ${r(e.icon)}
    ${r(e.default)}
</ui5-message-strip>
`,t=v.bind({});t.args={design:M.Information,default:"Information MessageStrip"};const i=()=>b(a||(a=q([`
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
`]))),n=v.bind({});n.args={design:M.Negative,icon:'<img src="../assets/images/loading.gif" width="16" height="16" slot="icon">',default:"Custom MessageStrip with animated gif"};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => html\`<ui5-message-strip 
    design="\${ifDefined(args.design)}"
    ?hide-icon="\${ifDefined(args.hideIcon)}"
    ?hide-close-button="\${ifDefined(args.hideCloseButton)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-message-strip>
\``,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => html\`
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
\``,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const J=["Basic","Dynamic","Custom"];export{t as Basic,n as Custom,i as Dynamic,J as __namedExportsOrder,F as default};
