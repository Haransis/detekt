"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[9615],{3535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=r(5893),n=r(1151);const i={title:"Ruleauthors Rule Set",sidebar:"home_sidebar",keywords:["rules","ruleauthors"],permalink:"ruleauthors.html",toc:!0,folder:"documentation"},o=void 0,l={id:"rules/ruleauthors",title:"Ruleauthors Rule Set",description:"The rule authors ruleset provides rules that ensures good practices when writing detekt rules.",source:"@site/versioned_docs/version-1.23.4/rules/ruleauthors.md",sourceDirName:"rules",slug:"/rules/ruleauthors",permalink:"/docs/rules/ruleauthors",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.4/rules/ruleauthors.md",tags:[],version:"1.23.4",frontMatter:{title:"Ruleauthors Rule Set",sidebar:"home_sidebar",keywords:["rules","ruleauthors"],permalink:"ruleauthors.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Potential-bugs Rule Set",permalink:"/docs/rules/potential-bugs"},next:{title:"Style Rule Set",permalink:"/docs/rules/style"}},u={},d=[{value:"UseEntityAtName",id:"useentityatname",level:3},{value:"ViolatesTypeResolutionRequirements",id:"violatestyperesolutionrequirements",level:3}];function a(e){const t={code:"code",h3:"h3",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The rule authors ruleset provides rules that ensures good practices when writing detekt rules."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["Note: The ",(0,s.jsx)(t.code,{children:"ruleauthors"})," rule set is not included in the detekt-cli or Gradle plugin."]})}),"\n",(0,s.jsxs)(t.p,{children:["To enable this rule set, add ",(0,s.jsx)(t.code,{children:'detektPlugins "io.gitlab.arturbosch.detekt:detekt-rules-ruleauthors:$version"'}),"\nto your Gradle ",(0,s.jsx)(t.code,{children:"dependencies"})," or reference the ",(0,s.jsx)(t.code,{children:"detekt-rules-ruleauthors"}),"-jar with the ",(0,s.jsx)(t.code,{children:"--plugins"})," option\nin the command line interface."]}),"\n",(0,s.jsx)(t.h3,{id:"useentityatname",children:"UseEntityAtName"}),"\n",(0,s.jsx)(t.p,{children:"If a rule [report]s issues using [Entity.from] with [KtNamedDeclaration.getNameIdentifier],\nthen it can be replaced with [Entity.atName] for more semantic code and better baseline support."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Active by default"}),": Yes - Since v1.22.0"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Debt"}),": 5min"]}),"\n",(0,s.jsx)(t.h3,{id:"violatestyperesolutionrequirements",children:"ViolatesTypeResolutionRequirements"}),"\n",(0,s.jsxs)(t.p,{children:["If a rule uses the property [BaseRule.bindingContext] should be annotated with ",(0,s.jsx)(t.code,{children:"@RequiresTypeResolution"}),".\nAnd if the rule doesn't use that property it shouldn't be annotated with it."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Active by default"}),": Yes - Since v1.22.0"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Requires Type Resolution"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Debt"}),": 5min"]})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>o});var s=r(7294);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);