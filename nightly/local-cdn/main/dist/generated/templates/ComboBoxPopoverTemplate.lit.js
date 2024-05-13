/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} class="${classMap(this.classes.popover)}" hide-arrow placement="Bottom" horizontal-align="Start" prevent-initial-focus style="${styleMap(this.styles.suggestionsPopover)}" @ui5-open=${ifDefined(this._afterOpenPopover)} @ui5-close=${ifDefined(this._afterClosePopover)}><${scopeTag("ui5-busy-indicator", tags, suffix)} ?active=${this.loading} class="ui5-combobox-busy"></${scopeTag("ui5-busy-indicator", tags, suffix)}>${this._isPhone ? block1.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block7.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-list", tags, suffix)} class="ui5-combobox-items-list" separators="None" @ui5-item-click=${ifDefined(this._selectItem)} @ui5-item-focused=${ifDefined(this._onItemFocus)} @mousedown=${this._itemMousedown} selection-mode="Single">${repeat(this._filteredItems, (item, index) => item._id || index, (item, index) => block12.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}>${this._isPhone ? block15.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-responsive-popover", tags, suffix)}>${this.shouldOpenValueStateMessagePopover ? block16.call(this, context, tags, suffix) : undefined} ` : html `<ui5-responsive-popover class="${classMap(this.classes.popover)}" hide-arrow placement="Bottom" horizontal-align="Start" prevent-initial-focus style="${styleMap(this.styles.suggestionsPopover)}" @ui5-open=${ifDefined(this._afterOpenPopover)} @ui5-close=${ifDefined(this._afterClosePopover)}><ui5-busy-indicator ?active=${this.loading} class="ui5-combobox-busy"></ui5-busy-indicator>${this._isPhone ? block1.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block7.call(this, context, tags, suffix) : undefined}<ui5-list class="ui5-combobox-items-list" separators="None" @ui5-item-click=${ifDefined(this._selectItem)} @ui5-item-focused=${ifDefined(this._onItemFocus)} @mousedown=${this._itemMousedown} selection-mode="Single">${repeat(this._filteredItems, (item, index) => item._id || index, (item, index) => block12.call(this, context, tags, suffix, item, index))}</ui5-list>${this._isPhone ? block15.call(this, context, tags, suffix) : undefined}</ui5-responsive-popover>${this.shouldOpenValueStateMessagePopover ? block16.call(this, context, tags, suffix) : undefined} `; }
function block1(context, tags, suffix) { return suffix ? html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></${scopeTag("ui5-button", tags, suffix)}></div><div class="row"><${scopeTag("ui5-input", tags, suffix)} .value="${ifDefined(this.value)}" @ui5-input="${ifDefined(this._handleMobileInput)}" @ui5-change="${ifDefined(this._inputChange)}" placeholder="${ifDefined(this.placeholder)}" value-state="${ifDefined(this.valueState)}" ?show-clear-icon="${this.showClearIcon}" ?no-typeahead="${this.noTypeahead}">${repeat(this._filteredItems, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-input", tags, suffix)}></div></div>${this.hasValueStateText ? block3.call(this, context, tags, suffix) : undefined}` : html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></ui5-button></div><div class="row"><ui5-input .value="${ifDefined(this.value)}" @ui5-input="${ifDefined(this._handleMobileInput)}" @ui5-change="${ifDefined(this._inputChange)}" placeholder="${ifDefined(this.placeholder)}" value-state="${ifDefined(this.valueState)}" ?show-clear-icon="${this.showClearIcon}" ?no-typeahead="${this.noTypeahead}">${repeat(this._filteredItems, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</ui5-input></div></div>${this.hasValueStateText ? block3.call(this, context, tags, suffix) : undefined}`; }
function block2(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-suggestion-item", tags, suffix)} text="${ifDefined(item.text)}" additional-text="${ifDefined(item.additionalText)}"></${scopeTag("ui5-suggestion-item", tags, suffix)}>` : html `<ui5-suggestion-item text="${ifDefined(item.text)}" additional-text="${ifDefined(item.additionalText)}"></ui5-suggestion-item>`; }
function block3(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverValueStateMessage)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block4.call(this, context, tags, suffix) : block5.call(this, context, tags, suffix)}</div>` : html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block4.call(this, context, tags, suffix) : block5.call(this, context, tags, suffix)}</div>`; }
function block4(context, tags, suffix) { return html `${ifDefined(this.valueStateDefaultText)}`; }
function block5(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block6.call(this, context, tags, suffix, item, index))}`; }
function block6(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
function block7(context, tags, suffix) { return html `${this.hasValueStateText ? block8.call(this, context, tags, suffix) : undefined}`; }
function block8(context, tags, suffix) { return suffix ? html `<div slot="header" class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" ?focused=${this._isValueStateFocused} tabindex="0" style="${styleMap(this.styles.suggestionPopoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block9.call(this, context, tags, suffix) : block10.call(this, context, tags, suffix)}</div>` : html `<div slot="header" class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" ?focused=${this._isValueStateFocused} tabindex="0" style="${styleMap(this.styles.suggestionPopoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block9.call(this, context, tags, suffix) : block10.call(this, context, tags, suffix)}</div>`; }
function block9(context, tags, suffix) { return html `${ifDefined(this.valueStateDefaultText)}`; }
function block10(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block11.call(this, context, tags, suffix, item, index))}`; }
function block11(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
function block12(context, tags, suffix, item, index) { return html `${item.isGroupItem ? block13.call(this, context, tags, suffix, item, index) : block14.call(this, context, tags, suffix, item, index)}`; }
function block13(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li-group-header", tags, suffix)} ?focused=${item.focused}>${ifDefined(item.text)}</${scopeTag("ui5-li-group-header", tags, suffix)}>` : html `<ui5-li-group-header ?focused=${item.focused}>${ifDefined(item.text)}</ui5-li-group-header>`; }
function block14(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} type="Active" wrapping-type="Normal" additional-text=${ifDefined(item.additionalText)} group-name=${ifDefined(item.groupName)} ._tabIndex=${ifDefined(item.itemTabIndex)} .mappedItem=${ifDefined(item)} ?selected=${item.selected} ?focused=${item.focused} data-ui5-stable="${ifDefined(item.stableDomRef)}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li type="Active" wrapping-type="Normal" additional-text=${ifDefined(item.additionalText)} group-name=${ifDefined(item.groupName)} ._tabIndex=${ifDefined(item.itemTabIndex)} .mappedItem=${ifDefined(item)} ?selected=${item.selected} ?focused=${item.focused} data-ui5-stable="${ifDefined(item.stableDomRef)}">${ifDefined(item.text)}</ui5-li>`; }
function block15(context, tags, suffix) { return suffix ? html `<div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._closeRespPopover}">OK</${scopeTag("ui5-button", tags, suffix)}></div>` : html `<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">OK</ui5-button></div>`; }
function block16(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-popover", tags, suffix)} skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}" placement="Bottom"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block17.call(this, context, tags, suffix) : block18.call(this, context, tags, suffix)}</div></${scopeTag("ui5-popover", tags, suffix)}>` : html `<ui5-popover skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}" placement="Bottom"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block17.call(this, context, tags, suffix) : block18.call(this, context, tags, suffix)}</div></ui5-popover>`; }
function block17(context, tags, suffix) { return html `${ifDefined(this.valueStateDefaultText)}`; }
function block18(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block19.call(this, context, tags, suffix, item, index))}`; }
function block19(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
export default block0;
//# sourceMappingURL=ComboBoxPopoverTemplate.lit.js.map