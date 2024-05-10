"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[3016],{2020:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var n=s(1085),i=s(1184);const d={slug:"../WizardStep"},r=void 0,l={id:"components/fiori/Wizard/WizardStep",title:"WizardStep",description:"A component that represents a logical step as part of the ui5-wizard.",source:"@site/docs/components/fiori/Wizard/WizardStep.mdx",sourceDirName:"components/fiori/Wizard",slug:"/components/fiori/WizardStep",permalink:"/ui5-webcomponents/nightly/components/fiori/WizardStep",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../WizardStep"},sidebar:"componentsSidebar",previous:{title:"Wizard",permalink:"/ui5-webcomponents/nightly/components/fiori/Wizard/"},next:{title:"Enums",permalink:"/ui5-webcomponents/nightly/components/fiori/enums/"}},c={},h=[{value:"Structure",id:"structure",level:3},{value:"Usage",id:"usage",level:3},{value:"Properties",id:"properties",level:2},{value:"titleText",id:"titletext",level:3},{value:"subtitleText",id:"subtitletext",level:3},{value:"icon",id:"icon",level:3},{value:"disabled",id:"disabled",level:3},{value:"selected",id:"selected",level:3},{value:"branching",id:"branching",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A component that represents a logical step as part of the ",(0,n.jsx)(t.code,{children:"ui5-wizard"}),".\nIt is meant to aggregate arbitrary HTML elements that form the content of a single step."]}),"\n",(0,n.jsx)(t.h3,{id:"structure",children:"Structure"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Each wizard step has arbitrary content."}),"\n",(0,n.jsxs)(t.li,{children:["Each wizard step might have texts - defined by the ",(0,n.jsx)(t.code,{children:"titleText"})," and ",(0,n.jsx)(t.code,{children:"subtitleText"})," properties."]}),"\n",(0,n.jsxs)(t.li,{children:["Each wizard step might have an icon - defined by the ",(0,n.jsx)(t.code,{children:"icon"})," property."]}),"\n",(0,n.jsxs)(t.li,{children:["Each wizard step might display a number in place of the ",(0,n.jsx)(t.code,{children:"icon"}),", when it's missing."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-wizard-step"})," component should be used only as slot of the ",(0,n.jsx)(t.code,{children:"ui5-wizard"})," component\nand should not be used standalone."]}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"titletext",children:"titleText"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the ",(0,n.jsx)(t.code,{children:"titleText"})," of the step.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," The text is displayed in the ",(0,n.jsx)(t.code,{children:"ui5-wizard"})," navigation header."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'""'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Since"}),(0,n.jsx)(t.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"subtitletext",children:"subtitleText"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the ",(0,n.jsx)(t.code,{children:"subtitleText"})," of the step.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," the text is displayed in the ",(0,n.jsx)(t.code,{children:"ui5-wizard"})," navigation header."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'""'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Since"}),(0,n.jsx)(t.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"icon",children:"icon"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the ",(0,n.jsx)(t.code,{children:"icon"})," of the step.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," The icon is displayed in the ",(0,n.jsx)(t.code,{children:"ui5-wizard"})," navigation header.",(0,n.jsx)("br",{}),"The SAP-icons font provides numerous options. See all the available icons in the ",(0,n.jsx)(t.a,{href:"https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html",children:"Icon Explorer"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"disabled",children:"disabled"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines if the step is ",(0,n.jsx)(t.code,{children:"disabled"}),". When disabled the step is displayed, but the user can't select the step by clicking or navigate to it with scrolling.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Step can't be ",(0,n.jsx)(t.code,{children:"selected"})," and ",(0,n.jsx)(t.code,{children:"disabled"})," at the same time. In this case the ",(0,n.jsx)(t.code,{children:"selected"})," property would take precedence."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"selected",children:"selected"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the step's ",(0,n.jsx)(t.code,{children:"selected"})," state - the step that is currently active.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Step can't be ",(0,n.jsx)(t.code,{children:"selected"})," and ",(0,n.jsx)(t.code,{children:"disabled"})," at the same time. In this case the ",(0,n.jsx)(t.code,{children:"selected"})," property would take precedence."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"branching",children:"branching"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["When ",(0,n.jsx)(t.code,{children:"branching"})," is enabled a dashed line would be displayed after the step, meant to indicate that the next step is not yet known and depends on user choice in the current step.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," It is recommended to use ",(0,n.jsx)(t.code,{children:"branching"})," on the last known step and later add new steps when it becomes clear how the wizard flow should continue."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines the step content."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<Node>"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(t.p,{children:"No events available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsx)(t.p,{children:"No CSS parts available for this component."})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},1184:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var n=s(4041);const i={},d=n.createContext(i);function r(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);