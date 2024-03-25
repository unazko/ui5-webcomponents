var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NavigationMenu_1;
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { isDesktop, } from "@ui5/webcomponents-base/dist/Device.js";
import Menu from "./Menu.js";
import "./StandardListItem.js";
import "./MenuItem.js";
import staticAreaMenuTemplate from "./generated/templates/NavigationMenuTemplate.lit.js";
// Styles
import staticAreaNavigationMenuCss from "./generated/themes/NavigationMenu.css.js";
import staticAreaMenuCss from "./generated/themes/Menu.css.js";
import { NAVIGATION_MENU_POPOVER_HIDDEN_TEXT, } from "./generated/i18n/i18n-defaults.js";
/**
 * @class
 *
 * ### Overview
 *
 * `ui5-navigation-menu` component represents a hierarchical menu structure, inherits all the functionality of `ui5-menu`.
 *
 * ### Usage
 *
 * `ui5-navigation-menu` contains `ui5-navigation-menu-item` components.
 * An arbitrary hierarchy structure can be represented by recursively nesting navigation menu items.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/NavigationMenu.js";`
 * @constructor
 * @extends Menu
 * @since 1.22.0
 * @private
 */
let NavigationMenu = NavigationMenu_1 = class NavigationMenu extends Menu {
    _isMenu(element) {
        return element.hasAttribute("ui5-navigation-menu");
    }
    _itemMouseOver(e) {
        if (isDesktop()) {
            // respect mouseover only on desktop
            const opener = e.target;
            let item = opener.associatedItem;
            if (!item) {
                // for nested <a>
                const test = opener.parentElement;
                if (opener.parentElement) {
                    item = test.associatedItem;
                }
            }
            // Opens submenu with 300ms delay
            this._startOpenTimeout(item, opener);
        }
    }
    _clonedItemsFragment(item) {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < item.items.length; ++i) {
            const subItem = item.items[i];
            const clonedItem = item.items[i].cloneNode(true);
            if (subItem.associatedItem) {
                clonedItem.associatedItem = subItem.associatedItem;
            }
            fragment.appendChild(clonedItem);
        }
        return fragment;
    }
    _itemClick(e) {
        const opener = e.detail.item;
        const item = opener.associatedItem;
        const mainMenu = this._findMainMenu(item);
        const prevented = !mainMenu.fireEvent("item-click", {
            "item": item,
            "text": item.text,
        }, true, false);
        if (!prevented) {
            let openerMenuItem = item;
            let parentMenu = openerMenuItem.parentElement;
            do {
                openerMenuItem._preventSubMenuClose = false;
                this._closeItemSubMenu(openerMenuItem);
                parentMenu = openerMenuItem.parentElement;
                openerMenuItem = parentMenu._parentMenuItem;
            } while (parentMenu._parentMenuItem);
            mainMenu._popover.close();
        }
        this._prepareSubMenu(item, opener);
    }
    get accSideNavigationPopoverHiddenText() {
        return NavigationMenu_1.i18nBundle.getText(NAVIGATION_MENU_POPOVER_HIDDEN_TEXT);
    }
};
__decorate([
    slot({ "default": true, type: HTMLElement, invalidateOnChildChange: true })
], NavigationMenu.prototype, "items", void 0);
NavigationMenu = NavigationMenu_1 = __decorate([
    customElement({
        tag: "ui5-navigation-menu",
        renderer: litRender,
        staticAreaStyles: [staticAreaMenuCss, staticAreaNavigationMenuCss],
        staticAreaTemplate: staticAreaMenuTemplate,
    })
], NavigationMenu);
NavigationMenu.define();
export default NavigationMenu;
//# sourceMappingURL=NavigationMenu.js.map