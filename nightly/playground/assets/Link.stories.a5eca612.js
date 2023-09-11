import{x as b}from"./lit-element.3a4d34a1.js";import{l as i}from"./if-defined.d89d00ab.js";import{o as u}from"./unsafe-html.3b27b0e6.js";import{D as h}from"./docs.51924474.js";import{W as y}from"./WrappingType.16fc58a8.js";import{L as $}from"./LinkDesign.238de7f4.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.be39b920.js";import"./iframe.ef306bc9.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.0dbfee3b.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const w={design:{control:"select",options:["Default","Emphasized","Subtle"]},wrappingType:{control:"select",options:["None","Normal"]},default:{control:{type:"text"}},click:{description:"Fired when the component is triggered either with a mouse/tap or by using the Enter key.",table:{category:"events"},UI5CustomData:{parameters:[{name:"altKey",type:"Boolean",description:'Returns whether the "ALT" key was pressed when the event was triggered.'},{name:"ctrlKey",type:"Boolean",description:'Returns whether the "CTRL" key was pressed when the event was triggered.'},{name:"metaKey",type:"Boolean",description:'Returns whether the "META" key was pressed when the event was triggered.'},{name:"shiftKey",type:"Boolean",description:'Returns whether the "SHIFT" key was pressed when the event was triggered.'}]}}},D={package:"@ui5/webcomponents"},k="ui5-link",F={title:"Main/Link",component:"Link",parameters:{docs:{page:h({...D,component:k})}},argTypes:w},n=e=>b`<ui5-link
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
</ui5-link>`,s=n.bind({});s.args={default:"Standard Link",href:"https://www.sap.com",target:"_blank"};const a=n.bind({});a.args={default:"Link with Design",href:"https://www.sap.com",target:"_blank",design:$.Subtle};const t=n.bind({});t.args={default:"This is a really long link. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",href:"https://www.sap.com",target:"_blank",wrappingType:y.Normal,style:"width: 8rem"};var r,c,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:'args => html`<ui5-link\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    href="${ifDefined(args.href)}"\n    target="${ifDefined(args.target)}"\n    wrappingType="${ifDefined(args.wrappingType)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessible-role="${ifDefined(args.accessibleRole)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-link>`',...(o=(c=s.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:'args => html`<ui5-link\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    href="${ifDefined(args.href)}"\n    target="${ifDefined(args.target)}"\n    wrappingType="${ifDefined(args.wrappingType)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessible-role="${ifDefined(args.accessibleRole)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-link>`',...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var f,g,m;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`<ui5-link\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    href="${ifDefined(args.href)}"\n    target="${ifDefined(args.target)}"\n    wrappingType="${ifDefined(args.wrappingType)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessible-role="${ifDefined(args.accessibleRole)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-link>`',...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const z=["Basic","Design","TextWrapping"];export{s as Basic,a as Design,t as TextWrapping,z as __namedExportsOrder,F as default};
//# sourceMappingURL=Link.stories.a5eca612.js.map
