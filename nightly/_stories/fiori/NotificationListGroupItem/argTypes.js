export default {
    "priority": {
        "control": "select",
        "options": [
            "High",
            "Medium",
            "Low",
            "None"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {
                "summary": "Array<NotificationListItemBase>"
            }
        }
    },
    "actions": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {
                "summary": "Array<NotificationAction>"
            }
        }
    },
    "close": {
        "description": "Fired when the <code>Close</code> button is pressed.",
        "control": {
            "type": false
        },
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "type": {
                        "text": "HTMLElement"
                    },
                    "name": "item",
                    "_ui5privacy": "public",
                    "description": "the closed item."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents-fiori",
    "since": "1.0.0-rc.8"
};
//# sourceMappingURL=argTypes.js.map