var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import { isSpace, isEnter } from "@ui5/webcomponents-base/dist/Keys.js";
/**
 * Fired when the component is activated either with a
 * click/tap or by using the Enter or Space key.
 * @public
 */
let SideNavigationItemBase = 
/**
 * @class
 * A class to serve as a foundation
 * for the `SideNavigationItem` and `SideNavigationSubItem` classes.
 * @constructor
 * @extends UI5Element
 * @abstract
 * @public
 * @since 1.19.0
 */
class SideNavigationItemBase extends UI5Element {
    get _tooltip() {
        return this.title || this.text;
    }
    get _href() {
        return (!this.disabled && this.href) ? this.href : undefined;
    }
    get _target() {
        return (!this.disabled && this.target) ? this.target : undefined;
    }
    get _selected() {
        return this.selected;
    }
    get classesArray() {
        const classes = [];
        if (this.disabled) {
            classes.push("ui5-sn-item-disabled");
        }
        if (this._selected) {
            classes.push("ui5-sn-item-selected");
        }
        return classes;
    }
    get _classes() {
        return this.classesArray.join(" ");
    }
    get _ariaCurrent() {
        if (!this.selected) {
            return undefined;
        }
        return "page";
    }
    get _effectiveTabIndex() {
        if (this.disabled) {
            return undefined;
        }
        return this.forcedTabIndex;
    }
    get _isExternalLink() {
        return this.href && this.target === "_blank";
    }
    get sideNavigation() {
        let parentElement = this.parentElement;
        while (parentElement) {
            if (parentElement.hasAttribute("ui5-side-navigation")) {
                return parentElement;
            }
            parentElement = parentElement.parentElement;
        }
    }
    getDomRef() {
        return this.sideNavigation?.shadowRoot.querySelector(`#${this._id}`);
    }
    _onkeydown(e) {
        if (isSpace(e)) {
            e.preventDefault();
        }
        if (isEnter(e)) {
            this._activate(e);
        }
    }
    _onkeyup(e) {
        if (isSpace(e)) {
            this._activate(e);
        }
    }
    _onclick(e) {
        this._activate(e);
    }
    get isFixedItem() {
        return true;
    }
    _onfocusin(e) {
        e.stopPropagation();
        this.sideNavigation?.focusItem(this);
    }
    _activate(e) {
        this.sideNavigation?._handleItemClick(e, this);
    }
};
__decorate([
    property()
], SideNavigationItemBase.prototype, "text", void 0);
__decorate([
    property()
], SideNavigationItemBase.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], SideNavigationItemBase.prototype, "selected", void 0);
__decorate([
    property()
], SideNavigationItemBase.prototype, "href", void 0);
__decorate([
    property()
], SideNavigationItemBase.prototype, "target", void 0);
__decorate([
    property({ type: Boolean })
], SideNavigationItemBase.prototype, "disabled", void 0);
__decorate([
    property()
], SideNavigationItemBase.prototype, "title", void 0);
__decorate([
    property({ defaultValue: "-1", noAttribute: true })
], SideNavigationItemBase.prototype, "forcedTabIndex", void 0);
SideNavigationItemBase = __decorate([
    event("click")
    /**
     * @class
     * A class to serve as a foundation
     * for the `SideNavigationItem` and `SideNavigationSubItem` classes.
     * @constructor
     * @extends UI5Element
     * @abstract
     * @public
     * @since 1.19.0
     */
], SideNavigationItemBase);
export default SideNavigationItemBase;
//# sourceMappingURL=SideNavigationItemBase.js.map