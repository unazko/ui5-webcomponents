import{x as h}from"./lit-element.57026f9a.js";import{l as s}from"./if-defined.08fba587.js";import{o as l}from"./unsafe-html.5df53a7b.js";import{D as P}from"./docs.10b217e0.js";import{B as f}from"./BreadcrumbsDesign.e817237d.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.7ef5f1df.js";import"./iframe.e1bff836.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.5d79a43b.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const y={design:{control:"select",options:["NoCurrentPage","Standard"]},separatorStyle:{control:"select",options:["BackSlash","DoubleBackSlash","DoubleGreaterThan","DoubleSlash","GreaterThan","Slash"]},default:{control:{type:"text"}},"item-click":{description:"Fires when a <code>BreadcrumbsItem</code> is clicked. <b>Note:</b> You can prevent browser location change by calling <code>event.preventDefault()</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The clicked item."},{name:"altKey",type:"Boolean",description:'Returns whether the "ALT" key was pressed when the event was triggered.'},{name:"ctrlKey",type:"Boolean",description:'Returns whether the "CTRL" key was pressed when the event was triggered.'},{name:"metaKey",type:"Boolean",description:'Returns whether the "META" key was pressed when the event was triggered.'},{name:"shiftKey",type:"Boolean",description:'Returns whether the "SHIFT" key was pressed when the event was triggered.'}]}}},v={package:"@ui5/webcomponents",since:"1.0.0-rc.15"},i="ui5-breadcrumbs",E={title:"Main/Breadcrumbs",component:i,subcomponents:{BreadcrumbsItem:"ui5-breadcrumbs-item"},parameters:{docs:{page:P({...v,component:i})}},argTypes:y},g=t=>h`<ui5-breadcrumbs
        design="${s(t.design)}"
        separator-style="${s(t.separatorStyle)}"
    >
    ${l(t.default)}
</ui5-breadcrumbs>`,e=g.bind({});e.args={default:`<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page </ui5-breadcrumbs-item>
    <ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
    <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
    `};const r=g.bind({});r.args={design:f.NoCurrentPage,default:`<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page
</ui5-breadcrumbs-item>
<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>`};const a=()=>h`
    <div>
        <ui5-breadcrumbs separator-style="Slash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="BackSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleBackSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleGreaterThan">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="GreaterThan">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
`;var m,u,b;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`<ui5-breadcrumbs\n        design="${ifDefined(args.design)}"\n        separator-style="${ifDefined(args.separatorStyle)}"\n    >\n    ${unsafeHTML(args.default)}\n</ui5-breadcrumbs>`',...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var c,n,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-breadcrumbs\n        design="${ifDefined(args.design)}"\n        separator-style="${ifDefined(args.separatorStyle)}"\n    >\n    ${unsafeHTML(args.default)}\n</ui5-breadcrumbs>`',...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var o,p,w;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => html\`
    <div>
        <ui5-breadcrumbs separator-style="Slash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="BackSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleBackSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleGreaterThan">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="GreaterThan">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
\``,...(w=(p=a.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};const A=["Basic","DesignNoCurrentPage","SeparatorStyle"];export{e as Basic,r as DesignNoCurrentPage,a as SeparatorStyle,A as __namedExportsOrder,E as default};
//# sourceMappingURL=Breadcrumbs.stories.4fba64fa.js.map
