import{x as l}from"./lit-element-c5a2b594.js";import{o as g}from"./unsafe-html-0ddd83da.js";import{l as r}from"./if-defined-c29cffe1.js";import{D as w}from"./docs-65fd78d9.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-2a6467c7.js";import"./index-6397ff69.js";import"./iframe-e61154d2.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-09d86f83.js";import"./client-fb0f3103.js";const b={default:{control:{type:"text"},table:{type:{summary:"Array<IColorPaletteItem>"}}},showAt:{description:"Shows the ColorPalettePopover.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:{text:"HTMLElement"},description:"the element that the popover is shown at",_ui5privacy:"public"}],returnValue:{type:{text:"void"}}}},openPopover:{description:"Shows the ColorPalettePopover.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:{text:"HTMLElement"},description:"the element that the popover is shown at",_ui5privacy:"public"}],returnValue:{type:{text:"void"}}}},"item-click":{description:"Fired when the user selects a color.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"string"},name:"color",_ui5privacy:"public",description:"the selected color"}]}}},C={package:"@ui5/webcomponents",since:"1.0.0-rc.16"};var a=Object.freeze,P=Object.defineProperty,f=(e,h)=>a(P(e,"raw",{value:a(h||e.slice())})),i,p;const D="ui5-color-palette-popover",U={title:"Main/ColorPalettePopover",component:"ColorPalettePopover",parameters:{docs:{page:w({...C,component:D})}},argTypes:b},v=e=>l`<ui5-color-palette-popover
    id="${r(e.id)}"
    ?show-recent-colors="${r(e.showRecentColors)}"
    ?show-more-colors="${r(e.showMoreColors)}"
    ?show-default-color="${r(e.showDefaultColor)}"
    default-color="${r(e.defaultColor)}"
>
    ${g(e.default)}
</ui5-color-palette-popover>`,t=v.bind({});t.args={id:"colorPalettePopover",default:`<ui5-color-palette-item value="lightsalmon"></ui5-color-palette-item>
<ui5-color-palette-item value="lightpink"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(216,124,172)"></ui5-color-palette-item>
<ui5-color-palette-item value="#6c666d"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(55,81,95)"></ui5-color-palette-item>
<ui5-color-palette-item value="#0072bb"></ui5-color-palette-item>
<ui5-color-palette-item value="powderblue"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(143,201,58)"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(195,172,206)"></ui5-color-palette-item>
<ui5-color-palette-item value="orange"></ui5-color-palette-item>`};t.decorators=[e=>l(i||(i=f([`<ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>
	`,`
	<script>
		colorPaletteBtn.addEventListener("click", function(event) {
			colorPalettePopover.showAt(this);
		});
	<\/script>`])),e())];t.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};const o=v.bind({});o.storyName="Default, Recent, and More Colors";o.args={id:"colorPalettePopover",defaultColor:"orange",showDefaultColor:!0,showRecentColors:!0,showMoreColors:!0,default:`<ui5-color-palette-item value="lightsalmon"></ui5-color-palette-item>
<ui5-color-palette-item value="lightpink"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(216,124,172)"></ui5-color-palette-item>
<ui5-color-palette-item value="#6c666d"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(55,81,95)"></ui5-color-palette-item>
<ui5-color-palette-item value="#0072bb"></ui5-color-palette-item>
<ui5-color-palette-item value="powderblue"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(143,201,58)"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(195,172,206)"></ui5-color-palette-item>
<ui5-color-palette-item value="orange"></ui5-color-palette-item>
<ui5-color-palette-item value="#ef3054"></ui5-color-palette-item>
<ui5-color-palette-item value="#ff6f59"></ui5-color-palette-item>
<ui5-color-palette-item value="moccasin"></ui5-color-palette-item>
<ui5-color-palette-item value="#07A0C3"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(8,103,136)"></ui5-color-palette-item>`};o.decorators=[e=>l(p||(p=f([`<ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>
	`,`
	<script>
		colorPaletteBtn.addEventListener("click", function(event) {
			colorPalettePopover.showAt(this);
		});
	<\/script>`])),e())];o.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};var c,u,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-color-palette-popover\n    id="${ifDefined(args.id)}"\n    ?show-recent-colors="${ifDefined(args.showRecentColors)}"\n    ?show-more-colors="${ifDefined(args.showMoreColors)}"\n    ?show-default-color="${ifDefined(args.showDefaultColor)}"\n    default-color="${ifDefined(args.defaultColor)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-color-palette-popover>`',...(s=(u=t.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var n,m,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:'args => html`<ui5-color-palette-popover\n    id="${ifDefined(args.id)}"\n    ?show-recent-colors="${ifDefined(args.showRecentColors)}"\n    ?show-more-colors="${ifDefined(args.showMoreColors)}"\n    ?show-default-color="${ifDefined(args.showDefaultColor)}"\n    default-color="${ifDefined(args.defaultColor)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-color-palette-popover>`',...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["Basic","DefaultColor"];export{t as Basic,o as DefaultColor,j as __namedExportsOrder,U as default};
