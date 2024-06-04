"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[1739],{763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(5893),i=t(1151);const s={title:"Run detekt using Maven Ant Task",keywords:["maven","anttask"],sidebar:null,permalink:"mavenanttask.html",folder:"gettingstarted",summary:null,sidebar_position:4},r=void 0,o={id:"gettingstarted/mavenanttask",title:"Run detekt using Maven Ant Task",description:"1. Add following lines to your pom.xml.",source:"@site/versioned_docs/version-1.23.6/gettingstarted/mavenanttask.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/mavenanttask",permalink:"/docs/gettingstarted/mavenanttask",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.6/gettingstarted/mavenanttask.md",tags:[],version:"1.23.6",sidebarPosition:4,frontMatter:{title:"Run detekt using Maven Ant Task",keywords:["maven","anttask"],sidebar:null,permalink:"mavenanttask.html",folder:"gettingstarted",summary:null,sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Run detekt using Gradle Task",permalink:"/docs/gettingstarted/gradletask"},next:{title:"Using Type Resolution",permalink:"/docs/gettingstarted/type-resolution"}},d={},l=[];function u(e){const n={code:"code",li:"li",ol:"ol",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Add following lines to your pom.xml."}),"\n",(0,a.jsxs)(n.li,{children:["Run ",(0,a.jsx)(n.code,{children:"mvn verify"})," (when using the verify phase as we are doing here)"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-antrun-plugin</artifactId>\n            <version>1.8</version>\n            <executions>\n                <execution>\n                    \x3c!-- This can be run separately with mvn antrun:run@detekt --\x3e\n                    <id>detekt</id>\n                    <phase>verify</phase>\n                    <configuration>\n                        <target name="detekt">\n                            <java taskname="detekt" dir="${basedir}"\n                                  fork="true" \n                                  failonerror="true"\n                                  classname="io.gitlab.arturbosch.detekt.cli.Main"\n                                  classpathref="maven.plugin.classpath">\n                                <arg value="--input"/>\n                                <arg value="${basedir}/src/main/kotlin"/>\n                                <arg value="--excludes"/>\n                                <arg value="**/special/package/internal/**"/>\n                                <arg value="--report"/>\n                                <arg value="xml:${basedir}/reports/detekt.xml"/>\n                                <arg value="--baseline"/>\n                                <arg value="${basedir}/reports/baseline.xml"/>\n                            </java>\n                        </target>\n                    </configuration>\n                    <goals><goal>run</goal></goals>\n                </execution>\n            </executions>\n            <dependencies>\n                <dependency>\n                    <groupId>io.gitlab.arturbosch.detekt</groupId>\n                    <artifactId>detekt-cli</artifactId>\n                    <version>1.23.3</version>\n                </dependency>\n            </dependencies>\n        </plugin>\n    </plugins>\n</build>\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(7294);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);