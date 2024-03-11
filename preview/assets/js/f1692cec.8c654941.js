"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[8938],{7796:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var o=t(1085),i=t(1184);const a={},s="Get Started with UI5 Web Components & React",r={id:"docs/frameworks/React",title:"Get Started with UI5 Web Components & React",description:"In this tutorial, you will learn how to add UI5 Web Components to your application. You can add UI5 Web Components both to new React applications and to already existing ones.",source:"@site/docs/docs/4-frameworks/01-React.md",sourceDirName:"docs/4-frameworks",slug:"/docs/frameworks/React",permalink:"/ui5-webcomponents/preview/docs/frameworks/React",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Usage with Frameworks",permalink:"/ui5-webcomponents/preview/docs/frameworks/"},next:{title:"Get Started with UI5 Web Components & Angular",permalink:"/ui5-webcomponents/preview/docs/frameworks/Angular"}},c={},p=[{value:"Step 1. Create a new application. For example, with <code>create-react-app</code>.",id:"step-1-create-a-new-application-for-example-with-create-react-app",level:3},{value:"Step 2. Add UI5 Web Components.",id:"step-2-add-ui5-web-components",level:3},{value:"Step 3. Import the components that you are going to use.",id:"step-3-import-the-components-that-you-are-going-to-use",level:3},{value:"Step 4. Use the imported elements in your application.",id:"step-4-use-the-imported-elements-in-your-application",level:3},{value:"Step 5. Launch the application.",id:"step-5-launch-the-application",level:3},{value:"Additional Info",id:"additional-info",level:2},{value:"Event Binding",id:"event-binding",level:3},{value:"Boolean Properties Binding",id:"boolean-properties-binding",level:3},{value:"UI5 Web Components for React",id:"ui5-web-components-for-react",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"get-started-with-ui5-web-components--react",children:"Get Started with UI5 Web Components & React"}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, you will learn how to add UI5 Web Components to your application. You can add UI5 Web Components both to new React applications and to already existing ones."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Important:"})," To get the best development experience, we recommend using the ",(0,o.jsx)(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"UI5 Web Components for React"})," and follow the ",(0,o.jsx)(n.a,{href:"https://developers.sap.com/mission.react-spa.html",children:"UI5 Web Components for React \u0422utorial"}),'. UI5 Web Components for React library is a React implementation of UI5 Web Components which overcomes several limitations of React in handling web components in general, explained in the "Additional Info" section below.']}),"\n",(0,o.jsx)(n.p,{children:"Here are the steps to use pure UI5 Web Components in React:"}),"\n",(0,o.jsxs)(n.h3,{id:"step-1-create-a-new-application-for-example-with-create-react-app",children:["Step 1. Create a new application. For example, with ",(0,o.jsx)(n.code,{children:"create-react-app"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx create-react-app ui5-web-components-application\ncd ui5-web-components-application\n"})}),"\n",(0,o.jsx)(n.h3,{id:"step-2-add-ui5-web-components",children:"Step 2. Add UI5 Web Components."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install @ui5/webcomponents --save\n"})}),"\n",(0,o.jsx)(n.h3,{id:"step-3-import-the-components-that-you-are-going-to-use",children:"Step 3. Import the components that you are going to use."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import "@ui5/webcomponents/dist/Button.js";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"step-4-use-the-imported-elements-in-your-application",children:"Step 4. Use the imported elements in your application."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<ui5-button>Hello world!</ui5-button>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"step-5-launch-the-application",children:"Step 5. Launch the application."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn start\n"})}),"\n",(0,o.jsx)(n.h2,{id:"additional-info",children:"Additional Info"}),"\n",(0,o.jsx)(n.p,{children:"When developing with React, there are two slight React limitations you should know about. These are not related to UI5 Web Components per se, but with using custom elements in React in general."}),"\n",(0,o.jsx)(n.h3,{id:"event-binding",children:"Event Binding"}),"\n",(0,o.jsxs)(n.p,{children:["In order to use the events provided by UI5 Web Components, currently you need to get a ",(0,o.jsx)(n.code,{children:"ref"})," to the component because React doesn't support custom events. Here is an example of what you need to do in order to use the events provided by UI5 Web Components:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"class Home extends Component {\n\n    constructor (props) {\n        super(props);\n        this.switch = React.createRef();\n    }\n\n    componentDidMount() {\n        this.switch.addEventListener('change', event => {\n            console.log('switch is toggled');\n        })\n    }\n\n    render(){\n        return(\n            <ui5-switch ref={this.switch}></ui5-switch>\n        );\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"boolean-properties-binding",children:"Boolean Properties Binding"}),"\n",(0,o.jsxs)(n.p,{children:["For boolean properties like ",(0,o.jsx)(n.code,{children:"collapsed"}),"  in ",(0,o.jsx)(n.code,{children:"ui5-panel"}),", instead of setting true or false, you have to take care of the presence of the property. Here is an example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<ui5-panel header-text="Achievements" collapsed={!this.state.achievements.length || undefined}>\n    \x3c!-- Content of ui5-panel --\x3e\n</ui5-panel>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"ui5-web-components-for-react",children:"UI5 Web Components for React"}),"\n",(0,o.jsxs)(n.p,{children:["As mentioned above, for a better development experience (and to elegantly work around these 2 React limitations), check out UI5 Web Components for React, ",(0,o.jsx)(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"UI5 Web Components for React"})," and ",(0,o.jsx)(n.a,{href:"https://developers.sap.com/mission.react-spa.html",children:"this tutorial"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(4041);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);