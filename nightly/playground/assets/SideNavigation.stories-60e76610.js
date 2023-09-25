import{x as a}from"./lit-element-c5a2b594.js";import{o as n}from"./unsafe-html-0ddd83da.js";import{l as b}from"./if-defined-c29cffe1.js";import{D as x}from"./docs-6b98569a.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-2ff5cf3c.js";import"./iframe-6b96fe34.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-ac11f6c5.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const f={default:{control:{type:"text"}},fixedItems:{control:{type:"text"}},header:{control:{type:"text"}},"selection-change":{description:"Fired when the selection has changed via user interaction",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"sap.ui.webc.fiori.ISideNavigationItem|sap.ui.webc.fiori.ISideNavigationSubItem",description:"the clicked item."}]}}},h={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.8"};var o=Object.freeze,y=Object.defineProperty,S=(i,v)=>o(y(i,"raw",{value:o(v||i.slice())})),s;const I="ui5-side-navigation",z={title:"Fiori/Side Navigation",component:"SideNavigation",subcomponents:{SideNavigationItem:"SideNavigationItem",SideNavigationSubItem:"SideNavigationSubItem"},parameters:{docs:{page:x({...h,component:I})}},argTypes:f},c=i=>a`
<ui5-side-navigation ?collapsed="${b(i.collapsed)}">
    ${i.header?n(i.header):null}
    ${n(i.default)}
    ${n(i.fixedItems)}
</ui5-side-navigation>`,p=i=>a`<style>
    ui5-side-navigation {
        height: 600px;
    }
</style>

${i()}`,e=c.bind({});e.args={default:`<ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>
    <ui5-side-navigation-item text="People" expanded icon="group">
        <ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="From Other Teams"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>
    <ui5-side-navigation-item text="Locations" icon="locate-me" selected></ui5-side-navigation-item>
    <ui5-side-navigation-item text="Events" icon="calendar">
        <ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>`,fixedItems:`<ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link"></ui5-side-navigation-item>
    <ui5-side-navigation-item slot="fixedItems" text="History" icon="history"></ui5-side-navigation-item>`};e.decorators=[p];e.parameters={docs:{story:{iframeHeight:"700px",inline:!1}}};const t=c.bind({});t.args={default:`<ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>
    <ui5-side-navigation-item text="People" expanded icon="group">
        <ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="From Other Team"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>
    <ui5-side-navigation-item text="Locations" icon="locate-me" selected></ui5-side-navigation-item>
    <ui5-side-navigation-item text="Events" icon="calendar">
        <ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>`,fixedItems:`<ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link"></ui5-side-navigation-item>
    <ui5-side-navigation-item slot="fixedItems" text="History" icon="history"></ui5-side-navigation-item>`};t.decorators=[p,i=>a(s||(s=S([`<style>
    ui5-shellbar::part(root) {
        padding-inline-start: 0.75rem;
        padding-inline-end: 1.25rem;
        border-radius: 0.5rem;
        box-shadow:
            0 0 0.125rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent),
            0 0.5rem 1rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent);
    }

    .tool-layout {
        padding: 0.5rem 0.5rem 0 0.5rem;
        background: color-mix(in srgb, black 4%, var(--sapBackgroundColor));
        display: grid;
        gap: 0.5rem;
        grid-template-rows: auto 1fr;
        grid-template-columns: auto 1fr;
    }

    .tool-layout > * {
        z-index: 1;
    }

    ui5-shellbar {
        grid-column: 1 / span 2;
        grid-row: 1 / 2;
    }

    ui5-side-navigation {
        border-radius: 0.5rem 0.5rem 0 0.5rem;
    }

    .content {
        background: var(--sapBackgroundColor);
        border-radius: 0.5rem 0.5rem 0 0;
        box-shadow:
            0 0 0.125rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent),
            0 0.5rem 1rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent);
    }
</style>

<div class="tool-layout">
    <ui5-shellbar
        primary-title="Product Name"
        secondary-title="Second Title"
        notifications-count="1"
        show-notifications>
        <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
        <ui5-input slot="searchField"></ui5-input>
        <ui5-button icon="menu" slot="startButton" id="toggle"></ui5-button>
        <ui5-avatar slot="profile">
            <img src="../assets/images/avatars/woman_avatar_5.png" />
        </ui5-avatar>
        <ui5-shellbar-item icon="source-code" text="Settings" title="Settings"></ui5-shellbar-item>
        <ui5-shellbar-item icon="background" text="Settings" title="Settings"></ui5-shellbar-item>
        <ui5-shellbar-item icon="activity-assigned-to-goal" text="Settings" title="Settings"></ui5-shellbar-item>
        <ui5-shellbar-item icon="action-settings" text="Settings" title="Settings"></ui5-shellbar-item>
    </ui5-shellbar>

    `,`

    <div class="content"></div>
</div>

<script>
    const sidenav = document.querySelector("ui5-side-navigation");
    document.getElementById("toggle").addEventListener("click", () => {
        sidenav.toggleAttribute("collapsed");
    });
<\/script>`])),i())];t.parameters={layout:"fullscreen",docs:{story:{iframeHeight:"700px",inline:!1}}};var r,d,m;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return html\`
<ui5-side-navigation ?collapsed="\${ifDefined(args.collapsed)}">
    \${args.header ? unsafeHTML(args.header) : null}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.fixedItems)}
</ui5-side-navigation>\`;
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,l,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`
<ui5-side-navigation ?collapsed="\${ifDefined(args.collapsed)}">
    \${args.header ? unsafeHTML(args.header) : null}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.fixedItems)}
</ui5-side-navigation>\`;
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const U=["Basic","ToolLayout"];export{e as Basic,t as ToolLayout,U as __namedExportsOrder,z as default};
//# sourceMappingURL=SideNavigation.stories-60e76610.js.map
