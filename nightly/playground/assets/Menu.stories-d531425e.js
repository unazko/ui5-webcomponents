import{x as r}from"./lit-element-c5a2b594.js";import{o as T}from"./unsafe-html-0ddd83da.js";import{l as o}from"./if-defined-c29cffe1.js";import{D as O}from"./docs-65fd78d9.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-2a6467c7.js";import"./index-6397ff69.js";import"./iframe-e61154d2.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-09d86f83.js";import"./client-fb0f3103.js";const D={default:{control:{type:"text"},table:{type:{summary:"Array<MenuItem>"}}},showAt:{description:"Shows the Menu near the opener element.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:{text:"HTMLElement"},description:"the element that the popover is shown at",_ui5privacy:"public"}],returnValue:{type:{text:"Promise<void>"}}}},close:{description:"Closes the Menu.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}},"item-click":{description:`Fired when an item is being clicked.
<br />
<b>Note:</b> Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.`,control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The currently clicked menu item."},{type:{text:"string"},name:"text",_ui5privacy:"public",description:"The text of the currently clicked menu item."}]}},"before-open":{description:`Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. <b>This event does not bubble.</b>
<br />
<b>Note:</b> Since 1.14.0 the event is also fired before a sub-menu opens.`,control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The <code>ui5-menu-item</code> that triggers opening of the sub-menu or undefined when fired upon root menu opening. <b>Note:</b> available since 1.14.0."}]}},"before-close":{description:"Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. <b>This event does not bubble.</b>",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"boolean"},name:"escPressed",_ui5privacy:"public",description:"Indicates that <code>ESC</code> key has triggered the event."}]}}},M={package:"@ui5/webcomponents",since:"1.3.0"};var a=Object.freeze,$=Object.defineProperty,u=(e,w)=>a($(e,"raw",{value:a(w||e.slice())})),s,c,d;const S="ui5-menu",X={title:"Main/Menu",component:"Menu",parameters:{docs:{page:O({...M,component:S})}},argTypes:D},m=e=>r`<ui5-menu
    header-text="${o(e.headerText)}"
    opener="${o(e.opener)}"
    ?open="${o(e.open)}"
    id="${o(e.id)}"
>
    ${T(e.default)}
</ui5-menu>`,t=m.bind({});t.storyName="Basic";t.args={id:"menuBasic",headerText:"Basic Menu with Items",default:`<ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
<ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
<ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Close"></ui5-menu-item>
<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>`};t.decorators=[e=>r(s||(s=u([`<ui5-button id="btnOpenBasic" class="samples-margin" icon="slim-arrow-down" icon-end>Open Menu</ui5-button> <br/>
	`,`
	<script>
		btnOpenBasic.addEventListener("click", function(event) {
			menuBasic.showAt(btnOpenBasic);
		});
	<\/script>`])),e())];t.parameters={docs:{story:{inline:!1}}};const n=m.bind({});n.storyName="Menu with Submenu";n.args={id:"menuSubs",default:`<ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
<ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
<ui5-menu-item text="Open" icon="open-folder" starts-section="">
    <ui5-menu-item text="Open Locally" icon="open-folder">
        <ui5-menu-item text="Open from C"></ui5-menu-item>
        <ui5-menu-item text="Open from D"></ui5-menu-item>
        <ui5-menu-item text="Open from E"></ui5-menu-item>
    </ui5-menu-item>
    <ui5-menu-item text="Open from Cloud"></ui5-menu-item>
</ui5-menu-item>
<ui5-menu-item text="Save" icon="save">
    <ui5-menu-item text="Save Locally" icon="save">
        <ui5-menu-item text="Save on C" icon="save"></ui5-menu-item>
        <ui5-menu-item text="Save on D" icon="save"></ui5-menu-item>
        <ui5-menu-item text="Save on E" icon="save"></ui5-menu-item>
    </ui5-menu-item>
    <ui5-menu-item text="Save on Cloud" icon="upload-to-cloud"></ui5-menu-item>
</ui5-menu-item>
<ui5-menu-item text="Close"></ui5-menu-item>
<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>`};n.decorators=[e=>r(c||(c=u([`<ui5-button id="btnOpenBasic" class="samples-margin" icon="slim-arrow-down" icon-end>Open Menu</ui5-button> <br/>
	`,`
	<script>
		btnOpenBasic.addEventListener("click", function(event) {
			menuSubs.showAt(btnOpenBasic);
		});
	<\/script>`])),e())];n.parameters={docs:{story:{inline:!1}}};const i=m.bind({});i.storyName="Menu Items with Additional Text";i.args={id:"menuAdditionalText",default:`<ui5-menu-item text="New File" icon="add-document" additional-text="Ctrl+N"></ui5-menu-item>
<ui5-menu-item text="New Folder" icon="add-folder" additional-text="Ctrl+F" disabled=""></ui5-menu-item>
<ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Close"></ui5-menu-item>
<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Exit" icon="journey-arrive" additional-text="Ctrl+X"></ui5-menu-item>`};i.decorators=[e=>r(d||(d=u([`<ui5-button id="btnOpenAdditionalText" class="samples-margin" icon="slim-arrow-down" icon-end>Open Menu</ui5-button> <br/>
	`,`
	<script>
		btnOpenAdditionalText.addEventListener("click", function(event) {
			menuAdditionalText.showAt(btnOpenAdditionalText);
		});
	<\/script>`])),e())];i.parameters={docs:{story:{inline:!1}}};var p,l,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:'args => html`<ui5-menu\n    header-text="${ifDefined(args.headerText)}"\n    opener="${ifDefined(args.opener)}"\n    ?open="${ifDefined(args.open)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-menu>`',...(f=(l=t.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var b,x,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:'args => html`<ui5-menu\n    header-text="${ifDefined(args.headerText)}"\n    opener="${ifDefined(args.opener)}"\n    ?open="${ifDefined(args.open)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-menu>`',...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,g,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:'args => html`<ui5-menu\n    header-text="${ifDefined(args.headerText)}"\n    opener="${ifDefined(args.opener)}"\n    ?open="${ifDefined(args.open)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-menu>`',...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const q=["Basic","SubMenu","AditionalText"];export{i as AditionalText,t as Basic,n as SubMenu,q as __namedExportsOrder,X as default};
