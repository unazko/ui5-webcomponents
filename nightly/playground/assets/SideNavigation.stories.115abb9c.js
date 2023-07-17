import{x as m}from"./lit-element.57026f9a.js";import{o as t}from"./unsafe-html.5df53a7b.js";import{l as c}from"./if-defined.08fba587.js";import{D as l}from"./docs.c0974812.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.dd88aaa2.js";import"./iframe.22e03dd9.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.fd2d0cd6.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const p={default:{control:{type:"text"}},fixedItems:{control:{type:"text"}},header:{control:{type:"text"}},"selection-change":{description:"Fired when the selection has changed via user interaction",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"sap.ui.webc.fiori.ISideNavigationItem|sap.ui.webc.fiori.ISideNavigationSubItem",description:"the clicked item."}]}}},g={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.8"};var n=Object.freeze,v=Object.defineProperty,f=(i,u)=>n(v(i,"raw",{value:n(u||i.slice())})),a;const o="ui5-side-navigation",k={title:"Fiori/SideNavigation",component:o,subcomponents:{SideNavigationItem:"ui5-side-navigation-item",SideNavigationSubItem:"ui5-side-navigation-sub-item"},parameters:{docs:{page:l({...g,component:o})}},argTypes:p},b=i=>m`
<ui5-side-navigation ?collapsed="${c(i.collapsed)}">
    ${i.header?t(i.header):null}
    ${t(i.default)}
    ${t(i.fixedItems)}
</ui5-side-navigation>`,e=b.bind({});e.args={default:`<ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>
    <ui5-side-navigation-item text="People" expanded="" icon="group">
        <ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="From Other Teams"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>
    <ui5-side-navigation-item text="Locations" icon="locate-me" selected=""></ui5-side-navigation-item>
    <ui5-side-navigation-item text="Events" icon="calendar">
        <ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>`,fixedItems:`<ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link"></ui5-side-navigation-item>
    <ui5-side-navigation-item slot="fixedItems" text="History" icon="history"></ui5-side-navigation-item>`};e.decorators=[i=>m(a||(a=f([`<style>
    ui5-side-navigation {
        height: 600px;
    }

    ui5-shellbar::part(root) {
        padding-inline-start: 0.5rem;
    }
</style>

<ui5-shellbar primary-title="UI5 Web Components" secondary-title="The Best Run SAP" show-co-pilot>
    <ui5-button icon="menu" slot="startButton" id="toggle"></ui5-button>
</ui5-shellbar>

`,`

<script>
    const sidenav = document.querySelector("ui5-side-navigation");
    document.getElementById("toggle").addEventListener("click", () => {
        sidenav.toggleAttribute("collapsed");
    });
<\/script>`])),i())];e.parameters={docs:{story:{iframeHeight:"700px",inline:!1}}};var s,r,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return html\`
<ui5-side-navigation ?collapsed="\${ifDefined(args.collapsed)}">
    \${args.header ? unsafeHTML(args.header) : null}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.fixedItems)}
</ui5-side-navigation>\`;
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const D=["Basic"];export{e as Basic,D as __namedExportsOrder,k as default};
//# sourceMappingURL=SideNavigation.stories.115abb9c.js.map
