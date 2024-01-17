import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../../.storybook/docs";
const component = "ui5-shellbar-item";
export default {
    title: "Fiori/ShellBar/ShellBarItem",
    component: "ShellBarItem",
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component, showDefaultStoryOnly: true }),
        },
    },
    argTypes,
};
const Template = (args) => html `<ui5-shellbar
    primary-title="Corporate Portal"
>
    <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
    <ui5-shellbar-item
        icon="${ifDefined(args.icon)}"
        text="${ifDefined(args.text)}"
        count="${ifDefined(args.count)}"
    ></ui5-shellbar-item>

</ui5-shellbar>`;
export const Basic = Template.bind({});
Basic.tags = ["_hidden_"];
Basic.args = {
    text: "2 notifications",
    icon: "bell",
    count: "2"
};
//# sourceMappingURL=ShellBarItem.stories.js.map