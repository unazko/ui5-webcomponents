import{x as p}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as m}from"./unsafe-html-0ddd83da.js";import{D as u}from"./docs-385ea105.js";import{V as f}from"./ValueState-2c5e5904.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d8cfa13d.js";import"./iframe-c4b629bc.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-2e7a3fea.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const h={dateValue:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},valueStateMessage:{control:{type:"text"}},closePicker:{description:"Closes the picker",table:{category:"methods"},UI5CustomData:{returnValue:{type:"Promise",description:"Resolves when the picker is closed"}}},formatValue:{description:"Formats a Java Script date object into a string representing a locale date and time according to the <code>formatPattern</code> property of the TimePicker instance",table:{category:"methods"},UI5CustomData:{parameters:[{name:"date",type:"Date",optional:!1,description:"A Java Script date object to be formatted as string"}],returnValue:{type:"string"}}},isOpen:{description:"Checks if the picker is open",table:{category:"methods"},UI5CustomData:{returnValue:{type:"boolean"}}},isValid:{description:`Checks if a value is valid against the current <code>formatPattern</code> value.

<br><br> <b>Note:</b> an empty string is considered as valid value.`,table:{category:"methods"},UI5CustomData:{parameters:[{name:"value",type:"string",optional:!1,description:"The value to be tested against the current date format"}],returnValue:{type:"boolean"}}},openPicker:{description:"Opens the picker.",table:{category:"methods"},UI5CustomData:{returnValue:{type:"Promise",description:"Resolves when the picker is open"}}},change:{description:'Fired when the input operation has finished by clicking the "OK" button or when the text in the input field has changed and the focus leaves the input field.',table:{category:"events"},UI5CustomData:{parameters:[{name:"value",type:"string",description:"The submitted value."},{name:"valid",type:"boolean",description:"Indicator if the value is in correct format pattern and in valid range."}]}},input:{description:"Fired when the value of the <code>ui5-time-picker</code> is changed at each key stroke.",table:{category:"events"},UI5CustomData:{parameters:[{name:"value",type:"string",description:"The current value."},{name:"valid",type:"boolean",description:"Indicator if the value is in correct format pattern and in valid range."}]}}},v={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},g="ui5-time-picker",F={title:"Main/TimePicker",component:"TimePicker",parameters:{docs:{page:u({...v,component:g})}},argTypes:h},d=e=>p`<ui5-time-picker
    value="${t(e.value)}"
    value-state="${t(e.valueState)}"
    ?disabled="${t(e.disabled)}"
    ?readonly="${t(e.readonly)}"
    placeholder="${t(e.placeholder)}"
    format-pattern="${t(e.formatPattern)}"
>
    ${m(e.valueStateMessage)}
</ui5-time-picker>`,r=d.bind({}),a=d.bind({});a.storyName="Value State and Message";a.args={formatPattern:"hh:mm:ss a",valueState:f.Error,valueStateMessage:'<div slot="valueStateMessage">Please provide valid value</div>'};var i,o,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:'args => html`<ui5-time-picker\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-time-picker>`',...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,c,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-time-picker\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-time-picker>`',...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const N=["Basic","WithValueState"];export{r as Basic,a as WithValueState,N as __namedExportsOrder,F as default};
//# sourceMappingURL=TimePicker.stories-e685592b.js.map
