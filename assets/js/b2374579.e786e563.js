"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[1119],{8335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(5893),i=n(1151);const l={title:"Howto: build upon the default yaml config file",published:!0,permalink:"howto-buildupondefaultconfig.html",summary:"Use the new feature to rely on the opinionated default yaml configuration file.",tags:["guides"]},r=void 0,s={permalink:"/blog/2019/03/03/build-upon-the-default-config",editUrl:"https://github.com/detekt/detekt/edit/main/website/blog/2019-03-03-build-upon-the-default-config.md",source:"@site/blog/2019-03-03-build-upon-the-default-config.md",title:"Howto: build upon the default yaml config file",description:"A common use case of detekt users was to build upon the default config file and use a second config file to override",date:"2019-03-03T00:00:00.000Z",tags:[{label:"guides",permalink:"/blog/tags/guides"}],readingTime:.65,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Howto: build upon the default yaml config file",published:!0,permalink:"howto-buildupondefaultconfig.html",summary:"Use the new feature to rely on the opinionated default yaml configuration file.",tags:["guides"]},unlisted:!1,prevItem:{title:"Howto: migrating from the *test-pattern*",permalink:"/blog/2019/06/08/migrating-the-test-pattern"},nextItem:{title:"Howto: configure detekt for gradle root project",permalink:"/blog/2019/03/03/configure-detekt-on-root-project"}},a={authorsImageUrls:[]},d=[];function c(e){const t={br:"br",code:"code",em:"em",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["A common use case of ",(0,o.jsx)(t.em,{children:"detekt"})," users was to build upon the default config file and use a second config file to override\nsome defaults.\nSpeaking in ",(0,o.jsx)(t.em,{children:"Gradle"})," terms, this could look like following:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-gradle",children:'detekt {\n    ...\n    config = files(\n            project.rootDir.resolve("config/default-detekt-config.yml"),\n            project.rootDir.resolve("config/our.yml")\n    )\n    baseline = project.rootDir.resolve("config/baseline.xml")\n    ...\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Starting from RC13, two new commandline flags got introduced:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"--fail-fast"})}),"\n",(0,o.jsxs)(t.li,{children:["and ",(0,o.jsx)(t.code,{children:"--build-upon-default-config"})]}),"\n",(0,o.jsxs)(t.li,{children:["(",(0,o.jsx)(t.code,{children:"buildUponDefaultConfig"})," and ",(0,o.jsx)(t.code,{children:"failFast"})," properties for gradle setup)"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Both options allow us to use the distributed ",(0,o.jsx)(t.code,{children:"default-detekt-config.yml"})," as the backup configuration when\nno rule configuration is found in the specified configuration (",(0,o.jsx)(t.code,{children:"--config"})," or ",(0,o.jsx)(t.code,{children:"config = ..."}),").",(0,o.jsx)(t.br,{}),"\n","This allows us to simplify our detekt setup without copy-pasting a huge config file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-gradle",children:'detekt {\n    ...\n    buildUponDefaultConfig = true\n    config = files(project.rootDir.resolve("config/our.yml"))\n    baseline = project.rootDir.resolve("config/baseline.xml")\n    ...\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var o=n(7294);const i={},l=o.createContext(i);function r(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);