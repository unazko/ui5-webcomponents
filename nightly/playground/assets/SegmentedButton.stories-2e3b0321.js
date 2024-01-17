import{x as u}from"./lit-element-c5a2b594.js";import{o as p}from"./unsafe-html-0ddd83da.js";import{l as s}from"./if-defined-c29cffe1.js";import{D as l}from"./docs-3d39008a.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-3acf43bc.js";import"./index-73b3191a.js";import"./iframe-3a53584d.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d69f7eeb.js";import"./client-fb0f3103.js";const g={mode:{control:"select",options:["SingleSelect","MultiSelect"]},selectedItem:{control:{type:!1}},selectedItems:{control:{type:!1}},default:{control:{type:"text"},table:{type:{summary:"Array<ISegmentedButtonItem>"}}},"selection-change":{description:"Fired when the selected item changes.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"ISegmentedButtonItem",references:[{name:"ISegmentedButtonItem",package:"@ui5/webcomponents",module:"dist/Interfaces.js"}]},name:"selectedItem",_ui5privacy:"public",description:"the pressed item.",deprecated:"deprecated since 1.14.0 and will be removed in the next major release, use the <code>selectedItems</code> parameter instead."},{type:{text:"Array<ISegmentedButtonItem>",references:[{name:"ISegmentedButtonItem",package:"@ui5/webcomponents",module:"dist/Interfaces.js"}]},name:"selectedItems",_ui5privacy:"public",description:"an array of selected items.",_ui5since:"1.14.0"}]}}},b={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},f="ui5-segmented-button",A={title:"Main/Segmented Button",component:"SegmentedButton",parameters:{docs:{page:l({...b,component:f})}},argTypes:g},d=n=>u`<ui5-segmented-button
    accessible-name="${s(n.accessibleName)}"
    mode="${s(n.mode)}"
>
    ${p(n.default)}
</ui5-segmented-button>`,e=d.bind({});e.args={default:`<ui5-segmented-button-item>Map</ui5-segmented-button-item>
<ui5-segmented-button-item pressed="">Satellite</ui5-segmented-button-item>
<ui5-segmented-button-item>Terrain</ui5-segmented-button-item>`,accessibleName:"Geographic location"};const t=d.bind({});t.args={default:`<ui5-segmented-button-item icon="bold-text" pressed=""></ui5-segmented-button-item>
<ui5-segmented-button-item icon="underline-text"></ui5-segmented-button-item>
<ui5-segmented-button-item icon="italic-text"></ui5-segmented-button-item>`};var o,m,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n    mode="${ifDefined(args.mode)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var a,r,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n    mode="${ifDefined(args.mode)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const H=["Basic","WithIcons"];export{e as Basic,t as WithIcons,H as __namedExportsOrder,A as default};
