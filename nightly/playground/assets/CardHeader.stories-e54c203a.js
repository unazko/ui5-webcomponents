import{x as o}from"./lit-element-c5a2b594.js";import{D as l}from"./docs-3d39008a.js";import{o as i}from"./unsafe-html-0ddd83da.js";import{l as e}from"./if-defined-c29cffe1.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-3acf43bc.js";import"./index-73b3191a.js";import"./iframe-3a53584d.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d69f7eeb.js";import"./client-fb0f3103.js";const c={avatar:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},action:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}}},m={package:"@ui5/webcomponents",since:"1.0.0-rc.15"},u="ui5-card-header",A={title:"Main/Card/Card Header",component:"CardHeader",parameters:{docs:{page:l({...m,component:u,showDefaultStoryOnly:!0})}},argTypes:c},p=t=>o`
<ui5-card style="width: 22rem">
    <ui5-card-header
    slot="header"
    title-text="${e(t.titleText)}"
    subtitle-text="${e(t.subtitleText)}"
    status="${e(t.status)}"
    ?interactive="${e(t.interactive)}"
    >
    ${i(t.avatar)}
    ${i(t.action)}
    </ui5-card-header>
        <ui5-list separators="None" style="margin-block-end: 0.75rem;">
        <ui5-li image="../assets/images/avatars/man_avatar_2.png" description="Software Architect">Richard Wilson</ui5-li>
        <ui5-li image="../assets/images/avatars/woman_avatar_3.png" description="Visual Designer">Elena Petrova</ui5-li>
        <ui5-li image="../assets/images/avatars/man_avatar_3.png" description="Quality Specialist">John Miller</ui5-li>
    </ui5-list>
</ui5-card>
    `,a=p.bind({});a.tags=["_hidden_"];a.args={titleText:"Team Space",subtitleText:"Direct Reports",status:"3 of 10",action:'<ui5-button design="Transparent" slot="action">View All</ui5-button>',avatar:'<ui5-icon name="group" slot="avatar"></ui5-icon>',interactive:!0};var r,s,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return html\`
<ui5-card style="width: 22rem">
    <ui5-card-header
    slot="header"
    title-text="\${ifDefined(args.titleText)}"
    subtitle-text="\${ifDefined(args.subtitleText)}"
    status="\${ifDefined(args.status)}"
    ?interactive="\${ifDefined(args.interactive)}"
    >
    \${unsafeHTML(args.avatar)}
    \${unsafeHTML(args.action)}
    </ui5-card-header>
        <ui5-list separators="None" style="margin-block-end: 0.75rem;">
        <ui5-li image="../assets/images/avatars/man_avatar_2.png" description="Software Architect">Richard Wilson</ui5-li>
        <ui5-li image="../assets/images/avatars/woman_avatar_3.png" description="Visual Designer">Elena Petrova</ui5-li>
        <ui5-li image="../assets/images/avatars/man_avatar_3.png" description="Quality Specialist">John Miller</ui5-li>
    </ui5-list>
</ui5-card>
    \`;
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const E=["Basic"];export{a as Basic,E as __namedExportsOrder,A as default};
