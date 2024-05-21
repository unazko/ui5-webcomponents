import{j as e}from"./jsx-runtime.796aa4d8.js";import{M as i}from"./index.e11c882b.js";import{u as s}from"./index.04e75108.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.0a6b69ed.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function f(o={}){const{wrapper:t}=Object.assign({},s(),o.components);return t?e.exports.jsx(t,Object.assign({},o,{children:e.exports.jsx(n,{})})):n();function n(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code"},s(),o.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(i,{title:"Docs/Contributing/Development workflow"}),`
`,e.exports.jsx(r.h1,{id:"general-development-workflow",children:"General Development Workflow"}),`
`,e.exports.jsx(r.p,{children:`This document aims to explain the steps component developers would have to perform
on daily basis from forking the project to merging a change, emphasising on the Github workflow.`}),`
`,e.exports.jsx(r.h2,{id:"1-fork-the-ui5-web-components-repository",children:"1. Fork the UI5 Web Components repository."}),`
`,e.exports.jsxs(r.p,{children:["See how to fork a repo ",e.exports.jsx(r.a,{href:"https://docs.github.com/en/github/getting-started-with-github/fork-a-repo",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.exports.jsx(r.h2,{id:"2-clone-the-ui5-web-components-repository",children:"2. Clone the UI5 Web Components repository."}),`
`,e.exports.jsxs(r.p,{children:["See how to clone a repo ",e.exports.jsx(r.a,{href:"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.exports.jsx(r.h2,{id:"3-run-the-project",children:"3. Run the project."}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"3.0."})," Make sure you have the following prerequisites installed:"]}),`
`,e.exports.jsxs(r.ul,{children:[`
`,e.exports.jsxs(r.li,{children:[e.exports.jsx(r.a,{href:"https://yarnpkg.com/en",target:"_blank",rel:"nofollow noopener noreferrer",children:"Yarn"}),";"]}),`
`,e.exports.jsxs(r.li,{children:[e.exports.jsx(r.a,{href:"https://nodejs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Node.js"})," (",e.exports.jsx(r.strong,{children:"version 14 or higher"}),")."]}),`
`]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"3.1."})," Install all dependencies."]}),`
`,e.exports.jsx(r.pre,{children:e.exports.jsx(r.code,{className:"language-sh",children:`yarn
`})}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"3.2."})," Build and serve the project."]}),`
`,e.exports.jsx(r.pre,{children:e.exports.jsx(r.code,{className:"language-sh",children:`yarn start
`})}),`
`,e.exports.jsx(r.p,{children:"Once the project is served, you can explore the components in the browser that will automaticall open the dev server URL, usually:"}),`
`,e.exports.jsxs(r.ul,{children:[`
`,e.exports.jsx(r.li,{children:e.exports.jsx(r.a,{href:"http://localhost:8080/",target:"_blank",rel:"nofollow noopener noreferrer",children:"http://localhost:8080/"})}),`
`]}),`
`,e.exports.jsx(r.p,{children:"The server will reload the pages whenever you make changes in the code."}),`
`,e.exports.jsx(r.h2,{id:"4-develop",children:"4. Develop."}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"4.1."})," Read the dedicated tutorials for component developers:"]}),`
`,e.exports.jsxs(r.ul,{children:[`
`,e.exports.jsxs(r.li,{children:[e.exports.jsx(r.a,{href:"./?path=/docs/docs-contributing-conventions-and-guidelines--docs",children:"Development Conventions and Guidelines"}),";"]}),`
`,e.exports.jsxs(r.li,{children:[e.exports.jsx(r.a,{href:"./?path=/docs/docs-development-custom-ui5-web-components--docs",children:"Developing Custom UI5 Web Components"}),";"]}),`
`,e.exports.jsxs(r.li,{children:[e.exports.jsx(r.a,{href:"./?path=/docs/docs-development-testing-ui5-web-components--docs",children:"Testing UI5 Web Components"}),";"]}),`
`,e.exports.jsxs(r.li,{children:[e.exports.jsx(r.a,{href:"./?path=/docs/docs-development-understanding-components-metadata--docs",children:"Understanding UI5 Web Components Metadata"}),"."]}),`
`]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"4.2."})," Create a local branch within your fork and work with it as usual."]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"4.3."})," Before committing, run the linter to check if your code is written according to the project eslint configuration."]}),`
`,e.exports.jsx(r.pre,{children:e.exports.jsx(r.code,{className:"language-sh",children:`$ yarn lint
`})}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"4.4."})," Before committing, run the test of the component you are working on (see the article for testing above) to catch issues as soon as possible."]}),`
`,e.exports.jsx(r.pre,{children:e.exports.jsx(r.code,{className:"language-sh",children:`$ cd packages/main
$ yarn test test/specs/Button.spec.js
`})}),`
`,e.exports.jsx(r.h2,{id:"5-open-pull-request-pr-from-fork",children:"5. Open pull request (PR) from fork."}),`
`,e.exports.jsx(r.p,{children:`You can open a pull request to the upstream repository from any branch or commit in your fork.
We recommend that you make changes in a topic branch (not in your local main branch), so that you can push followup commits if you receive feedback on your pull request.`}),`
`,e.exports.jsx(r.p,{children:"You can open a pull request from the Github UI."}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"5.1."}),' Find the "Pull requests" tab and then press the "New pull request" button.']}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"5.2."})," Compare the main branch of the upstream with a branch from your fork."]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"Note:"})," The full guide on how to open PR from fork can be found ",e.exports.jsx(r.a,{href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"5.3."}),` Once the PR is created you would have to accept a Developer Certificate of Origin (DCO).
Just follow the link posted in the PR by the CLA assistant.`]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"Note:"})," This is required only for your first PR."]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"5.4."}),` Immediately after the PR is created, a central build process starts to verify the change,
building the project and running all tests.
In case you are interested in the build output, you can follow the link at the bottom of the PR page.`]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"5.5."}),` Wait for our code review and approval.
After the PR is approved, the UI5 Web Components team will merge the change into the main branch.`]}),`
`,e.exports.jsx(r.h2,{id:"6-update-pull-request-created-from-a-fork",children:"6. Update pull request, created from a fork."}),`
`,e.exports.jsx(r.p,{children:`You often would need to update your pull request, especially when you need to address review comments.
To update your pull request, you have to push commits to the branch, that the pull request is based on
and the changes will be reflected in the pull request.`}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"Note:"})," We recommend syncing your fork before pushing commits to resolve merge conflicts beforehand."]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"Note:"})," The full guide on how to update PR can be found ",e.exports.jsx(r.a,{href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.exports.jsx(r.h2,{id:"7-sync-the-fork",children:"7. Sync the fork."}),`
`,e.exports.jsx(r.p,{children:`With the time your fork will be out of sync with the original repository
and you would need to update it.`}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"7.1."})," Specify a new remote upstream repository that will be synced with the fork."]}),`
`,e.exports.jsx(r.pre,{children:e.exports.jsx(r.code,{className:"language-sh",children:`$ git remote add upstream https://github.com/SAP/ui5-webcomponents.git
`})}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"7.2."}),` Fetch the branches and their respective commits from the upstream repository.
Commits to main will be stored in a local branch, upstream/main.`]}),`
`,e.exports.jsx(r.pre,{children:e.exports.jsx(r.code,{className:"language-sh",children:`$ git fetch upstream
`})}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"7.3."})," Check out your fork's local main branch."]}),`
`,e.exports.jsx(r.pre,{children:e.exports.jsx(r.code,{className:"language-sh",children:`$ git checkout main
`})}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"7.4."}),` Merge the changes from upstream/main into your local main branch.
This brings your fork's main branch into sync with the upstream repository, without losing your local changes.`]}),`
`,e.exports.jsx(r.pre,{children:e.exports.jsx(r.code,{className:"language-sh",children:`$ git merge upstream/main
`})}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"Note:"})," The full guide on how to sync a fork can be found ",e.exports.jsx(r.a,{href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]})]})}}export{f as default};
//# sourceMappingURL=01-development-workflow.92a74b59.js.map