import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import ListItemBase from "@ui5/webcomponents/dist/ListItemBase.js";
/**
 * @class
 *
 * The base class of the `NotificationListItem` and `NotificationListGroupItem`.
 * @constructor
 * @extends ListItemBase
 * @since 1.0.0-rc.8
 * @public
 */
declare class NotificationListItemBase extends ListItemBase {
    /**
     * Defines the `titleText` of the item.
     * @default ""
     * @public
     */
    titleText: string;
    /**
     * Defines if the `notification` is new or has been already read.
     *
     * **Note:** if set to `false` the `titleText` has bold font,
     * if set to true - it has a normal font.
     * @default false
     * @public
     */
    read: boolean;
    /**
     * Defines if a busy indicator would be displayed over the item.
     * @default false
     * @public
     * @since 1.0.0-rc.8
     */
    loading: boolean;
    /**
     * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
     * @default 1000
     * @public
     */
    loadingDelay: number;
    static i18nFioriBundle: I18nBundle;
    get hasTitleText(): boolean;
    /**
     * Event handlers
     */
    _onkeydown(e: KeyboardEvent): void;
    static onDefine(): Promise<void>;
}
export default NotificationListItemBase;
