"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[4575],{1427:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=n(1085),r=n(1184);const i={},o="Creating a Custom UI5 Web Components Package",d={id:"docs/development/custom-UI5-Web-Components-Packages",title:"Creating a Custom UI5 Web Components Package",description:"This tutorial explains how to:",source:"@site/docs/docs/5-development/01-custom-UI5-Web-Components-Packages.md",sourceDirName:"docs/5-development",slug:"/docs/development/custom-UI5-Web-Components-Packages",permalink:"/ui5-webcomponents/preview/docs/development/custom-UI5-Web-Components-Packages",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"UI5 Web Components Custom Development",permalink:"/ui5-webcomponents/preview/docs/development/"},next:{title:"Developing Custom UI5 Web Components",permalink:"/ui5-webcomponents/preview/docs/development/custom-UI5-Web-Components"}},c={},l=[{value:"Step 1. Create an NPM package.",id:"step-1-create-an-npm-package",level:2},{value:"Run the init command.",id:"run-the-init-command",level:3},{value:"Follow the prompts.",id:"follow-the-prompts",level:3},{value:"Your package is ready!",id:"your-package-is-ready",level:3},{value:"Step 2. Run the dev server and test the build.",id:"step-2-run-the-dev-server-and-test-the-build",level:2},{value:"Understanding the Project Structure",id:"understanding-the-project-structure",level:2},{value:"<code>package.json</code>",id:"packagejson",level:3},{value:"Files in the main directory",id:"files-in-the-main-directory",level:3},{value:"The <code>config/</code> directory",id:"the-config-directory",level:3},{value:"Custom configuration",id:"custom-configuration",level:4},{value:"The <code>src/</code> directory",id:"the-src-directory",level:3},{value:"Class and template files",id:"class-and-template-files",level:4},{value:"Theming-related files",id:"theming-related-files",level:4},{value:"i18n files",id:"i18n-files",level:4},{value:"Assets (additional themes, i18n texts, etc.)",id:"assets-additional-themes-i18n-texts-etc",level:4},{value:"The <code>test/</code> directory",id:"the-test-directory",level:3},{value:"Public Consumption of Your Custom UI5 Web Components Package",id:"public-consumption-of-your-custom-ui5-web-components-package",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"creating-a-custom-ui5-web-components-package",children:"Creating a Custom UI5 Web Components Package"}),"\n",(0,t.jsx)(s.p,{children:"This tutorial explains how to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Create an NPM package for your own UI5 Web Components."}),"\n",(0,t.jsxs)(s.li,{children:["Use UI5 Web Components' standard build tools: ",(0,t.jsx)(s.code,{children:"@ui5/webcomponents-tools"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Gain all ",(0,t.jsx)(s.code,{children:"@ui5/webcomponents"})," capabilities such as HBS template support, i18n, theming, test setup, etc."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," Whether you use ",(0,t.jsx)(s.code,{children:"npm"})," or ",(0,t.jsx)(s.code,{children:"yarn"})," is a matter of preference."]}),"\n",(0,t.jsx)(s.h2,{id:"step-1-create-an-npm-package",children:"Step 1. Create an NPM package."}),"\n",(0,t.jsx)(s.h3,{id:"run-the-init-command",children:"Run the init command."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," The following command will ",(0,t.jsx)(s.strong,{children:"create a new directory"})," and initialize your package there.\nMake sure you haven't created a directory yourself."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["With ",(0,t.jsx)(s.strong,{children:"npm"}),":"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"npm init @ui5/webcomponents-package"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"npm init @ui5/webcomponents-package <NEW-PACKAGE-NAME>"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["With ",(0,t.jsx)(s.strong,{children:"yarn"}),":"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"yarn create @ui5/webcomponents-package"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"yarn create @ui5/webcomponents-package <NEW-PACKAGE-NAME>"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["where ",(0,t.jsx)(s.code,{children:"<NEW-PACKAGE-NAME>"})," is the name of your new package (and the name of the directory to be created), for example:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"npm init @ui5/webcomponents-package my-components"})}),"\n",(0,t.jsxs)(s.p,{children:["will create a ",(0,t.jsx)(s.code,{children:"my-components"})," directory and initialize the package there."]}),"\n",(0,t.jsx)(s.h3,{id:"follow-the-prompts",children:"Follow the prompts."}),"\n",(0,t.jsx)(s.p,{children:"The initialization script will ask you to choose:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.strong,{children:"name"})," of your package (if you did not already pass a name when running the command above);"]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.strong,{children:"port"})," for your dev server (",(0,t.jsx)(s.code,{children:"8080"})," by default - just press Enter to select this);"]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.strong,{children:"tag"})," of the sample web component that will be created (",(0,t.jsx)(s.code,{children:"my-first-component"})," by default - just press Enter to select this)."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"your-package-is-ready",children:"Your package is ready!"}),"\n",(0,t.jsx)(s.p,{children:"Just follow the instructions:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"cd <NEW-PACKAGE-NAME>"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"npm i"})," (or ",(0,t.jsx)(s.code,{children:"yarn"})," if you prefer)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"npm start"})," (or ",(0,t.jsx)(s.code,{children:"yarn start"})," if you prefer)"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"step-2-run-the-dev-server-and-test-the-build",children:"Step 2. Run the dev server and test the build."}),"\n",(0,t.jsx)(s.p,{children:"To run the dev server, as instructed above:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"npm run start"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"yarn start"})}),"\n",(0,t.jsx)(s.p,{children:"and once the project is built for the first time, the browser will automatically open the dev server URL."}),"\n",(0,t.jsx)(s.p,{children:"You can also run the tests:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"npm run test"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"yarn test"})}),"\n",(0,t.jsx)(s.p,{children:"and the production build:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"npm run build"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"yarn build"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," In order to run the tests for the first time, you must have built the project with either ",(0,t.jsx)(s.code,{children:"start"})," or ",(0,t.jsx)(s.code,{children:"build"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"That's it!"}),"\n",(0,t.jsx)(s.h2,{id:"understanding-the-project-structure",children:"Understanding the Project Structure"}),"\n",(0,t.jsx)(s.h3,{id:"packagejson",children:(0,t.jsx)(s.code,{children:"package.json"})}),"\n",(0,t.jsxs)(s.p,{children:["The initialization script will add several packages as dependencies.\nThese three ",(0,t.jsx)(s.code,{children:"@ui5/"})," packages will serve as the foundation of your own package and Web Components."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Package"}),(0,t.jsx)(s.th,{children:"Type of Dependency"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"@ui5/webcomponents-base"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"dependency"})}),(0,t.jsx)(s.td,{children:"Base classes and framework"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"@ui5/webcomponents-theming"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"dependency"})}),(0,t.jsx)(s.td,{children:"Base theming assets"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"@ui5/webcomponents-tools"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"devDependency"})}),(0,t.jsx)(s.td,{children:"Build tools and configuration assets"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["The initialization script will create several NPM scripts for you in ",(0,t.jsx)(s.code,{children:"package.json"}),"."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Task"}),(0,t.jsx)(s.th,{children:"Purpose"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clean"}),(0,t.jsxs)(s.td,{children:["Delete the ",(0,t.jsx)(s.code,{children:"dist/"})," directory with the build output."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"build"}),(0,t.jsxs)(s.td,{children:["Production build to the ",(0,t.jsx)(s.code,{children:"dist/"})," directory."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lint"}),(0,t.jsxs)(s.td,{children:["Run a static code scan with ",(0,t.jsx)(s.code,{children:"eslint"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"start"}),(0,t.jsx)(s.td,{children:"Build the project for development, run the dev server and watch for changes."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"watch"}),(0,t.jsx)(s.td,{children:"Watch for changes only."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"serve"}),(0,t.jsx)(s.td,{children:"Run the dev server only."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"test"}),(0,t.jsxs)(s.td,{children:["Run the dev server and execute the specs from the ",(0,t.jsx)(s.code,{children:"test/specs/"})," directory."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"create-ui5-element"}),(0,t.jsx)(s.td,{children:"Create an empty Web Component with the given name."})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"files-in-the-main-directory",children:"Files in the main directory"}),"\n",(0,t.jsx)(s.p,{children:"The initialization script will create several files in your package's main directory."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"File"}),(0,t.jsx)(s.th,{children:"Purpose"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:".eslintignore"}),(0,t.jsxs)(s.td,{children:["Excludes the ",(0,t.jsx)(s.code,{children:"dist/"})," and ",(0,t.jsx)(s.code,{children:"test/"})," directories from static code scans."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"package-scripts.js"}),(0,t.jsxs)(s.td,{children:["An ",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/nps",children:"nps"})," package scripts configuration file."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bundle.js"}),(0,t.jsx)(s.td,{children:"Entry point for the bundle used for development and tests."})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["You'll likely only need to change ",(0,t.jsx)(s.code,{children:"bundle.js"})," to import your new components there."]}),"\n",(0,t.jsxs)(s.h3,{id:"the-config-directory",children:["The ",(0,t.jsx)(s.code,{children:"config/"})," directory"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"config/"})," directory serves as a central place for most build and test tools configuration assets. Normally, you\ndon't need to change any files there."]}),"\n",(0,t.jsx)(s.h4,{id:"custom-configuration",children:"Custom configuration"}),"\n",(0,t.jsxs)(s.p,{children:["The files in the ",(0,t.jsx)(s.code,{children:"config/"})," directory simply import UI5 Web Components default configuration for all tasks: ",(0,t.jsx)(s.code,{children:"rollup"}),", ",(0,t.jsx)(s.code,{children:"wdio"}),", ",(0,t.jsx)(s.code,{children:"eslint"}),", etc."]}),"\n",(0,t.jsxs)(s.p,{children:["If you need to customize any configuration, simply put your own content into the respective file in ",(0,t.jsx)(s.code,{children:"config/"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Examples:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Modifying ",(0,t.jsx)(s.code,{children:"eslint"})," settings."]}),"\n",(0,t.jsxs)(s.p,{children:["Open ",(0,t.jsx)(s.code,{children:"config/.eslintrc.js"}),". It should look like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'module.exports = require("@ui5/webcomponents-tools/components-package/eslint.js");\n'})}),"\n",(0,t.jsx)(s.p,{children:"As you can see, this is just a proxy to UI5 Web Components default configuration.\nPut your own content instead:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'module.exports = {\n\t"env": {\n\t\t"browser": true,\n\t\t"es6": true\n\t},\n\t"root": true,\n\t"extends": "airbnb-base",\n\t.............\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Modifying ",(0,t.jsx)(s.code,{children:"wdio"})," settings."]}),"\n",(0,t.jsxs)(s.p,{children:["Open ",(0,t.jsx)(s.code,{children:"config/wdio.conf.js"}),". It should look like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'module.exports = require("@ui5/webcomponents-tools/components-package/wdio.js");\n'})}),"\n",(0,t.jsx)(s.p,{children:"Again, this is a proxy to UI5 Web Components default configuration."}),"\n",(0,t.jsxs)(s.p,{children:["You could just paste the content of ",(0,t.jsx)(s.code,{children:"@ui5/webcomponents-tools/components-package/wdio.js"})," here and modify at will."]}),"\n",(0,t.jsx)(s.p,{children:"However, let's not replace the whole file by hand this time, but just modify the exported configuration object."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const result = require(\"@ui5/webcomponents-tools/components-package/wdio.js\");\nresult.config.capabilities[0][\"goog:chromeOptions\"].args = ['--disable-gpu']; // From: ['--disable-gpu', '--headless']\nmodule.exports = result;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["In this example, what we did was simply replace one option in the configuration object to disable ",(0,t.jsx)(s.code,{children:"headless"})," mode\nso that we can use ",(0,t.jsx)(s.code,{children:"browser.debug()"})," in our ",(0,t.jsx)(s.code,{children:"*.spec.js"})," files. For more on testing, see ",(0,t.jsx)(s.a,{href:"/ui5-webcomponents/preview/docs/development/testing-UI5-Web-Components",children:"Testing Web Components"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"the-src-directory",children:["The ",(0,t.jsx)(s.code,{children:"src/"})," directory"]}),"\n",(0,t.jsxs)(s.p,{children:["This is where you'll do most of the development. Let's see the necessary files for a ",(0,t.jsx)(s.code,{children:"my-first-component"})," component."]}),"\n",(0,t.jsx)(s.h4,{id:"class-and-template-files",children:"Class and template files"}),"\n",(0,t.jsx)(s.p,{children:"The main files describing a Web Component are:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"File"}),(0,t.jsx)(s.th,{children:"Purpose"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/MyFirstComponent.js"})}),(0,t.jsx)(s.td,{children:"Web Component class"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/MyFirstComponent.hbs"})}),(0,t.jsx)(s.td,{children:"Handlebars template"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["In order to understand how a UI5 Web Component works and what lies behind these two files, make sure you check the\n",(0,t.jsx)(s.a,{href:"/ui5-webcomponents/preview/docs/development/custom-UI5-Web-Components",children:"Developing Web Components"})," section of the documentation."]}),"\n",(0,t.jsx)(s.p,{children:"For the purposes of this tutorial, however, you don't need to understand their internals, as they are automatically generated by the\nscript and are in a working state already."}),"\n",(0,t.jsx)(s.h4,{id:"theming-related-files",children:"Theming-related files"}),"\n",(0,t.jsxs)(s.p,{children:["A single set of CSS rules will be used for all themes. The only difference between themes may be the values of CSS Variables.\nSome CSS Vars, such as ",(0,t.jsx)(s.code,{children:"--sapBackgroundColor"})," and ",(0,t.jsx)(s.code,{children:"--sapTextColor"})," are standard and automatically managed by the framework.\nIn addition, you can define your own CSS Vars and provide different values for them for the different themes. Set these CSS Vars in the\n",(0,t.jsx)(s.code,{children:"parameters-bundle.css"})," file for each theme. These files are the entry points for the styles build script."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"File"}),(0,t.jsx)(s.th,{children:"Purpose"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/themes/MyFirstComponent.css"})}),(0,t.jsx)(s.td,{children:"All CSS rules for the Web Component, same for all themes; will be inserted in the shadow root."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/themes/sap_horizon/parameters-bundle.css"})}),(0,t.jsxs)(s.td,{children:["Values for the component-specific CSS Vars for the ",(0,t.jsx)(s.code,{children:"sap_horizon"})," theme"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/themes/sap_horizon_dark/parameters-bundle.css"})}),(0,t.jsxs)(s.td,{children:["Values for the component-specific CSS Vars for the ",(0,t.jsx)(s.code,{children:"sap_horizon_dark"})," theme"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/themes/sap_horizon_hcb/parameters-bundle.css"})}),(0,t.jsxs)(s.td,{children:["Values for the component-specific CSS Vars for the ",(0,t.jsx)(s.code,{children:"sap_horizon_hcb"})," theme"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/themes/sap_horizon_hcw/parameters-bundle.css"})}),(0,t.jsxs)(s.td,{children:["Values for the component-specific CSS Vars for the ",(0,t.jsx)(s.code,{children:"sap_horizon_hcw"})," theme"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/themes/sap_fiori_3/parameters-bundle.css"})}),(0,t.jsxs)(s.td,{children:["Values for the component-specific CSS Vars for the ",(0,t.jsx)(s.code,{children:"sap_fiori_3"})," theme"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/themes/sap_fiori_3_dark/parameters-bundle.css"})}),(0,t.jsxs)(s.td,{children:["Values for the component-specific CSS Vars for the ",(0,t.jsx)(s.code,{children:"sap_fiori_3_dark"})," theme"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/themes/sap_fiori_3_hcb/parameters-bundle.css"})}),(0,t.jsxs)(s.td,{children:["Values for the component-specific CSS Vars for the ",(0,t.jsx)(s.code,{children:"sap_fiori_3_hcb"})," theme"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/themes/sap_fiori_3_hcw/parameters-bundle.css"})}),(0,t.jsxs)(s.td,{children:["Values for the component-specific CSS Vars for the ",(0,t.jsx)(s.code,{children:"sap_fiori_3_hcw"})," theme"]})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," It's up to you whether to put the CSS Vars directly in the ",(0,t.jsx)(s.code,{children:"parameters-bundle.css"})," files for the different themes or\nto import them from separate ",(0,t.jsx)(s.code,{children:".css"})," files. You could have, for example, a ",(0,t.jsx)(s.code,{children:"MyFirstComponent-params.css"})," file for each theme\nand import it into the ",(0,t.jsx)(s.code,{children:"parameters-bundle.css"})," file: ",(0,t.jsx)(s.code,{children:'@import "MyFirstComponent-params.css";'}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Again, to know more about how these files work, you could have a look at the ",(0,t.jsx)(s.a,{href:"#css",children:"Developing Web Components"})," section of the documentation."]}),"\n",(0,t.jsx)(s.h4,{id:"i18n-files",children:"i18n files"}),"\n",(0,t.jsxs)(s.p,{children:["You can define translatable texts as key-value pairs, separated by ",(0,t.jsx)(s.code,{children:"="})," in the ",(0,t.jsx)(s.code,{children:"messagebundle.properties"})," file. Then you can provide translations for as many languages\nas needed."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"File"}),(0,t.jsx)(s.th,{children:"Purpose"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/i18n/messagebundle.properties"})}),(0,t.jsx)(s.td,{children:"Source file for all translatable texts"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/i18n/messagebundle_de.properties"})}),(0,t.jsx)(s.td,{children:"Translations in German"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/i18n/messagebundle_en.properties"})}),(0,t.jsx)(s.td,{children:"Translations in English"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"etc."}),(0,t.jsx)(s.td,{children:"etc."})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Let's have a look at the sample ",(0,t.jsx)(s.code,{children:"messagebundle.properties"})," file, generated by the script."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"#please wait text for the sample component\nPLEASE_WAIT=wait\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Here's where you define all i18n texts, optionally with comments for the translators (",(0,t.jsx)(s.code,{children:"# Comment"}),")."]}),"\n",(0,t.jsxs)(s.p,{children:["And now let's have a look at a sample file with translations, for example ",(0,t.jsx)(s.code,{children:"messagebundle_es.properties"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"PLEASE_WAIT=Espere\n"})}),"\n",(0,t.jsx)(s.h4,{id:"assets-additional-themes-i18n-texts-etc",children:"Assets (additional themes, i18n texts, etc.)"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"File"}),(0,t.jsx)(s.th,{children:"Purpose"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/Assets.js"})}),(0,t.jsx)(s.td,{children:"Entry point for your package assets."})]})})]}),"\n",(0,t.jsxs)(s.p,{children:["This module imports all base assets (such as ",(0,t.jsx)(s.code,{children:"CLDR"})," and the base theme parameters), but also your own\npackage assets (i18n and package-specific theme parameters). Users of your package will have to import this module in their production applications in order to get additional themes support and i18n support."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," For easier development and testing, ",(0,t.jsx)(s.code,{children:"Assets.js"})," is also imported in the dev/test bundle ",(0,t.jsx)(s.code,{children:"bundle.esm.js"})," by the initialization script."]}),"\n",(0,t.jsxs)(s.h3,{id:"the-test-directory",children:["The ",(0,t.jsx)(s.code,{children:"test/"})," directory"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"File"}),(0,t.jsx)(s.th,{children:"Purpose"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"test/pages/*"})}),(0,t.jsxs)(s.td,{children:["Simple ",(0,t.jsx)(s.code,{children:".html"})," pages used for development and tests."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/specs/*"})}),(0,t.jsxs)(s.td,{children:["Test specs, based on ",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/wdio",children:"WDIO"}),". They use the test pages for setup."]})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["You can execute all specs by running ",(0,t.jsx)(s.code,{children:"yarn test"})," or ",(0,t.jsx)(s.code,{children:"npm run test"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["For more on testing, see our ",(0,t.jsx)(s.a,{href:"/ui5-webcomponents/preview/docs/development/testing-UI5-Web-Components",children:"Testing Web Components"})," section."]}),"\n",(0,t.jsx)(s.h2,{id:"public-consumption-of-your-custom-ui5-web-components-package",children:"Public Consumption of Your Custom UI5 Web Components Package"}),"\n",(0,t.jsxs)(s.p,{children:["Once you've developed your package and published it to NPM, application developers can import from the ",(0,t.jsx)(s.code,{children:"dist/"})," directory\nof your package any of your Web Components, and optionally the ",(0,t.jsx)(s.code,{children:"Assets.js"})," module, if they want additional themes and i18n."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, if your package is called ",(0,t.jsx)(s.code,{children:"my-ui5-webcomponents"}),", users will install it by:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"npm i my-ui5-webcomponents --save\n"})}),"\n",(0,t.jsx)(s.p,{children:"and then use it by:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'import "my-ui5-webcomponents/Assets.js"; // optional\nimport "my-ui5-webcomponents/dist/MyFirstComponent.js"; // for my-first-component from this tutorial\nimport "my-ui5-webcomponents/dist/SomeOtherComponent.js";\nimport "my-ui5-webcomponents/dist/YetAnotherComponent.js";\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Next: ",(0,t.jsx)(s.a,{href:"/ui5-webcomponents/preview/docs/development/custom-UI5-Web-Components",children:"Developing Custom UI5 Web Components"})]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1184:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var t=n(4041);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);