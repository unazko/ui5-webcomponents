/* eslint no-unused-vars: 0 */
import { html, classMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<div class="ui5-tli-root"><div class="${classMap(this.classes.indicator)}"><div class="ui5-tli-icon-outer">${this.icon ? block1.call(this, context, tags, suffix) : block2.call(this, context, tags, suffix)}</div></div><div class="ui5-tli-bubble" tabindex="${ifDefined(this.forcedTabIndex)}" data-sap-focus-ref><div class="ui5-tli-title">${this.name ? block3.call(this, context, tags, suffix) : undefined}<span>${ifDefined(this.titleText)}</span></div><div class="ui5-tli-subtitle">${ifDefined(this.subtitleText)}</div>${this.innerHTML ? block6.call(this, context, tags, suffix) : undefined}<span class="${classMap(this.classes.bubbleArrowPosition)}"></span></div></div>`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-tli-icon" name="${ifDefined(this.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-tli-icon" name="${ifDefined(this.icon)}"></ui5-icon>`; }
function block2(context, tags, suffix) { return html `<div class="ui5-tli-dummy-icon-container"></div>`; }
function block3(context, tags, suffix) { return html `${this.nameClickable ? block4.call(this, context, tags, suffix) : block5.call(this, context, tags, suffix)}`; }
function block4(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-link", tags, suffix)} @ui5-click="${ifDefined(this.onNamePress)}" class="ui5-tli-title-name-clickable">${ifDefined(this.name)}&nbsp;</${scopeTag("ui5-link", tags, suffix)}>` : html `<ui5-link @ui5-click="${ifDefined(this.onNamePress)}" class="ui5-tli-title-name-clickable">${ifDefined(this.name)}&nbsp;</ui5-link>`; }
function block5(context, tags, suffix) { return html `<span class="ui5-tli-title-name">${ifDefined(this.name)}&nbsp;</span>`; }
function block6(context, tags, suffix) { return html `<div class="ui5-tli-desc"><slot></slot></div>`; }
export default block0;
//# sourceMappingURL=TimelineItemTemplate.lit.js.map