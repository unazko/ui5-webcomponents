import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import AvatarGroupType from "@ui5/webcomponents/dist/types/AvatarGroupType.js";
import argTypes, { componentInfo } from "./argTypes.js";
import TemplateGroupWithPopover from "./TemplateGroupWithPopover.js";
import TemplateIndividualWithPopover from "./TemplateIndividualWithPopover.js";
import TemplateAvatarGroupSizes from "./TemplateAvatarGroupSizes.js";
import { DocsPage } from "../../../.storybook/docs";
const component = "ui5-avatar-group";
export default {
    title: "Main/AvatarGroup",
    component,
    argTypes,
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component })
        },
    },
};
const Template = (args) => html `<ui5-avatar-group
    .type="${ifDefined(args.type)}"
    .aria-haspopup="${ifDefined(args.ariaHaspopup)}"
  >
    ${unsafeHTML(args.default)}
    ${unsafeHTML(args.overflowButton)}
  </ui5-avatar-group> `;
export const TypeGroup = Template.bind({});
TypeGroup.args = {
    default: `
  <ui5-avatar size="M" icon="employee"></ui5-avatar>
  <ui5-avatar size="M" initials="JD"></ui5-avatar>
  <ui5-avatar size="M">
    <img
      src="../assets/images/avatars/woman_avatar_5.png"
      alt="Woman Avatar 5"
    />
  </ui5-avatar>`,
};
export const TypeIndividual = Template.bind({});
TypeIndividual.args = {
    type: AvatarGroupType.Individual,
    default: `
  <ui5-avatar size="M" icon="employee"></ui5-avatar>
  <ui5-avatar size="M" initials="JD"></ui5-avatar>
  <ui5-avatar size="M">
    <img
      src="../assets/images/avatars/woman_avatar_5.png"
      alt="Woman Avatar 5"
    />
  </ui5-avatar>`,
};
export const TypeIndividualWithPopover = TemplateIndividualWithPopover.bind({});
export const TypeGroupWithPopover = TemplateGroupWithPopover.bind({});
export const Sizes = TemplateAvatarGroupSizes.bind({});
//# sourceMappingURL=AvatarGroup.stories.js.map