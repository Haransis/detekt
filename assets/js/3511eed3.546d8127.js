"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[4487],{4716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(5893),s=n(1151);const i={title:"Howto: make detekt silent",published:!0,summary:"This guide shows how to silence detekt and write a custom report format.",tags:["guides"]},r=void 0,c={permalink:"/blog/2019/08/14/custom-console-reports",editUrl:"https://github.com/detekt/detekt/edit/main/website/blog/2019-08-14-custom-console-reports.md",source:"@site/blog/2019-08-14-custom-console-reports.md",title:"Howto: make detekt silent",description:"detekt's reporting mechanism relies on implementations of ConsoleReport's.",date:"2019-08-14T00:00:00.000Z",tags:[{label:"guides",permalink:"/blog/tags/guides"}],readingTime:1,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Howto: make detekt silent",published:!0,summary:"This guide shows how to silence detekt and write a custom report format.",tags:["guides"]},unlisted:!1,prevItem:{title:"Recipe: diff your detekt config with the default one",permalink:"/blog/2020/09/27/additional-diff-config-task"},nextItem:{title:"Calling it One Zero",permalink:"/blog/2019/08/04/calling-it-one-zero"}},a={authorsImageUrls:[]},l=[];function d(e){const t={a:"a",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["detekt's reporting mechanism relies on implementations of ",(0,o.jsx)(t.a,{href:"https://detekt.dev/kdoc/detekt-api/io.gitlab.arturbosch.detekt.api/-console-report/index.html",children:"ConsoleReport"}),"'s.\nThe cli module and therefore the Gradle plugin implement a bunch of this reports."]}),"\n",(0,o.jsx)(t.p,{children:"A typical detekt report will look like following:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"report",src:n(8291).Z+"",width:"1574",height:"798"})}),"\n",(0,o.jsxs)(t.p,{children:["There are many different parts which might or might not interest you.\nIf one part is not important to you, it can be excluded in the yaml configuration file.\nA ",(0,o.jsx)(t.strong,{children:"silent"})," configuration would exclude all possible processors and reports:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"processors:\n  active: true\n  exclude:\n    - 'DetektProgressListener'\n    - 'FunctionCountProcessor'\n    - 'PropertyCountProcessor'\n    - 'ClassCountProcessor'\n    - 'PackageCountProcessor'\n    - 'KtFileCountProcessor'\n\nconsole-reports:\n  active: true\n  exclude:\n    - 'ProjectStatisticsReport'\n    - 'ComplexityReport'\n    - 'NotificationReport'\n    - 'FindingsReport'\n    - 'BuildFailureReport'\n"})}),"\n",(0,o.jsx)(t.p,{children:"Running with this config won't produce any console messages:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"report",src:n(2403).Z+"",width:"1919",height:"41"})}),"\n",(0,o.jsxs)(t.p,{children:["Just verify that the ",(0,o.jsx)(t.code,{children:"./report.txt"})," is not empty ;)."]}),"\n",(0,o.jsxs)(t.p,{children:["We might find detekt's ",(0,o.jsx)(t.code,{children:"FindingsReport"})," too verbose and just want to print one message line per finding.\nThis can be achieved by implementing a custom ",(0,o.jsx)(t.code,{children:"ConsoleReport"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'class SingleLineFindingsReport : ConsoleReport() {\n\n    override fun render(detektion: Detektion): String? =\n        detektion.findings.values\n            .flatten()\n            .joinToString("\\n") { "${it.id} - ${it.message} - ${it.entity.location.file}" }\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Combined with our silent configuration only messages are printed when findings are actually found:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"report",src:n(1004).Z+"",width:"1916",height:"222"})}),"\n",(0,o.jsxs)(t.p,{children:["See the ",(0,o.jsx)(t.a,{href:"/docs/introduction/extensions",children:"extension"})," documention on how to let detekt know about your custom report."]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1004:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/compact_report-00d1098a4ed023bc29252a07cbdcbecc.png"},2403:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/silent_run-ee41325cf336b082776926e1d187e9e6.png"},8291:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/typical_console_report-dac0a808bc92ff7a4b5c82cbcfba0724.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var o=n(7294);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);