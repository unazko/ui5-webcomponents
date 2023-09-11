import{j as e}from"./jsx-runtime.97c1caca.js";import{M as o}from"./index.0dbfee3b.js";import{u as r}from"./index.3107f185.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.ef306bc9.js";import"../sb-preview/runtime.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";function n(s){const t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},r(),s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(o,{title:"Docs/Advanced/Ignore custom elements"}),`
`,e.exports.jsx(t.h1,{id:"ignore-custom-html-elements",children:"Ignore Custom HTML elements"}),`
`,e.exports.jsxs(t.p,{children:["The ",e.exports.jsx(t.code,{children:"ignoreCustomElements"})," feature lets you describe all custom elements to be ignored and improve the rendering performance of the UI5 Web Components, by setting a given tag prefix."]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import { ignoreCustomElements } from "@ui5/webcomponents-base/dist/IgnoreElements.js";\r
ignoreCustomElements("app-");
`})}),`
`,e.exports.jsxs(t.h2,{id:"when-do-i-need-to-use-the-ignorecustomelements-feature",children:["When do I need to use the ",e.exports.jsx(t.code,{children:"ignoreCustomElements"})," feature?"]}),`
`,e.exports.jsx(t.p,{children:"The feature is useful, when UI5 Web Components and used together with custom HTML elements with custom tags to make the application's markup more semantic."}),`
`,e.exports.jsx(t.p,{children:"For example:"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-html",children:`<ui5-card>\r
    <app-trip-calendar></app-trip-calendar>\r
</ui5-card>
`})}),`
`,e.exports.jsxs(t.p,{children:["The ",e.exports.jsx(t.code,{children:"ui5-card"})," is a UI5 Web Component, while the ",e.exports.jsx(t.code,{children:"app-trip-calendar"})," is an app-defined custom HTML element with no JavaScript attached, with just semantic purpose. And, it is slotted in the content of the ",e.exports.jsx(t.code,{children:"ui5-card"}),"."]}),`
`,e.exports.jsx(t.p,{children:'When a web component of ours is about to be defined and registered in the global CustomElements registry, the framework checks if some of the slotted children are custom elements by checking the presence of a hyphen ("-") in their tag names. And, if this is true, the framework waits for the children to be defined and registered first, because the state or visual appearance of the parent may rely on the slotted elements/children.'}),`
`,e.exports.jsxs(t.p,{children:["While this is required in many cases, for custom HTML elements with pure semantic purpose and no JavaScript class attached (f.e. ",e.exports.jsx(t.code,{children:"app-trip-calendar"}),`) - it's not.\r
Moreover, it leads to increasing the `,e.exports.jsx(t.code,{children:"time to render"})," parameter of the given web component (f.e.",e.exports.jsx(t.code,{children:"ui5-card"}),`).\r
In cases like this, we recommend using `,e.exports.jsx(t.code,{children:"ignoreCustomElements"})," to let the UI5 Web Components framework treats such custom HTML elements as if they are standard HTML elements, such as: ",e.exports.jsx(t.code,{children:"div"}),", ",e.exports.jsx(t.code,{children:"span"}),", etc."]})]})}function j(s={}){const{wrapper:t}=Object.assign({},r(),s.components);return t?e.exports.jsx(t,Object.assign({},s,{children:e.exports.jsx(n,s)})):n(s)}export{j as default};
//# sourceMappingURL=10-ignore-custom-elements.e66de2f1.js.map
