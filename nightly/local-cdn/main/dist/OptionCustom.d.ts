import CustomListItem from "./CustomListItem.js";
import { IButton } from "./Button.js";
import ListItemType from "./types/ListItemType.js";
import type { ListItemAccessibilityAttributes as CustomOptionAccessibilityAttributes } from "./ListItem.js";
import HighlightTypes from "./types/HighlightTypes.js";
import { IOption } from "./Select.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-option-custom` component defines a custom content of an option in the `ui5-select`.
 * A component to be the same way as the standard `ui5-option`.
 * The component accepts arbitrary HTML content to allow full customization.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/OptionCustom.js";`
 * @constructor
 * @since 2.0.0
 * @extends CustomListItem
 * @public
 */
declare class OptionCustom extends CustomListItem implements IOption {
    /**
     * Defines the text, displayed inside the `ui5-select` input filed
     * when the option gets selected.
     * @default ""
     * @public
     */
    displayText: string;
    /**
     * Defines the value of the `ui5-select` inside an HTML Form element when this component is selected.
     * For more information on HTML Form support, see the `name` property of `ui5-select`.
     * @default ""
     * @public
     */
    value: string;
    /**
     * **Note:** The property is inherited and not supported. If set, it won't take any effect.
     * @default false
     * @public
     * @deprecated
     */
    iconEnd: boolean;
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
    accessibilityAttributes: CustomOptionAccessibilityAttributes;
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
     * Defines the text of the component.
     *
     * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
     * @public
     */
    content: Array<Node>;
    get effectiveDisplayText(): string;
}
export default OptionCustom;
