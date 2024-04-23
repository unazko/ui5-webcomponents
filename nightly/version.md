commit aa27032530f8c31d9566ea3ec3b1f7e2d32ed7d4
Author: Boyan Rakilovski <boyan.rakilovski@sap.com>
Date:   Tue Apr 23 12:32:34 2024 +0300

    fix(ui5-link): remove unnecessary transparent border
    
    Issue:
    
    - There was a transparent border displacing the link's text horizontally.
    It is mostly visible if there is an actual text component underneath.
    Solution:
    
    - The border is replaced by an outline with an offset. Now the ui5-link
    component doesn't have an invisible border and it is compliant with the
    visual specification.
    
    Fixes: #8512
