import{x as l}from"./lit-element-c5a2b594.js";import{o as h}from"./unsafe-html-0ddd83da.js";import{D as w}from"./docs-65fd78d9.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-2a6467c7.js";import"./index-6397ff69.js";import"./iframe-e61154d2.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-09d86f83.js";import"./client-fb0f3103.js";const x={default:{control:{type:"text"},table:{type:{summary:"Array<IProductSwitchItem>"}}}},g={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.5"};var o=Object.freeze,b=Object.defineProperty,f=(t,d)=>o(b(t,"raw",{value:o(d||t.slice())})),c;const v="ui5-product-switch",L={title:"Fiori/Product Switch",component:"ProductSwitch",parameters:{docs:{page:w({...g,component:v})}},argTypes:x},m=t=>l`
    <ui5-product-switch> ${h(t.default)} </ui5-product-switch>
`,i=m.bind({});i.args={default:`
    <ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
    <ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud" icon="business-objects-experience"></ui5-product-switch-item>
    <ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
    <ui5-product-switch-item title-text="Travel &amp; Expense" subtitle-text="Concur" icon="flight"></ui5-product-switch-item>
`};const e=m.bind({});e.decorators=[t=>l(c||(c=f([`
        <ui5-shellbar
            id="shellbar"
            primary-title="Corporate Portal"
            secondary-title="home"
            logo="../assets/images/sap-logo-svg.svg"
            show-product-switch=""
            show-co-pilot=""
        >
        </ui5-shellbar>
        <ui5-popover id="productswitch-popover" placement-type="Bottom">
            `,`
        </ui5-popover>
        <script>
            var shellBar = document.getElementById("shellbar");
            var popover = document.getElementById("productswitch-popover");
            shellbar.addEventListener("product-switch-click", (event) => {
                if (popover.opened) {
                    popover.close();
                } else {
                    event.preventDefault();
                    popover.showAt(event.detail.targetRef);
                }
            });
        <\/script>
    `])),t())];e.args={default:`
    <ui5-product-switch-item
        title-text="Home"
        subtitle-text="Central Home"
        icon="home"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Analytics Cloud"
        subtitle-text="Analytics Cloud"
        icon="business-objects-experience"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Catalog"
        subtitle-text="Ariba"
        icon="contacts"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Guided Buying"
        icon="credit-card"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Strategic Procurement"
        icon="cart-3"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Travel &amp; Expense"
        subtitle-text="Concur"
        icon="flight"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Vendor Management"
        subtitle-text="Fieldglass"
        icon="shipping-status"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Human Capital Management"
        icon="customer"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Sales Cloud"
        subtitle-text="Sales Cloud"
        icon="sales-notification"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Commerce Cloud"
        subtitle-text="Commerce Cloud"
        icon="retail-store"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Marketing Cloud"
        subtitle-text="Marketing Cloud"
        icon="marketing-campaign"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Service Cloud"
        icon="family-care"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Customer Data Cloud"
        icon="customer-briefing"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="S/4HANA"
        icon="batch-payments"
    ></ui5-product-switch-item>
    </ui5-product-switch>`};var r,s,u;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:"args => html`\n    <ui5-product-switch> ${unsafeHTML(args.default)} </ui5-product-switch>\n`",...(u=(s=i.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var a,p,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"args => html`\n    <ui5-product-switch> ${unsafeHTML(args.default)} </ui5-product-switch>\n`",...(n=(p=e.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const O=["Basic","WithShellBar"];export{i as Basic,e as WithShellBar,O as __namedExportsOrder,L as default};
