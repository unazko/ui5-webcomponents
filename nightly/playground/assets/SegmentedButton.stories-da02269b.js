import{x as b}from"./lit-element-c5a2b594.js";import{o as f}from"./unsafe-html-0ddd83da.js";import{l as o}from"./if-defined-c29cffe1.js";import{D as I}from"./docs-6b98569a.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-2ff5cf3c.js";import"./iframe-6b96fe34.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-ac11f6c5.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const h={mode:{control:"select",options:["MultiSelect","SingleSelect"]},selectedItem:{control:{type:!1}},selectedItems:{control:{type:!1}},default:{control:{type:"text"}},"selection-change":{description:"Fired when the selected item changes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedItem",type:"HTMLElement",description:"the pressed item. Note: deprecated since 1.14.0 and will be removed in the next major release, use the <code>selectedItems</code> parameter instead."},{name:"selectedItems",type:"HTMLElement[]",description:"an array of selected items. Note: available since 1.14.0."}]}}},S={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},$="ui5-segmented-button",k={title:"Main/SegmentedButton",component:"SegmentedButton",subcomponents:{SegmentedButtonItem:"SegmentedButtonItem"},parameters:{docs:{page:I({...S,component:$})}},argTypes:h},m=s=>b`<ui5-segmented-button
    accessible-name="${o(s.accessibleName)}"
    mode="${o(s.mode)}"
>
    ${f(s.default)}
</ui5-segmented-button>`,t=m.bind({});t.args={default:`<ui5-segmented-button-item>Map</ui5-segmented-button-item>
<ui5-segmented-button-item pressed="">Satellite</ui5-segmented-button-item>
<ui5-segmented-button-item>Terrain</ui5-segmented-button-item>`,accessibleName:"Geographic location"};const n=m.bind({});n.args={default:`<ui5-segmented-button-item icon="employee" pressed=""></ui5-segmented-button-item>
<ui5-segmented-button-item icon="menu"></ui5-segmented-button-item>
<ui5-segmented-button-item icon="factory"></ui5-segmented-button-item>`};const e=m.bind({});e.storyName="More Segmented Button Items";e.args={default:`<ui5-segmented-button-item>Item</ui5-segmented-button-item>
<ui5-segmented-button-item pressed="">Pressed SegmentedButtonItem With Bigger Text</ui5-segmented-button-item>
<ui5-segmented-button-item>Item</ui5-segmented-button-item>
<ui5-segmented-button-item>SegmentedButtonItem</ui5-segmented-button-item>
<ui5-segmented-button-item>Press me</ui5-segmented-button-item>`};var i,a,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n    mode="${ifDefined(args.mode)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var d,u,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n    mode="${ifDefined(args.mode)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var g,p,l;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n    mode="${ifDefined(args.mode)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const C=["Basic","WithIcons","WithMoreItems"];export{t as Basic,n as WithIcons,e as WithMoreItems,C as __namedExportsOrder,k as default};
//# sourceMappingURL=SegmentedButton.stories-da02269b.js.map
