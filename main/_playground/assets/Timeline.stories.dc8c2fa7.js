import{x as l}from"./lit-html.7ac33e6b.js";import{l as t}from"./if-defined.f53f1284.js";import{o as r}from"./unsafe-html.ba9f7887.js";import{D as s}from"./docs.aab6075a.js";import{T as c}from"./TimelineLayout.b3ae2f4e.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.b0e59f62.js";import"./iframe.2fc26882.js";import"../sb-preview/runtime.mjs";import"./index.d8561bc4.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const p={layout:{control:"select",options:["Horizontal","Vertical"]},default:{control:{type:"text"}}},u={package:"@ui5/webcomponents-fiori",since:"0.8.0"},o="ui5-timeline",O={title:"Fiori/Timeline",component:o,subcomponents:{TimelineItem:"ui5-timeline-item"},parameters:{docs:{page:s({...u,component:o})}},argTypes:p},d=i=>l`<ui5-timeline
    layout="${t(i.layout)}"
    accessible-name="${t(i.accessibleName)}"
>
    ${r(i.default)}
</ui5-timeline>`,e=d.bind({});e.storyName="With Items and Layout";e.args={layout:c.Vertical,default:`<ui5-timeline-item id="test-item" title-text="called" subtitle-text="20.02.2017 11:30" icon="phone" name="John Smith" name-clickable=""></ui5-timeline-item>
<ui5-timeline-item title-text="Weekly Sync - CP Design" subtitle-text="27.07.2017 (11:00 - 12:30)" icon="calendar">
    <div>MR SOF02 2.43</div>
</ui5-timeline-item>
<ui5-timeline-item title-text="Video Converence Call - UI5" subtitle-text="31.01.2018 (12:00 - 13:00)" icon="calendar">
    <div>Online meeting</div>
</ui5-timeline-item>`};var m,n,a;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`<ui5-timeline\n    layout="${ifDefined(args.layout)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-timeline>`',...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const V=["Basic"];export{e as Basic,V as __namedExportsOrder,O as default};
//# sourceMappingURL=Timeline.stories.dc8c2fa7.js.map
