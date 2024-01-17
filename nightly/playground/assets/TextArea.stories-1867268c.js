import{x as t}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{o as v}from"./unsafe-html-0ddd83da.js";import{D as w}from"./docs-3d39008a.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-3acf43bc.js";import"./index-73b3191a.js";import"./iframe-3a53584d.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d69f7eeb.js";import"./client-fb0f3103.js";const b={valueState:{control:"select",options:["None","Success","Warning","Error","Information"]},valueStateMessage:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}}},M={package:"@ui5/webcomponents"};var o=Object.freeze,L=Object.defineProperty,S=(e,h)=>o(L(e,"raw",{value:o(h||e.slice())})),l;const y="ui5-textarea";let s=0;const C={title:"Main/Text Area",component:"TextArea",parameters:{docs:{page:w({...M,component:y})}},argTypes:b},d=e=>t`
<ui5-textarea
    id="textArea-${s++}"
    value="${a(e.value)}"
    ?disabled="${a(e.disabled)}"
    ?readonly="${a(e.readonly)}"
    ?required="${a(e.required)}"
    placeholder="${a(e.placeholder)}"
    value-state="${a(e.valueState)}"
    rows="${a(e.rows)}"
    maxlength="${a(e.maxlength)}"
    ?show-exceeded-text="${a(e.showExceededText)}"
    ?growing="${a(e.growing)}"
    growing-max-lines="${a(e.growingMaxLines)}"
    name="${a(e.name)}"
    accessible-name="${a(e.accessibleName)}"
    accessible-name-ref="${a(e.accessibleNameRef)}"
>
    ${v(e.valueStateMessage)}
</ui5-textarea>`,i=d.bind({});i.args={placeholder:"Enter text"};const n=d.bind({});n.decorators=[e=>t(l||(l=S([`
		`,`
		<script>
		(() => {
			const textAreaMaxLength = document.getElementById("textArea-`,`");

			textAreaMaxLength.addEventListener("input", function (event) {
				const { value, maxlength} = textAreaMaxLength;
				textAreaMaxLength.valueState = value.length > maxlength ? "Warning" : "None";	
			});
		})()
		<\/script>`])),e(),s-1)];n.args={placeholder:"Enter text",maxlength:10,showExceededText:!0,valueStateMessage:'<div id="warningMessage" slot="valueStateMessage">The characters limit is exceeded</div>'};const r=d.bind({});r.decorators=[e=>t`
        <ui5-label for="textArea-${s}">Description</ui5-label>
        ${e()}
        `];r.args={placeholder:"Enter description",required:!0};var c,f,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => html\`
<ui5-textarea
    id="textArea-\${index++}"
    value="\${ifDefined(args.value)}"
    ?disabled="\${ifDefined(args.disabled)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    placeholder="\${ifDefined(args.placeholder)}"
    value-state="\${ifDefined(args.valueState)}"
    rows="\${ifDefined(args.rows)}"
    maxlength="\${ifDefined(args.maxlength)}"
    ?show-exceeded-text="\${ifDefined(args.showExceededText)}"
    ?growing="\${ifDefined(args.growing)}"
    growing-max-lines="\${ifDefined(args.growingMaxLines)}"
    name="\${ifDefined(args.name)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.valueStateMessage)}
</ui5-textarea>\``,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var m,x,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => html\`
<ui5-textarea
    id="textArea-\${index++}"
    value="\${ifDefined(args.value)}"
    ?disabled="\${ifDefined(args.disabled)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    placeholder="\${ifDefined(args.placeholder)}"
    value-state="\${ifDefined(args.valueState)}"
    rows="\${ifDefined(args.rows)}"
    maxlength="\${ifDefined(args.maxlength)}"
    ?show-exceeded-text="\${ifDefined(args.showExceededText)}"
    ?growing="\${ifDefined(args.growing)}"
    growing-max-lines="\${ifDefined(args.growingMaxLines)}"
    name="\${ifDefined(args.name)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.valueStateMessage)}
</ui5-textarea>\``,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var $,p,D;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`args => html\`
<ui5-textarea
    id="textArea-\${index++}"
    value="\${ifDefined(args.value)}"
    ?disabled="\${ifDefined(args.disabled)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    placeholder="\${ifDefined(args.placeholder)}"
    value-state="\${ifDefined(args.valueState)}"
    rows="\${ifDefined(args.rows)}"
    maxlength="\${ifDefined(args.maxlength)}"
    ?show-exceeded-text="\${ifDefined(args.showExceededText)}"
    ?growing="\${ifDefined(args.growing)}"
    growing-max-lines="\${ifDefined(args.growingMaxLines)}"
    name="\${ifDefined(args.name)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.valueStateMessage)}
</ui5-textarea>\``,...(D=(p=r.parameters)==null?void 0:p.docs)==null?void 0:D.source}}};const F=["Basic","MaxLength","Label"];export{i as Basic,r as Label,n as MaxLength,F as __namedExportsOrder,C as default};
