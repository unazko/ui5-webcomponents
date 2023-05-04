import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../.storybook/docs";
const component = "ui5-rating-indicator";
export default {
    title: "Main/RatingIndicator",
    component,
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
};
const Template = (args) => html `
<ui5-rating-indicator
	value="${ifDefined(args.value)}"
	max="${ifDefined(args.max)}"
	?disabled="${ifDefined(args.disabled)}"
	?readonly="${ifDefined(args.readonly)}"
	accessible-нame="${ifDefined(args.accessibleName)}"
></ui5-rating-indicator>`;
export const BasicRatingIndicator = Template.bind({});
BasicRatingIndicator.args = {
    value: 3.7
};
export const RatingIndicatorMax = Template.bind({});
RatingIndicatorMax.args = {
    value: 5,
    max: 10
};
RatingIndicatorMax.storyName = "Rating Indicator with Max Value";
export const DisabledRatingIndicator = Template.bind({});
DisabledRatingIndicator.args = {
    value: 5,
    max: 10,
    disabled: true
};
export const ReadonlyRatingIndicator = Template.bind({});
ReadonlyRatingIndicator.args = {
    value: 5,
    max: 7,
    readonly: true
};
//# sourceMappingURL=RatingIndicator.stories.js.map