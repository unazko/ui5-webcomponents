commit db37cf81bd1951ff280b6f682fd5784877cae5ca
Author: Konstantin Gogov <68374332+kgogov@users.noreply.github.com>
Date:   Tue Apr 16 15:25:16 2024 +0300

    chore(ui5-icon): update focus handling (#8773)
    
    Adjusted `ui5-icon` focus display rules. On desktop, focus outline is
    always visible. For mobile, focus outline only appears with an external
    keyboard, it remains hidden for touch focus.
    
    Related to: #8320
