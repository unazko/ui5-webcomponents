import{x as p}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{o as d}from"./unsafe-html-0ddd83da.js";import{A as f,a as u}from"./AvatarShape-e8dfc172.js";import{D as v}from"./docs-3d39008a.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-3acf43bc.js";import"./index-73b3191a.js";import"./iframe-3a53584d.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d69f7eeb.js";import"./client-fb0f3103.js";const b={shape:{control:"select",options:["Circle","Square"]},size:{control:"select",options:["XS","S","M","L","XL"]},colorScheme:{control:"select",options:["Accent1","Accent2","Accent3","Accent4","Accent5","Accent6","Accent7","Accent8","Accent9","Accent10","Placeholder"]},default:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},badge:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}}},$={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},g=()=>p`
<ui5-avatar fallback-icon="employee" size="S" disabled="true">
  <img alt="Woman 1" src="../assets/images/avatars/man_avatar_1.png" />
</ui5-avatar>
(ui5-avatar size="S" disabled="true")

</br>

<ui5-avatar fallback-icon="employee" size="M">
  <img alt="Woman 1" src="../assets/images/avatars/man_avatar_1.png" />
</ui5-avatar> (ui5-avatar size="M")

</br>

<ui5-avatar size="L" disabled="true" initials="AB" color-scheme="Accent1"> </ui5-avatar> (ui5-avatar size="L" disabled="true" color-scheme="Accent1")

</br>

<ui5-avatar size="XL" initials="CD" color-scheme="Accent2"></ui5-avatar> (ui5-avatar size="XL" color-scheme="Accent2")
`,h="ui5-avatar",C={title:"Main/Avatar",component:"Avatar",argTypes:b,parameters:{docs:{page:v({...$,component:h})}}},m=e=>p`<ui5-avatar
    icon="${a(e.icon)}"
    size="${a(e.size)}"
    shape="${a(e.shape)}"
    style="${a(e.style)}"
    initials="${a(e.initials)}"
    color-scheme="${a(e.colorScheme)}"
    ?interactive="${a(e.interactive)}"
    ?disabled="${a(e.disabled)}"
    aria-haspopup="${a(e.ariaHaspopup)}"
    accessible-name="${a(e.accessibleName)}"
    fallback-icon="${a(e.fallbackIcon)}"
  >
    ${d(e.default)}
  </ui5-avatar>`,i=m.bind({});i.args={initials:"FJ",interactive:!0,accessibleName:"Avatar with accessible name"};const E=g.bind({}),s=m.bind({});s.args={size:f.XL,shape:u.Square,style:"width: 250px; height:250px; border: 1px solid var(--sapField_BorderColor)",default:`<img
    src="../assets/images/avatars/Lamp_avatar_01.jpg"
    alt="Lamp"
    style="object-fit: contain"
/>`};var t,r,n;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:'args => html`<ui5-avatar\n    icon="${ifDefined(args.icon)}"\n    size="${ifDefined(args.size)}"\n    shape="${ifDefined(args.shape)}"\n    style="${ifDefined(args.style)}"\n    initials="${ifDefined(args.initials)}"\n    color-scheme="${ifDefined(args.colorScheme)}"\n    ?interactive="${ifDefined(args.interactive)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    fallback-icon="${ifDefined(args.fallbackIcon)}"\n  >\n    ${unsafeHTML(args.default)}\n  </ui5-avatar>`',...(n=(r=i.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var c,o,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-avatar\n    icon="${ifDefined(args.icon)}"\n    size="${ifDefined(args.size)}"\n    shape="${ifDefined(args.shape)}"\n    style="${ifDefined(args.style)}"\n    initials="${ifDefined(args.initials)}"\n    color-scheme="${ifDefined(args.colorScheme)}"\n    ?interactive="${ifDefined(args.interactive)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    fallback-icon="${ifDefined(args.fallbackIcon)}"\n  >\n    ${unsafeHTML(args.default)}\n  </ui5-avatar>`',...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const j=["Basic","TypesAndSizes","Styles"];export{i as Basic,s as Styles,E as TypesAndSizes,j as __namedExportsOrder,C as default};
