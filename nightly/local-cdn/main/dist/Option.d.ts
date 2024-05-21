import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import StandardListItem from "./StandardListItem.js";
import ListItemType from "./types/ListItemType.js";
import { IButton } from "./Button.js";
import type { ListItemAccessibilityAttributes as OptionAccessibilityAttributes } from "./ListItem.js";
import HighlightTypes from "./types/HighlightTypes.js";
import { IOption } from "./Select.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-option` component defines the content of an option in the `ui5-select`.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/Option.js";`
 * @constructor
 * @extends StandardListItem
 * @public
 */
declare class Option extends StandardListItem implements IOption {
    /**
     * Defines the text of the component.
     *
     * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
     * @public
     */
    text: Array<Node>;
    /**
     * Defines the value of the `ui5-select` inside an HTML Form element when this component is selected.
     * For more information on HTML Form support, see the `name` property of `ui5-select`.
     * @default ""
     * @public
     */
    value: string;
    /**
     * **Note:** The property is inherited and not supported. If set, it won't take any effect.
     * @default "Active"
     * @public
     * @deprecated
     */
    type: `${ListItemType}`;
    /**
     * **Note:** The property is inherited and not supported. If set, it won't take any effect.
     * @default {}
     * @public
     * @deprecated
     */
    accessibilityAttributes: OptionAccessibilityAttributes;
    /**
     * **Note:** The property is inherited and not supported. If set, it won't take any effect.
     * @default false
     * @public
     * @deprecated
     */
    navigated: boolean;
    /**
     * **Note:** The property is inherited and not supported. If set, it won't take any effect.
     * @default "None"
     * @public
     * @deprecated
     */
    highlight: `${HighlightTypes}`;
    /**
     * **Note:** The property is inherited and not supported. If set, it won't take any effect.
     * @default "None"
     * @public
     * @deprecated
     */
    additionalTextState: `${ValueState}`;
    /**
     * **Note:** The property is inherited and not supported. If set, it won't take any effect.
     * @default ""
     * @public
     * @deprecated
     */
    description: string;
    /**
     * **Note:** The property is inherited and not supported. If set, it won't take any effect.
     * @default false
     * @public
     * @deprecated
     */
    iconEnd: boolean;
    /**
     * **Note:** The property is inherited and not supported. If set, it won't take any effect.
     * @default ""
     * @public
     * @deprecated
     */
    image: string;
    /**
     * **Note:** The property is inherited and not supported. If set, it won't take any effect.
     * @default false
     * @public
     * @deprecated
     */
    movable: boolean;
    /**
     * **Note:** The property is inherited and not supported. If set, it won't take any effect.
     * @default ""
     * @public
     * @deprecated
     */
    accessibleName: string;
    /**
     * **Note:** The slot is inherited and not supported. If set, it won't take any effect.
     * @public
     * @deprecated
     */
    deleteButton: Array<IButton>;
    /**
     * **Note:** The slot is inherited and not supported. If set, it won't take any effect.
     * @public
     * @deprecated
     */
    imageContent: Array<HTMLElement>;
    get effectiveDisplayText(): string;
}
export default Option;
