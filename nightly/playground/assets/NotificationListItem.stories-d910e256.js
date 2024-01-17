import{x as n}from"./lit-element-c5a2b594.js";import{l as e}from"./if-defined-c29cffe1.js";import{o as s}from"./unsafe-html-0ddd83da.js";import{D}from"./docs-3d39008a.js";import{P as $}from"./Priority-ed61c98b.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-3acf43bc.js";import"./index-73b3191a.js";import"./iframe-3a53584d.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d69f7eeb.js";import"./client-fb0f3103.js";const T={wrappingType:{control:"select",options:["None","Normal"]},priority:{control:"select",options:["High","Medium","Low","None"]},avatar:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},footnotes:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}},actions:{control:{type:"text"},table:{type:{summary:"Array<NotificationAction>"}}},close:{description:"Fired when the <code>Close</code> button is pressed.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"the closed item."}]}}},A={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.8"};var c=Object.freeze,q=Object.defineProperty,b=(t,x)=>c(q(t,"raw",{value:c(x||t.slice())})),u,p;const P="ui5-li-notification",F={title:"Fiori/Notification List Item",component:"NotificationListItem",parameters:{docs:{page:D({...A,component:P}),story:{iframeHeight:"470px",inline:!1}}},argTypes:T},r=t=>n(u||(u=b([`<ui5-list header-text="Notifications">
	`,`
</ui5-list>

<script>
	var notificationList = document.querySelector("ui5-list");
	notificationList.addEventListener("item-close", e => {
		e.detail.item.hidden = true;
	});
<\/script>`])),t()),l=t=>n`<ui5-li-notification
    title-text="${e(t.titleText)}"
    priority="${e(t.priority)}"
    ?show-close="${e(t.showClose)}"
    ?read="${e(t.read)}"
    ?busy="${e(t.busy)}"
    busy-delay="${e(t.busyDelay)}"
    wrappingType="${e(t.wrappingType)}"
>
    ${s(t.actions)}
    ${s(t.avatar)}
    ${s(t.footnotes)}
    ${s(t.default)}
</ui5-li-notification>`;l.decorators=[r];const o=l.bind({});o.args={titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",default:"And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",showClose:!0,priority:$.High,avatar:`<ui5-avatar size="XS" slot="avatar">
    <img src="../assets/images/avatars/woman_avatar_1.png">
</ui5-avatar>`,footnotes:`<span slot="footnotes">Monique Legrand</span>
<span slot="footnotes">2 Days</span>`};o.decorators=[t=>n`${t()}

<ui5-li-notification show-close title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar size="XS" slot="avatar">
        <img src="../assets/images/avatars/man_avatar_1.png">
    </ui5-avatar>
    <span slot="footnotes">Alain Chevalier</span>
    <span slot="footnotes">2 Days</span>
    And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>

<ui5-li-notification show-close title-text="New order (#2525) With a short title" priority="High" read>
    <ui5-avatar size="XS" slot="avatar">
        <img src="../assets/images/avatars/man_avatar_2.png">
    </ui5-avatar>
    <span slot="footnotes">John Doe</span>
    <span slot="footnotes">2 Days</span>
    And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>`,r];const a=l.bind({});a.args={titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",default:"And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",showClose:!0,priority:$.Low,actions:`<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
<ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>`,avatar:`<ui5-avatar size="XS" slot="avatar">
    <img src="../assets/images/avatars/woman_avatar_1.png">
</ui5-avatar>`,footnotes:`<span slot="footnotes">Monique Legrand</span>
<span slot="footnotes">2 Days</span>`};a.decorators=[t=>n`${t()}

<ui5-li-notification priority="Low" show-close title-text="And with a very long description and only one action - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    <ui5-avatar size="XS" icon="employee" slot="avatar">
        <img src="../assets/images/avatars/woman_avatar_1.png">
    </ui5-avatar>
    <span slot="footnotes-1">Monique Legrand</span>
    <span slot="footnotes-2">2 Days</span>
    And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>

<ui5-li-notification read show-close priority="Low" title-text="New order (#2525) With a short title">
    <ui5-notification-action icon="accept" text="Accept All Requested Information" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="decline" text="Reject All Requested Information" slot="actions"></ui5-notification-action>
    <ui5-avatar size="XS" icon="employee" slot="avatar">
        <img src="../assets/images/avatars/woman_avatar_1.png">
    </ui5-avatar>
    <span slot="footnotes-1">Monique Legrand</span>
    <span slot="footnotes-2">2 Days</span>
    And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>`,r];const i=l.bind({});i.args={showClose:!0,titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",default:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",avatar:'<ui5-avatar initials="JD" size="XS" slot="avatar"></ui5-avatar>',footnotes:`<span slot="footnotes">John Doe</span>
<span slot="footnotes">2 Days</span>`,actions:`<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
<ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>`};i.decorators=[t=>n`<style>
        #popover-with-notifications::part(content) {
            padding: 0;
            max-width: 400px;
        }
    </style>
    ${t()}
<ui5-li-notification
    show-close
    title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
    priority="High"
>
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>

<ui5-li-notification
    title-text="New order (#2565) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
    priority="Medium"
>
    <ui5-avatar initials="JS" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Patricia Clark</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="accept" text="Accept All Requested Information" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="decline" text="Reject All Requested Information" slot="actions"></ui5-notification-action>
    Short description
</ui5-li-notification>

<ui5-li-notification title-text="New order (#2523)">
    <span slot="footnotes">John Smith</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    With a very long description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>`,t=>n(p||(p=b([`<ui5-shellbar
	primary-title="Corporate Portal"
	logo="../assets/images/sap-logo-svg.svg"
	show-notifications
	notifications-count="4"
></ui5-shellbar>
<ui5-popover
	placement-type="Bottom"
	horizontal-align="Right"
	id="popover-with-notifications"
>
	`,`
</ui5-popover>

<script>
	var shellbar = document.querySelector("ui5-shellbar");
	var notificationsPopover = document.querySelector("ui5-popover");

	shellbar.addEventListener("notifications-click", e => {
		event.preventDefault();
		notificationsPopover.showAt(e.detail.targetRef);
	});
<\/script>`])),r(t))];i.parameters={docs:{story:{iframeHeight:"700px"}}};var d,f,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return html\`<ui5-li-notification
    title-text="\${ifDefined(args.titleText)}"
    priority="\${ifDefined(args.priority)}"
    ?show-close="\${ifDefined(args.showClose)}"
    ?read="\${ifDefined(args.read)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    wrappingType="\${ifDefined(args.wrappingType)}"
>
    \${unsafeHTML(args.actions)}
    \${unsafeHTML(args.avatar)}
    \${unsafeHTML(args.footnotes)}
    \${unsafeHTML(args.default)}
</ui5-li-notification>\`;
}`,...(m=(f=o.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var g,v,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return html\`<ui5-li-notification
    title-text="\${ifDefined(args.titleText)}"
    priority="\${ifDefined(args.priority)}"
    ?show-close="\${ifDefined(args.showClose)}"
    ?read="\${ifDefined(args.read)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    wrappingType="\${ifDefined(args.wrappingType)}"
>
    \${unsafeHTML(args.actions)}
    \${unsafeHTML(args.avatar)}
    \${unsafeHTML(args.footnotes)}
    \${unsafeHTML(args.default)}
</ui5-li-notification>\`;
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,w,L;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return html\`<ui5-li-notification
    title-text="\${ifDefined(args.titleText)}"
    priority="\${ifDefined(args.priority)}"
    ?show-close="\${ifDefined(args.showClose)}"
    ?read="\${ifDefined(args.read)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    wrappingType="\${ifDefined(args.wrappingType)}"
>
    \${unsafeHTML(args.actions)}
    \${unsafeHTML(args.avatar)}
    \${unsafeHTML(args.footnotes)}
    \${unsafeHTML(args.default)}
</ui5-li-notification>\`;
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const U=["Basic","Actions","InShellBar"];export{a as Actions,o as Basic,i as InShellBar,U as __namedExportsOrder,F as default};
