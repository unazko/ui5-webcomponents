import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../.storybook/docs";
const component = "ui5-badge";
export default {
    title: "Main/Badge",
    component: "Badge",
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
};
const Template = (args) => {
    return html `
<ui5-badge
	color-scheme="${ifDefined(args.colorScheme)}"
	style="${ifDefined(args.style)}"
>
	${unsafeHTML(args.icon)}
	${unsafeHTML(args.default)}
</ui5-badge>`;
};
export const Basic = Template.bind({});
Basic.args = {
    colorScheme: "6",
    icon: `<ui5-icon name="pending" slot="icon"></ui5-icon>`,
    default: "Pending"
};
export const Truncating = Template.bind({});
Truncating.args = {
    default: "This would truncate as it is too long",
    style: "width: 200px",
};
const getIconHTML = (name) => `<ui5-icon name="${name}" slot="icon"></ui5-icon>`;
const AllColorSchemesBadges = [
    { icon: getIconHTML("accept"), default: "" },
    { icon: getIconHTML("sap-ui5"), default: "" },
    { icon: getIconHTML("add-equipment"), default: "In progress" },
    { icon: getIconHTML("lab"), default: "" },
    { icon: getIconHTML("email-read"), default: "" },
    { icon: "", default: "Pending" },
    { icon: getIconHTML("lightbulb"), default: "New idea" },
    { icon: getIconHTML("locked"), default: "Locked" },
    { icon: getIconHTML("flight"), default: "En route" },
    { icon: "", default: "Archived" },
];
export const AllColorSchemes = Template.bind({});
AllColorSchemes.decorators = [
    (story, ctx) => {
        return html `
			${AllColorSchemesBadges.map((badge, i) => {
            return story({
                args: {
                    colorScheme: ctx.args.colorScheme || (i + 1).toString(),
                    icon: ctx.args.icon || badge.icon,
                    default: ctx.args.default || badge.default,
                }
            });
        })}`;
    }
];
//# sourceMappingURL=Badge.stories.js.map