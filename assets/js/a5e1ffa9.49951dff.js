"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[9277],{4649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(5893),r=t(1151);const i={title:"Run detekt using Maven Ant Task",keywords:["maven","anttask"],sidebar:null,permalink:"mavenanttask.html",folder:"gettingstarted",summary:null,sidebar_position:4},s=void 0,o={id:"gettingstarted/mavenanttask",title:"Run detekt using Maven Ant Task",description:"1. Add following lines to your pom.xml.",source:"@site/docs/gettingstarted/mavenanttask.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/mavenanttask",permalink:"/docs/next/gettingstarted/mavenanttask",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/gettingstarted/mavenanttask.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Run detekt using Maven Ant Task",keywords:["maven","anttask"],sidebar:null,permalink:"mavenanttask.html",folder:"gettingstarted",summary:null,sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Run detekt using Gradle Task",permalink:"/docs/next/gettingstarted/gradletask"},next:{title:"Using Type Resolution",permalink:"/docs/next/gettingstarted/type-resolution"}},d={},l=[];function u(e){const n={code:"code",li:"li",ol:"ol",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Add following lines to your pom.xml."}),"\n",(0,a.jsxs)(n.li,{children:["Run ",(0,a.jsx)(n.code,{children:"mvn verify"})," (when using the verify phase as we are doing here)"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-antrun-plugin</artifactId>\n            <version>1.8</version>\n            <executions>\n                <execution>\n                    \x3c!-- This can be run separately with mvn antrun:run@detekt --\x3e\n                    <id>detekt</id>\n                    <phase>verify</phase>\n                    <configuration>\n                        <target name="detekt">\n                            <java taskname="detekt" dir="${basedir}"\n                                  fork="true" \n                                  failonerror="true"\n                                  classname="io.gitlab.arturbosch.detekt.cli.Main"\n                                  classpathref="maven.plugin.classpath">\n                                <arg value="--input"/>\n                                <arg value="${basedir}/src/main/kotlin"/>\n                                <arg value="--excludes"/>\n                                <arg value="**/special/package/internal/**"/>\n                                <arg value="--report"/>\n                                <arg value="xml:${basedir}/reports/detekt.xml"/>\n                                <arg value="--baseline"/>\n                                <arg value="${basedir}/reports/baseline.xml"/>\n                            </java>\n                        </target>\n                    </configuration>\n                    <goals><goal>run</goal></goals>\n                </execution>\n            </executions>\n            <dependencies>\n                <dependency>\n                    <groupId>io.gitlab.arturbosch.detekt</groupId>\n                    <artifactId>detekt-cli</artifactId>\n                    <version>1.23.3</version>\n                </dependency>\n            </dependencies>\n        </plugin>\n    </plugins>\n</build>\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var a=t(7294);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);