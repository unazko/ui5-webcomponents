import{x as y}from"./lit-element.57026f9a.js";import{l as t}from"./if-defined.08fba587.js";import{o as w}from"./unsafe-html.5df53a7b.js";import{D as L}from"./docs.c0974812.js";import{T as B}from"./TabLayout.94ac13df.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.dd88aaa2.js";import"./iframe.22e03dd9.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.fd2d0cd6.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const O={allItems:{control:{type:!1}},contentBackgroundDesign:{control:"select",options:["Solid","Translucent","Transparent"]},headerBackgroundDesign:{control:"select",options:["Solid","Translucent","Transparent"]},tabLayout:{control:"select",options:["Inline","Standard"]},tabsOverflowMode:{control:"select",options:["End","StartAndEnd"]},default:{control:{type:"text"}},overflowButton:{control:{type:"text"}},startOverflowButton:{control:{type:"text"}},"tab-select":{description:"Fired when a tab is selected.",table:{category:"events"},UI5CustomData:{parameters:[{name:"tab",type:"HTMLElement",description:"The selected <code>tab</code>."},{name:"tabIndex",type:"Integer",description:"The selected <code>tab</code> index in the flattened array of all tabs and their subTabs, provided by the <code>allItems</code> getter."}]}}},S={package:"@ui5/webcomponents"},u="ui5-tabcontainer",j={title:"Main/TabContainer",component:u,subcomponents:{Tab:"ui5-tab",TabSeparator:"ui5-tab-separator"},parameters:{docs:{page:L({...S,component:u})}},argTypes:O},r=e=>y`<ui5-tabcontainer
    ?fixed="${t(e.fixed)}"
    ?collapsed="${t(e.collapsed)}"
    tab-layout="${t(e.tabLayout)}"
    tabs-overflow-mode="${t(e.tabsOverflowMode)}"
    header-background-design="${t(e.headerBackgroundDesign)}"
    content-background-design="${t(e.contentBackgroundDesign)}"
    tabs-placement="${t(e.tabsPlacement)}"
>
    ${w(e.default)}
</ui5-tabcontainer>`,a=r.bind({});a.args={default:`<ui5-tab icon="menu" text="Tab 1">
    <ui5-label>Quibusdam, veniam! Architecto debitis iusto ad et, asperiores quisquam perferendis reprehenderit ipsa voluptate minus minima, perspiciatis cum. Totam harum necessitatibus numquam voluptatum.</ui5-label>
</ui5-tab>
<ui5-tab icon="activities" text="Tab 2" selected>
    <ui5-label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni facere error dicta beatae optio repudiandae vero, quidem voluptatibus perferendis eum maiores rem tempore voluptates aperiam eos enim delectus unde.</ui5-label>
</ui5-tab>
<ui5-tab icon="add" text="Tab 3">
    <ui5-label>Dignissimos debitis architecto temporibus doloribus reiciendis libero rem nemo, nobis quidem dolor praesentium, beatae voluptatum iste eveniet, nam voluptatem obcaecati ducimus dolore.</ui5-label>
</ui5-tab>
<ui5-tab icon="calendar" text="Tab 4">
    <ui5-label>Possimus ipsa eos impedit aut nisi repellendus recusandae, temporibus ducimus, necessitatibus tenetur facere, minima vero fugit rem reiciendis natus ratione quia numquam?</ui5-label>
</ui5-tab>
<ui5-tab-separator></ui5-tab-separator>
<ui5-tab icon="action-settings" text="Tab 5">
    <ui5-label>Explicabo laboriosam ab consequuntur, qui dignissimos inventore sapiente ullam quaerat ratione libero vero, beatae laudantium! Aperiam numquam tempore, laudantium perferendis recusandae autem.</ui5-label>
</ui5-tab>`};const i=r.bind({});i.args={collapsed:!0,fixed:!0,default:`<ui5-tab text="Home"></ui5-tab>
<ui5-tab text="What's new" selected></ui5-tab>
<ui5-tab text="Who are we"></ui5-tab>
<ui5-tab text="About"></ui5-tab>
<ui5-tab text="Contacts"></ui5-tab>`};const n=r.bind({});n.args={collapsed:!0,fixed:!0,default:`<ui5-tab text="Tab 1"></ui5-tab>
<ui5-tab text="Tab 2"></ui5-tab>
<ui5-tab text="Tab 3"></ui5-tab>
<ui5-tab text="Tab 4"></ui5-tab>
<ui5-tab text="Tab 5"></ui5-tab>
<ui5-tab text="Tab 6"></ui5-tab>
<ui5-tab text="Tab 7"></ui5-tab>
<ui5-tab text="Tab 8"></ui5-tab>
<ui5-tab text="Tab 9"></ui5-tab>
<ui5-tab text="Tab 10"></ui5-tab>
<ui5-tab text="Tab 11"></ui5-tab>
<ui5-tab text="Tab 12"></ui5-tab>
<ui5-tab text="Tab 13" selected></ui5-tab>
<ui5-tab text="Tab 14"></ui5-tab>
<ui5-tab text="Tab 15"></ui5-tab>
<ui5-tab text="Tab 16"></ui5-tab>
<ui5-tab text="Tab 17"></ui5-tab>
<ui5-tab text="Tab 18"></ui5-tab>
<ui5-tab text="Tab 19"></ui5-tab>
<ui5-tab text="Tab 20"></ui5-tab>
<ui5-tab text="Tab 21"></ui5-tab>
<ui5-tab text="Tab 22"></ui5-tab>
<ui5-tab text="Tab 23"></ui5-tab>`};const o=r.bind({});o.args={tabLayout:B.Inline,collapsed:!0,fixed:!0,default:`<ui5-tab icon="laptop" text="Monitors" additional-text="10"></ui5-tab>
<ui5-tab icon="video" text="Cameras" additional-text="2" selected></ui5-tab>
<ui5-tab icon="home" text="Rooms" additional-text="16"></ui5-tab>`};const s=r.bind({});s.args={default:`<ui5-tab text="Notes">
    Notes go here ...
</ui5-tab>
<ui5-tab text="Products">
    Products go here ...
    <ui5-tab slot="subTabs" text="Computers">
        Computers go here ...
        <ui5-tab slot="subTabs" text="Laptops" selected>
            Laptops go here ...
        </ui5-tab>
        <ui5-tab slot="subTabs" text="Desktops">
            <ui5-tab slot="subTabs" text="Work Stations">
                Work Stations go here ...
            </ui5-tab>
            <ui5-tab slot="subTabs" text="Game Stations">
                Game Stations go here ...
            </ui5-tab>
            Desktops go here ...
        </ui5-tab>
    </ui5-tab>
    <ui5-tab text="Phones" slot="subTabs">
        <ui5-tab text="Smartphones" slot="subTabs">
            Smartphones go here ...
        </ui5-tab>
        <ui5-tab text="Tablets" slot="subTabs">
            Tablets go here ...
        </ui5-tab>
        Phones go here ...
    </ui5-tab>
</ui5-tab>
<ui5-tab text="Orders">
    Orders go here ...
    <ui5-tab slot="subTabs" text="Attachments">
        Order attachments go here ...
    </ui5-tab>
</ui5-tab>`};var b,d,c;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,f;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var p,g,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var T,D,h;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(h=(D=o.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var $,v,k;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const z=["Basic","TextOnlyTabs","TextOnlyEndOverflow","InlineTabLayout","NestedTabs"];export{a as Basic,o as InlineTabLayout,s as NestedTabs,n as TextOnlyEndOverflow,i as TextOnlyTabs,z as __namedExportsOrder,j as default};
//# sourceMappingURL=TabContainer.stories.f893288b.js.map
