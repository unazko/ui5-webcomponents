/* eslint no-unused-vars: 0 */
import { html, repeat, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(this._id)}-navigation-menu-rp" class="ui5-menu-rp ui5-navigation-menu" vertical-align="Center" ?sub-menu=${this._isSubMenu} @ui5-before-open=${ifDefined(this._beforePopoverOpen)} @ui5-after-open=${ifDefined(this._afterPopoverOpen)} @ui5-before-close=${ifDefined(this._beforePopoverClose)} @ui5-after-close=${ifDefined(this._afterPopoverClose)} accessible-name-ref="${ifDefined(this._id)}-navigationMenuPopoverText"><span id="${ifDefined(this._id)}-navigationMenuPopoverText" class="ui5-hidden-text">${ifDefined(this.accSideNavigationPopoverHiddenText)}</span>${this.isPhone ? block1.call(this, context, tags, suffix) : undefined}<div id="${ifDefined(this._id)}-menu-main" class="ui5-navigation-menu-main">${this._currentItems.length ? block3.call(this, context, tags, suffix) : block16.call(this, context, tags, suffix)}</div></${scopeTag("ui5-responsive-popover", tags, suffix)}><div class="ui5-menu-submenus"></div>` : html `<ui5-responsive-popover id="${ifDefined(this._id)}-navigation-menu-rp" class="ui5-menu-rp ui5-navigation-menu" vertical-align="Center" ?sub-menu=${this._isSubMenu} @ui5-before-open=${ifDefined(this._beforePopoverOpen)} @ui5-after-open=${ifDefined(this._afterPopoverOpen)} @ui5-before-close=${ifDefined(this._beforePopoverClose)} @ui5-after-close=${ifDefined(this._afterPopoverClose)} accessible-name-ref="${ifDefined(this._id)}-navigationMenuPopoverText"><span id="${ifDefined(this._id)}-navigationMenuPopoverText" class="ui5-hidden-text">${ifDefined(this.accSideNavigationPopoverHiddenText)}</span>${this.isPhone ? block1.call(this, context, tags, suffix) : undefined}<div id="${ifDefined(this._id)}-menu-main" class="ui5-navigation-menu-main">${this._currentItems.length ? block3.call(this, context, tags, suffix) : block16.call(this, context, tags, suffix)}</div></ui5-responsive-popover><div class="ui5-menu-submenus"></div>`; }
function block1(context, tags, suffix) { return suffix ? html `<div slot="header" class="ui5-menu-dialog-header">${this.isSubMenuOpened ? block2.call(this, context, tags, suffix) : undefined}<div class="ui5-menu-dialog-title"><div>${ifDefined(this.menuHeaderTextPhone)}</div></div><${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" aria-label="${ifDefined(this.labelClose)}" @click=${this.close}></${scopeTag("ui5-button", tags, suffix)}></div>` : html `<div slot="header" class="ui5-menu-dialog-header">${this.isSubMenuOpened ? block2.call(this, context, tags, suffix) : undefined}<div class="ui5-menu-dialog-title"><div>${ifDefined(this.menuHeaderTextPhone)}</div></div><ui5-button icon="decline" design="Transparent" aria-label="${ifDefined(this.labelClose)}" @click=${this.close}></ui5-button></div>`; }
function block2(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${ifDefined(this.labelBack)}" @click=${this._navigateBack}></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${ifDefined(this.labelBack)}" @click=${this._navigateBack}></ui5-button>`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-list", tags, suffix)} accessible-role="tree" id="${ifDefined(this._id)}-menu-list" selection-mode="None" ?loading="${this.loading}" loading-delay="${ifDefined(this.loadingDelay)}" separators="None" @ui5-item-click=${ifDefined(this._itemClick)} @mouseover="${this._loadingMouseOver}">${repeat(this._currentItems, (item, index) => item._id || index, (item, index) => block4.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}>` : html `<ui5-list accessible-role="tree" id="${ifDefined(this._id)}-menu-list" selection-mode="None" ?loading="${this.loading}" loading-delay="${ifDefined(this.loadingDelay)}" separators="None" @ui5-item-click=${ifDefined(this._itemClick)} @mouseover="${this._loadingMouseOver}">${repeat(this._currentItems, (item, index) => item._id || index, (item, index) => block4.call(this, context, tags, suffix, item, index))}</ui5-list>`; }
function block4(context, tags, suffix, item, index) { return html `${item.item.href ? block5.call(this, context, tags, suffix, item, index) : block11.call(this, context, tags, suffix, item, index)}`; }
function block5(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} .associatedItem="${ifDefined(item.item)}" id="${ifDefined(this._id)}-menu-item-${index}" .icon="${ifDefined(item.item.icon)}" accessible-name=${ifDefined(item.item.ariaLabelledByText)} accessible-role="none" .additionalText="${ifDefined(item.item._additionalText)}" .ariaHasPopup=${ifDefined(item.ariaHasPopup)} ?disabled=${item.item.disabled} ?starts-section=${item.item.startsSection} ?selected=${item.item.subMenuOpened} ?is-phone=${this.isPhone} @mouseover=${this._itemMouseOver} @mouseout=${this._itemMouseOut} @keydown=${this._itemKeyDown} class="ui5-menu-item ui5-navigation-menu-item"><a role="treeitem" href="${ifDefined(item.item.href)}" target="${ifDefined(item.item.target)}">${item.item.hasDummyIcon ? block6.call(this, context, tags, suffix, item, index) : undefined}${ifDefined(item.item.text)}${item.item.hasSubmenu ? block7.call(this, context, tags, suffix, item, index) : block8.call(this, context, tags, suffix, item, index)}${item.item.isExternalLink ? block10.call(this, context, tags, suffix, item, index) : undefined}</a></${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li .associatedItem="${ifDefined(item.item)}" id="${ifDefined(this._id)}-menu-item-${index}" .icon="${ifDefined(item.item.icon)}" accessible-name=${ifDefined(item.item.ariaLabelledByText)} accessible-role="none" .additionalText="${ifDefined(item.item._additionalText)}" .ariaHasPopup=${ifDefined(item.ariaHasPopup)} ?disabled=${item.item.disabled} ?starts-section=${item.item.startsSection} ?selected=${item.item.subMenuOpened} ?is-phone=${this.isPhone} @mouseover=${this._itemMouseOver} @mouseout=${this._itemMouseOut} @keydown=${this._itemKeyDown} class="ui5-menu-item ui5-navigation-menu-item"><a role="treeitem" href="${ifDefined(item.item.href)}" target="${ifDefined(item.item.target)}">${item.item.hasDummyIcon ? block6.call(this, context, tags, suffix, item, index) : undefined}${ifDefined(item.item.text)}${item.item.hasSubmenu ? block7.call(this, context, tags, suffix, item, index) : block8.call(this, context, tags, suffix, item, index)}${item.item.isExternalLink ? block10.call(this, context, tags, suffix, item, index) : undefined}</a></ui5-li>`; }
function block6(context, tags, suffix, item, index) { return html `<div class="ui5-menu-item-dummy-icon"></div>`; }
function block7(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} part="icon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon part="icon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></ui5-icon>`; }
function block8(context, tags, suffix, item, index) { return html `${item.item._siblingsWithChildren ? block9.call(this, context, tags, suffix, item, index) : undefined}`; }
function block9(context, tags, suffix, item, index) { return html `<div class="ui5-menu-item-no-icon-end"></div>`; }
function block10(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`; }
function block11(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} .associatedItem="${ifDefined(item.item)}" class="ui5-menu-item ui5-navigation-menu-item" id="${ifDefined(this._id)}-menu-item-${index}" .icon="${ifDefined(item.item.icon)}" accessible-name=${ifDefined(item.item.ariaLabelledByText)} accessible-role="treeitem" .additionalText="${ifDefined(item.item._additionalText)}" .ariaHasPopup=${ifDefined(item.ariaHasPopup)} ?disabled=${item.item.disabled} ?starts-section=${item.item.startsSection} ?selected=${item.item.subMenuOpened} ?is-phone=${this.isPhone} @mouseover=${this._itemMouseOver} @mouseout=${this._itemMouseOut} @keydown=${this._itemKeyDown}>${item.item.hasDummyIcon ? block12.call(this, context, tags, suffix, item, index) : undefined}${ifDefined(item.item.text)}${item.item.hasSubmenu ? block13.call(this, context, tags, suffix, item, index) : block14.call(this, context, tags, suffix, item, index)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li .associatedItem="${ifDefined(item.item)}" class="ui5-menu-item ui5-navigation-menu-item" id="${ifDefined(this._id)}-menu-item-${index}" .icon="${ifDefined(item.item.icon)}" accessible-name=${ifDefined(item.item.ariaLabelledByText)} accessible-role="treeitem" .additionalText="${ifDefined(item.item._additionalText)}" .ariaHasPopup=${ifDefined(item.ariaHasPopup)} ?disabled=${item.item.disabled} ?starts-section=${item.item.startsSection} ?selected=${item.item.subMenuOpened} ?is-phone=${this.isPhone} @mouseover=${this._itemMouseOver} @mouseout=${this._itemMouseOut} @keydown=${this._itemKeyDown}>${item.item.hasDummyIcon ? block12.call(this, context, tags, suffix, item, index) : undefined}${ifDefined(item.item.text)}${item.item.hasSubmenu ? block13.call(this, context, tags, suffix, item, index) : block14.call(this, context, tags, suffix, item, index)}</ui5-li>`; }
function block12(context, tags, suffix, item, index) { return html `<div class="ui5-menu-item-dummy-icon"></div>`; }
function block13(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} part="icon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon part="icon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></ui5-icon>`; }
function block14(context, tags, suffix, item, index) { return html `${item.item._siblingsWithChildren ? block15.call(this, context, tags, suffix, item, index) : undefined}`; }
function block15(context, tags, suffix, item, index) { return html `<div class="ui5-menu-item-no-icon-end"></div>`; }
function block16(context, tags, suffix) { return html `${this.loading ? block17.call(this, context, tags, suffix) : undefined}`; }
function block17(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-busy-indicator", tags, suffix)} id="${ifDefined(this._id)}-menu-busy-indicator" delay="${ifDefined(this.loadingDelay)}" class="ui5-menu-busy-indicator" @mouseover="${this._loadingMouseOver}" active></${scopeTag("ui5-busy-indicator", tags, suffix)}>` : html `<ui5-busy-indicator id="${ifDefined(this._id)}-menu-busy-indicator" delay="${ifDefined(this.loadingDelay)}" class="ui5-menu-busy-indicator" @mouseover="${this._loadingMouseOver}" active></ui5-busy-indicator>`; }
export default block0;
//# sourceMappingURL=NavigationMenuTemplate.lit.js.map