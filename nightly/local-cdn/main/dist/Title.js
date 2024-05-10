var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import TitleLevel from "./types/TitleLevel.js";
import WrappingType from "./types/WrappingType.js";
// Template
import TitleTemplate from "./generated/templates/TitleTemplate.lit.js";
// Styles
import titleCss from "./generated/themes/Title.css.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-title` component is used to display titles inside a page.
 * It is a simple, large-sized text with explicit header/title semantics.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/Title.js";`
 * @constructor
 * @extends UI5Element
 * @slot {Node[]} default - Defines the text of the component.
 * This component supports nesting a `Link` component inside.
 *
 * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
 * @public
 */
let Title = class Title extends UI5Element {
    get h1() {
        return this.level === TitleLevel.H1;
    }
    get h2() {
        return this.level === TitleLevel.H2;
    }
    get h3() {
        return this.level === TitleLevel.H3;
    }
    get h4() {
        return this.level === TitleLevel.H4;
    }
    get h5() {
        return this.level === TitleLevel.H5;
    }
    get h6() {
        return this.level === TitleLevel.H6;
    }
};
__decorate([
    property({ type: WrappingType, defaultValue: WrappingType.Normal })
], Title.prototype, "wrappingType", void 0);
__decorate([
    property({ type: TitleLevel, defaultValue: TitleLevel.H2 })
], Title.prototype, "level", void 0);
Title = __decorate([
    customElement({
        tag: "ui5-title",
        renderer: litRender,
        template: TitleTemplate,
        styles: titleCss,
    })
], Title);
Title.define();
export default Title;
//# sourceMappingURL=Title.js.map