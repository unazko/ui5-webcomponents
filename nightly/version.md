commit bd33dc527ed2d96224f5dbef03d87506defa227f
Author: Boyan Rakilovski <boyan.rakilovski@sap.com>
Date:   Wed Feb 28 16:41:01 2024 +0200

    fix(ui5-menu): improve focus handling (#8348)
    
    fix(ui5-menu): dispatch internal focus in event
    
    - We no longer count on the ui5-responsive popover to retrieve
    the focus over ui5-menu-item opener on ui5-menu close.
    
    - There is a differentiation between mouse and keyboard interactions
    aimed to retrieve the focus to the opener element on ui5-menu close.
