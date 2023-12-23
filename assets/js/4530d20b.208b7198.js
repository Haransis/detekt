"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[1521],{3002:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=s(5893),t=s(1151);const l={title:"Empty-blocks Rule Set",sidebar:"home_sidebar",keywords:["rules","empty-blocks"],permalink:"empty-blocks.html",toc:!0,folder:"documentation"},c=void 0,i={id:"rules/empty-blocks",title:"Empty-blocks Rule Set",description:"The empty-blocks ruleset contains rules that will report empty blocks of code",source:"@site/versioned_docs/version-1.23.3/rules/empty-blocks.md",sourceDirName:"rules",slug:"/rules/empty-blocks",permalink:"/docs/1.23.3/rules/empty-blocks",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.3/rules/empty-blocks.md",tags:[],version:"1.23.3",frontMatter:{title:"Empty-blocks Rule Set",sidebar:"home_sidebar",keywords:["rules","empty-blocks"],permalink:"empty-blocks.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Coroutines Rule Set",permalink:"/docs/1.23.3/rules/coroutines"},next:{title:"Exceptions Rule Set",permalink:"/docs/1.23.3/rules/exceptions"}},r={},d=[{value:"EmptyCatchBlock",id:"emptycatchblock",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"EmptyClassBlock",id:"emptyclassblock",level:3},{value:"EmptyDefaultConstructor",id:"emptydefaultconstructor",level:3},{value:"EmptyDoWhileBlock",id:"emptydowhileblock",level:3},{value:"EmptyElseBlock",id:"emptyelseblock",level:3},{value:"EmptyFinallyBlock",id:"emptyfinallyblock",level:3},{value:"EmptyForBlock",id:"emptyforblock",level:3},{value:"EmptyFunctionBlock",id:"emptyfunctionblock",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"EmptyIfBlock",id:"emptyifblock",level:3},{value:"EmptyInitBlock",id:"emptyinitblock",level:3},{value:"EmptyKtFile",id:"emptyktfile",level:3},{value:"EmptySecondaryConstructor",id:"emptysecondaryconstructor",level:3},{value:"EmptyTryBlock",id:"emptytryblock",level:3},{value:"EmptyWhenBlock",id:"emptywhenblock",level:3},{value:"EmptyWhileBlock",id:"emptywhileblock",level:3}];function p(e){const n={code:"code",del:"del",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The empty-blocks ruleset contains rules that will report empty blocks of code\nwhich should be avoided."}),"\n",(0,o.jsx)(n.h3,{id:"emptycatchblock",children:"EmptyCatchBlock"}),"\n",(0,o.jsxs)(n.p,{children:["Reports empty ",(0,o.jsx)(n.code,{children:"catch"})," blocks. Empty catch blocks indicate that an exception is ignored and not handled.\nIn case exceptions are ignored intentionally, this should be made explicit\nby using the specified names in the ",(0,o.jsx)(n.code,{children:"allowedExceptionNameRegex"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"allowedExceptionNameRegex"})," (default: ",(0,o.jsx)(n.code,{children:"'_|(ignore|expected).*'"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"ignores exception types which match this regex"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"emptyclassblock",children:"EmptyClassBlock"}),"\n",(0,o.jsx)(n.p,{children:"Reports empty classes. Empty blocks of code serve no purpose and should be removed."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h3,{id:"emptydefaultconstructor",children:"EmptyDefaultConstructor"}),"\n",(0,o.jsx)(n.p,{children:"Reports empty default constructors. Empty blocks of code serve no purpose and should be removed."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h3,{id:"emptydowhileblock",children:"EmptyDoWhileBlock"}),"\n",(0,o.jsxs)(n.p,{children:["Reports empty ",(0,o.jsx)(n.code,{children:"do"}),"/",(0,o.jsx)(n.code,{children:"while"})," loops. Empty blocks of code serve no purpose and should be removed."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h3,{id:"emptyelseblock",children:"EmptyElseBlock"}),"\n",(0,o.jsxs)(n.p,{children:["Reports empty ",(0,o.jsx)(n.code,{children:"else"})," blocks. Empty blocks of code serve no purpose and should be removed."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h3,{id:"emptyfinallyblock",children:"EmptyFinallyBlock"}),"\n",(0,o.jsxs)(n.p,{children:["Reports empty ",(0,o.jsx)(n.code,{children:"finally"})," blocks. Empty blocks of code serve no purpose and should be removed."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h3,{id:"emptyforblock",children:"EmptyForBlock"}),"\n",(0,o.jsxs)(n.p,{children:["Reports empty ",(0,o.jsx)(n.code,{children:"for"})," loops. Empty blocks of code serve no purpose and should be removed."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h3,{id:"emptyfunctionblock",children:"EmptyFunctionBlock"}),"\n",(0,o.jsxs)(n.p,{children:["Reports empty functions. Empty blocks of code serve no purpose and should be removed.\nThis rule will not report functions with the override modifier that have a comment as their only body contents\n(e.g., a ",(0,o.jsx)(n.code,{children:"// no-op"})," comment in an unused listener function)."]}),"\n",(0,o.jsxs)(n.p,{children:["Set the ",(0,o.jsx)(n.code,{children:"ignoreOverridden"})," parameter to ",(0,o.jsx)(n.code,{children:"true"})," to exclude all functions which are overriding other\nfunctions from the superclass or from an interface (i.e., functions declared with the override modifier)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-1",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.del,{children:(0,o.jsx)(n.code,{children:"ignoreOverriddenFunctions"})})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Deprecated"}),": Use ",(0,o.jsx)(n.code,{children:"ignoreOverridden"})," instead"]}),"\n",(0,o.jsx)(n.p,{children:"Excludes all the overridden functions"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreOverridden"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Excludes all the overridden functions"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"emptyifblock",children:"EmptyIfBlock"}),"\n",(0,o.jsxs)(n.p,{children:["Reports empty ",(0,o.jsx)(n.code,{children:"if"})," blocks. Empty blocks of code serve no purpose and should be removed."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h3,{id:"emptyinitblock",children:"EmptyInitBlock"}),"\n",(0,o.jsxs)(n.p,{children:["Reports empty ",(0,o.jsx)(n.code,{children:"init"})," expressions. Empty blocks of code serve no purpose and should be removed."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h3,{id:"emptyktfile",children:"EmptyKtFile"}),"\n",(0,o.jsx)(n.p,{children:"Reports empty Kotlin (.kt) files. Empty blocks of code serve no purpose and should be removed."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h3,{id:"emptysecondaryconstructor",children:"EmptySecondaryConstructor"}),"\n",(0,o.jsx)(n.p,{children:"Reports empty secondary constructors. Empty blocks of code serve no purpose and should be removed."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h3,{id:"emptytryblock",children:"EmptyTryBlock"}),"\n",(0,o.jsxs)(n.p,{children:["Reports empty ",(0,o.jsx)(n.code,{children:"try"})," blocks. Empty blocks of code serve no purpose and should be removed."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.6.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h3,{id:"emptywhenblock",children:"EmptyWhenBlock"}),"\n",(0,o.jsxs)(n.p,{children:["Reports empty ",(0,o.jsx)(n.code,{children:"when"})," expressions. Empty blocks of code serve no purpose and should be removed."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h3,{id:"emptywhileblock",children:"EmptyWhileBlock"}),"\n",(0,o.jsxs)(n.p,{children:["Reports empty ",(0,o.jsx)(n.code,{children:"while"})," expressions. Empty blocks of code serve no purpose and should be removed."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var o=s(7294);const t={},l=o.createContext(t);function c(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);