var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SegmentedButtonItem_1;
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { isDesktop } from "@ui5/webcomponents-base/dist/Device.js";
import { isSpaceShift } from "@ui5/webcomponents-base/dist/Keys.js";
import { getEffectiveAriaLabelText } from "@ui5/webcomponents-base/dist/util/AriaLabelHelper.js";
import willShowContent from "@ui5/webcomponents-base/dist/util/willShowContent.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import { SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION } from "./generated/i18n/i18n-defaults.js";
import SegmentedButtonItemTemplate from "./generated/templates/SegmentedButtonItemTemplate.lit.js";
import "./Button.js";
import Icon from "./Icon.js";
import segmentedButtonItemCss from "./generated/themes/SegmentedButtonItem.css.js";
/**
 * @class
 *
 * ### Overview
 *
 * Users can use the `ui5-segmented-button-item` as part of a `ui5-segmented-button`.
 *
 * Clicking or tapping on a `ui5-segmented-button-item` changes its state to `selected`.
 * The item returns to its initial state when the user clicks or taps on it again.
 * By applying additional custom CSS-styling classes, apps can give a different style to any
 * `ui5-segmented-button-item`.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/SegmentedButtonItem.js";`
 * @constructor
 * @extends UI5Element
 * @implements { ISegmentedButtonItem, IButton }
 * @public
 */
let SegmentedButtonItem = SegmentedButtonItem_1 = class SegmentedButtonItem extends UI5Element {
    get ariaDescription() {
        return SegmentedButtonItem_1.i18nBundle.getText(SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION);
    }
    constructor() {
        super();
    }
    _onclick() {
        this.selected = !this.selected;
    }
    onEnterDOM() {
        if (isDesktop()) {
            this.setAttribute("desktop", "");
        }
    }
    _onkeyup(e) {
        if (isSpaceShift(e)) {
            e.preventDefault();
        }
    }
    get isIconOnly() {
        return !willShowContent(this.text);
    }
    get tabIndexValue() {
        const tabindex = this.getAttribute("tabindex");
        if (tabindex) {
            return tabindex;
        }
        return this.forcedTabIndex;
    }
    get ariaLabelText() {
        return getEffectiveAriaLabelText(this);
    }
    get showIconTooltip() {
        return this.isIconOnly && !this.tooltip;
    }
    static async onDefine() {
        SegmentedButtonItem_1.i18nBundle = await getI18nBundle("@ui5/webcomponents");
    }
};
__decorate([
    property({ type: Boolean })
], SegmentedButtonItem.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], SegmentedButtonItem.prototype, "selected", void 0);
__decorate([
    property()
], SegmentedButtonItem.prototype, "tooltip", void 0);
__decorate([
    property({ defaultValue: undefined })
], SegmentedButtonItem.prototype, "accessibleName", void 0);
__decorate([
    property({ defaultValue: "" })
], SegmentedButtonItem.prototype, "accessibleNameRef", void 0);
__decorate([
    property()
], SegmentedButtonItem.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], SegmentedButtonItem.prototype, "nonInteractive", void 0);
__decorate([
    property({ type: String, defaultValue: "0", noAttribute: true })
], SegmentedButtonItem.prototype, "forcedTabIndex", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 0 })
], SegmentedButtonItem.prototype, "posInSet", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 0 })
], SegmentedButtonItem.prototype, "sizeOfSet", void 0);
__decorate([
    slot({ type: Node, "default": true })
], SegmentedButtonItem.prototype, "text", void 0);
SegmentedButtonItem = SegmentedButtonItem_1 = __decorate([
    customElement({
        tag: "ui5-segmented-button-item",
        renderer: litRender,
        template: SegmentedButtonItemTemplate,
        styles: segmentedButtonItemCss,
        dependencies: [Icon],
    })
], SegmentedButtonItem);
SegmentedButtonItem.define();
export default SegmentedButtonItem;
//# sourceMappingURL=SegmentedButtonItem.js.map