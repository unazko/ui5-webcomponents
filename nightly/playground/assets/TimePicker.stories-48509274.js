import{x as d}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as m}from"./unsafe-html-0ddd83da.js";import{D as u}from"./docs-65fd78d9.js";import{V as f}from"./ValueState-2c5e5904.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-2a6467c7.js";import"./index-6397ff69.js";import"./iframe-e61154d2.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-09d86f83.js";import"./client-fb0f3103.js";const v={dateValue:{control:{type:!1}},valueState:{control:"select",options:["None","Success","Warning","Error","Information"]},valueStateMessage:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},openPicker:{description:"Opens the picker.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"Promise<void>"},description:"Resolves when the picker is open"}}},closePicker:{description:"Closes the picker",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"Promise<void>"},description:"Resolves when the picker is closed"}}},isOpen:{description:"Checks if the picker is open",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"boolean"}}}},formatValue:{description:`Formats a Java Script date object into a string representing a locale date and time
according to the <code>formatPattern</code> property of the TimePicker instance`,table:{category:"methods"},UI5CustomData:{parameters:[{name:"date",type:{text:"Date"},description:"A Java Script date object to be formatted as string",_ui5privacy:"public"}],returnValue:{type:{text:"string"},description:"formatted value"}}},isValid:{description:`Checks if a value is valid against the current <code>formatPattern</code> value.

<br><br>
<b>Note:</b> an empty string is considered as valid value.`,table:{category:"methods"},UI5CustomData:{parameters:[{name:"value",type:{text:"string | undefined"},description:"The value to be tested against the current date format",_ui5privacy:"public"}],returnValue:{type:{text:"boolean"}}}},change:{description:`Fired when the input operation has finished by clicking the "OK" button or
when the text in the input field has changed and the focus leaves the input field.`,control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The submitted value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}]}},input:{description:"Fired when the value of the <code>ui5-time-picker</code> is changed at each key stroke.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The current value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}]}}},h={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},g="ui5-time-picker",O={title:"Main/TimePicker",component:"TimePicker",parameters:{docs:{page:u({...h,component:g})}},argTypes:v},p=e=>d`<ui5-time-picker
    value="${t(e.value)}"
    value-state="${t(e.valueState)}"
    ?disabled="${t(e.disabled)}"
    ?readonly="${t(e.readonly)}"
    placeholder="${t(e.placeholder)}"
    format-pattern="${t(e.formatPattern)}"
>
    ${m(e.valueStateMessage)}
</ui5-time-picker>`,r=p.bind({}),a=p.bind({});a.storyName="Value State and Message";a.args={formatPattern:"hh:mm:ss a",valueState:f.Error,valueStateMessage:'<div slot="valueStateMessage">Please provide valid value</div>'};var i,o,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:'args => html`<ui5-time-picker\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-time-picker>`',...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,c,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-time-picker\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-time-picker>`',...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const F=["Basic","WithValueState"];export{r as Basic,a as WithValueState,F as __namedExportsOrder,O as default};
