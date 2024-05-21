var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MenuItem_1;
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { isPhone } from "@ui5/webcomponents-base/dist/Device.js";
import AriaHasPopup from "@ui5/webcomponents-base/dist/types/AriaHasPopup.js";
import ListItem from "./ListItem.js";
import ResponsivePopover from "./ResponsivePopover.js";
import "./types/PopoverPlacement.js";
import List from "./List.js";
import Icon from "./Icon.js";
import BusyIndicator from "./BusyIndicator.js";
import MenuItemTemplate from "./generated/templates/MenuItemTemplate.lit.js";
import { MENU_BACK_BUTTON_ARIA_LABEL, MENU_CLOSE_BUTTON_ARIA_LABEL, } from "./generated/i18n/i18n-defaults.js";
// Styles
import menuItemCss from "./generated/themes/MenuItem.css.js";
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
let MenuItem = MenuItem_1 = class MenuItem extends ListItem {
    static async onDefine() {
        MenuItem_1.i18nBundle = await getI18nBundle("@ui5/webcomponents");
    }
    get placement() {
        return this.isRtl ? "Start" : "End";
    }
    get isRtl() {
        return this.effectiveDir === "rtl";
    }
    get hasSubmenu() {
        return !!(this.items.length || this.loading);
    }
    get hasIcon() {
        return !!this.icon;
    }
    get isSubMenuOpen() {
        return this._popover?.open;
    }
    get ariaLabelledByText() {
        return `${this.text} ${this.accessibleName}`.trim();
    }
    get menuHeaderTextPhone() {
        return this.text;
    }
    get isPhone() {
        return isPhone();
    }
    get labelBack() {
        return MenuItem_1.i18nBundle.getText(MENU_BACK_BUTTON_ARIA_LABEL);
    }
    get labelClose() {
        return MenuItem_1.i18nBundle.getText(MENU_CLOSE_BUTTON_ARIA_LABEL);
    }
    onBeforeRendering() {
        const siblingsWithIcon = this.items.some(item => !!item.icon);
        this.items.forEach(item => {
            item._siblingsWithIcon = siblingsWithIcon;
        });
    }
    get _focusable() {
        return true;
    }
    get _accInfo() {
        const accInfoSettings = {
            role: "menuitem",
            ariaHaspopup: this.hasSubmenu ? AriaHasPopup.Menu.toLowerCase() : undefined,
        };
        return { ...super._accInfo, ...accInfoSettings };
    }
    get _popover() {
        return this.shadowRoot.querySelector("[ui5-responsive-popover]");
    }
    _closeAll() {
        if (this._popover) {
            this._popover.open = false;
        }
        this.selected = false;
        this.fireEvent("close-menu", {});
    }
    _close() {
        if (this._popover) {
            this._popover.open = false;
        }
        this.selected = false;
    }
    _beforePopoverOpen(e) {
        const prevented = !this.fireEvent("before-open", {}, true, false);
        if (prevented) {
            e.preventDefault();
        }
    }
    _afterPopoverOpen() {
        this.items[0]?.focus();
        this.fireEvent("open", {}, false, false);
    }
    _beforePopoverClose(e) {
        const prevented = !this.fireEvent("before-close", { escPressed: e.detail.escPressed }, true, false);
        if (prevented) {
            e.preventDefault();
            return;
        }
        this.selected = false;
        if (e.detail.escPressed) {
            this.focus();
        }
    }
    _afterPopoverClose() {
        this.fireEvent("close", {}, false, false);
    }
};
__decorate([
    property()
], MenuItem.prototype, "text", void 0);
__decorate([
    property()
], MenuItem.prototype, "additionalText", void 0);
__decorate([
    property()
], MenuItem.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], MenuItem.prototype, "startsSection", void 0);
__decorate([
    property({ type: Boolean })
], MenuItem.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], MenuItem.prototype, "loading", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 1000 })
], MenuItem.prototype, "loadingDelay", void 0);
__decorate([
    property()
], MenuItem.prototype, "accessibleName", void 0);
__decorate([
    property({ type: String })
], MenuItem.prototype, "tooltip", void 0);
__decorate([
    property({ type: Boolean, noAttribute: true })
], MenuItem.prototype, "_siblingsWithIcon", void 0);
__decorate([
    slot({ "default": true, type: HTMLElement, invalidateOnChildChange: true })
], MenuItem.prototype, "items", void 0);
MenuItem = MenuItem_1 = __decorate([
    customElement({
        tag: "ui5-menu-item",
        template: MenuItemTemplate,
        styles: [ListItem.styles, menuItemCss],
        dependencies: [...ListItem.dependencies, ResponsivePopover, List, BusyIndicator, Icon],
    })
], MenuItem);
MenuItem.define();
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map