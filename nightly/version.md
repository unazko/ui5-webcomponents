commit 2f88dc814dd393748a7482c7f6566d244368c970
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Mon Jul 17 13:57:23 2023 +0300

    fix(framework): fix I18Bundle#getText params TypeScript types (#7310)
    
    The I18Bundle#getText method works with both objects and strings,
    however the type is set to I18nText ( { key: string, defaultText: string } ) and causes TS errors when the method is called with a string as described in the referenced issue.
    
    Fixes: #7300
