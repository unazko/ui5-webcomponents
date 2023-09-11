import{x as A}from"./lit-element.3a4d34a1.js";import{l as i}from"./if-defined.d89d00ab.js";import{o as I}from"./unsafe-html.3b27b0e6.js";import{D as R}from"./docs.51924474.js";import{B}from"./ButtonDesign.9fd17152.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.be39b920.js";import"./iframe.ef306bc9.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.0dbfee3b.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const T={design:{control:"select",options:["Attention","Default","Emphasized","Negative","Positive","Transparent"]},type:{control:"select",options:["Button","Reset","Submit"]},default:{control:{type:"text"}}},M={package:"@ui5/webcomponents"},S="ui5-button",J={title:"Main/Button",component:"Button",parameters:{docs:{page:R({...M,component:S})}},argTypes:T},c=e=>A`<ui5-button
    design="${i(e.design)}"
    ?disabled="${i(e.disabled)}"
    icon="${i(e.icon)}"
    ?icon-end="${i(e.iconEnd)}"
    tooltip="${i(e.tooltip)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-name-ref="${i(e.accessibleNameRef)}"
    accessibility-attributes="${i(e.accessibilityAttributes)}"
>
    ${I(e.default)}
</ui5-button>`,s=c.bind({});s.args={default:"Button"};const a=c.bind({});a.args={default:"Disabled",disabled:!0};const t=c.bind({});t.args={default:"Warning",design:B.Attention,icon:"message-warning"};const o=c.bind({});o.args={default:"Download",icon:"download",iconEnd:!0};const n=c.bind({});n.storyName="Icon-only Button";n.args={design:B.Negative,icon:"cancel",accessibleName:"Cancel",accessibleNameRef:"lblCancel",tooltip:"Cancel"};n.decorators=[e=>A`<ui5-label style="display:none;" id="lblCancel" aria-hidden="true">Cancel</ui5-label>
    ${e()}`];var r,d,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:'args => html`<ui5-button\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    icon="${ifDefined(args.icon)}"\n    ?icon-end="${ifDefined(args.iconEnd)}"\n    tooltip="${ifDefined(args.tooltip)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-button>`',...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var f,b,u;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`<ui5-button\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    icon="${ifDefined(args.icon)}"\n    ?icon-end="${ifDefined(args.iconEnd)}"\n    tooltip="${ifDefined(args.tooltip)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-button>`',...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var m,g,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`<ui5-button\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    icon="${ifDefined(args.icon)}"\n    ?icon-end="${ifDefined(args.iconEnd)}"\n    tooltip="${ifDefined(args.tooltip)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-button>`',...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var $,D,y;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:'args => html`<ui5-button\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    icon="${ifDefined(args.icon)}"\n    ?icon-end="${ifDefined(args.iconEnd)}"\n    tooltip="${ifDefined(args.tooltip)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-button>`',...(y=(D=o.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var N,h,E;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:'args => html`<ui5-button\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    icon="${ifDefined(args.icon)}"\n    ?icon-end="${ifDefined(args.iconEnd)}"\n    tooltip="${ifDefined(args.tooltip)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-button>`',...(E=(h=n.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const K=["Basic","Disabled","WithIconAndDesign","WithEndIcon","IconOnly"];export{s as Basic,a as Disabled,n as IconOnly,o as WithEndIcon,t as WithIconAndDesign,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Button.stories.1711f605.js.map
