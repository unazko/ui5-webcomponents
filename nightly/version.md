commit e24f294501b1b1bb3d1f1f30f902fc165fefcf57
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Wed Dec 6 13:31:50 2023 +0200

    fix(ui5-table-row): fix runtime exception in test env execution (#7953)
    
    Assuming that the activeElement is guaranteed to be non-null object is not entirely valid although in real case usages, nobody had a problem.
    However, in a test execution environment, the authors of the linked issue got an execution thrown by activeElement!.hasAttribute and I think it's best to ensure this can't happen as done with the change.
    
    Fixes: #7787
