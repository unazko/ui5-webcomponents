var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TextArea_1;
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import { getEffectiveAriaLabelText, getAssociatedLabelForTexts } from "@ui5/webcomponents-base/dist/util/AriaLabelHelper.js";
import getEffectiveScrollbarStyle from "@ui5/webcomponents-base/dist/util/getEffectiveScrollbarStyle.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { isEscape } from "@ui5/webcomponents-base/dist/Keys.js";
import Popover from "./Popover.js";
import Icon from "./Icon.js";
import "./types/PopoverHorizontalAlign.js";
import "@ui5/webcomponents-icons/dist/error.js";
import "@ui5/webcomponents-icons/dist/alert.js";
import "@ui5/webcomponents-icons/dist/sys-enter-2.js";
import "@ui5/webcomponents-icons/dist/information.js";
import TextAreaTemplate from "./generated/templates/TextAreaTemplate.lit.js";
import { VALUE_STATE_SUCCESS, VALUE_STATE_INFORMATION, VALUE_STATE_ERROR, VALUE_STATE_WARNING, VALUE_STATE_TYPE_SUCCESS, VALUE_STATE_TYPE_INFORMATION, VALUE_STATE_TYPE_ERROR, VALUE_STATE_TYPE_WARNING, TEXTAREA_CHARACTERS_LEFT, TEXTAREA_CHARACTERS_EXCEEDED, FORM_TEXTFIELD_REQUIRED, } from "./generated/i18n/i18n-defaults.js";
// Styles
import styles from "./generated/themes/TextArea.css.js";
import valueStateMessageStyles from "./generated/themes/ValueStateMessage.css.js";
import browserScrollbarCSS from "./generated/themes/BrowserScrollbar.css.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-textarea` component is used to enter multiple rows of text.
 *
 * When empty, it can hold a placeholder similar to a `ui5-input`.
 * You can define the rows of the `ui5-textarea` and also determine specific behavior when handling long texts.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/TextArea.js";`
 * @constructor
 * @extends UI5Element
 * @public
 * @csspart textarea - Used to style the native textarea
 */
let TextArea = TextArea_1 = class TextArea extends UI5Element {
    get formValidityMessage() {
        return TextArea_1.i18nBundle.getText(FORM_TEXTFIELD_REQUIRED);
    }
    get formValidity() {
        return { valueMissing: this.required && !this.value };
    }
    async formElementAnchor() {
        return this.getFocusDomRefAsync();
    }
    get formFormattedValue() {
        return this.value;
    }
    static async onDefine() {
        TextArea_1.i18nBundle = await getI18nBundle("@ui5/webcomponents");
    }
    constructor() {
        super();
        this._firstRendering = true;
        this._openValueStateMsgPopover = false;
        this._fnOnResize = this._onResize.bind(this);
        this.previousValue = "";
    }
    onEnterDOM() {
        ResizeHandler.register(this, this._fnOnResize);
    }
    onExitDOM() {
        ResizeHandler.deregister(this, this._fnOnResize);
    }
    onBeforeRendering() {
        if (!this.value) {
            // fallback to default value
            this.value = "";
        }
        this._exceededTextProps = this._calcExceededText();
        this._mirrorText = this._tokenizeText(this.value);
        this.exceeding = !!this._exceededTextProps.leftCharactersCount && this._exceededTextProps.leftCharactersCount < 0;
        this._setCSSParams();
    }
    onAfterRendering() {
        const nativeTextArea = this.getInputDomRef();
        if (this.rows === 1) {
            nativeTextArea.setAttribute("rows", "1");
        }
        else {
            nativeTextArea.removeAttribute("rows");
        }
        this.toggleValueStateMessage(this.openValueStateMsgPopover);
        this._firstRendering = false;
    }
    getInputDomRef() {
        return this.getDomRef().querySelector("textarea");
    }
    _onkeydown(e) {
        this._keyDown = true;
        if (isEscape(e)) {
            const nativeTextArea = this.getInputDomRef();
            this.value = this.previousValue;
            nativeTextArea.value = this.value;
            this.fireEvent("input");
        }
    }
    _onkeyup() {
        this._keyDown = false;
    }
    _onfocusin() {
        this.focused = true;
        this._openValueStateMsgPopover = true;
        this.previousValue = this.getInputDomRef().value;
    }
    _onfocusout(e) {
        const eTarget = e.relatedTarget;
        const focusedOutToValueStateMessage = eTarget?.shadowRoot?.querySelector(".ui5-valuestatemessage-root");
        this.focused = false;
        if (!focusedOutToValueStateMessage) {
            this._openValueStateMsgPopover = false;
        }
    }
    _onchange() {
        this.fireEvent("change", {});
    }
    _onselect() {
        this.fireEvent("select", {});
    }
    _onscroll() {
        this.fireEvent("scroll", {});
    }
    _oninput(e) {
        const nativeTextArea = this.getInputDomRef();
        if (e.target === nativeTextArea) {
            // stop the native event, as the semantic "input" would be fired.
            e.stopImmediatePropagation();
        }
        this.value = nativeTextArea.value;
        const valueLength = this.value.length;
        if (e.inputType === "insertFromPaste" && this.maxlength && valueLength > this.maxlength) {
            nativeTextArea.setSelectionRange(this.maxlength, valueLength);
        }
        this.fireEvent("input", {});
        // Angular two way data binding
        this.fireEvent("value-changed");
    }
    _onResize() {
        if (this.displayValueStateMessagePopover) {
            this._width = this.offsetWidth;
        }
    }
    _setCSSParams() {
        this.style.setProperty("--_textarea_rows", this.rows ? String(this.rows) : "2");
        this.style.setProperty("--_textarea_growing_max_rows", String(this.growingMaxRows));
    }
    toggleValueStateMessage(toggle) {
        if (toggle) {
            this.openPopover();
        }
        else {
            this.closePopover();
        }
    }
    openPopover() {
        this.valueStatePopover = this._getPopover();
        if (this.valueStatePopover) {
            this.valueStatePopover.opener = this.shadowRoot.querySelector(".ui5-textarea-root .ui5-textarea-wrapper");
            this.valueStatePopover.open = true;
        }
    }
    closePopover() {
        this.valueStatePopover = this._getPopover();
        if (this.valueStatePopover) {
            this.valueStatePopover.open = false;
        }
    }
    _getPopover() {
        return this.shadowRoot.querySelector("[ui5-popover]");
    }
    _tokenizeText(value) {
        const tokenizedText = value.replace(/&/gm, "&amp;").replace(/"/gm, "&quot;").replace(/'/gm, "&apos;").replace(/</gm, "<")
            .replace(/>/gm, ">")
            .split("\n");
        if (tokenizedText.length < this.rows) {
            return this._mapTokenizedTextToObject([...tokenizedText, ...Array(this.rows - tokenizedText.length).fill("")]);
        }
        return this._mapTokenizedTextToObject(tokenizedText);
    }
    _mapTokenizedTextToObject(tokenizedText) {
        return tokenizedText.map((token, index) => {
            return {
                text: token,
                last: index === (tokenizedText.length - 1),
            };
        });
    }
    _calcExceededText() {
        let calcedMaxLength, exceededText, leftCharactersCount;
        if (this.showExceededText) {
            const maxLength = this.maxlength;
            if (maxLength !== null && maxLength !== undefined) {
                leftCharactersCount = maxLength - this.value.length;
                if (leftCharactersCount >= 0) {
                    exceededText = TextArea_1.i18nBundle.getText(TEXTAREA_CHARACTERS_LEFT, leftCharactersCount);
                }
                else {
                    exceededText = TextArea_1.i18nBundle.getText(TEXTAREA_CHARACTERS_EXCEEDED, Math.abs(leftCharactersCount));
                }
            }
        }
        else {
            calcedMaxLength = this.maxlength;
        }
        return {
            exceededText, leftCharactersCount, calcedMaxLength,
        };
    }
    get classes() {
        return {
            root: {
                "ui5-textarea-root": true,
                "ui5-content-native-scrollbars": getEffectiveScrollbarStyle(),
            },
            valueStateMsg: {
                "ui5-valuestatemessage-header": true,
                "ui5-valuestatemessage--error": this.valueState === ValueState.Negative,
                "ui5-valuestatemessage--warning": this.valueState === ValueState.Critical,
                "ui5-valuestatemessage--information": this.valueState === ValueState.Information,
            },
        };
    }
    get styles() {
        return {
            valueStateMsgPopover: {
                "max-width": `${this._width}px`,
            },
        };
    }
    get tabIndex() {
        return this.disabled ? -1 : 0;
    }
    get ariaLabelText() {
        const effectiveAriaLabelText = getEffectiveAriaLabelText(this) || getAssociatedLabelForTexts(this);
        if (this.showExceededText) {
            if (effectiveAriaLabelText) {
                return effectiveAriaLabelText.concat(" ", this._exceededTextProps.exceededText);
            }
            return this._exceededTextProps.exceededText;
        }
        return effectiveAriaLabelText;
    }
    get ariaDescribedBy() {
        return this.hasValueState ? `${this._id}-valueStateDesc` : undefined;
    }
    get ariaValueStateHiddenText() {
        if (!this.hasValueState) {
            return;
        }
        if (this.valueState === ValueState.None) {
            return;
        }
        if (this.hasCustomValueState) {
            return `${this.valueStateTypeMappings[this.valueState]}`.concat(" ", this.valueStateMessageText.map(el => el.textContent).join(" "));
        }
        return `${this.valueStateTypeMappings[this.valueState]} ${this.valueStateDefaultText}`;
    }
    get valueStateDefaultText() {
        if (this.valueState !== ValueState.None) {
            return this.valueStateTextMappings[this.valueState];
        }
        return "";
    }
    get ariaInvalid() {
        return this.valueState === ValueState.Negative ? "true" : null;
    }
    get openValueStateMsgPopover() {
        return !this._firstRendering && this._openValueStateMsgPopover && this.displayValueStateMessagePopover;
    }
    get displayValueStateMessagePopover() {
        return !this.readonly && (this.hasCustomValueState || this.hasValueState);
    }
    get hasCustomValueState() {
        return !!this.valueStateMessage.length && this.hasValueState;
    }
    get hasValueState() {
        return this.valueState === ValueState.Negative || this.valueState === ValueState.Critical || this.valueState === ValueState.Information;
    }
    get valueStateMessageText() {
        return this.valueStateMessage.map(x => x.cloneNode(true));
    }
    get _valueStatePopoverHorizontalAlign() {
        return this.effectiveDir !== "rtl" ? "Start" : "End";
    }
    /**
     * This method is relevant for sap_horizon theme only
     */
    get _valueStateMessageIcon() {
        const iconPerValueState = {
            Negative: "error",
            Critical: "alert",
            Positive: "sys-enter-2",
            Information: "information",
        };
        return this.valueState !== ValueState.None ? iconPerValueState[this.valueState] : "";
    }
    get valueStateTextMappings() {
        return {
            "Positive": TextArea_1.i18nBundle.getText(VALUE_STATE_SUCCESS),
            "Information": TextArea_1.i18nBundle.getText(VALUE_STATE_INFORMATION),
            "Negative": TextArea_1.i18nBundle.getText(VALUE_STATE_ERROR),
            "Critical": TextArea_1.i18nBundle.getText(VALUE_STATE_WARNING),
        };
    }
    get valueStateTypeMappings() {
        return {
            "Positive": TextArea_1.i18nBundle.getText(VALUE_STATE_TYPE_SUCCESS),
            "Information": TextArea_1.i18nBundle.getText(VALUE_STATE_TYPE_INFORMATION),
            "Negative": TextArea_1.i18nBundle.getText(VALUE_STATE_TYPE_ERROR),
            "Critical": TextArea_1.i18nBundle.getText(VALUE_STATE_TYPE_WARNING),
        };
    }
};
__decorate([
    property()
], TextArea.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], TextArea.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], TextArea.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean })
], TextArea.prototype, "required", void 0);
__decorate([
    property()
], TextArea.prototype, "placeholder", void 0);
__decorate([
    property({ type: ValueState, defaultValue: ValueState.None })
], TextArea.prototype, "valueState", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 0 })
], TextArea.prototype, "rows", void 0);
__decorate([
    property({ validator: Integer })
], TextArea.prototype, "maxlength", void 0);
__decorate([
    property({ type: Boolean })
], TextArea.prototype, "showExceededText", void 0);
__decorate([
    property({ type: Boolean })
], TextArea.prototype, "growing", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 0 })
], TextArea.prototype, "growingMaxRows", void 0);
__decorate([
    property()
], TextArea.prototype, "name", void 0);
__decorate([
    property()
], TextArea.prototype, "accessibleName", void 0);
__decorate([
    property()
], TextArea.prototype, "accessibleNameRef", void 0);
__decorate([
    property({ type: Boolean })
], TextArea.prototype, "focused", void 0);
__decorate([
    property({ type: Boolean })
], TextArea.prototype, "exceeding", void 0);
__decorate([
    property({ type: Object, multiple: true })
], TextArea.prototype, "_mirrorText", void 0);
__decorate([
    property({ noAttribute: true })
], TextArea.prototype, "_maxHeight", void 0);
__decorate([
    property({ validator: Integer })
], TextArea.prototype, "_width", void 0);
__decorate([
    slot()
], TextArea.prototype, "valueStateMessage", void 0);
TextArea = TextArea_1 = __decorate([
    customElement({
        tag: "ui5-textarea",
        formAssociated: true,
        languageAware: true,
        styles: [browserScrollbarCSS, styles, valueStateMessageStyles],
        renderer: litRender,
        template: TextAreaTemplate,
        dependencies: [Popover, Icon],
    })
    /**
     * Fired when the text has changed and the focus leaves the component.
     * @public
     */
    ,
    event("change")
    /**
     * Fired when the value of the component changes at each keystroke or when
     * something is pasted.
     * @since 1.0.0-rc.5
     * @public
     */
    ,
    event("input")
    /**
     * Fired when some text has been selected.
     *
     * @since 1.23.0
     * @public
     */
    ,
    event("select")
    /**
     * Fired when textarea is scrolled.
     *
     * @since 1.23.0
     * @public
     */
    ,
    event("scroll")
], TextArea);
TextArea.define();
export default TextArea;
//# sourceMappingURL=TextArea.js.map