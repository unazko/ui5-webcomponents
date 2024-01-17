import{x as d}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as l}from"./unsafe-html-0ddd83da.js";import{D as O}from"./docs-3d39008a.js";import{V as C}from"./ValueState-2c5e5904.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-3acf43bc.js";import"./index-73b3191a.js";import"./iframe-3a53584d.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d69f7eeb.js";import"./client-fb0f3103.js";const T={state:{control:"select",options:["None","Success","Warning","Error","Information"]},accessibleRole:{control:"select",options:["None","Dialog","AlertDialog"]},header:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},footer:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},default:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},show:{description:"Shows the dialog.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"preventInitialFocus",default:"false",description:"Prevents applying the focus inside the popup",optional:!0,_ui5privacy:"public",type:{text:"boolean"}}],returnValue:{type:{text:"Promise<void>"},description:"Resolves when the dialog is open"}}},applyFocus:{description:`Focuses the element denoted by <code>initialFocus</code>, if provided,
or the first focusable element otherwise.`,table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"Promise<void>"},description:"Promise that resolves when the focus is applied"}}},isOpen:{description:"Tells if the component is opened",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"boolean"}}}},close:{description:"Closes the popup.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}},"before-close":{description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. <b>This event does not bubble.</b>",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"boolean"},name:"escPressed",_ui5privacy:"public",description:"Indicates that <code>ESC</code> key has triggered the event."}]}}},w={package:"@ui5/webcomponents"};var c=Object.freeze,L=Object.defineProperty,R=(e,r)=>c(L(e,"raw",{value:c(r||e.slice())})),g;const z="ui5-dialog",G={title:"Main/Dialog",component:"Dialog",argTypes:T,parameters:{docs:{story:{iframeHeight:"800px",inline:!1},page:O({...w,component:z})}}},s=e=>d(g||(g=R([`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
	id="dialog"
	header-text="`,`"
	?stretch="`,`"
	?draggable="`,`"
	?resizable="`,`"
	state="`,`"
	initial-focus="`,`"
	?prevent-focus-restore="`,`"
	?open="`,`"
	accessible-name="`,`"
	accessible-name-ref="`,`"
	accessible-role="`,`"
>
	`,`
	`,`
	`,`
</ui5-dialog>

<script>
	var dialogOpener = document.getElementById("dialogOpener");
	var dialog = document.getElementById("dialog"); 
	var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

	dialogOpener.accessibilityAttributes = {
		hasPopup: "dialog",
		controls: dialog.id,
	};
	dialogOpener.addEventListener("click", () => {
		dialog.open = true;
	});
	dialogClosers.forEach(btn => {
		btn.addEventListener("click", () => {
			dialog.open = false;
		});
	})
<\/script>`])),i(e.headerText),i(e.stretch),i(e.draggable),i(e.resizable),i(e.state),i(e.initialFocus),i(e.preventFocusRestore),i(e.open),i(e.accessibleName),i(e.accessibleNameRef),i(e.accessibleRole),l(e.header),l(e.default),l(e.footer)),a=s.bind({});a.args={headerText:"Register Form",default:`<section class="login-form">
    <div>
        <ui5-label for="username" required show-colon>Username</ui5-label>
        <ui5-input id="username"></ui5-input>
    </div>
    <div>
        <ui5-label for="password" required show-colon>Password</ui5-label>
        <ui5-input id="password" type="Password" value-state="Error"></ui5-input>
    </div>
    <div>
        <ui5-label for="email" type="Email" required show-colon>Email</ui5-label>
        <ui5-input id="email"></ui5-input>
    </div>
    <div>
        <ui5-label for="address" show-colon>Address</ui5-label>
        <ui5-input id="address"></ui5-input>
    </div>
</section>`,footer:`<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; align-items: center">
    <div style="flex: 1;"></div>
    <ui5-button class="dialogCloser" design="Emphasized">Register</ui5-button>
</div>`};a.decorators=[e=>d`<style>
    .login-form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        margin: 3rem 6rem;
    }
    
    .login-form > div {
        display: grid;
        width: 15rem;
        margin-bottom: .5rem;
    }

    @media(max-width: 600px) {
        .login-form {
            margin: 3rem 1rem;
        }
    }
</style>
${e()}`];const o=s.bind({});o.args={resizable:!0,draggable:!0,headerText:"Draggable/Resizable dialog",default:`<p>Move this dialog around the screen by dragging it by its header.</p>
<p>Resize this dialog by dragging it by its resize handle.</p>
<p>These features are available only on Desktop.</p>`,footer:`<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; align-items: center">
    <ui5-button class="dialogCloser" design="Emphasized">OK</ui5-button>
</div>`};const n=s.bind({});n.storyName="Bar in Header/Footer";n.args={header:`<ui5-bar slot="header" design="Header">
    <ui5-title level="H5" slot="startContent">Bar used in Header and Footer</ui5-title>
    <ui5-button class="dialogCloser" design="Transparent" id="closeDialogButton" slot="endContent" icon="decline"></ui5-button>
</ui5-bar>`,default:"<p>Adding styles for the parts to remove the default Dialog's paddings when ui5-bar is used inside Header and Footer</p>",footer:`<ui5-bar slot="footer" design="Footer">
    <ui5-button class="dialogCloser" design="Emphasized" slot="endContent" style="min-width: 4rem;">OK</ui5-button>
</ui5-bar>`};n.decorators=[e=>d`<style>
    #dialog::part(header),
    #dialog::part(footer) {
        padding-inline: 0;
    }
</style>
${e()}`];const t=s.bind({});t.args={state:C.Error,default:"<p>Dialog with state</p>",footer:`<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; align-items: center">
    <ui5-button class="dialogCloser">Close</ui5-button>
</div>`};t.decorators=[(e,{args:r})=>e({args:{...r,headerText:r.state}})];var u,p,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="\${ifDefined(args.headerText)}"
    ?stretch="\${ifDefined(args.stretch)}"
    ?draggable="\${ifDefined(args.draggable)}"
    ?resizable="\${ifDefined(args.resizable)}"
    state="\${ifDefined(args.state)}"
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>\`;
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var m,b,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="\${ifDefined(args.headerText)}"
    ?stretch="\${ifDefined(args.stretch)}"
    ?draggable="\${ifDefined(args.draggable)}"
    ?resizable="\${ifDefined(args.resizable)}"
    state="\${ifDefined(args.state)}"
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>\`;
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,v,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="\${ifDefined(args.headerText)}"
    ?stretch="\${ifDefined(args.stretch)}"
    ?draggable="\${ifDefined(args.draggable)}"
    ?resizable="\${ifDefined(args.resizable)}"
    state="\${ifDefined(args.state)}"
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>\`;
}`,...(D=(v=n.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var $,x,E;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="\${ifDefined(args.headerText)}"
    ?stretch="\${ifDefined(args.stretch)}"
    ?draggable="\${ifDefined(args.draggable)}"
    ?resizable="\${ifDefined(args.resizable)}"
    state="\${ifDefined(args.state)}"
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>\`;
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const J=["Basic","DraggableAndResizable","BarInDialog","WithState"];export{n as BarInDialog,a as Basic,o as DraggableAndResizable,t as WithState,J as __namedExportsOrder,G as default};
