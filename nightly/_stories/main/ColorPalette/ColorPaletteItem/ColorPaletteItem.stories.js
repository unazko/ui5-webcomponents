import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../../.storybook/docs.js";
const component = "ui5-color-palette-item";
export default {
    title: "Main/ColorPalette/ColorPaletteItem",
    component: "ColorPaletteItem",
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component, showDefaultStoryOnly: true })
        },
    },
    argTypes,
};
const Template = (args) => html `<ui5-color-palette>
	<ui5-color-palette-item value="${ifDefined(args.value)}"></ui5-color-palette-item>
</ui5-color-palette>`;
export const Basic = Template.bind({});
Basic.storyName = "Color Palette with Items";
Basic.tags = ["_hidden_"];
Basic.args = {
    value: "#ff6699"
};
//# sourceMappingURL=ColorPaletteItem.stories.js.map