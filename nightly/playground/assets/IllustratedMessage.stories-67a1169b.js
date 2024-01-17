import{x as D}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as a}from"./unsafe-html-0ddd83da.js";import{D as x}from"./docs-3d39008a.js";import{I as $}from"./IllustrationMessageType-8c4a42f0.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-3acf43bc.js";import"./index-73b3191a.js";import"./iframe-3a53584d.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d69f7eeb.js";import"./client-fb0f3103.js";const v={size:{control:"select",options:["Auto","Base","Spot","Dialog","Scene"]},titleLevel:{control:"select",options:["H1","H2","H3","H4","H5","H6"]},title:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement> & string"}}},subtitle:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},default:{control:{type:"text"},table:{type:{summary:"Array<IButton>"}}}},h={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.15"};var s=Object.freeze,B=Object.defineProperty,E=(e,y)=>s(B(e,"raw",{value:s(y||e.slice())})),l;const L="ui5-illustrated-message",W={title:"Fiori/Illustrated Message",component:"IllustratedMessage",parameters:{docs:{page:x({...h,component:L})}},argTypes:v},T=e=>D` <ui5-illustrated-message
    name="${t(e.name)}"
    size="${t(e.size)}"
    subtitle-text="${t(e.subtitleText)}"
    title-text="${t(e.titleText)}"
    accessible-name-ref="${t(e.accessibleNameRef)}"
    title-level="${t(e.titleLevel)}"
>
    ${a(e.title)}
    ${a(e.subtitle)}
    ${a(e.default)}
</ui5-illustrated-message>`,i=T.bind({});i.args={name:$.UnableToUpload,default:`
    <ui5-button design="Emphasized">Action 1</ui5-button>
    <ui5-button>Action 2</ui5-button>
    `};const o=()=>D(l||(l=E([`
    <ui5-button id="openDialogButton">Open Dialog</ui5-button>
    <ui5-dialog id="hello-dialog" header-text="Error">
        <ui5-illustrated-message name="UnableToLoad"></ui5-illustrated-message>
        <ui5-bar design="Footer" slot="footer">
            <ui5-button
                id="closeDialogButton"
                design="Emphasized"
                slot="endContent"
                >Close</ui5-button
            >
        </ui5-bar>
    </ui5-dialog>
    <script>
        const dialogOpener = document.getElementById("openDialogButton");
        const dialog = document.getElementById("hello-dialog");
        const dialogCloser = document.getElementById("closeDialogButton");
        dialogOpener.addEventListener("click", function () {
            dialog.show();
        });
        dialogCloser.addEventListener("click", function () {
            dialog.close();
        });
    <\/script>
`]))),n=T.bind({});n.args={name:$.UnableToUpload,title:`
    <ui5-title slot="title" level="H1">Something went wrong</ui5-title>
    `,subtitle:`
    <div slot="subtitle">
        Please try again or contact us at
        <ui5-link>example@example.com</ui5-link>
    </div>
    `,default:`
    <ui5-button icon="refresh">Try again</ui5-button>`};var r,u,d;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:'args => html` <ui5-illustrated-message\n    name="${ifDefined(args.name)}"\n    size="${ifDefined(args.size)}"\n    subtitle-text="${ifDefined(args.subtitleText)}"\n    title-text="${ifDefined(args.titleText)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    title-level="${ifDefined(args.titleLevel)}"\n>\n    ${unsafeHTML(args.title)}\n    ${unsafeHTML(args.subtitle)}\n    ${unsafeHTML(args.default)}\n</ui5-illustrated-message>`',...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,c,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => html\`
    <ui5-button id="openDialogButton">Open Dialog</ui5-button>
    <ui5-dialog id="hello-dialog" header-text="Error">
        <ui5-illustrated-message name="UnableToLoad"></ui5-illustrated-message>
        <ui5-bar design="Footer" slot="footer">
            <ui5-button
                id="closeDialogButton"
                design="Emphasized"
                slot="endContent"
                >Close</ui5-button
            >
        </ui5-bar>
    </ui5-dialog>
    <script>
        const dialogOpener = document.getElementById("openDialogButton");
        const dialog = document.getElementById("hello-dialog");
        const dialogCloser = document.getElementById("closeDialogButton");
        dialogOpener.addEventListener("click", function () {
            dialog.show();
        });
        dialogCloser.addEventListener("click", function () {
            dialog.close();
        });
    <\/script>
\``,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,f,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:'args => html` <ui5-illustrated-message\n    name="${ifDefined(args.name)}"\n    size="${ifDefined(args.size)}"\n    subtitle-text="${ifDefined(args.subtitleText)}"\n    title-text="${ifDefined(args.titleText)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    title-level="${ifDefined(args.titleLevel)}"\n>\n    ${unsafeHTML(args.title)}\n    ${unsafeHTML(args.subtitle)}\n    ${unsafeHTML(args.default)}\n</ui5-illustrated-message>`',...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const q=["Basic","WithADialog","CustomTitle"];export{i as Basic,n as CustomTitle,o as WithADialog,q as __namedExportsOrder,W as default};
