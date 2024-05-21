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
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import StandardListItem from "./StandardListItem.js";
import ListItemType from "./types/ListItemType.js";
import "./Button.js";
import HighlightTypes from "./types/HighlightTypes.js";
import "./Select.js";
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
let Option = class Option extends StandardListItem {
    get effectiveDisplayText() {
        return this.textContent || "";
    }
};
__decorate([
    slot({ type: Node, "default": true, invalidateOnChildChange: true })
], Option.prototype, "text", void 0);
__decorate([
    property()
], Option.prototype, "value", void 0);
__decorate([
    property({ type: ListItemType, defaultValue: ListItemType.Active })
], Option.prototype, "type", void 0);
__decorate([
    property({ type: Object })
], Option.prototype, "accessibilityAttributes", void 0);
__decorate([
    property({ type: Boolean })
], Option.prototype, "navigated", void 0);
__decorate([
    property({ type: HighlightTypes, defaultValue: HighlightTypes.None })
], Option.prototype, "highlight", void 0);
__decorate([
    property({ type: ValueState, defaultValue: ValueState.None })
], Option.prototype, "additionalTextState", void 0);
__decorate([
    property()
], Option.prototype, "description", void 0);
__decorate([
    property({ type: Boolean })
], Option.prototype, "iconEnd", void 0);
__decorate([
    property()
], Option.prototype, "image", void 0);
__decorate([
    property({ type: Boolean })
], Option.prototype, "movable", void 0);
__decorate([
    property()
], Option.prototype, "accessibleName", void 0);
__decorate([
    slot()
], Option.prototype, "deleteButton", void 0);
__decorate([
    slot()
], Option.prototype, "imageContent", void 0);
Option = __decorate([
    customElement({
        tag: "ui5-option",
    })
    /**
     * **Note:** The event is inherited and not supported. If used, it won't take any effect.
     * @public
     * @deprecated
     */
    ,
    event("detail-click")
], Option);
Option.define();
export default Option;
//# sourceMappingURL=Option.js.map