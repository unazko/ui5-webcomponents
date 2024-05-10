import type { AccessibilityAttributes, PassiveEventListenerObject } from "@ui5/webcomponents-base/dist/types.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type AriaHasPopup from "@ui5/webcomponents-base/dist/types/AriaHasPopup.js";
import "@ui5/webcomponents-icons/dist/decline.js";
import "@ui5/webcomponents-icons/dist/edit.js";
import HighlightTypes from "./types/HighlightTypes.js";
import ListItemType from "./types/ListItemType.js";
import ListSelectionMode from "./types/ListSelectionMode.js";
import ListItemBase from "./ListItemBase.js";
import type { IButton } from "./Button.js";
import ListItemAccessibleRole from "./types/ListItemAccessibleRole.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-right.js";
interface IAccessibleListItem {
    accessibleName?: string;
    accessibleNameRef?: string;
}
type SelectionRequestEventDetail = {
    item: ListItemBase;
    selectionComponentPressed: boolean;
    selected?: boolean;
    key?: string;
};
type PressEventDetail = {
    item: ListItem;
    selected: boolean;
    key: string;
};
type AccInfo = {
    role: string;
    ariaExpanded?: boolean;
    ariaLevel?: number;
    ariaLabel: string;
    ariaLabelRadioButton: string;
    ariaSelectedText?: string;
    ariaHaspopup?: `${Lowercase<AriaHasPopup>}`;
    posinset?: number;
    setsize?: number;
    ariaSelected?: boolean;
    ariaChecked?: boolean;
    listItemAriaLabel?: string;
    ariaOwns?: string;
    tooltip?: string;
};
type ListItemAccessibilityAttributes = Pick<AccessibilityAttributes, "hasPopup" | "ariaSetsize" | "ariaPosinset">;
/**
 * @class
 * A class to serve as a base
 * for the `StandardListItem` and `CustomListItem` classes.
 * @constructor
 * @abstract
 * @extends ListItemBase
 * @public
 */
declare abstract class ListItem extends ListItemBase {
    /**
     * Defines the visual indication and behavior of the list items.
     * Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.
     *
     * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,
     * while with type `Inactive` and `Detail` - will not.
     * @default "Active"
     * @public
    */
    type: `${ListItemType}`;
    /**
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
     * **Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set `-1`.
     *
     * 	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
     * 	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
     *
     * @default {}
     * @public
     * @since 1.15.0
     */
    accessibilityAttributes: ListItemAccessibilityAttributes;
    /**
     * The navigated state of the list item.
     * If set to `true`, a navigation indicator is displayed at the end of the list item.
     * @default false
     * @public
     * @since 1.10.0
     */
    navigated: boolean;
    /**
     * Defines the text of the tooltip that would be displayed for the list item.
     * @default ""
     * @public
     * @since 1.23.0
     */
    tooltip: string;
    /**
     * Indicates if the list item is active, e.g pressed down with the mouse or the keyboard keys.
     * @private
    */
    active: boolean;
    /**
     * Defines the highlight state of the list items.
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     * @default "None"
     * @public
     * @since 1.24
     */
    highlight: `${HighlightTypes}`;
    /**
     * Indicates if the list item is actionable, e.g has hover and pressed effects.
     * @private
    */
    actionable: boolean;
    /**
     * Used to define the role of the list item.
     * @private
     * @default "ListItem"
     * @since 1.3.0
     *
     */
    accessibleRole: `${ListItemAccessibleRole}`;
    _selectionMode: `${ListSelectionMode}`;
    /**
     * Defines the delete button, displayed in "Delete" mode.
     * **Note:** While the slot allows custom buttons, to match
     * design guidelines, please use the `ui5-button` component.
     * **Note:** When the slot is not present, a built-in delete button will be displayed.
     * @since 1.9.0
     * @public
    */
    deleteButton: Array<IButton>;
    deactivateByKey: (e: KeyboardEvent) => void;
    deactivate: () => void;
    _ontouchstart: PassiveEventListenerObject;
    accessibleName?: string;
    indeterminate?: boolean;
    disableDeleteButton?: boolean;
    static i18nBundle: I18nBundle;
    constructor();
    onBeforeRendering(): void;
    onEnterDOM(): void;
    onExitDOM(): void;
    _onkeydown(e: KeyboardEvent): Promise<void>;
    _onkeyup(e: KeyboardEvent): void;
    _onmousedown(e: MouseEvent): void;
    _onmouseup(e: MouseEvent): void;
    _ontouchend(e: TouchEvent): void;
    _onfocusout(): void;
    _onclick(e: MouseEvent): void;
    _ondragstart(e: DragEvent): void;
    _ondragend(e: DragEvent): void;
    onMultiSelectionComponentPress(e: MouseEvent): void;
    onSingleSelectionComponentPress(e: MouseEvent): void;
    activate(): void;
    onDelete(): void;
    onDetailClick(): void;
    fireItemPress(e: Event): void;
    get isInactive(): boolean;
    get placeSelectionElementBefore(): boolean;
    get placeSelectionElementAfter(): boolean;
    get modeSingleSelect(): boolean;
    get modeMultiple(): boolean;
    get modeDelete(): boolean;
    /**
     * Used in UploadCollectionItem
     */
    get renderDeleteButton(): boolean;
    /**
     * End
     */
    get typeDetail(): boolean;
    get typeNavigation(): boolean;
    get typeActive(): boolean;
    get _ariaSelected(): boolean | undefined;
    get listItemAccessibleRole(): string;
    get ariaSelectedText(): string | undefined;
    get deleteText(): string;
    get hasDeleteButtonSlot(): boolean;
    get _accessibleNameRef(): string;
    get _accInfo(): AccInfo;
    get _hasHighlightColor(): boolean;
    get hasConfigurableMode(): boolean;
    get _listItem(): HTMLLIElement | null;
    static onDefine(): Promise<void>;
}
export default ListItem;
export type { IAccessibleListItem, SelectionRequestEventDetail, PressEventDetail, ListItemAccessibilityAttributes, };
