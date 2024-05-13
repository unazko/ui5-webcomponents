commit 912167d18cd5e365a03513defc570da5bf372715
Author: TeodorTaushanov <teodor.taushanov@sap.com>
Date:   Mon May 13 16:39:49 2024 +0300

    refactor(ui5-popup): rename after-open and after-close events to 'open' and 'close' (#8946)
    
    Change the event names in popup from `after-close` and `after-open` to `close` and `open`.
    
    BREAKING CHANGE: Event names `after-close` and `after-open` are now named `close` and `open`.
    Previously the application developers could subscribe to the events as follows:
    ```ts
    popup.addEventListener("after-open", function() {
            //...
    });
    popup.addEventListener("after-close", function() {
            //...
    });
    ```
    
    Now the application developers should include the ui5-bar as follows:
    ```ts
    popup.addEventListener("open", function() {
            //...
    });
    
    popup.addEventListener("close", function() {
            //...
    });
    
    ```
    
    Related to #8461
