import{x as o}from"./lit-element-c5a2b594.js";import{D as $}from"./docs-c71e1971.js";import{l as i}from"./if-defined-c29cffe1.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-dff4b1f7.js";import"./index-f87fb25d.js";import"./iframe-948fec51.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-PCJTTTQV-486bf808.js";import"./client-295e1f1c.js";const g={value:{control:{type:"number"}},labelInterval:{control:{type:"number"}},max:{control:{type:"number"}},min:{control:{type:"number"}},step:{control:{type:"number"}}},D={package:"@ui5/webcomponents",since:"1.0.0-rc.11"},v="ui5-slider",j={title:"Main/Slider",component:"Slider",parameters:{docs:{page:$({...D,component:v})}},argTypes:g},n=e=>o`
<ui5-slider
    value="${i(e.value)}"
    min="${i(e.min)}"
    max="${i(e.max)}"
    step="${i(e.step)}"
    ?show-tickmarks="${i(e.showTickmarks)}"
    label-interval="${i(e.labelInterval)}"
    ?show-tooltip="${i(e.showTooltip)}"
    ?disabled="${i(e.disabled)}"
    accessible-name="${i(e.accessibleName)}"
></ui5-slider>`,s=n.bind({});s.decorators=[e=>o`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];s.args={min:0,max:100,step:5,disabled:!1,showTooltip:!1,showTickmarks:!1,labelInterval:0};const r=n.bind({});r.decorators=[e=>o`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];r.args={min:0,max:20,showTooltip:!0,labelInterval:5};const a=n.bind({});a.decorators=[e=>o`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];a.args={min:-20,max:20,step:2,value:12,showTooltip:!0,labelInterval:2,showTickmarks:!0};a.storyName="Tooltip, Tickmarks and Labels";var t,l,m;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:'args => html`\n<ui5-slider\n    value="${ifDefined(args.value)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n></ui5-slider>`',...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`\n<ui5-slider\n    value="${ifDefined(args.value)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n></ui5-slider>`',...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var f,b,u;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`\n<ui5-slider\n    value="${ifDefined(args.value)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n></ui5-slider>`',...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const q=["Basic","Tooltip","TickmarksLabelTooltip"];export{s as Basic,a as TickmarksLabelTooltip,r as Tooltip,q as __namedExportsOrder,j as default};
//# sourceMappingURL=Slider.stories-4a7a7119.js.map
