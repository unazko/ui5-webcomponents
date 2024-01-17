import{x as v}from"./lit-element-c5a2b594.js";import{l as s}from"./if-defined-c29cffe1.js";import{o as y}from"./unsafe-html-0ddd83da.js";import{T as b}from"./ToastPlacement-9320f5e7.js";import{D as E}from"./docs-3d39008a.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-3acf43bc.js";import"./index-73b3191a.js";import"./iframe-3a53584d.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d69f7eeb.js";import"./client-fb0f3103.js";const h={placement:{control:"select",options:["TopStart","TopCenter","TopEnd","MiddleStart","MiddleCenter","MiddleEnd","BottomStart","BottomCenter","BottomEnd"]},default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}},show:{description:"Shows the component.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}}},B={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var i=Object.freeze,w=Object.defineProperty,D=(e,T)=>i(w(e,"raw",{value:i(T||e.slice())})),d;const O="ui5-toast",G={title:"Main/Toast",component:"Toast",parameters:{docs:{page:E({...B,component:O})}},argTypes:h};let t=0;const r=e=>v(d||(d=D([`
<ui5-button id="btn-`,`">Show Toast</ui5-button>
<ui5-toast
	id="toast-`,`"
	duration="`,`"
	placement="`,`"
	>`,`</ui5-toast>
<script>
	var toastOpener`,' = document.getElementById("btn-',`");
	var toast`,' = document.getElementById("toast-',`"); 

	toastOpener`,`.addEventListener("click", () => {
		toast`,`.show();
	});
<\/script>`])),++t,t,s(e.duration),s(e.placement),y(e.default),t,t,t,t,t,t),n=r.bind({});n.args={placement:b.BottomCenter,default:"Basic Toast"};const o=r.bind({});o.args={duration:4500,default:"Long Toast"};const a=r.bind({});a.args={placement:b.MiddleCenter,default:"Middle Center Toast"};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="btn-\${++index}">Show Toast</ui5-button>
<ui5-toast
    id="toast-\${index}"
    duration="\${ifDefined(args.duration)}"
    placement="\${ifDefined(args.placement)}"
    >\${unsafeHTML(args.default)}</ui5-toast>
<script>
    var toastOpener\${index} = document.getElementById("btn-\${index}");
    var toast\${index} = document.getElementById("toast-\${index}"); 

    toastOpener\${index}.addEventListener("click", () => {
        toast\${index}.show();
    });
<\/script>\`;
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,l,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="btn-\${++index}">Show Toast</ui5-button>
<ui5-toast
    id="toast-\${index}"
    duration="\${ifDefined(args.duration)}"
    placement="\${ifDefined(args.placement)}"
    >\${unsafeHTML(args.default)}</ui5-toast>
<script>
    var toastOpener\${index} = document.getElementById("btn-\${index}");
    var toast\${index} = document.getElementById("toast-\${index}"); 

    toastOpener\${index}.addEventListener("click", () => {
        toast\${index}.show();
    });
<\/script>\`;
}`,...(f=(l=o.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var $,g,x;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="btn-\${++index}">Show Toast</ui5-button>
<ui5-toast
    id="toast-\${index}"
    duration="\${ifDefined(args.duration)}"
    placement="\${ifDefined(args.placement)}"
    >\${unsafeHTML(args.default)}</ui5-toast>
<script>
    var toastOpener\${index} = document.getElementById("btn-\${index}");
    var toast\${index} = document.getElementById("toast-\${index}"); 

    toastOpener\${index}.addEventListener("click", () => {
        toast\${index}.show();
    });
<\/script>\`;
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const J=["Basic","Duration","Placement"];export{n as Basic,o as Duration,a as Placement,J as __namedExportsOrder,G as default};
