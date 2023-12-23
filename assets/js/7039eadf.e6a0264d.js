"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[1961],{4474:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=n(5893),o=n(1151);const i={id:"suppressors",title:"Suppressors",keywords:["suppressing","issues","smells"],sidebar_position:8},r=void 0,a={id:"introduction/suppressors",title:"Suppressors",description:"The Suppressors are a tool that you can use to customize the reports of detekt. They allow you to (surprise) suppress some issues detected by some rules, and they can be applied to any rule.",source:"@site/docs/introduction/suppressors.md",sourceDirName:"introduction",slug:"/introduction/suppressors",permalink:"/docs/next/introduction/suppressors",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/introduction/suppressors.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"suppressors",title:"Suppressors",keywords:["suppressing","issues","smells"],sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"Code Smell Baseline",permalink:"/docs/next/introduction/baseline"},next:{title:"Extending detekt",permalink:"/docs/next/introduction/extensions"}},d={},u=[{value:"Available <code>Suppressor</code>s",id:"available-suppressors",level:2},{value:"Annotation Suppressor",id:"annotation-suppressor",level:3},{value:"Config tag",id:"config-tag",level:5},{value:"Function Suppressor",id:"function-suppressor",level:3},{value:"Config tag:",id:"config-tag-1",level:5}];function l(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h5:"h5",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Suppressor"}),"s are a tool that you can use to customize the reports of detekt. They allow you to (surprise) suppress some issues detected by some rules, and they can be applied to any rule."]}),"\n",(0,t.jsxs)(s.p,{children:["An example is the ",(0,t.jsx)(s.strong,{children:"annotation"})," suppressor. It works like this. First, you need to configure the tag ",(0,t.jsx)(s.code,{children:"ignoreAnnotated"})," with a list of annotations, you want the suppressor to consider. Example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"UnusedPrivateMember:\n  active: true\n  ignoreAnnotated:\n    - 'Preview'\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Now, if an issue is found under a code that is annotated with ",(0,t.jsx)(s.code,{children:"@Preview"})," that issue will be suppressed. This example is really handy if you use ",(0,t.jsx)(s.a,{href:"/docs/introduction/compose",children:"Jetpack Compose"}),", for example."]}),"\n",(0,t.jsxs)(s.h2,{id:"available-suppressors",children:["Available ",(0,t.jsx)(s.code,{children:"Suppressor"}),"s"]}),"\n",(0,t.jsx)(s.h3,{id:"annotation-suppressor",children:"Annotation Suppressor"}),"\n",(0,t.jsxs)(s.p,{children:["Suppress all the issues that are raised under a code that is annotated with the annotations defined at ",(0,t.jsx)(s.code,{children:"ignoreAnnotated"}),"."]}),"\n",(0,t.jsx)(s.h5,{id:"config-tag",children:"Config tag"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"ignoreAnnotated: List<String>"}),": The annotations can be defined just by its name or with its fully qualified name. If you don't run detekt with type solving the fully qualified name does not work."]}),"\n",(0,t.jsx)(s.h3,{id:"function-suppressor",children:"Function Suppressor"}),"\n",(0,t.jsxs)(s.p,{children:["Suppress any issue raised under a function definition that matches the signatures defined at ",(0,t.jsx)(s.code,{children:"ignoreFunction"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Note"}),": this Suppressor doesn't suppress issues found when you call these functions. It just suppresses the ones in the function ",(0,t.jsx)(s.strong,{children:"definition"}),"."]}),"\n",(0,t.jsx)(s.h5,{id:"config-tag-1",children:"Config tag:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"ignoreFunction: List<String>"}),": The signature of the function. You can ignore all the overloads of a function defining just its name like ",(0,t.jsx)(s.code,{children:"java.time.LocalDate.now"})," or you can specify the parameters to only suppress one: ",(0,t.jsx)(s.code,{children:"java.time.LocalDate(java.time.Clock)"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Note:"})," you need to write all the types with fully qualified names e.g. ",(0,t.jsx)(s.code,{children:"org.example.foo(kotlin.String)"}),". It is important to add ",(0,t.jsx)(s.code,{children:"kotlin.String"}),". Just adding ",(0,t.jsx)(s.code,{children:"String"})," will not work."]})]})}function c(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>r});var t=n(7294);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);