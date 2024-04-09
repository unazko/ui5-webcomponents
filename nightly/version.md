commit ce2829619eceb1dca26ca17b2b6d0ab253caf076
Author: Konstantin Gogov <68374332+kgogov@users.noreply.github.com>
Date:   Mon Apr 8 20:37:18 2024 +0300

    feat(ui5-checkbox): update focus handling (#8553)
    
    Adjusted ui5-checkbox focus display rules. On desktop, focus outline is
    always visible. For mobile, focus outline only appears with an external
    keyboard, it remains hidden for touch focus.
    
    Related to: #8320
