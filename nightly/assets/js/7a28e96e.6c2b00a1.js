"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[5348],{2998:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=i(1085),s=i(1184);const o={},r="Accessibility in UI5 Web Components",l={id:"docs/advanced/accessibility",title:"Accessibility in UI5 Web Components",description:"Accessibility refers to the possibility for everyone, including and especially people with special needs, to access and use IT products. Making software work for more people should be of high priority. All users should be able to operate our software without loss of meaningful content, functionality, and efficiency when using assistive technologies.",source:"@site/docs/docs/2-advanced/07-accessibility.md",sourceDirName:"docs/2-advanced",slug:"/docs/advanced/accessibility",permalink:"/ui5-webcomponents/nightly/docs/advanced/accessibility",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"UI5 Web Components i18n for Apps",permalink:"/ui5-webcomponents/nightly/docs/advanced/using-i18n-for-apps"},next:{title:"Scrollbars Customization",permalink:"/ui5-webcomponents/nightly/docs/advanced/scrollbars-customization"}},c={},a=[{value:"Web Components &amp; Accessibility",id:"web-components--accessibility",level:2},{value:"Accessibility Features",id:"accessibility-features",level:2},{value:"<strong>Screen Reader Support</strong>",id:"screen-reader-support",level:3},{value:"<strong>Invisible Messaging</strong>",id:"invisible-messaging",level:3},{value:"<strong>Keyboard Handling</strong>",id:"keyboard-handling",level:3},{value:"<strong>Theming</strong>",id:"theming",level:3},{value:"Accessibility APIs",id:"accessibility-apis",level:2},{value:"accessibleName",id:"accessiblename",level:3},{value:"accessibleNameRef",id:"accessiblenameref",level:3},{value:"accessibilityTexts",id:"accessibilitytexts",level:3},{value:"accessibilityAttributes",id:"accessibilityattributes",level:3},{value:"accessibilityRoles",id:"accessibilityroles",level:3},{value:"accessibleRole",id:"accessiblerole",level:3},{value:"level, headerLevel",id:"level-headerlevel",level:3},{value:"interactive",id:"interactive",level:3},{value:"Testing Accessibility",id:"testing-accessibility",level:2},{value:"Note",id:"note",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"accessibility-in-ui5-web-components",children:"Accessibility in UI5 Web Components"}),"\n",(0,t.jsx)(n.p,{children:"Accessibility refers to the possibility for everyone, including and especially people with special needs, to access and use IT products. Making software work for more people should be of high priority. All users should be able to operate our software without loss of meaningful content, functionality, and efficiency when using assistive technologies."}),"\n",(0,t.jsx)(n.p,{children:"Following those principles in an ongoing approach, we at UI5 Web Components aim to bring accessibility to life by providing the appropriate accessibility features, and following precise accessibility requirements and processes."}),"\n",(0,t.jsx)(n.h2,{id:"web-components--accessibility",children:"Web Components & Accessibility"}),"\n",(0,t.jsx)(n.p,{children:"Web Components allow developers to make their own custom components with native HTML and JavaScript using custom elements, shadow DOM, and templates. In HTML, you can define an element using a role.  When you use semantic elements, you don\u2019t need to define a role as these elements receive all relevant aria mappings out of the box. However, this is not the case when you use custom elements where you should add all relevant accessibility attributes yourselves."}),"\n",(0,t.jsx)(n.p,{children:"This is not needed in UI5 Web Components, because when using our elements, all relevant accessibility attributes for a certain component will be applied in the shadow DOM, without further setup. Additionally, many accessibility-related APIs are available. They can be used to enhance the accessibility in the context of each application."}),"\n",(0,t.jsxs)(n.p,{children:["As the Web Components are a new standard, there are still some gaps in regard to accessibility. For example - setting IDRef relationships is currently not possible due to the nature of the custom elements and their shadow DOM. This is a limitation in the ARIA support and there is a draft of a new ",(0,t.jsx)(n.a,{href:"https://github.com/WICG/aom",children:"AOM (Accessibility Object Model)"}),", which addresses this issue and many more, and aims at a better JS-based accessibility support for all web elements. We are continuously working on improving the existing limitations. For example, in order to create a Label-Input relationship, you can use the ",(0,t.jsx)(n.code,{children:"for"})," property of the label component to bind the label to an input, or ",(0,t.jsx)(n.code,{children:"accessible-name-ref"})," property of the input component to bind the input to a label."]}),"\n",(0,t.jsx)(n.h2,{id:"accessibility-features",children:"Accessibility Features"}),"\n",(0,t.jsx)(n.p,{children:"Many accessibility features are built into the core design elements upfront and are available to app teams out of the box. Keyboard navigation and interaction, tab and reading order, as well as screen reader support are fundamental features enabled in UI5 Web Components. Visualization features like high contrast themes, consistency of icons, keyboard focus visualization, layout adaptation, and support for text resizing are also available."}),"\n",(0,t.jsx)(n.h3,{id:"screen-reader-support",children:(0,t.jsx)(n.strong,{children:"Screen Reader Support"})}),"\n",(0,t.jsx)(n.p,{children:"UI5 Web Components provide the prerequisites for screen reader support based on the HTML, ARIA, and WCAG standards support in order to aid people using screen reader software."}),"\n",(0,t.jsxs)(n.p,{children:["Navigation with the keyboard and screen reader should work properly together. In order for this to happen, you need to use the correct ARIA attributes and to map them to their HTML counterparts. With UI5 Web Components, you will receive ARIA mapped elements out of the box. For example, let's add a ",(0,t.jsx)(n.code,{children:"ui5-combobox"})," component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<ui5-combobox>\n    <ui5-cb-item text="Item 1"></ui5-cb-item>\n</ui5-combobox>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["By doing so, you receive an input element with ",(0,t.jsx)(n.code,{children:'role="combobox"'})," with all aria attributes relevant for this role in the shadow DOM. Also, if you set the ",(0,t.jsx)(n.code,{children:"disabled"})," property, this will automatically add ",(0,t.jsx)(n.code,{children:"disabled"})," to the shadow ",(0,t.jsx)(n.code,{children:"combobox"})," element. Attribute mapping is available for all relevant properties - ",(0,t.jsx)(n.code,{children:"required"}),", ",(0,t.jsx)(n.code,{children:"disabled"}),", ",(0,t.jsx)(n.code,{children:"readonly"}),", and more."]}),"\n",(0,t.jsx)(n.p,{children:"In order to ease the setting of aria attributes, we have introduced properties that are available for developers to extend the accessibility support in the context of the application. More information about the available properties could be found in the Accessibility APIs section below."}),"\n",(0,t.jsx)(n.h3,{id:"invisible-messaging",children:(0,t.jsx)(n.strong,{children:"Invisible Messaging"})}),"\n",(0,t.jsx)(n.p,{children:"The Invisible Message provides a way to programmaticaly expose dynamic content changes in a way that can be announced by screen readers. It marks the dynamic content changes as ARIA live regions so that you are able to inform the users of assistive technologies for a change that has happened to the UI."}),"\n",(0,t.jsxs)(n.p,{children:["The Invisible Messaging service is designed to be used both internally in the components logic and from the applications. Using the service, you have to specify the message to be announced by the screen reader and the mode which will be inserted in the ",(0,t.jsx)(n.code,{children:"aria-live"})," attribute via the ",(0,t.jsx)(n.code,{children:"InvisibleMessage.announce(message, mode)"})," method. The possible modes to choose from are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"InvisibleMessageMode.Assertive"})," - indicates that updates to the region have the highest priority and should be presented to the user immediately."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"InvisibleMessageMode.Polite"})," - indicates that updates to the region should be presented at the next graceful opportunity such as at the end of reading the current sentence, or when the user paused typing."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["According to the WAI-ARIA recommendations, the live regions should be initialised empty when the page is loaded. This way screen readers remember them and start to listen for changes of their value. Thus, we recommend to instantiate Invisible Message as early as possible in the application. Then, you should specify the text that has to be announced by the screen reader and the live region mode using the ",(0,t.jsx)(n.code,{children:"announce"})," method.\nHere is an example usage of the invisible messaging service - ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/MessageStrip/",children:"Dynamic MessageStrip Generator Sample"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"keyboard-handling",children:(0,t.jsx)(n.strong,{children:"Keyboard Handling"})}),"\n",(0,t.jsx)(n.p,{children:"All standard UI elements and controls are designed to be keyboard-enabled. All suitable input channels (such as mouse, keyboard, or touch) are treated equally according to the capabilities of the device or the individual preferences of the user. For example, some users may prefer using the keyboard instead of a mouse, which lets them work faster."}),"\n",(0,t.jsx)(n.p,{children:"Support for standard keystrokes based on the role of the component element is available. Complex components also provide advanced keyboard handling, which is described in the Overview section of each component."}),"\n",(0,t.jsx)(n.h3,{id:"theming",children:(0,t.jsx)(n.strong,{children:"Theming"})}),"\n",(0,t.jsx)(n.p,{children:"Theming is an important aspect when it comes to a UI5 Web Components application. The different colors shown on the UI need to have a good contrast to each other in order to be easily distinguishable. We ensure that the requirements for color contrast are fulfilled in all themes. High Contrast White and High Contrast Black themes are also available to support people with visual impairments."}),"\n",(0,t.jsxs)(n.p,{children:["For more information regarding the available themes and how to use them, see the ",(0,t.jsx)(n.a,{href:"/ui5-webcomponents/nightly/docs/advanced/configuration",children:"Configuration"})," section."]}),"\n",(0,t.jsx)(n.h2,{id:"accessibility-apis",children:"Accessibility APIs"}),"\n",(0,t.jsx)(n.p,{children:"The mapping of the accessibility APIs to ARIA attributes is described in the following table:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"UI5 Web Components Property"}),(0,t.jsx)(n.th,{children:"HTML Attribute"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"accessibleName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"aria-label"})}),(0,t.jsx)(n.td,{children:"Defines the text alternative of the component. If not provided, a default text alternative is set, if present."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"accessibleNameRef"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"aria-label"})}),(0,t.jsxs)(n.td,{children:["Alternative for ",(0,t.jsx)(n.code,{children:"aria-labelledby"}),". Receives ID (or many IDs) of the elements that serve as labels of the component. Those labels are passed as a concatenated string to the ",(0,t.jsx)(n.code,{children:"aria-label"})," attribute."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"accessibleRole"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"role"})}),(0,t.jsx)(n.td,{children:"Sets the accessible aria role of the component."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"accessibilityTexts"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"aria-label"})}),(0,t.jsx)(n.td,{children:"An object of strings that define several additional accessibility texts for further customization."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"accessibilityAttributes"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"aria-expanded"}),", ",(0,t.jsx)(n.code,{children:"aria-haspopup"}),", ",(0,t.jsx)(n.code,{children:"aria-controls"})]}),(0,t.jsx)(n.td,{children:"An object of strings that defines several additional accessibility attribute values for customization depending on the use case."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"accessibilityRoles"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"role"})}),(0,t.jsx)(n.td,{children:"An object of strings that define several additional accessibility roles for further customization."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"required"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"aria-required"})}),(0,t.jsx)(n.td,{children:"Defines whether the component is required."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"readonly"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"aria-readonly"})}),(0,t.jsx)(n.td,{children:"Defines whether the component is read-only."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"disabled"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"aria-disabled"})}),(0,t.jsx)(n.td,{children:"Defines whether the component is disabled."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"checked"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"aria-checked"})}),(0,t.jsx)(n.td,{children:"Defines whether the component is checked."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"level"}),", ",(0,t.jsx)(n.code,{children:"headerLevel"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"aria-level"})}),(0,t.jsx)(n.td,{children:'Defines the heading level of a title. Available options are: "H6" to "H1".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"interactive"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tabindex"})}),(0,t.jsx)(n.td,{children:"Defines if the component is interactive (focusable and pressable)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tooltip"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"title"})}),(0,t.jsx)(n.td,{children:"Defines the tooltip of the component."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,t.jsx)(n.p,{children:"Setting the property on the custom element as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<ui5-combobox accessible-name="Enter Value">\n    <ui5-cb-item text="Item 1"></ui5-cb-item>\n</ui5-combobox>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will result in the shadow DOM as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<input role="combobox" aria-label="Enter value" ... >\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"accessible-name"})," property is currently supported in:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Popups: ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/components/Dialog/",children:"Dialog"}),", ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Popover/",children:"Popover"})]}),"\n",(0,t.jsxs)(n.li,{children:["User input components (e.g. ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Input/",children:"Input"}),", ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/RadioButton/",children:"RadioButton"}),")"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Panel/",children:"Panel"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Breadcrumbs/",children:"Breadcrumbs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Button/",children:"Button"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Icon/",children:"Icon"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/List/",children:"List"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/CheckBox/",children:"CheckBox"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/RatingIndicator/",children:"Rating Indicator"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Slider/",children:"Slider"}),", ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/RangeSlider/",children:"Range Slider"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/compat/Table/",children:"Table"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Tree/",children:"Tree"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Card/",children:"Card"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"accessiblenameref",children:"accessibleNameRef"}),"\n",(0,t.jsx)(n.p,{children:"Setting the property on the custom element as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<ui5-label id="myLabel" for="myInput">Date of birth</ui5-label>\n<ui5-input id="myInput" accessible-name-ref="myLabel"></ui5-input>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will result in the shadow DOM as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<input aria-label="Date of birth" ... >\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"accessible-name-ref"})," property is currently supported in:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Popups: ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/components/Dialog/",children:"Dialog"}),", ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Popover/",children:"Popover"})]}),"\n",(0,t.jsxs)(n.li,{children:["User input components (e.g. ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Input/",children:"Input"}),", ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/RadioButton/",children:"RadioButton"}),")"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Link/",children:"Link"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Button/",children:"Button"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/List/",children:"List"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/CheckBox/",children:"CheckBox"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/compat/Table/",children:"Table"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Tree/",children:"Tree"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Card/",children:"Card"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"accessibilitytexts",children:"accessibilityTexts"}),"\n",(0,t.jsxs)(n.p,{children:["This property accepts ",(0,t.jsx)(n.code,{children:"object"})," with property values for different parts of the FlexibleColumnLayout elements. For more detailed information on every object property, read the API description in ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/fiori/FlexibleColumnLayout/",children:"FlexibleColumnLayout"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Setting the property on the custom element as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<ui5-flexible-column-layout id="component">...</ui5-flexible-column-layout>\n\n<script>\n    const component = document.getElemetnById("component");\n    component.accessibilityTexts = {\n        startColumnAccessibleName: "Products list",\n    };\n<\/script>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will result in the shadow DOM as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div role="region" aria-labelledby="component-startColumnText" ... >\n    ...\n    <span id="component-startColumnText" class="ui5-hidden-text" ... >\n        Products list\n    </span>\n    ...\n</div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"accessibilityTexts"})," property is currently supported in:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/fiori/FlexibleColumnLayout/",children:"FlexibleColumnLayout"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/fiori/ShellBar/",children:"ShellBar"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"accessibilityattributes",children:"accessibilityAttributes"}),"\n",(0,t.jsxs)(n.p,{children:["This property accepts an ",(0,t.jsx)(n.code,{children:"object"})," with property values, which will be used to generate additional accessibility attributes to the root element. For more detailed information on every object property, read the API description in ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Button/",children:"Button"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Setting the property on the custom element as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<ui5-button id="button">...</ui5-button>\n<ui5-dialog id="dialogIdentificator">...</ui5-dialog>\n\n<script>\n    const component = document.getElemetnById("button");\n    component.accessibilityAttributes = {\n        hasPopup: "dialog",\n        controls: "dialogIdentificator"\n    };\n<\/script>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will result in the shadow DOM as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<button type="button" class="ui5-button-root" part="button" aria-controls="dialogIdentificator" aria-haspopup="dialog">\n\t...\n</button>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"accessibilityAttributes"})," property is currently supported in:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Button/",children:"Button"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Link/",children:"Link"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"accessibilityroles",children:"accessibilityRoles"}),"\n",(0,t.jsxs)(n.p,{children:["This property accepts ",(0,t.jsx)(n.code,{children:"object"})," with property values for different parts of the ",(0,t.jsx)(n.code,{children:"FlexibleColumnLayout"})," elements. For more detailed information on every object property, read the API description in ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/fiori/FlexibleColumnLayout/",children:"FlexibleColumnLayout"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Setting the property on the custom element as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<ui5-flexible-column-layout id="component">...</ui5-flexible-column-layout>\n\n<script>\n    const component = document.getElemetnById("component");\n    component.accessibilityRoles = {\n        startColumnRole: "complementary",\n    };\n<\/script>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Results in the shadow DOM as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div role="complementary" ... >\n    ...\n</div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"accessibilityRoles"})," property is currently supported in:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/fiori/FlexibleColumnLayout/",children:"FlexibleColumnLayout"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/fiori/ShellBar/",children:"ShellBar"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"accessiblerole",children:"accessibleRole"}),"\n",(0,t.jsx)(n.p,{children:"Setting the property on the custom element as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<ui5-panel accessible-role="Complementary">\n    ...\n</ui5-panel>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will result in the shadow DOM as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div role="complementary" ... >\n    ...\n</div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"accessible-role"})," property is currently supported in:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["User input components (e.g. ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Input/",children:"Input"}),", ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/RadioButton/",children:"RadioButton"}),")"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Panel/",children:"Panel"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/List/",children:"List"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Icon/",children:"Icon"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Popover/",children:"Popover"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Dialog/",children:"Dialog"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"level-headerlevel",children:"level, headerLevel"}),"\n",(0,t.jsx)(n.p,{children:"Setting the property on the custom element as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<ui5-title level="H3">Title</ui5-title>\n...\n<ui5-panel header-text="Panel Header" header-level="H3">\n</ui5-panel>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will result in the shadow DOM as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<h3 class="ui5-title-root" ... >...</h3>\n...\n<div class="ui5-panel-root" ... >\n    ...\n    <div role="heading" aria-level="3" ...>\n        Panel Header\n    </div>\n    ...\n</div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"level"})," property is currently supported in:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Title/",children:"Title"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"header-level"})," property is currently supported in:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Panel/",children:"Panel"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"interactive",children:"interactive"}),"\n",(0,t.jsx)(n.p,{children:"Setting the property on the custom element as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<ui5-icon interactive></ui5-icon>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Will result in the shadow DOM as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<svg tabindex="0" role="button" ... ></svg>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"interactive"})," property is currently supported in:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Avatar/",children:"Avatar"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Icon/",children:"Icon"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"testing-accessibility",children:"Testing Accessibility"}),"\n",(0,t.jsx)(n.p,{children:"UI5 Web Components provide the prerequisites for screen reader support based on the HTML, ARIA, and WCAG standards. All screen readers that follow those standards should work fine. Nevertheless, there are deviations in the interpretation depending on the combination of browser and screen reader. UI5 Web Components focus on compliance with the standards by performing automated checks for accessibility and manual tests with reference testing environments."}),"\n",(0,t.jsx)(n.p,{children:"For Screen Reader Support, we recommend using JAWS 2021 + Chrome (latest), and for HTML/ARIA validation the recommended testing tool is Access Assistant. UI5 Web Components support other environments to the extent of providing a valid HTML and ARIA implementation following the WCAG standards."}),"\n",(0,t.jsx)(n.p,{children:"Please note that reference testing environments may change over time to reflect changes in the usage of different browsers, their maintenance period, and increased accessibility compliance."}),"\n",(0,t.jsx)(n.p,{children:"When reporting issues with different testing environments, please ensure that the issue is not false positive, a real accessibility concern is present, and there is an impact on the users. Therefore, we recommend to retest the issue using the mentioned reference testing tools and additionally with plain HTML."}),"\n",(0,t.jsx)(n.p,{children:"In order to process the issues correctly, we would like to have the following information provided:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Issue description"}),"\n",(0,t.jsx)(n.li,{children:"Reference to the suspected violated accessibility requirement (e.g. Web Content Accessibility Guidelines, WCAG 2.0, BITV 2.0, EN 301 549)"}),"\n",(0,t.jsx)(n.li,{children:"Isolated example"}),"\n",(0,t.jsx)(n.li,{children:"Steps to reproduce"}),"\n",(0,t.jsx)(n.li,{children:"UI5 Web Components version"}),"\n",(0,t.jsx)(n.li,{children:"OS/Platform: {...}"}),"\n",(0,t.jsx)(n.li,{children:"Browser: {...}"}),"\n",(0,t.jsx)(n.li,{children:"Testing Tool"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,t.jsx)(n.p,{children:"Have in mind that UI5 Web Components is optimized for the High Contrast mode of Windows when using Chrome and Edge. If you have enabled both the Windows High Contrast setting and the SAPUI5 High Contrast theme and you are using browser different from Chrome and Edge, this may cause conflicts and deficiencies in the theme can occur. In such cases, please switch off the Windows High Contrast setting or use different browser."})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1184:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(4041);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);