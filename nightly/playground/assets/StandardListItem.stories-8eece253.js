import{x as r}from"./lit-element-c5a2b594.js";import{l as e}from"./if-defined-c29cffe1.js";import{o as n}from"./unsafe-html-0ddd83da.js";import{D as d}from"./docs-65fd78d9.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-2a6467c7.js";import"./index-6397ff69.js";import"./iframe-e61154d2.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-09d86f83.js";import"./client-fb0f3103.js";const c={additionalTextState:{control:"select",options:["None","Success","Warning","Error","Information"]},type:{control:"select",options:["Inactive","Active","Detail","Navigation"]},default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}},imageContent:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},deleteButton:{control:{type:"text"},table:{type:{summary:"Array<IButton>"}}}},l={package:"@ui5/webcomponents"},m="ui5-li",M={title:"Main/List/Standard List Item",component:"StandardListItem",parameters:{docs:{page:d({...l,component:m,showDefaultStoryOnly:!0})}},argTypes:c},p=t=>r` <ui5-list>
  <ui5-li
    icon="${e(t.icon)}"
    description="${e(t.description)}"
    additional-text="${e(t.additionalText)}"
    additional-text-state="${e(t.additionalTextState)}"
    accessible-name="${e(t.accessibleName)}"
    ?icon-end="${e(t.iconEnd)}"
    image="${e(t.image)}"
    accessibility-attributes="${e(t.accessibilityAttributes)}"
    ?navigated="${e(t.navigated)}"
    type="${e(t.type)}"
    ?selected="${e(t.selected)}"
  >
    ${n(t.default)}
    ${n(t.imageContent)}
    ${n(t.deleteButton)}
  </ui5-li>
  </ui5-list>`,i=p.bind({});i.tags=["_hidden_"];i.args={default:"Pineapple",icon:"nutrition-activity",description:"Tropical plant with an edible fruit",additionalText:"In-stock",additionalTextState:"Success"};var a,o,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return html\` <ui5-list>
  <ui5-li
    icon="\${ifDefined(args.icon)}"
    description="\${ifDefined(args.description)}"
    additional-text="\${ifDefined(args.additionalText)}"
    additional-text-state="\${ifDefined(args.additionalTextState)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?icon-end="\${ifDefined(args.iconEnd)}"
    image="\${ifDefined(args.image)}"
    accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
    ?navigated="\${ifDefined(args.navigated)}"
    type="\${ifDefined(args.type)}"
    ?selected="\${ifDefined(args.selected)}"
  >
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.imageContent)}
    \${unsafeHTML(args.deleteButton)}
  </ui5-li>
  </ui5-list>\`;
}`,...(s=(o=i.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const N=["Basic"];export{i as Basic,N as __namedExportsOrder,M as default};
