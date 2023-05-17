import{j as e}from"./jsx-runtime.796aa4d8.js";import{M as i}from"./index.5d79a43b.js";import{u as n}from"./index.04e75108.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.e1bff836.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function b(s={}){const{wrapper:r}=Object.assign({},n(),s.components);return r?e.exports.jsx(r,Object.assign({},s,{children:e.exports.jsx(o,{})})):o();function o(){const t=Object.assign({h1:"h1",p:"p",em:"em",strong:"strong",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",a:"a"},n(),s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(i,{title:"Docs/Getting started/Using features"}),`
`,e.exports.jsx(t.h1,{id:"using-additional-features",children:"Using Additional Features"}),`
`,e.exports.jsx(t.p,{children:e.exports.jsxs(t.em,{children:["Several UI5 Web Components packages offer ",e.exports.jsx(t.strong,{children:"additional features"}),". This section explains what these are and how to use them."]})}),`
`,e.exports.jsx(t.h2,{id:"what-are-additional-features",children:"What Are Additional Features"}),`
`,e.exports.jsxs(t.p,{children:["These are features that ",e.exports.jsx(t.strong,{children:"logically belong"})," to a component, but are not needed for the component's most common use cases, thus not part of the component's code by default."]}),`
`,e.exports.jsx(t.p,{children:"The goal of features is to keep the components' code base minimal and allow users greater flexibility over what code to bundle."}),`
`,e.exports.jsx(t.p,{children:"If you intend to use a component's additional feature, your app must import it explicitly."}),`
`,e.exports.jsx(t.h2,{id:"importing-additional-features",children:"Importing Additional Features"}),`
`,e.exports.jsx(t.p,{children:"Import the feature file from the respective NPM package:"}),`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.code,{children:'import "@ui5/<PACKAGE-NAME>/dist/features/<FEATURE-NAME>.js'})}),`
`,e.exports.jsx(t.p,{children:"Currently, only a few components offer additional features:"}),`
`,e.exports.jsxs(t.table,{children:[e.exports.jsx(t.thead,{children:e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.th,{children:"Package"}),e.exports.jsx(t.th,{children:"Affects"}),e.exports.jsx(t.th,{children:"Feature Import"}),e.exports.jsx(t.th,{children:"Description"})]})}),e.exports.jsxs(t.tbody,{children:[e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"main"})}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"ui5-color-palette"})}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"})}),e.exports.jsx(t.td,{children:'Support for "more colors dialog" for the color palette component'})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"main"})}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"ui5-input"})}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"@ui5/webcomponents/dist/features/InputSuggestions.js"})}),e.exports.jsx(t.td,{children:"Support for input suggestions while typing"})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"main"})}),e.exports.jsxs(t.td,{children:["Multiple (",e.exports.jsx(t.code,{children:"ui5-input"}),", ",e.exports.jsx(t.code,{children:"ui5-date-picker"}),", etc...)"]}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"@ui5/webcomponents/dist/features/InputElementsFormSupport.js"})}),e.exports.jsx(t.td,{children:"Support for using input components in forms"})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"fiori"})}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"ui5-shellbar"})}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"})}),e.exports.jsx(t.td,{children:'Support for a better (but bigger in size) animation for the "co-pilot" button in the shellbar component'})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"base"})}),e.exports.jsx(t.td,{children:"Framework"}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"@ui5/webcomponents-base/dist/features/OpenUI5Support.js"})}),e.exports.jsx(t.td,{children:"Integration with the OpenUI5 framework, allowing synchronization and resources re-use"})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"base"})}),e.exports.jsx(t.td,{children:"Multiple components within all libraries"}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"@ui5/webcomponents-base/dist/features/F6Navigation.js"})}),e.exports.jsx(t.td,{children:"Support for F6 fast groups navigation"})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"base"})}),e.exports.jsx(t.td,{children:"Date related components"}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"@ui5/webcomponents-base/dist/features/LegacyDateFormats.js"})}),e.exports.jsx(t.td,{children:"Support for legacy date formats"})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"localization"})}),e.exports.jsxs(t.td,{children:["Multiple (",e.exports.jsx(t.code,{children:"ui5-date-picker"}),", etc...)"]}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js"})}),e.exports.jsx(t.td,{children:"Buddhist calendar support"})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"localization"})}),e.exports.jsxs(t.td,{children:["Multiple (",e.exports.jsx(t.code,{children:"ui5-date-picker"}),", etc...)"]}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"@ui5/webcomponents-localization/dist/features/calendar/Islamic.js"})}),e.exports.jsx(t.td,{children:"Islamic calendar support"})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"localization"})}),e.exports.jsxs(t.td,{children:["Multiple (",e.exports.jsx(t.code,{children:"ui5-date-picker"}),", etc...)"]}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"@ui5/webcomponents-localization/dist/features/calendar/Japanese.js"})}),e.exports.jsx(t.td,{children:"Japanese calendar support"})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"localization"})}),e.exports.jsxs(t.td,{children:["Multiple (",e.exports.jsx(t.code,{children:"ui5-date-picker"}),", etc...)"]}),e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"@ui5/webcomponents-localization/dist/features/calendar/Persian.js"})}),e.exports.jsx(t.td,{children:"Persian calendar support"})]})]})]}),`
`,e.exports.jsx(t.p,{children:"For example:"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import "@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js;";
`})}),`
`,e.exports.jsxs(t.p,{children:["Next: ",e.exports.jsx(t.a,{href:"./?path=/docs/docs-getting-started-typescript-support--docs",children:"Typescript Support"})]})]})}}export{b as default};
//# sourceMappingURL=06-using-features.68b22133.js.map
