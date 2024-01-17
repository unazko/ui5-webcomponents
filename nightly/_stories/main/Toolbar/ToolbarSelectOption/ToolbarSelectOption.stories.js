import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../../.storybook/docs.js";
const component = "ui5-toolbar-select-option";
export default {
    title: "Main/Toolbar/Toolbar Select Option",
    component: "ToolbarSelectOption",
    argTypes,
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component, showDefaultStoryOnly: true })
        },
    },
};
const Template = (args) => {
    return html `
	<ui5-toolbar align-content="Start">
	<ui5-toolbar-select>
		<ui5-toolbar-select-option ?selected=${ifDefined(args.selected)}>${unsafeHTML(args.default)}</ui5-toolbar-select-option>
	</ui5-toolbar-select>
</ui5-toolbar>`;
};
export const Basic = Template.bind({});
Basic.tags = ["_hidden_"];
Basic.args = {
    default: `Toolbar select option 1`
};
//# sourceMappingURL=ToolbarSelectOption.stories.js.map