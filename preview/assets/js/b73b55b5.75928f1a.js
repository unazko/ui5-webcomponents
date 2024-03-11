"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[7860],{1576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(1085),o=t(1184);const r={},i="Ignore Custom HTML elements",c={id:"docs/advanced/ignore-custom-elements",title:"Ignore Custom HTML elements",description:"The ignoreCustomElements feature lets you describe all custom elements to be ignored and improve the rendering performance of the UI5 Web Components, by setting a given tag prefix.",source:"@site/docs/docs/2-advanced/10-ignore-custom-elements.md",sourceDirName:"docs/2-advanced",slug:"/docs/advanced/ignore-custom-elements",permalink:"/ui5-webcomponents/preview/docs/advanced/ignore-custom-elements",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Scrollbars customization",permalink:"/ui5-webcomponents/preview/docs/advanced/scrollbars-customization"},next:{title:"Styling and Theming",permalink:"/ui5-webcomponents/preview/docs/customizing/"}},a={},d=[{value:"When do I need to use the <code>ignoreCustomElements</code> feature?",id:"when-do-i-need-to-use-the-ignorecustomelements-feature",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ignore-custom-html-elements",children:"Ignore Custom HTML elements"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ignoreCustomElements"})," feature lets you describe all custom elements to be ignored and improve the rendering performance of the UI5 Web Components, by setting a given tag prefix."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { ignoreCustomElements } from "@ui5/webcomponents-base/dist/IgnoreElements.js";\r\nignoreCustomElements("app-");\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"when-do-i-need-to-use-the-ignorecustomelements-feature",children:["When do I need to use the ",(0,s.jsx)(n.code,{children:"ignoreCustomElements"})," feature?"]}),"\n",(0,s.jsx)(n.p,{children:"The feature is useful, when UI5 Web Components and used together with custom HTML elements with custom tags to make the application's markup more semantic."}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<ui5-card>\r\n    <app-trip-calendar></app-trip-calendar>\r\n</ui5-card>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ui5-card"})," is a UI5 Web Component, while the ",(0,s.jsx)(n.code,{children:"app-trip-calendar"})," is an app-defined custom HTML element with no JavaScript attached, with just semantic purpose. And, it is slotted in the content of the ",(0,s.jsx)(n.code,{children:"ui5-card"}),"."]}),"\n",(0,s.jsx)(n.p,{children:'When a web component of ours is about to be defined and registered in the global CustomElements registry, the framework checks if some of the slotted children are custom elements by checking the presence of a hyphen ("-") in their tag names. And, if this is true, the framework waits for the children to be defined and registered first, because the state or visual appearance of the parent may rely on the slotted elements/children.'}),"\n",(0,s.jsxs)(n.p,{children:["While this is required in many cases, for custom HTML elements with pure semantic purpose and no JavaScript class attached (f.e. ",(0,s.jsx)(n.code,{children:"app-trip-calendar"}),") - it's not.\r\nMoreover, it leads to increasing the ",(0,s.jsx)(n.code,{children:"time to render"})," parameter of the given web component (f.e.",(0,s.jsx)(n.code,{children:"ui5-card"}),").\r\nIn cases like this, we recommend using ",(0,s.jsx)(n.code,{children:"ignoreCustomElements"})," to let the UI5 Web Components framework treats such custom HTML elements as if they are standard HTML elements, such as: ",(0,s.jsx)(n.code,{children:"div"}),", ",(0,s.jsx)(n.code,{children:"span"}),", etc."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(4041);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);