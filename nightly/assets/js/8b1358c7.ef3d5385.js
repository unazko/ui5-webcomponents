"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1368],{3451:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>L,frontMatter:()=>v,metadata:()=>g,toc:()=>w});var n=i(1085),s=i(1184);const o='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-list header-text="Notifications">\n        <ui5-li-notification\n            title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n            priority="High" show-close>\n            <ui5-avatar size="XS" slot="avatar">\n                <img src="../assets/images/avatars/woman_avatar_1.png">\n            </ui5-avatar>\n            <span slot="footnotes">Monique Legrand</span>\n            <span slot="footnotes">2 Days</span>\n            And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur\n            adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec\n            elementum\n            lectus turpis at nunc.\n        </ui5-li-notification>\n        <ui5-li-notification show-close title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">\n            <ui5-avatar size="XS" slot="avatar">\n                <img src="../assets/images/avatars/man_avatar_1.png">\n            </ui5-avatar>\n            <span slot="footnotes">Alain Chevalier</span>\n            <span slot="footnotes">2 Days</span>\n            And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n        <ui5-li-notification show-close title-text="New order (#2525) With a short title" priority="High" read>\n            <ui5-avatar size="XS" slot="avatar">\n                <img src="../assets/images/avatars/man_avatar_2.png">\n            </ui5-avatar>\n            <span slot="footnotes">John Doe</span>\n            <span slot="footnotes">2 Days</span>\n            And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n    </ui5-list>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',r='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/List.js";\n\nimport "@ui5/webcomponents-fiori/dist/NotificationListItem.js";\n\nvar notificationList = document.querySelector("ui5-list");\n\nnotificationList.addEventListener("item-close", e => {\n    e.detail.item.hidden = true;\n});';function l(e){const{Editor:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(t,{html:o,js:r})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}const a='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-list header-text="Notifications">\n        <ui5-li-notification\n            title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n            priority="Priority.Low" show-close="High">\n            <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>\n            <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>\n            <ui5-avatar size="XS" slot="avatar">\n                <img src="../assets/images/avatars/woman_avatar_1.png">\n            </ui5-avatar>\n            <span slot="footnotes">Monique Legrand</span>\n            <span slot="footnotes">2 Days</span>\n            And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur\n            adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec\n            elementum lectus turpis at nunc.\n        </ui5-li-notification>\n        <ui5-li-notification priority="Low" show-close\n            title-text="And with a very long description and only one action - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">\n            <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>\n            <ui5-avatar size="XS" icon="employee" slot="avatar">\n                <img src="../assets/images/avatars/woman_avatar_1.png">\n            </ui5-avatar>\n            <span slot="footnotes-1">Monique Legrand</span>\n            <span slot="footnotes-2">2 Days</span>\n            And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur\n            adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec\n            elementum lectus turpis at nunc.\n        </ui5-li-notification>\n\n        <ui5-li-notification read show-close priority="Low" title-text="New order (#2525) With a short title">\n            <ui5-notification-action icon="accept" text="Accept All Requested Information"\n                slot="actions"></ui5-notification-action>\n            <ui5-notification-action icon="decline" text="Reject All Requested Information"\n                slot="actions"></ui5-notification-action>\n            <ui5-avatar size="XS" icon="employee" slot="avatar">\n                <img src="../assets/images/avatars/woman_avatar_1.png">\n            </ui5-avatar>\n            <span slot="footnotes-1">Monique Legrand</span>\n            <span slot="footnotes-2">2 Days</span>\n            And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur\n            adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec\n            elementum lectus turpis at nunc.\n        </ui5-li-notification>\n    </ui5-list>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',d='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/List.js";\n\nimport "@ui5/webcomponents-fiori/dist/NotificationListItem.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationAction.js";\n\nimport "@ui5/webcomponents-icons/dist/message-error.js";\nimport "@ui5/webcomponents-icons/dist/accept.js";\n\nvar notificationList = document.querySelector("ui5-list");\n\nnotificationList.addEventListener("item-close", e => {\n    e.detail.item.hidden = true;\n});';function h(e){const{Editor:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(t,{html:a,js:d})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}const p='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 350px;">\n    \x3c!-- playground-fold-end --\x3e\n\n<ui5-shellbar\n    primary-title="Corporate Portal"\n    show-notifications\n    notifications-count="4"\n>\n    <img slot="logo" src="../assets/images/sap-logo-svg.svg" />\n</ui5-shellbar>\n<ui5-popover\n\tplacement="Bottom"\n\thorizontal-align="End"\n\tid="popover-with-notifications"\n>\n    <ui5-list header-text="Notifications">\n    <ui5-li-notification\n        title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n        show-close>\n        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>\n        <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>\n        <ui5-avatar initials="JD" size="XS" slot="avatar"></ui5-avatar>\n        <span slot="footnotes">John Doe</span>\n        <span slot="footnotes">2 Days</span>\n        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum\n        lectus turpis at nunc.\n    </ui5-li-notification>\n    <ui5-li-notification show-close\n        title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n        priority="High">\n        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n        <span slot="footnotes">Office Notifications</span>\n        <span slot="footnotes">3 Days</span>\n        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>\n        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum\n        lectus turpis at nunc.\n    </ui5-li-notification>\n\n    <ui5-li-notification\n        title-text="New order (#2565) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n        priority="Medium">\n        <ui5-avatar initials="JS" size="XS" slot="avatar"></ui5-avatar>\n        <span slot="footnotes">Patricia Clark</span>\n        <span slot="footnotes">3 Days</span>\n        <ui5-notification-action icon="accept" text="Accept All Requested Information"\n            slot="actions"></ui5-notification-action>\n        <ui5-notification-action icon="decline" text="Reject All Requested Information"\n            slot="actions"></ui5-notification-action>\n        Short description\n    </ui5-li-notification>\n\n    <ui5-li-notification title-text="New order (#2523)">\n        <span slot="footnotes">John Smith</span>\n        <span slot="footnotes">3 Days</span>\n        <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>\n        With a very long description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis\n        vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.\n    </ui5-li-notification>\n</ui5-list>\n</ui5-popover>\n\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',x='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/List.js";\nimport "@ui5/webcomponents/dist/Popover.js";\n\nimport "@ui5/webcomponents-fiori/dist/ShellBar.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationListItem.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationAction.js";\n\nimport "@ui5/webcomponents-icons/dist/employee.js";\nimport "@ui5/webcomponents-icons/dist/message-error.js";\nimport "@ui5/webcomponents-icons/dist/accept.js";\n\nvar notificationList = document.querySelector("ui5-list");\nnotificationList.addEventListener("item-close", e => {\n    e.detail.item.hidden = true;\n});\n\nvar shellbar = document.querySelector("ui5-shellbar");\nvar notificationsPopover = document.querySelector("ui5-popover");\n\nshellbar.addEventListener("notifications-click", e => {\n    event.preventDefault();\n    notificationsPopover.showAt(e.detail.targetRef);\n});',j="#popover-with-notifications::part(content) {\n    padding: 0;\n    max-width: 400px;\n}";function m(e){const{Editor:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(t,{html:p,js:x,css:j})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}const v={},y=void 0,g={id:"components/fiori/NotificationListItem",title:"NotificationListItem",description:"The ui5-li-notification is a type of list item, meant to display notifications.",source:"@site/docs/components/fiori/NotificationListItem.mdx",sourceDirName:"components/fiori",slug:"/components/fiori/NotificationListItem",permalink:"/ui5-webcomponents/nightly/components/fiori/NotificationListItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"NotificationListGroupItem",permalink:"/ui5-webcomponents/nightly/components/fiori/NotificationListGroupItem"},next:{title:"Page",permalink:"/ui5-webcomponents/nightly/components/fiori/Page"}},b={},w=[{value:"Usage",id:"usage",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"wrappingType",id:"wrappingtype",level:3},{value:"titleText",id:"titletext",level:3},{value:"priority",id:"priority",level:3},{value:"showClose",id:"showclose",level:3},{value:"read",id:"read",level:3},{value:"busy",id:"busy",level:3},{value:"busyDelay",id:"busydelay",level:3},{value:"selected",id:"selected",level:3},{value:"Slots",id:"slots",level:2},{value:"avatar",id:"avatar",level:3},{value:"footnotes",id:"footnotes",level:3},{value:"default",id:"default",level:3},{value:"actions",id:"actions",level:3},{value:"Events",id:"events",level:2},{value:"close",id:"close",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Notification Actions",id:"notification-actions",level:3},{value:"Notifcations in ShellBar",id:"notifcations-in-shellbar",level:3}];function D(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-li-notification"})," is a type of list item, meant to display notifications."]}),"\n",(0,n.jsxs)(t.p,{children:["The component has a rich set of various properties that allows the user to set ",(0,n.jsx)(t.code,{children:"avatar"}),", ",(0,n.jsx)(t.code,{children:"titleText"}),", descriptive ",(0,n.jsx)(t.code,{children:"content"}),"\nand ",(0,n.jsx)(t.code,{children:"footnotes"})," to fully describe a notification."]}),"\n",(0,n.jsx)(t.p,{children:"The user can:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["display a ",(0,n.jsx)(t.code,{children:"Close"})," button"]}),"\n",(0,n.jsxs)(t.li,{children:["can control whether the ",(0,n.jsx)(t.code,{children:"titleText"})," and ",(0,n.jsx)(t.code,{children:"description"})," should wrap or truncate\nand display a ",(0,n.jsx)(t.code,{children:"ShowMore"})," button to switch between less and more information"]}),"\n",(0,n.jsxs)(t.li,{children:["add custom actions by using the ",(0,n.jsx)(t.code,{children:"ui5-notification-action"})," component"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["The component can be used in a standard ",(0,n.jsx)(t.code,{children:"ui5-list"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/NotificationListItem.js";'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/NotificationAction.js";'})," (optional)"]}),"\n",(0,n.jsx)(t.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,n.jsx)(c,{}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"wrappingtype",children:"wrappingType"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines if the ",(0,n.jsx)(t.code,{children:"titleText"})," and ",(0,n.jsx)(t.code,{children:"description"})," should wrap, they truncate by default.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," by default the ",(0,n.jsx)(t.code,{children:"titleText"})," and ",(0,n.jsx)(t.code,{children:"description"}),", and a ",(0,n.jsx)(t.code,{children:"ShowMore/Less"})," button would be displayed."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"None" | "Normal"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'"None"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Since"}),(0,n.jsx)(t.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"titletext",children:"titleText"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the ",(0,n.jsx)(t.code,{children:"titleText"})," of the item."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"priority",children:"priority"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the ",(0,n.jsx)(t.code,{children:"priority"})," of the item."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"High" | "Medium" | "Low" | "None"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'"None"'})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"showclose",children:"showClose"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines if the ",(0,n.jsx)(t.code,{children:"close"})," button would be displayed."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"read",children:"read"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines if the ",(0,n.jsx)(t.code,{children:"notification"})," is new or has been already read.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," if set to ",(0,n.jsx)(t.code,{children:"false"})," the ",(0,n.jsx)(t.code,{children:"titleText"})," has bold font, if set to true - it has a normal font."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"busy",children:"busy"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines if a busy indicator would be displayed over the item."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Since"}),(0,n.jsx)(t.td,{children:"1.0.0-rc.8"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"busydelay",children:"busyDelay"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines the delay in milliseconds, after which the busy indicator will show up for this component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"number"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"1000"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"selected",children:"selected"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the selected state of the ",(0,n.jsx)(t.code,{children:"ListItem"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(t.h3,{id:"avatar",children:"avatar"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the avatar, displayed in the ",(0,n.jsx)(t.code,{children:"ui5-li-notification"}),".",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Consider using the ",(0,n.jsx)(t.code,{children:"ui5-avatar"})," to display icons, initials or images.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," In order to be complaint with the UX guidlines and for best experience, we recommend using avatars with 2rem X 2rem in size (32px X 32px). In case you are using the ",(0,n.jsx)(t.code,{children:"ui5-avatar"})," you can set its ",(0,n.jsx)(t.code,{children:"size"})," property to ",(0,n.jsx)(t.code,{children:"XS"})," to get the required size - ",(0,n.jsx)(t.code,{children:'<ui5-avatar size="XS"></ui5-avatar>'}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"footnotes",children:"footnotes"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines the elements, displayed in the footer of the of the component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the content of the ",(0,n.jsx)(t.code,{children:"ui5-li-notification"}),", usually a description of the notification.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<Node>"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"actions",children:"actions"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the actions, displayed in the top-right area.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," use the ",(0,n.jsx)(t.code,{children:"ui5-notification-action"})," component."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<NotificationAction>"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(t.h3,{id:"close",children:"close"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Fired when the ",(0,n.jsx)(t.code,{children:"Close"})," button is pressed."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CustomEvent<NotificationListItemBaseCloseEventDetail>"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameters"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"item"}),": ",(0,n.jsx)(t.code,{children:"HTMLElement"}),(0,n.jsx)("br",{}),"the closed item."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"title-text"}),(0,n.jsx)(t.td,{children:"Used to style the titleText of the notification list item"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,n.jsx)(t.h3,{id:"notification-actions",children:"Notification Actions"}),"\n",(0,n.jsxs)(t.p,{children:["The sample demonstrates the usage of the ",(0,n.jsx)("b",{children:"ui5-notification-action"}),".\nThe actions are displayed just before the close/dismiss button and can overflow if many actions are used."]}),"\n",(0,n.jsx)(u,{}),"\n",(0,n.jsx)(t.h3,{id:"notifcations-in-shellbar",children:"Notifcations in ShellBar"}),"\n",(0,n.jsx)(t.p,{children:"The main usage of the Notifcations is in the ShellBar."}),"\n",(0,n.jsx)(f,{})]})}function L(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(D,{...e})}):D(e)}},1184:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var n=i(4041);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);