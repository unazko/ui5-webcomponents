import{x as S}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{D as v}from"./docs-09778131.js";import{S as R}from"./SwitchDesign-b1007d8d.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-48201a95.js";import"./iframe-143f24d8.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-37e8697c.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const T={design:{control:"select",options:["Graphical","Textual"]}},C={package:"@ui5/webcomponents",since:"0.8.0"},F="ui5-switch",Q={title:"Main/Switch",component:"Switch",parameters:{docs:{page:v({...C,component:F})}},argTypes:T},n=e=>S`<ui5-switch
    design="${i(e.design)}"
    ?checked="${i(e.checked)}"
    ?disabled="${i(e.disabled)}"
    ?required="${i(e.required)}"
    ?name="${i(e.name)}"
    text-on="${i(e.textOn)}"
    text-off="${i(e.textOff)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-name-ref="${i(e.accessibleNameRef)}"
    tooltip="${i(e.tooltip)}"
></ui5-switch>`,c=n.bind({}),a=n.bind({});a.args={textOn:"On",textOff:"Off"};const r=n.bind({});r.args={textOn:"Yes",textOff:"No",checked:!0};const t=n.bind({});t.args={disabled:!0,checked:!0};const d=n.bind({});d.args={design:R.Graphical,accessibleName:"graphical"};const s=n.bind({});s.args={required:!0,name:"termsAndConditions",disabled:!1,design:R.Textual,textOn:"Yes",textOff:"No"};s.decorators=[e=>S`
        <style>
            .switch-form {
                max-width: fit-content;
                border: 1px solid var(--sapList_BorderColor);
                border-radius: 0.5rem;
                padding: 1rem;
            }
        </style>
        <form id="myForm" class="switch-form">
            <h3 style="margin: 0 0 1rem 0">Switch in Registration form sample</h3>
            <div style="display: flex; flex-direction: column;">
                <ui5-input required type="Email" placeholder="Email" value="your@email.com"></ui5-input>
                <ui5-input required type="Password" placeholder="Password" value="your@email.com"></ui5-input>
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center;">
                <ui5-label for="mySwitch" style="margin: 1rem 0 0 0">Please accept the terms and conditions, in order to proceed</ui5-label>
                <div style="width: fit-content">
                    ${e()}
                </div>
            </div>
            <br>
            <ui5-button type="Submit">Submit Form</ui5-button>
        </form>`];var f,o,m;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(m=(o=c.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var l,g,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,$,D;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(D=($=r.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var b,h,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,O,k;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(k=(O=d.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var q,y,N;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(N=(y=s.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const U=["Basic","WithText","Checked","Disabled","Design","RequiredInForm"];export{c as Basic,r as Checked,d as Design,t as Disabled,s as RequiredInForm,a as WithText,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Switch.stories-52319417.js.map
