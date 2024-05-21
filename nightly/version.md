commit 49abb03cad8bbc70c4ecb38e9b41dffa0c51720a
Author: Boyan Rakilovski <boyan.rakilovski@sap.com>
Date:   Tue May 21 13:58:50 2024 +0300

    refactor(ui5-menu): make menu items physical (#8722)
    
    The `ui5-menu-item` now extends `ListItem` abstract class and it
    will be represented directly as a list item in the DOM.
    The application developers could now add custom styles and attach native event handlers
    to the `ui5-menu-item` as it is no longer an abstract class, but a physical component:
    
    ```html
    <ui5-menu-item id="exitItem" text="Exit" style="border: 2px solid teal" icon="journey-arrive"></ui5-menu-item>
    ```
    
    ```ts
    document.getElementById("exitItem").addEventListener("focusin", () => {
        ...
    })
    ```
    
    Related to: #8461
    Related to: #7391
