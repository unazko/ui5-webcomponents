commit dd70f3aa8ef70b592f1d4e0f3f9894c6280fb1bf
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Thu May 4 12:49:53 2023 +0300

    fix(create-webcomponents-package): fix package creation issues with test and lint (#6976)
    
    The change addresses few issues when generating a web component project with our tools:
    ### Command `@ui5/webcomponents-package` updated
    - added new parameter `componentName` and derive the tag name from it
    - added new (private) parameter `skipSubFolder` to generate all files in the execution context, not in a new folder (defined by the packageName parameter) as by default
    ### Command `create-web-component` updated
    - remove the "typescript" parameter and just check for the existence of `tsconfig.json` to generate TS or JS component.
    - update "componentName" validation to allow only letters, starting with capital one - Foo, FooBar, FooBarBar
    - remove "tag" parameter, the tag is now produced based on the component name - "foo-tag", "foo-bar", "foo-bar-bar"
    ### The `test` command
    - fixes failing `yarn test` command due to a bug in `test-runner.js`
    ### Themes updated
    - no longer showcase "belize", "horizon" is now used in the test page instead
    ### Eslint improved
    - added eslint config file pointing to the default config in `@ui5/webcomponents-tools`
    
    Fixes: https://github.com/SAP/ui5-webcomponents/issues/6980
