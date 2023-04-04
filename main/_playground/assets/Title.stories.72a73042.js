import{y as p}from"./lit-html.df91382b.js";import{D as f}from"./docs.feeb8c2d.js";import{o as $}from"./unsafe-html.2126efc9.js";import{l}from"./if-defined.fc534641.js";import{T as r}from"./TitleLevel.1d8f6598.js";import{W as T}from"./WrappingType.16fc58a8.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.a2fcaeaf.js";import"./iframe.6fa3bc3a.js";import"../sb-preview/runtime.mjs";import"./index.ee89b5db.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const v={level:{control:"select",options:["H1","H2","H3","H4","H5","H6"]},wrappingType:{control:"select",options:["None","Normal"]},default:{control:{type:"text"}}},H={package:"@ui5/webcomponents"},n="ui5-title",P={title:"Main/Title",component:n,parameters:{docs:{page:f({...H,component:n})}},argTypes:v},a=e=>p`
<ui5-title
    level="${l(e.level)}"
    wrapping-type="${l(e.wrappingType)}"
>${$(e.default)}</ui5-title>`;a.decorators=[(e,{args:t})=>p`
${e({args:{...t,level:r.H1}})}
${e({args:{...t,level:r.H2}})}
${e({args:{...t,level:r.H3}})}
${e({args:{...t,level:r.H4}})}
${e({args:{...t,level:r.H5}})}
${e({args:{...t,level:r.H6}})}`];const o=a.bind({});o.args={default:"Title text"};o.decorators=[...a.decorators];const i=a.bind({});i.args={default:"Long title text text text which wraps",wrappingType:T.Normal};i.decorators=[...a.decorators,e=>p`
<style>
    ui5-title {
        width: 15ch;
    }
</style>
${e()}`];var s,m,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return html\`
<ui5-title
    level="\${ifDefined(args.level)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>\${unsafeHTML(args.default)}</ui5-title>\`;
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,d,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`
<ui5-title
    level="\${ifDefined(args.level)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>\${unsafeHTML(args.default)}</ui5-title>\`;
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const j=["Basic","Wrapping"];export{o as Basic,i as Wrapping,j as __namedExportsOrder,P as default};
//# sourceMappingURL=Title.stories.72a73042.js.map
