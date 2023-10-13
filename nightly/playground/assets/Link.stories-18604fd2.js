import{x as b}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as u}from"./unsafe-html-0ddd83da.js";import{D as h}from"./docs-64f695a9.js";import{W as y}from"./WrappingType-b81e595a.js";import{L as $}from"./LinkDesign-37f699aa.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-36968a0b.js";import"./iframe-260d2129.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-1acb0406.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const w={design:{control:"select",options:["Default","Emphasized","Subtle"]},wrappingType:{control:"select",options:["None","Normal"]},default:{control:{type:"text"}},click:{description:"Fired when the component is triggered either with a mouse/tap or by using the Enter key.",table:{category:"events"},UI5CustomData:{parameters:[{name:"altKey",type:"Boolean",description:'Returns whether the "ALT" key was pressed when the event was triggered.'},{name:"ctrlKey",type:"Boolean",description:'Returns whether the "CTRL" key was pressed when the event was triggered.'},{name:"metaKey",type:"Boolean",description:'Returns whether the "META" key was pressed when the event was triggered.'},{name:"shiftKey",type:"Boolean",description:'Returns whether the "SHIFT" key was pressed when the event was triggered.'}]}}},D={package:"@ui5/webcomponents"},k="ui5-link",z={title:"Main/Link",component:"Link",parameters:{docs:{page:h({...D,component:k})}},argTypes:w},r=e=>b`<ui5-link
    design="${i(e.design)}"
    ?disabled="${i(e.disabled)}"
    href="${i(e.href)}"
    target="${i(e.target)}"
    wrappingType="${i(e.wrappingType)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-name-ref="${i(e.accessibleNameRef)}"
    accessible-role="${i(e.accessibleRole)}"
    accessibility-attributes="${i(e.accessibilityAttributes)}"
    style="${i(e.style)}"
>
    ${u(e.default)}
</ui5-link>`,s=r.bind({});s.args={default:"Standard Link",href:"https://www.sap.com",target:"_blank"};const a=r.bind({});a.args={default:"Link with Design",href:"https://www.sap.com",target:"_blank",design:$.Subtle};const t=r.bind({});t.args={default:"This is a really long link. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",href:"https://www.sap.com",target:"_blank",wrappingType:y.Normal,style:"width: 8rem"};var n,c,o;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:'args => html`<ui5-link\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    href="${ifDefined(args.href)}"\n    target="${ifDefined(args.target)}"\n    wrappingType="${ifDefined(args.wrappingType)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessible-role="${ifDefined(args.accessibleRole)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-link>`',...(o=(c=s.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:'args => html`<ui5-link\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    href="${ifDefined(args.href)}"\n    target="${ifDefined(args.target)}"\n    wrappingType="${ifDefined(args.wrappingType)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessible-role="${ifDefined(args.accessibleRole)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-link>`',...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var f,g,m;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`<ui5-link\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    href="${ifDefined(args.href)}"\n    target="${ifDefined(args.target)}"\n    wrappingType="${ifDefined(args.wrappingType)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessible-role="${ifDefined(args.accessibleRole)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-link>`',...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const O=["Basic","Design","TextWrapping"];export{s as Basic,a as Design,t as TextWrapping,O as __namedExportsOrder,z as default};
//# sourceMappingURL=Link.stories-18604fd2.js.map
