"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1368],{2681:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>x,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>h,toc:()=>j});var n=i(1085),s=i(1184);const d='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-notification-list>\n        <ui5-li-notification\n            id="firstNotificationListItem"\n            title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n            state="Positive"\n            importance="Important"\n            show-close>\n            <ui5-avatar size="XS" slot="avatar">\n                <img src="../assets/images/avatars/woman_avatar_1.png">\n            </ui5-avatar>\n            <span slot="footnotes">Monique Legrand</span>\n            <span slot="footnotes">2 Days</span>\n            And with a very long description - Lorem ipsum dolor sit amet, consectetur\n            adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec\n            elementum\n            lectus turpis at nunc.\n            <ui5-menu id="menuWithActions"  slot="menu">\n                <ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>\n                <ui5-menu-item icon="message-error" text="Reject"></ui5-menu-item>\n            </ui5-menu>\n        </ui5-li-notification>\n        <ui5-li-notification show-close title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." state="Critical">\n            <ui5-avatar size="XS" slot="avatar">\n                <img src="../assets/images/avatars/man_avatar_1.png">\n            </ui5-avatar>\n            <span slot="footnotes">Alain Chevalier</span>\n            <span slot="footnotes">2 Days</span>\n            And with a very long description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n        <ui5-li-notification show-close title-text="New order (#2525) With a short title" state="Information" read>\n            <ui5-avatar size="XS" slot="avatar">\n                <img src="../assets/images/avatars/man_avatar_2.png">\n            </ui5-avatar>\n            <span slot="footnotes">John Doe</span>\n            <span slot="footnotes">2 Days</span>\n            And with a very long description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n    </ui5-notification-list>\n    <ui5-toast id="wcToast" duration="2000"></ui5-toast>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',r='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/List.js";\nimport "@ui5/webcomponents/dist/Menu.js";\nimport "@ui5/webcomponents/dist/Toast.js";\n\nimport "@ui5/webcomponents-fiori/dist/NotificationList.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationListItem.js";\n\nvar notificationList = document.querySelector("ui5-list");\n\nnotificationList.addEventListener("item-close", e => {\n    e.detail.item.hidden = true;\n});\n\nmenuWithActions.addEventListener("ui5-item-click", function(event) {\n    wcToast.textContent = "Menu button \'" + event.detail.text + "\' pressed" + " on Notification List Item with id \'" + event.target.parentElement.id + "\'.";\n    wcToast.show();\n});';function l(e){const{Editor:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(t,{html:d,js:r})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}const c={},a=void 0,h={id:"components/fiori/NotificationListItem",title:"NotificationListItem",description:"The ui5-li-notification is a type of list item, meant to display notifications.",source:"@site/docs/components/fiori/NotificationListItem.mdx",sourceDirName:"components/fiori",slug:"/components/fiori/NotificationListItem",permalink:"/ui5-webcomponents/nightly/components/fiori/NotificationListItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"NotificationListGroupItem",permalink:"/ui5-webcomponents/nightly/components/fiori/NotificationListGroupItem"},next:{title:"Page",permalink:"/ui5-webcomponents/nightly/components/fiori/Page"}},x={},j=[{value:"Usage",id:"usage",level:3},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Basic Navigation",id:"basic-navigation",level:4},{value:"Fast Navigation",id:"fast-navigation",level:4},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"wrappingType",id:"wrappingtype",level:3},{value:"state",id:"state",level:3},{value:"showClose",id:"showclose",level:3},{value:"importance",id:"importance",level:3},{value:"titleText",id:"titletext",level:3},{value:"read",id:"read",level:3},{value:"loading",id:"loading",level:3},{value:"loadingDelay",id:"loadingdelay",level:3},{value:"selected",id:"selected",level:3},{value:"Slots",id:"slots",level:2},{value:"avatar",id:"avatar",level:3},{value:"menu",id:"menu",level:3},{value:"footnotes",id:"footnotes",level:3},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"close",id:"close",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-li-notification"})," is a type of list item, meant to display notifications."]}),"\n",(0,n.jsxs)(t.p,{children:["The component has a rich set of various properties that allows the user to set ",(0,n.jsx)(t.code,{children:"avatar"}),", ",(0,n.jsx)(t.code,{children:"menu"}),", ",(0,n.jsx)(t.code,{children:"titleText"}),", descriptive ",(0,n.jsx)(t.code,{children:"content"}),"\nand ",(0,n.jsx)(t.code,{children:"footnotes"})," to fully describe a notification."]}),"\n",(0,n.jsx)(t.p,{children:"The user can:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["display a ",(0,n.jsx)(t.code,{children:"Close"})," button"]}),"\n",(0,n.jsxs)(t.li,{children:["can control whether the ",(0,n.jsx)(t.code,{children:"titleText"})," and ",(0,n.jsx)(t.code,{children:"description"})," should wrap or truncate\nand display a ",(0,n.jsx)(t.code,{children:"ShowMore"})," button to switch between less and more information"]}),"\n",(0,n.jsxs)(t.li,{children:["add actions by using the ",(0,n.jsx)(t.code,{children:"ui5-menu"})," component"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," Adding custom actions by using the ",(0,n.jsx)(t.code,{children:"ui5-notification-action"})," component is deprecated as of version 2.0!"]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["The component can be used in a standard ",(0,n.jsx)(t.code,{children:"ui5-list"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,n.jsx)(t.h4,{id:"basic-navigation",children:"Basic Navigation"}),"\n",(0,n.jsx)(t.p,{children:"The user can use the following keyboard shortcuts to perform actions (such as select, delete):"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'[Enter] - select an item (trigger "item-click" event)'}),"\n",(0,n.jsx)(t.li,{children:'[Delete] - close an item (trigger "item-close" event)'}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"fast-navigation",children:"Fast Navigation"}),"\n",(0,n.jsx)(t.p,{children:"This component provides a fast navigation using the the following keyboard shortcuts:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"[Shift] + [Enter] - 'More'/'Less' link will be triggered"}),"\n",(0,n.jsx)(t.li,{children:"[Shift] + [F10] - 'Menu' (Actions) button will be triggered (clicked)"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/NotificationListItem.js";'})}),"\n",(0,n.jsx)(t.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,n.jsx)(o,{}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"wrappingtype",children:"wrappingType"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines if the ",(0,n.jsx)(t.code,{children:"titleText"})," and ",(0,n.jsx)(t.code,{children:"description"})," should wrap, they truncate by default.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," by default the ",(0,n.jsx)(t.code,{children:"titleText"})," and ",(0,n.jsx)(t.code,{children:"description"}),", and a ",(0,n.jsx)(t.code,{children:"ShowMore/Less"})," button would be displayed."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"None" | "Normal"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'"None"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Since"}),(0,n.jsx)(t.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"state",children:"state"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines the status indicator of the item."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"None" | "Positive" | "Critical" | "Negative" | "Information"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'"None"'})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"showclose",children:"showClose"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines if the ",(0,n.jsx)(t.code,{children:"Close"})," button would be displayed."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"importance",children:"importance"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the ",(0,n.jsx)(t.code,{children:"Important"})," label of the item."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"Standard" | "Important"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'"Standard"'})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"titletext",children:"titleText"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the ",(0,n.jsx)(t.code,{children:"titleText"})," of the item."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"read",children:"read"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines if the ",(0,n.jsx)(t.code,{children:"notification"})," is new or has been already read.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," if set to ",(0,n.jsx)(t.code,{children:"false"})," the ",(0,n.jsx)(t.code,{children:"titleText"})," has bold font, if set to true - it has a normal font."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"loading",children:"loading"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines if a busy indicator would be displayed over the item."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Since"}),(0,n.jsx)(t.td,{children:"1.0.0-rc.8"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"loadingdelay",children:"loadingDelay"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines the delay in milliseconds, after which the busy indicator will show up for this component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"number"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"1000"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"selected",children:"selected"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines the selected state of the component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(t.h3,{id:"avatar",children:"avatar"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the avatar, displayed in the ",(0,n.jsx)(t.code,{children:"ui5-li-notification"}),".",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Consider using the ",(0,n.jsx)(t.code,{children:"ui5-avatar"})," to display icons, initials or images.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," In order to be complaint with the UX guidlines and for best experience, we recommend using avatars with 2rem X 2rem in size (32px X 32px). In case you are using the ",(0,n.jsx)(t.code,{children:"ui5-avatar"})," you can set its ",(0,n.jsx)(t.code,{children:"size"})," property to ",(0,n.jsx)(t.code,{children:"XS"})," to get the required size - ",(0,n.jsx)(t.code,{children:'<ui5-avatar size="XS"></ui5-avatar>'}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"menu",children:"menu"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the menu, displayed in the ",(0,n.jsx)(t.code,{children:"ui5-li-notification"}),".",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Use this for implementing actions.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Should be used instead ",(0,n.jsx)(t.code,{children:"u5-notification-action"}),", which is deprecated as of version 2.0."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"footnotes",children:"footnotes"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines the elements, displayed in the footer of the of the component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the content of the ",(0,n.jsx)(t.code,{children:"ui5-li-notification"}),", usually a description of the notification.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<Node>"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(t.h3,{id:"close",children:"close"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Fired when the ",(0,n.jsx)(t.code,{children:"Close"})," button is pressed."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CustomEvent<NotificationListItemCloseEventDetail>"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameters"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"item"}),": ",(0,n.jsx)(t.code,{children:"HTMLElement"}),(0,n.jsx)("br",{}),"the closed item."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"title-text"}),(0,n.jsx)(t.td,{children:"Used to style the titleText of the notification list item"})]})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1184:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var n=i(4041);const s={},d=n.createContext(s);function r(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);