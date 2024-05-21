import ListItem from "./ListItem.js";
import ResponsivePopover from "./ResponsivePopover.js";
import PopoverPlacement from "./types/PopoverPlacement.js";
import type { ResponsivePopoverBeforeCloseEventDetail } from "./ResponsivePopover.js";
type MenuBeforeOpenEventDetail = {
    item?: MenuItem;
};
type MenuBeforeCloseEventDetail = {
    escPressed: boolean;
};
/**
 * @class
 *
 * ### Overview
 *
 * `ui5-menu-item` is the item to use inside a `ui5-menu`.
 * An arbitrary hierarchy structure can be represented by recursively nesting menu items.
 *
 * ### Usage
 *
 * `ui5-menu-item` represents a node in a `ui5-menu`. The menu itself is rendered as a list,
 * and each `ui5-menu-item` is represented by a list item in that list. Therefore, you should only use
 * `ui5-menu-item` directly in your apps. The `ui5-li` list item is internal for the list, and not intended for public use.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/MenuItem.js";`
 * @constructor
 * @extends ListItem
 * @since 1.3.0
 * @public
 */
declare class MenuItem extends ListItem {
    static onDefine(): Promise<void>;
    /**
     * Defines the text of the tree item.
     * @default ""
     * @public
     */
    text: string;
    /**
     * Defines the `additionalText`, displayed in the end of the menu item.
     *
     * **Note:** The additional text would not be displayed if the item has a submenu.
     * @default ""
     * @public
     * @since 1.8.0
     */
    additionalText: string;
    /**
     * Defines the icon to be displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * **Example:**
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @default ""
     * @public
     */
    icon: string;
    /**
     * Defines whether a visual separator should be rendered before the item.
     * @default false
     * @public
     */
    startsSection: boolean;
    /**
     * Defines whether `ui5-menu-item` is in disabled state.
     *
     * **Note:** A disabled `ui5-menu-item` is noninteractive.
     * @default false
     * @public
     */
    disabled: boolean;
    /**
     * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.
     *
     * **Note:** If set to `true` a `ui5-busy-indicator` component will be displayed into the related one to the current `ui5-menu-item` sub-menu popover.
     * @default false
     * @public
     * @since 1.13.0
     */
    loading: boolean;
    /**
     * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.
     * @default 1000
     * @public
     * @since 1.13.0
     */
    loadingDelay: number;
    /**
     * Defines the accessible ARIA name of the component.
     * @default ""
     * @public
     * @since 1.7.0
     */
    accessibleName: string;
    /**
     * Defines the text of the tooltip for the menu item.
     * @default ""
     * @public
     * @since 1.23.0
     */
    tooltip: string;
    /**
     * Indicates whether any of the element siblings have icon.
     */
    _siblingsWithIcon: boolean;
    /**
     * Defines the items of this component.
     * @public
     */
    items: Array<MenuItem>;
    get placement(): `${PopoverPlacement}`;
    get isRtl(): boolean;
    get hasSubmenu(): boolean;
    get hasIcon(): boolean;
    get isSubMenuOpen(): boolean;
    get ariaLabelledByText(): string;
    get menuHeaderTextPhone(): string;
    get isPhone(): boolean;
    get labelBack(): string;
    get labelClose(): string;
    onBeforeRendering(): void;
    get _focusable(): boolean;
    get _accInfo(): {
        role: string;
        ariaHaspopup: "dialog" | "grid" | "listbox" | "menu" | "tree" | undefined;
        ariaExpanded?: boolean | undefined;
        ariaLevel?: number | undefined;
        ariaLabel: string;
        ariaLabelRadioButton: string;
        ariaSelectedText?: string | undefined;
        posinset?: number | undefined;
        setsize?: number | undefined;
        ariaSelected?: boolean | undefined;
        ariaChecked?: boolean | undefined;
        listItemAriaLabel?: string | undefined;
        ariaOwns?: string | undefined;
        tooltip?: string | undefined;
    };
    get _popover(): ResponsivePopover;
    _closeAll(): void;
    _close(): void;
    _beforePopoverOpen(e: CustomEvent): void;
    _afterPopoverOpen(): void;
    _beforePopoverClose(e: CustomEvent<ResponsivePopoverBeforeCloseEventDetail>): void;
    _afterPopoverClose(): void;
}
export default MenuItem;
export type { MenuBeforeCloseEventDetail, MenuBeforeOpenEventDetail, };
