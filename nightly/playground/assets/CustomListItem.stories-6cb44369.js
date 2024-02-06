import{x as u}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as s}from"./unsafe-html-0ddd83da.js";const l={type:{control:"select",options:["Inactive","Active","Detail","Navigation"]},default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}},deleteButton:{control:{type:"text"},table:{type:{summary:"Array<IButton>"}}}},f={package:"@ui5/webcomponents",tagName:"ui5-li-custom",showDefaultStoryOnly:!0},r={title:"Main/List/Custom List Item",component:"CustomListItem",argTypes:l},c=t=>u` <ui5-list>
    <ui5-li-custom
      accessible-name="${i(t.accessibleName)}"
      accessibility-attributes="${i(t.accessibilityAttributes)}"
      ?navigated="${i(t.navigated)}"
      type="${i(t.type)}"
      ?selected="${i(t.selected)}"
    >
      ${s(t.default)}
      ${s(t.deleteButton)}
    </ui5-li-custom>
  </ui5-list>`,e=c.bind({});e.tags=["_hidden_"];e.args={default:`<ui5-button>Click me</ui5-button>
  <ui5-link href="https://www.google.bg" target="_blank">UI5 link</ui5-link>
  <ui5-radio-button text="Option B" disabled="disabled"></ui5-radio-button>
  <ui5-button>Click me</ui5-button>`};var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return html\` <ui5-list>
    <ui5-li-custom
      accessible-name="\${ifDefined(args.accessibleName)}"
      accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
      ?navigated="\${ifDefined(args.navigated)}"
      type="\${ifDefined(args.type)}"
      ?selected="\${ifDefined(args.selected)}"
    >
      \${unsafeHTML(args.default)}
      \${unsafeHTML(args.deleteButton)}
    </ui5-li-custom>
  </ui5-list>\`;
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const m=["Basic"],y=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,__namedExportsOrder:m,default:r},Symbol.toStringTag,{value:"Module"}));export{y as C,f as c};
