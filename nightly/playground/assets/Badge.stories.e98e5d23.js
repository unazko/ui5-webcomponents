import{x as y}from"./lit-element.57026f9a.js";import{l as i}from"./if-defined.08fba587.js";import{o as l}from"./unsafe-html.5df53a7b.js";import{D}from"./docs.c0974812.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.dd88aaa2.js";import"./iframe.22e03dd9.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.fd2d0cd6.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const L={default:{control:{type:"text"}},icon:{control:{type:"text"}}},M={package:"@ui5/webcomponents",since:"0.12.0"},d="ui5-badge",z={title:"Main/Badge",component:d,parameters:{docs:{page:D({...M,component:d})}},argTypes:L},s=e=>y`
<ui5-badge
    color-scheme="${i(e.colorScheme)}"
    style="${i(e.style)}"
>
    ${l(e.icon)}
    ${l(e.default)}
</ui5-badge>`,r=s.bind({});r.args={colorScheme:"6",icon:'<ui5-icon name="pending" slot="icon"></ui5-icon>',default:"Pending"};const n=s.bind({});n.args={default:"This would truncate as it is too long",style:"width: 200px"};const o=e=>`<ui5-icon name="${e}" slot="icon"></ui5-icon>`,H=[{icon:o("accept"),default:""},{icon:o("sap-ui5"),default:""},{icon:o("add-equipment"),default:"In progress"},{icon:o("lab"),default:""},{icon:o("email-read"),default:""},{icon:"",default:"Pending"},{icon:o("lightbulb"),default:"New idea"},{icon:o("locked"),default:"Locked"},{icon:o("flight"),default:"En route"},{icon:"",default:"Archived"}],a=s.bind({});a.decorators=[(e,t)=>y`
            ${H.map((c,T)=>e({args:{colorScheme:t.args.colorScheme||(T+1).toString(),icon:t.args.icon||c.icon,default:t.args.default||c.default}}))}`];var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,f,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var $,b,S;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const F=["Basic","Truncating","AllColorSchemes"];export{a as AllColorSchemes,r as Basic,n as Truncating,F as __namedExportsOrder,z as default};
//# sourceMappingURL=Badge.stories.e98e5d23.js.map
