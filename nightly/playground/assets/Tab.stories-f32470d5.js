import{x as r}from"./lit-element-c5a2b594.js";import{l as e}from"./if-defined-c29cffe1.js";import{o}from"./unsafe-html-0ddd83da.js";import{D as b}from"./docs-3d39008a.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-3acf43bc.js";import"./index-73b3191a.js";import"./iframe-3a53584d.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d69f7eeb.js";import"./client-fb0f3103.js";const d={design:{control:"select",options:["Default","Positive","Negative","Critical","Neutral"]},default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}},subTabs:{control:{type:"text"},table:{type:{summary:"Array<ITab>"}}},getTabInStripDomRef:{description:`Returns the DOM reference of the tab that is placed in the header.
<b>Note:</b> Tabs, placed in the <code>subTabs</code> slot of other tabs are not shown in the header. Calling this method on such tabs will return <code>null</code>.
<b>Note:</b> If you need a DOM ref to the tab content please use the <code>getDomRef</code> method.`,table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"ITab | null",references:[{name:"ITab",package:"@ui5/webcomponents",module:"dist/Interfaces.js"}]}}}}},u={package:"@ui5/webcomponents"},c="ui5-tab",N={title:"Main/Tab Container/Tab",component:"Tab",parameters:{docs:{page:b({...u,component:c,showDefaultStoryOnly:!0})}},argTypes:d},l=t=>r`
<ui5-tabcontainer>
    <ui5-tab
    additional-text="${e(t.additionalText)}"
    design="${e(t.design)}"
    ?disabled="${e(t.disabled)}"
    icon="${e(t.icon)}"
    ?selected="${e(t.selected)}"
    text="${e(t.text)}"
    >
        ${o(t.default)}	
        ${o(t.subTabs)}	
    </ui5-tab>
</ui5-tabcontainer>`,a=l.bind({});a.tags=["_hidden_"];a.args={text:"Products",default:"Products go here",subTabs:`	<ui5-tab slot="subTabs" text="Computers">
    Computers go here ...
    <ui5-tab slot="subTabs" text="Laptops">
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
</ui5-tab>`};var s,i,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return html\`
<ui5-tabcontainer>
    <ui5-tab
    additional-text="\${ifDefined(args.additionalText)}"
    design="\${ifDefined(args.design)}"
    ?disabled="\${ifDefined(args.disabled)}"
    icon="\${ifDefined(args.icon)}"
    ?selected="\${ifDefined(args.selected)}"
    text="\${ifDefined(args.text)}"
    >
        \${unsafeHTML(args.default)}	
        \${unsafeHTML(args.subTabs)}	
    </ui5-tab>
</ui5-tabcontainer>\`;
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const _=["Basic"];export{a as Basic,_ as __namedExportsOrder,N as default};
