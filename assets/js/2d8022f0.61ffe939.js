"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[3946],{8206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=t(5893),i=t(1151);const o={id:"baseline",title:"Code Smell Baseline",keywords:["baseline","suppressing","smells"],sidebar_position:7},r=void 0,l={id:"introduction/baseline",title:"Code Smell Baseline",description:"With the cli option --baseline or the detekt-gradle-plugin closure-property baseline you can specify a file which is used to generate a baseline.xml.",source:"@site/versioned_docs/version-1.21.0/introduction/baseline.md",sourceDirName:"introduction",slug:"/introduction/baseline",permalink:"/docs/1.21.0/introduction/baseline",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.21.0/introduction/baseline.md",tags:[],version:"1.21.0",sidebarPosition:7,frontMatter:{id:"baseline",title:"Code Smell Baseline",keywords:["baseline","suppressing","smells"],sidebar_position:7},sidebar:"defaultSidebar",previous:{title:"Suppressing Issues",permalink:"/docs/1.21.0/introduction/suppressing-rules"},next:{title:"Suppressors",permalink:"/docs/1.21.0/introduction/suppressors"}},d={},a=[{value:"Gradle",id:"gradle",level:4},{value:"Groovy DSL",id:"groovy-dsl",level:6},{value:"Kotlin DSL",id:"kotlin-dsl",level:6},{value:"FAQ",id:"faq",level:4}];function c(e){const n={br:"br",code:"code",h4:"h4",h6:"h6",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["With the cli option ",(0,s.jsx)(n.code,{children:"--baseline"})," or the detekt-gradle-plugin closure-property ",(0,s.jsx)(n.code,{children:"baseline"})," you can specify a file which is used to generate a ",(0,s.jsx)(n.code,{children:"baseline.xml"}),".\nIt is a file where ignored code smells are defined."]}),"\n",(0,s.jsxs)(n.p,{children:["The intention of ",(0,s.jsx)(n.code,{children:"CurrentIssues"})," is that only new code smells are printed on further analysis.\nThe ",(0,s.jsx)(n.code,{children:"ManuallySuppressedIssues"})," can be used to write down false positive detections (instead of suppressing them and pollute your code base)."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ID"})," node has the following structure: ",(0,s.jsx)(n.code,{children:"<RuleID>:<Codesmell_Signature>"}),".",(0,s.jsx)(n.br,{}),"\n","When adding a custom issue to the xml file, make sure the ",(0,s.jsx)(n.code,{children:"RuleID"})," should be self-explaining.\nThe ",(0,s.jsx)(n.code,{children:"Codesmell_Signature"})," is not printed to the console but can be retrieved from the ",(0,s.jsx)(n.strong,{children:"txt"})," output file when using\nthe ",(0,s.jsx)(n.code,{children:"--report txt:path/to/report"})," cli flag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<SmellBaseline>\n  <ManuallySuppressedIssues>\n    <ID>CatchRuntimeException:Junk.kt$e: RuntimeException</ID>\n  </ManuallySuppressedIssues>\n  <CurrentIssues>\n    <ID>NestedBlockDepth:Indentation.kt$Indentation$override fun procedure(node: ASTNode)</ID>\n    <ID>TooManyFunctions:LargeClass.kt$io.gitlab.arturbosch.detekt.rules.complexity.LargeClass.kt</ID>\n    <ID>ComplexMethod:DetektExtension.kt$DetektExtension$fun convertToArguments(): MutableList&lt;String&gt;</ID>\n  </CurrentIssues>\n</SmellBaseline>\n"})}),"\n",(0,s.jsx)(n.h4,{id:"gradle",children:"Gradle"}),"\n",(0,s.jsxs)(n.p,{children:["If you are using the gradle-plugin run the ",(0,s.jsx)(n.code,{children:"detektBaseline"})," task to generate yourself a ",(0,s.jsx)(n.code,{children:"baseline.xml"}),".\nThis will create one baseline file per Gradle module.\nAs this might not be the desired behavior for a multi module project, think about implementing\na custom meta baseline task:"]}),"\n",(0,s.jsx)(n.h6,{id:"groovy-dsl",children:"Groovy DSL"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-groovy",children:'subprojects {\n    detekt {\n        // ...\n        baseline = file("${rootProject.projectDir}/config/baseline.xml")\n        // ...\n    }\n}\n\ntask detektProjectBaseline(type: io.gitlab.arturbosch.detekt.DetektCreateBaselineTask) {\n    description = "Overrides current baseline."\n    ignoreFailures.set(true)\n    parallel.set(true)\n    buildUponDefaultConfig.set(true)\n    setSource(files(rootDir))\n    config.setFrom(files("$rootDir/config/detekt/detekt.yml"))\n    baseline.set(file("$rootDir/config/detekt/baseline.xml"))\n    include("**/*.kt")\n    include("**/*.kts")\n    exclude("**/resources/**")\n    exclude("**/build/**")\n}\n'})}),"\n",(0,s.jsx)(n.h6,{id:"kotlin-dsl",children:"Kotlin DSL"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'subprojects {\n    detekt {\n        // ...\n        baseline = file("${rootProject.projectDir}/config/baseline.xml")\n        // ...\n    }\n}\n\nval detektProjectBaseline by tasks.registering(DetektCreateBaselineTask::class) {\n    description = "Overrides current baseline."\n    buildUponDefaultConfig.set(true)\n    ignoreFailures.set(true)\n    parallel.set(true)\n    setSource(files(rootDir))\n    config.setFrom(files("$rootDir/config/detekt/detekt.yml"))\n    baseline.set(file("$rootDir/config/detekt/baseline.xml"))\n    include("**/*.kt")\n    include("**/*.kts")\n    exclude("**/resources/**")\n    exclude("**/build/**")\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(n.p,{children:["Be aware that auto formatting cannot be combined with the ",(0,s.jsx)(n.code,{children:"baseline"}),".\nThe signatures for a ",(0,s.jsx)(n.code,{children:";"})," for example would be too ambiguous."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);