"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[2440],{3088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>T,frontMatter:()=>b,metadata:()=>f,toc:()=>v});var s=n(1085),i=n(1184);const l='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-illustrated-message name="UnableToUpload">\n        <ui5-button design="Emphasized">Action 1</ui5-button>\n        <ui5-button>Action 2</ui5-button>\n    </ui5-illustrated-message>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',o='import "@ui5/webcomponents/dist/Button.js";\n\nimport "@ui5/webcomponents-fiori/dist/IllustratedMessage.js";\nimport "@ui5/webcomponents-fiori/dist/illustrations/UnableToUpload.js";';function r(e){const{Editor:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(t,{html:l,js:o})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-illustrated-message name="UnableToUpload">\n        <ui5-title slot="title" level="H1">Something went wrong</ui5-title>\n        <div slot="subtitle">\n            Please try again or contact us at\n            <ui5-link>example@example.com</ui5-link>\n        </div>\n        <ui5-button icon="refresh">Try again</ui5-button>\n    </ui5-illustrated-message>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/Link.js";\n\nimport "@ui5/webcomponents-fiori/dist/IllustratedMessage.js";\nimport "@ui5/webcomponents-fiori/dist/illustrations/UnableToUpload.js";';function h(e){const{Editor:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(t,{html:c,js:a})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}const u='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="openDialogButton">Open Dialog</ui5-button>\n    <ui5-dialog id="hello-dialog" header-text="Error">\n        <ui5-illustrated-message name="UnableToLoad"></ui5-illustrated-message>\n        <ui5-bar design="Footer" slot="footer">\n            <ui5-button id="closeDialogButton" design="Emphasized" slot="endContent">Close</ui5-button>\n        </ui5-bar>\n    </ui5-dialog>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',j='import "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Dialog.js";\n\nimport "@ui5/webcomponents-fiori/dist/Bar.js";\nimport "@ui5/webcomponents-fiori/dist/IllustratedMessage.js";\nimport "@ui5/webcomponents-fiori/dist/illustrations/UnableToLoad.js";\n\nconst dialogOpener = document.getElementById("openDialogButton");\nconst dialog = document.getElementById("hello-dialog");\nconst dialogCloser = document.getElementById("closeDialogButton");\ndialogOpener.addEventListener("click", function () {\n    dialog.show();\n});\ndialogCloser.addEventListener("click", function () {\n    dialog.close();\n});';function p(e){const{Editor:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(t,{html:u,js:j})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}const b={},g=void 0,f={id:"components/fiori/IllustratedMessage",title:"IllustratedMessage",description:"An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging",source:"@site/docs/components/fiori/IllustratedMessage.mdx",sourceDirName:"components/fiori",slug:"/components/fiori/IllustratedMessage",permalink:"/ui5-webcomponents/nightly/components/fiori/IllustratedMessage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"FlexibleColumnLayout",permalink:"/ui5-webcomponents/nightly/components/fiori/FlexibleColumnLayout"},next:{title:"MediaGallery",permalink:"/ui5-webcomponents/nightly/components/fiori/MediaGallery/"}},y={},v=[{value:"Structure",id:"structure",level:3},{value:"Usage",id:"usage",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"name",id:"name",level:3},{value:"size",id:"size",level:3},{value:"subtitleText",id:"subtitletext",level:3},{value:"titleText",id:"titletext",level:3},{value:"accessibleNameRef",id:"accessiblenameref",level:3},{value:"titleLevel",id:"titlelevel",level:3},{value:"Slots",id:"slots",level:2},{value:"title",id:"title",level:3},{value:"subtitle",id:"subtitle",level:3},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Custom Title",id:"custom-title",level:3},{value:"IllustratedMessage in Dialog",id:"illustratedmessage-in-dialog",level:3}];function w(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging\nillustration, and conversational tone to better communicate an empty or a success state than just show\na message alone."}),"\n",(0,s.jsxs)(t.p,{children:["Each illustration has default internationalised title and subtitle texts. Also they can be managed with\n",(0,s.jsx)(t.code,{children:"titleText"})," and ",(0,s.jsx)(t.code,{children:"subtitleText"})," properties."]}),"\n",(0,s.jsxs)(t.p,{children:["To display the desired illustration, use the ",(0,s.jsx)(t.code,{children:"name"})," property, where you can find the list of all available illustrations."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," By default the \u201cBeforeSearch\u201d illustration is loaded. To use other illustrations, make sure you import them in addition, for example:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js"'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Illustrations starting with the \u201cTnt\u201d prefix are part of another illustration set. For example to use the \u201cTntSuccess\u201d illustration, add the following import::"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/illustrations/tnt/Success.js"'})}),"\n",(0,s.jsx)(t.h3,{id:"structure",children:"Structure"}),"\n",(0,s.jsx)(t.p,{children:"The IllustratedMessage consists of the following elements, which are displayed below each other in the following order:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Illustration"}),"\n",(0,s.jsx)(t.li,{children:"Title"}),"\n",(0,s.jsx)(t.li,{children:"Subtitle"}),"\n",(0,s.jsx)(t.li,{children:"Actions"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ui5-illustrated-message"})," is meant to be used inside container component, for example a ",(0,s.jsx)(t.code,{children:"ui5-card"}),",\na ",(0,s.jsx)(t.code,{children:"ui5-dialog"})," or a ",(0,s.jsx)(t.code,{children:"ui5-page"})]}),"\n",(0,s.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/IllustratedMessage.js";'})}),"\n",(0,s.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(d,{}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h3,{id:"name",children:"name"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Defines the illustration name that will be displayed in the component.",(0,s.jsx)("br",{}),"Example:",(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"name='BeforeSearch'"}),", ",(0,s.jsx)(t.code,{children:"name='UnableToUpload'"}),", etc..",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," To use the TNT illustrations, you need to set the ",(0,s.jsx)(t.code,{children:"tnt"})," or ",(0,s.jsx)(t.code,{children:"Tnt"})," prefix in front of the icon's name.",(0,s.jsx)("br",{}),"Example:",(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"name='tnt/Avatar'"})," or ",(0,s.jsx)(t.code,{children:"name='TntAvatar'"}),".",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," By default the ",(0,s.jsx)(t.code,{children:"BeforeSearch"})," illustration is loaded. When using an illustration type, other than the default, it should be loaded in addition:",(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";'}),(0,s.jsx)("br",{}),"For TNT illustrations:",(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/illustrations/tnt/SessionExpired.js";'})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"size",children:"size"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Determines which illustration breakpoint variant is used.",(0,s.jsx)("br",{}),"As ",(0,s.jsx)(t.code,{children:"IllustratedMessage"})," adapts itself around the ",(0,s.jsx)(t.code,{children:"Illustration"}),", the other elements of the component are displayed differently on the different breakpoints/illustration sizes."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"Auto" | "Base" | "Dot" | "Spot" | "Dialog" | "Scene"'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Since"}),(0,s.jsx)(t.td,{children:"1.5.0"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"subtitletext",children:"subtitleText"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Defines the subtitle of the component.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," Using this property, the default subtitle text of illustration will be overwritten.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," Using ",(0,s.jsx)(t.code,{children:"subtitle"})," slot, the default of this property will be overwritten."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"titletext",children:"titleText"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Defines the title of the component.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," Using this property, the default title text of illustration will be overwritten."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"accessiblenameref",children:"accessibleNameRef"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Receives id(or many ids) of the elements that label the component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Since"}),(0,s.jsx)(t.td,{children:"1.7.0"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"titlelevel",children:"titleLevel"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Defines the semantic level of the title.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," Used for accessibility purposes only.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," Doesn't take effect when ",(0,s.jsx)(t.code,{children:"title"})," slot is being used."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"H1" | "H2" | "H3" | "H4" | "H5" | "H6"'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Since"}),(0,s.jsx)(t.td,{children:"1.20.0"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(t.h3,{id:"title",children:"title"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Defines the title of the component.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," Using this slot, the default title text of illustration and the value of ",(0,s.jsx)(t.code,{children:"title"})," property will be overwritten."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Array<HTMLElement> & string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Since"}),(0,s.jsx)(t.td,{children:"1.7.0"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"subtitle",children:"subtitle"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Defines the subtitle of the component.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," Using this slot, the default subtitle text of illustration and the value of ",(0,s.jsx)(t.code,{children:"subtitleText"})," property will be overwritten."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Array<HTMLElement>"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Since"}),(0,s.jsx)(t.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Defines the component actions."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Array<IButton>"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(t.p,{children:"No events available for this component."}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,s.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"subtitle"}),(0,s.jsxs)(t.td,{children:["Used to style the subtitle wrapper of the ",(0,s.jsx)(t.code,{children:"ui5-illustrated-message"})]})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,s.jsx)(t.h3,{id:"custom-title",children:"Custom Title"}),"\n",(0,s.jsx)(t.p,{children:"By default the IllustratedMessage displays built-in title, but a custom title can be also set."}),"\n",(0,s.jsx)(x,{}),"\n",(0,s.jsx)(t.h3,{id:"illustratedmessage-in-dialog",children:"IllustratedMessage in Dialog"}),"\n",(0,s.jsx)(t.p,{children:"In genral IllustratedMessage can be displayed in many places and cases - one of them is inside Dialog."}),"\n",(0,s.jsx)(m,{})]})}function T(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}},1184:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(4041);const i={},l=s.createContext(i);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);