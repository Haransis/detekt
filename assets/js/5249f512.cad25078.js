"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[5962],{2469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=n(5893),r=n(1151);const s={title:"Howto: configure detekt for gradle root project",published:!0,permalink:"howto-buildupondefaultconfig.html",summary:"Configure a new task based on _detekt_ to analyze the whole project on one run.",tags:["guides"]},l=void 0,i={permalink:"/blog/2019/03/03/configure-detekt-on-root-project",editUrl:"https://github.com/detekt/detekt/edit/main/website/blog/2019-03-03-configure-detekt-on-root-project.md",source:"@site/blog/2019-03-03-configure-detekt-on-root-project.md",title:"Howto: configure detekt for gradle root project",description:"When configuring detekt for your Gradle based project, you basically have two options:",date:"2019-03-03T00:00:00.000Z",tags:[{inline:!0,label:"guides",permalink:"/blog/tags/guides"}],readingTime:1.135,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Howto: configure detekt for gradle root project",published:!0,permalink:"howto-buildupondefaultconfig.html",summary:"Configure a new task based on _detekt_ to analyze the whole project on one run.",tags:["guides"]},unlisted:!1,prevItem:{title:"Howto: build upon the default yaml config file",permalink:"/blog/2019/03/03/build-upon-the-default-config"},nextItem:{title:"Website Online",permalink:"/blog/2018/02/11/website-online"}},a={authorsImageUrls:[]},d=[];function c(e){const t={a:"a",code:"code",em:"em",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["When configuring ",(0,o.jsx)(t.em,{children:"detekt"})," for your ",(0,o.jsx)(t.em,{children:"Gradle"})," based project, you basically have two options:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"for each sub module a new gradle task should be created"}),"\n",(0,o.jsxs)(t.li,{children:["or one ",(0,o.jsx)(t.strong,{children:"uber"}),"-task analyzes your whole project"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["For the first option, please see how ",(0,o.jsx)(t.a,{href:"https://github.com/detekt/detekt",children:"detekt"})," itself creates a task for each module:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-gradle",children:'subprojecs {\n...\n    detekt {\n        debug = true\n        toolVersion = usedDetektVersion\n        buildUponDefaultConfig = true\n        config = files(project.rootDir.resolve("reports/failfast.yml"))\n        baseline = project.rootDir.resolve("reports/baseline.xml")\n    \n        reports {\n            xml.enabled = true\n            html.enabled = true\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Sometimes it makes sense to add an additional ",(0,o.jsx)(t.em,{children:"detekt"})," task which runs over the whole project and produces one big report.\nSuch a setup could look like the following in its simplest form:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-gradle",children:'plugins {\n    id "io.gitlab.arturbosch.detekt" version "1.0.0-RC14"\n}\n\nrepositories {\n    jcenter()\n}\n\ndetekt {\n    source = files(rootProject.rootDir)\n    buildUponDefaultConfig = true\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Make sure to specify the ",(0,o.jsx)(t.code,{children:"input"})," parameter or no sources are found and ",(0,o.jsx)(t.em,{children:"detekt"})," won't run!"]}),"\n",(0,o.jsxs)(t.p,{children:["If you need more fine grained ",(0,o.jsx)(t.em,{children:"detekt"})," tasks, you could register more tasks using the ",(0,o.jsx)(t.em,{children:"Detekt"})," task as the base task.\nUsing the ",(0,o.jsx)(t.em,{children:"Kotlin-Dsl"})," it could look like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-gradle",children:'val detektAll by tasks.registering(Detekt::class) {\n    description = "Runs over whole code base without the starting overhead for each module."\n    parallel = true\n    buildUponDefaultConfig = true\n    setSource(files(projectDir))\n    config = files(project.rootDir.resolve("reports/failfast.yml"))\n    include("**/*.kt")\n    include("**/*.kts")\n    exclude("resources/")\n    exclude("build/")\n    baseline.set(project.rootDir.resolve("reports/baseline.xml"))\n    reports {\n        xml.enabled = false\n        html.enabled = false\n    }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var o=n(7294);const r={},s=o.createContext(r);function l(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);