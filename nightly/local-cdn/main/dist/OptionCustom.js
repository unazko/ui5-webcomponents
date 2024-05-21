var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import CustomListItem from "./CustomListItem.js";
import "./Button.js";
import ListItemType from "./types/ListItemType.js";
import HighlightTypes from "./types/HighlightTypes.js";
import "./Select.js";
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
let OptionCustom = class OptionCustom extends CustomListItem {
    get effectiveDisplayText() {
        return this.displayText || this.textContent || "";
    }
};
__decorate([
    property()
], OptionCustom.prototype, "displayText", void 0);
__decorate([
    property()
], OptionCustom.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], OptionCustom.prototype, "iconEnd", void 0);
__decorate([
    property({ type: ListItemType, defaultValue: ListItemType.Active })
], OptionCustom.prototype, "type", void 0);
__decorate([
    property({ type: Object })
], OptionCustom.prototype, "accessibilityAttributes", void 0);
__decorate([
    property({ type: Boolean })
], OptionCustom.prototype, "navigated", void 0);
__decorate([
    property({ type: HighlightTypes, defaultValue: HighlightTypes.None })
], OptionCustom.prototype, "highlight", void 0);
__decorate([
    property({ type: Boolean })
], OptionCustom.prototype, "movable", void 0);
__decorate([
    property()
], OptionCustom.prototype, "accessibleName", void 0);
__decorate([
    slot()
], OptionCustom.prototype, "deleteButton", void 0);
__decorate([
    slot({ type: Node, "default": true, invalidateOnChildChange: true })
], OptionCustom.prototype, "content", void 0);
OptionCustom = __decorate([
    customElement({
        tag: "ui5-option-custom",
    })
    /**
     * **Note:** The event is inherited and not supported. If used, it won't take any effect.
     * @public
     * @deprecated
     */
    ,
    event("detail-click")
], OptionCustom);
OptionCustom.define();
export default OptionCustom;
//# sourceMappingURL=OptionCustom.js.map