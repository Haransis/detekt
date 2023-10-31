"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[2945],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},639:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=t(3117),o=t(102),r=(t(7294),t(3905)),i=["components"],l={title:"Performance Rule Set",sidebar:"home_sidebar",keywords:["rules","performance"],permalink:"performance.html",toc:!0,folder:"documentation"},s=void 0,p={unversionedId:"rules/performance",id:"version-1.23.1/rules/performance",title:"Performance Rule Set",description:"The performance rule set analyzes code for potential performance problems.",source:"@site/versioned_docs/version-1.23.1/rules/performance.md",sourceDirName:"rules",slug:"/rules/performance",permalink:"/docs/1.23.1/rules/performance",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.1/rules/performance.md",tags:[],version:"1.23.1",frontMatter:{title:"Performance Rule Set",sidebar:"home_sidebar",keywords:["rules","performance"],permalink:"performance.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Naming Rule Set",permalink:"/docs/1.23.1/rules/naming"},next:{title:"Potential-bugs Rule Set",permalink:"/docs/1.23.1/rules/potential-bugs"}},c={},u=[{value:"ArrayPrimitive",id:"arrayprimitive",level:3},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"CouldBeSequence",id:"couldbesequence",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"ForEachOnRange",id:"foreachonrange",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4},{value:"SpreadOperator",id:"spreadoperator",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-3",level:4},{value:"Compliant Code:",id:"compliant-code-3",level:4},{value:"UnnecessaryPartOfBinaryExpression",id:"unnecessarypartofbinaryexpression",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-4",level:4},{value:"Compliant Code:",id:"compliant-code-4",level:4},{value:"UnnecessaryTemporaryInstantiation",id:"unnecessarytemporaryinstantiation",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-5",level:4},{value:"Compliant Code:",id:"compliant-code-5",level:4}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The performance rule set analyzes code for potential performance problems."),(0,r.kt)("h3",{id:"arrayprimitive"},"ArrayPrimitive"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"Array<Primitive>")," leads to implicit boxing and performance hit. Prefer using Kotlin specialized Array\nInstances."),(0,r.kt)("p",null,"As stated in the Kotlin ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/basic-types.html#arrays"},"documentation")," Kotlin has\nspecialized arrays to represent primitive types without boxing overhead, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"IntArray"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteArray")," and so on."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.2.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h4",{id:"noncompliant-code"},"Noncompliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun function(array: Array<Int>) { }\n\nfun returningFunction(): Array<Double> { }\n")),(0,r.kt)("h4",{id:"compliant-code"},"Compliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun function(array: IntArray) { }\n\nfun returningFunction(): DoubleArray { }\n")),(0,r.kt)("h3",{id:"couldbesequence"},"CouldBeSequence"),(0,r.kt)("p",null,"Long chains of collection operations will have a performance penalty due to a new list being created for each call. Consider using sequences instead. Read more about this in the ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/sequences.html"},"documentation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h4",{id:"configuration-options"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"threshold")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),")"),(0,r.kt)("p",{parentName:"li"},"the number of chained collection operations required to trigger rule"))),(0,r.kt)("h4",{id:"noncompliant-code-1"},"Noncompliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"listOf(1, 2, 3, 4).map { it*2 }.filter { it < 4 }.map { it*it }\n")),(0,r.kt)("h4",{id:"compliant-code-1"},"Compliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"listOf(1, 2, 3, 4).asSequence().map { it*2 }.filter { it < 4 }.map { it*it }.toList()\n\nlistOf(1, 2, 3, 4).map { it*2 }\n")),(0,r.kt)("h3",{id:"foreachonrange"},"ForEachOnRange"),(0,r.kt)("p",null,"Using the forEach method on ranges has a heavy performance cost. Prefer using simple for loops."),(0,r.kt)("p",null,"Benchmarks have shown that using forEach on a range can have a huge performance cost in comparison to\nsimple for loops. Hence, in most contexts, a simple for loop should be used instead.\nSee more details here: ",(0,r.kt)("a",{parentName:"p",href:"https://sites.google.com/a/athaydes.com/renato-athaydes/posts/kotlinshiddencosts-benchmarks"},"https://sites.google.com/a/athaydes.com/renato-athaydes/posts/kotlinshiddencosts-benchmarks"),"\nTo solve this CodeSmell, the forEach usage should be replaced by a for loop."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h4",{id:"noncompliant-code-2"},"Noncompliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"(1..10).forEach {\n    println(it)\n}\n(1 until 10).forEach {\n    println(it)\n}\n(10 downTo 1).forEach {\n    println(it)\n}\n")),(0,r.kt)("h4",{id:"compliant-code-2"},"Compliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"for (i in 1..10) {\n    println(i)\n}\n")),(0,r.kt)("h3",{id:"spreadoperator"},"SpreadOperator"),(0,r.kt)("p",null,"In most cases using a spread operator causes a full copy of the array to be created before calling a method.\nThis has a very high performance penalty. Benchmarks showing this performance penalty can be seen here:\n",(0,r.kt)("a",{parentName:"p",href:"https://sites.google.com/a/athaydes.com/renato-athaydes/posts/kotlinshiddencosts-benchmarks"},"https://sites.google.com/a/athaydes.com/renato-athaydes/posts/kotlinshiddencosts-benchmarks")),(0,r.kt)("p",null,"The Kotlin compiler since v1.1.60 has an optimization that skips the array copy when an array constructor\nfunction is used to create the arguments that are passed to the vararg parameter. When type resolution is enabled in\ndetekt this case will not be flagged by the rule since it doesn't suffer the performance penalty of an array copy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,r.kt)("h4",{id:"noncompliant-code-3"},"Noncompliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val strs = arrayOf("value one", "value two")\nval foo = bar(*strs)\n\nfun bar(vararg strs: String) {\n    strs.forEach { println(it) }\n}\n')),(0,r.kt)("h4",{id:"compliant-code-3"},"Compliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// array copy skipped in this case since Kotlin 1.1.60\nval foo = bar(*arrayOf("value one", "value two"))\n\n// array not passed so no array copy is required\nval foo2 = bar("value one", "value two")\n\nfun bar(vararg strs: String) {\n    strs.forEach { println(it) }\n}\n')),(0,r.kt)("h3",{id:"unnecessarypartofbinaryexpression"},"UnnecessaryPartOfBinaryExpression"),(0,r.kt)("p",null,"Unnecessary binary expression add complexity to the code and accomplish nothing. They should be removed.\nThe rule works with all binary expression included if and when condition. The rule also works with all predicates.\nThe rule verify binary expression only in case when the expression use only one type of the following\noperators || or &&."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h4",{id:"noncompliant-code-4"},"Noncompliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val foo = true\nval bar = true\n\nif (foo || bar || foo) {\n}\n")),(0,r.kt)("h4",{id:"compliant-code-4"},"Compliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val foo = true\nif (foo) {\n}\n")),(0,r.kt)("h3",{id:"unnecessarytemporaryinstantiation"},"UnnecessaryTemporaryInstantiation"),(0,r.kt)("p",null,"Avoid temporary objects when converting primitive types to String. This has a performance penalty when compared\nto using primitive types directly.\nTo solve this issue, remove the wrapping type."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h4",{id:"noncompliant-code-5"},"Noncompliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val i = Integer(1).toString() // temporary Integer instantiation just for the conversion\n")),(0,r.kt)("h4",{id:"compliant-code-5"},"Compliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val i = Integer.toString(1)\n")))}m.isMDXComponent=!0}}]);