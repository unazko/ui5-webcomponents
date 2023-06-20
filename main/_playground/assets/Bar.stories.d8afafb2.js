import{x as a}from"./lit-element.57026f9a.js";import{l as p}from"./if-defined.08fba587.js";import{o as e}from"./unsafe-html.5df53a7b.js";import{D as m}from"./docs.afe8a072.js";import{B as c}from"./BarDesign.a5102321.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.c34d8404.js";import"./iframe.0a6b69ed.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.e11c882b.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const d={design:{control:"select",options:["FloatingFooter","Footer","Header","Subheader"]},default:{control:{type:"text"}},endContent:{control:{type:"text"}},startContent:{control:{type:"text"}}},u={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.11"},n="ui5-bar",S={title:"Fiori/Bar",component:n,parameters:{docs:{page:m({...u,component:n})}},argTypes:d},l=o=>a`<ui5-bar
    design="${p(o.design)}"
>
    ${e(o.default)}
    ${e(o.startContent)}
    ${e(o.endContent)}
</ui5-bar>`,t=l.bind({});t.storyName="With Content and Design";t.args={design:c.Header,startContent:'<ui5-button icon="home" tooltip="Go home" design="Transparent" slot="startContent"></ui5-button>',default:'<ui5-label id="basic-label">Content</ui5-label>',endContent:'<ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>'};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:'args => html`<ui5-bar\n    design="${ifDefined(args.design)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.startContent)}\n    ${unsafeHTML(args.endContent)}\n</ui5-bar>`',...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const k=["Basic"];export{t as Basic,k as __namedExportsOrder,S as default};
//# sourceMappingURL=Bar.stories.d8afafb2.js.map
