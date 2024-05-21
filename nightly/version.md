commit 8d6fac75151fd3f42f58ec29cc8f27d0383114d2
Author: Dobrin Dimchev <dobrin.dimchev@sap.com>
Date:   Tue May 21 11:17:21 2024 +0300

    refactor(ui5-option): make options physical elements (#8903)
    
    Removes the ui5-select-menu and ui5-select-menu-option components.
    
    BREAKING CHANGE: The ui5-select-menu and ui5-select-menu-option components are removed. Custom options can now be created using the ui5-option-custom, directly placed inside the default slot of the ui5-select
    
    SelectMenu & SelectMenuOption
    Changed item    Old     New
    SelectMenu      ui5-select-menu removed
    SelectMenuOption        ui5-select-menu-option  ui5-option-custom
    If you have previously used the ui5-select-menu and ui5-select-menu-option:
    
    <ui5-select menu="selectMenu"></ui5-select>
    
    <ui5-select-menu id="selectMenu">
        <ui5-select-menu-option>
            <div class="optionContent">custom</div>
        </ui5-select-menu-option>
    </ui5-select-menu>
    Now use just ui5-select and ui5-option-custom instead:
    
    <ui5-select>
        <ui5-option-custom>
            <div class="optionContent">custom</div>
        </ui5-option-custom>
    </ui5-select>
    Select
    Changed item    Old     New
    property        menu    removed
    The menu property of the ui5-select is removed.
    
    Related to #8461, #7887
