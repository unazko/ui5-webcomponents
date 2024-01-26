import{x as r}from"./lit-element-c5a2b594.js";import{l as o}from"./if-defined-c29cffe1.js";import{D as s}from"./docs-65fd78d9.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-2a6467c7.js";import"./index-6397ff69.js";import"./iframe-e61154d2.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-09d86f83.js";import"./client-fb0f3103.js";const c={design:{control:"select",options:["Default","Positive","Negative","Transparent","Emphasized","Attention"]}},l={package:"@ui5/webcomponents-fiori"},p="ui5-notification-action",S={title:"Fiori/Notification List Item/Notification Action",component:"NotificationAction",parameters:{docs:{page:s({...l,component:p,showDefaultStoryOnly:!0}),story:{iframeHeight:"470px",inline:!1}}},argTypes:c},m=i=>r`<ui5-list header-text="Notifications">
    <ui5-li-notification
        title-text="New order (#2525)"
        priority="High">
        <ui5-notification-action
            icon="${o(i.icon)}"
            text="${o(i.text)}"
            slot="actions">
        </ui5-notification-action>
        <ui5-avatar size="XS" slot="avatar">
            <img src="../assets/images/avatars/woman_avatar_1.png">
        </ui5-avatar>
        And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>
</ui5-list>
`,t=m.bind({});t.tags=["_hidden_"];t.args={text:"Accept",icon:"accept"};var e,a,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  return html\`<ui5-list header-text="Notifications">
    <ui5-li-notification
        title-text="New order (#2525)"
        priority="High">
        <ui5-notification-action
            icon="\${ifDefined(args.icon)}"
            text="\${ifDefined(args.text)}"
            slot="actions">
        </ui5-notification-action>
        <ui5-avatar size="XS" slot="avatar">
            <img src="../assets/images/avatars/woman_avatar_1.png">
        </ui5-avatar>
        And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>
</ui5-list>
\`;
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["Basic"];export{t as Basic,$ as __namedExportsOrder,S as default};
