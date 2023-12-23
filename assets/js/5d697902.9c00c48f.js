"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[1499],{1527:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var i=o(5893),t=o(1151);const c={title:"Exceptions Rule Set",sidebar:"home_sidebar",keywords:["rules","exceptions"],permalink:"exceptions.html",toc:!0,folder:"documentation"},l=void 0,s={id:"rules/exceptions",title:"Exceptions Rule Set",description:"Rules in this rule set report issues related to how code throws and handles Exceptions.",source:"@site/versioned_docs/version-1.21.0/rules/exceptions.md",sourceDirName:"rules",slug:"/rules/exceptions",permalink:"/docs/1.21.0/rules/exceptions",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.21.0/rules/exceptions.md",tags:[],version:"1.21.0",frontMatter:{title:"Exceptions Rule Set",sidebar:"home_sidebar",keywords:["rules","exceptions"],permalink:"exceptions.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Empty-blocks Rule Set",permalink:"/docs/1.21.0/rules/empty-blocks"},next:{title:"Formatting Rule Set",permalink:"/docs/1.21.0/rules/formatting"}},r={},a=[{value:"ExceptionRaisedInUnexpectedLocation",id:"exceptionraisedinunexpectedlocation",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"InstanceOfCheckForException",id:"instanceofcheckforexception",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"NotImplementedDeclaration",id:"notimplementeddeclaration",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"ObjectExtendsThrowable",id:"objectextendsthrowable",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-3",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"PrintStackTrace",id:"printstacktrace",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-4",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4},{value:"RethrowCaughtException",id:"rethrowcaughtexception",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-5",level:4},{value:"Compliant Code:",id:"compliant-code-3",level:4},{value:"ReturnFromFinally",id:"returnfromfinally",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-6",level:4},{value:"SwallowedException",id:"swallowedexception",level:3},{value:"Configuration options:",id:"configuration-options-2",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-7",level:4},{value:"Compliant Code:",id:"compliant-code-4",level:4},{value:"ThrowingExceptionFromFinally",id:"throwingexceptionfromfinally",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-8",level:4},{value:"ThrowingExceptionInMain",id:"throwingexceptioninmain",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-9",level:4},{value:"ThrowingExceptionsWithoutMessageOrCause",id:"throwingexceptionswithoutmessageorcause",level:3},{value:"Configuration options:",id:"configuration-options-3",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-10",level:4},{value:"Compliant Code:",id:"compliant-code-5",level:4},{value:"ThrowingNewInstanceOfSameException",id:"throwingnewinstanceofsameexception",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-11",level:4},{value:"Compliant Code:",id:"compliant-code-6",level:4},{value:"TooGenericExceptionCaught",id:"toogenericexceptioncaught",level:3},{value:"Configuration options:",id:"configuration-options-4",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-12",level:4},{value:"Compliant Code:",id:"compliant-code-7",level:4},{value:"TooGenericExceptionThrown",id:"toogenericexceptionthrown",level:3},{value:"Configuration options:",id:"configuration-options-5",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-13",level:4},{value:"Compliant Code:",id:"compliant-code-8",level:4}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Rules in this rule set report issues related to how code throws and handles Exceptions."}),"\n",(0,i.jsx)(n.h3,{id:"exceptionraisedinunexpectedlocation",children:"ExceptionRaisedInUnexpectedLocation"}),"\n",(0,i.jsxs)(n.p,{children:["This rule reports functions which should never throw an exception. If a function exists that does throw\nan exception it will be reported. By default, this rule checks ",(0,i.jsx)(n.code,{children:"toString"}),", ",(0,i.jsx)(n.code,{children:"hashCode"}),", ",(0,i.jsx)(n.code,{children:"equals"})," and\n",(0,i.jsx)(n.code,{children:"finalize"}),". This rule is configurable via the ",(0,i.jsx)(n.code,{children:"methodNames"})," configuration to change the list of functions which\nshould not throw any exceptions."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.16.0"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,i.jsx)(n.h4,{id:"configuration-options",children:"Configuration options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"methodNames"})," (default: ",(0,i.jsx)(n.code,{children:"['equals', 'finalize', 'hashCode', 'toString']"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"methods which should not throw exceptions"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"class Foo {\n\n    override fun toString(): String {\n        throw IllegalStateException() // exception should not be thrown here\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"instanceofcheckforexception",children:"InstanceOfCheckForException"}),"\n",(0,i.jsxs)(n.p,{children:["This rule reports ",(0,i.jsx)(n.code,{children:"catch"})," blocks which check for the type of exception via ",(0,i.jsx)(n.code,{children:"is"})," checks or casts.\nInstead of catching generic exception types and then checking for specific exception types the code should\nuse multiple catch blocks. These catch blocks should then catch the specific exceptions."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.21.0"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-1",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    try {\n        // ... do some I/O\n    } catch(e: IOException) {\n        if (e is MyException || (e as MyException) != null) { }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    try {\n        // ... do some I/O\n    } catch(e: MyException) {\n    } catch(e: IOException) {\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"notimplementeddeclaration",children:"NotImplementedDeclaration"}),"\n",(0,i.jsxs)(n.p,{children:["This rule reports all exceptions of the type ",(0,i.jsx)(n.code,{children:"NotImplementedError"})," that are thrown. It also reports all ",(0,i.jsx)(n.code,{children:"TODO(..)"}),"\nfunctions.\nThese indicate that functionality is still under development and will not work properly. Both of these should only\nserve as temporary declarations and should not be put into production environments."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-2",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'fun foo() {\n    throw NotImplementedError()\n}\n\nfun todo() {\n    TODO("")\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"objectextendsthrowable",children:"ObjectExtendsThrowable"}),"\n",(0,i.jsxs)(n.p,{children:["This rule reports all ",(0,i.jsx)(n.code,{children:"objects"})," including ",(0,i.jsx)(n.code,{children:"companion objects"})," that extend any type of\n",(0,i.jsx)(n.code,{children:"Throwable"}),". Throwable instances are not intended for reuse as they are stateful and contain\nmutable information about a specific exception or error. Hence, global singleton ",(0,i.jsx)(n.code,{children:"Throwables"}),"\nshould be avoided."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://kotlinlang.org/docs/object-declarations.html#object-declarations-overview",children:"https://kotlinlang.org/docs/object-declarations.html#object-declarations-overview"}),"\nSee ",(0,i.jsx)(n.a,{href:"https://kotlinlang.org/docs/object-declarations.html#companion-objects",children:"https://kotlinlang.org/docs/object-declarations.html#companion-objects"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 10min"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-3",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"object InvalidCredentialsException : Throwable()\n\nobject BanException : Exception()\n\nobject AuthException : RuntimeException()\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-1",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"class InvalidCredentialsException : Throwable()\n\nclass BanException : Exception()\n\nclass AuthException : RuntimeException()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"printstacktrace",children:"PrintStackTrace"}),"\n",(0,i.jsx)(n.p,{children:"This rule reports code that tries to print the stacktrace of an exception. Instead of simply printing a stacktrace\na better logging solution should be used."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.16.0"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-4",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    Thread.dumpStack()\n}\n\nfun bar() {\n    try {\n        // ...\n    } catch (e: IOException) {\n        e.printStackTrace()\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-2",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val LOGGER = Logger.getLogger()\n\nfun bar() {\n    try {\n        // ...\n    } catch (e: IOException) {\n        LOGGER.info(e)\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"rethrowcaughtexception",children:"RethrowCaughtException"}),"\n",(0,i.jsx)(n.p,{children:"This rule reports all exceptions that are caught and then later re-thrown without modification.\nIt ignores cases:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"When caught exceptions that are rethrown if there is work done before that."}),"\n",(0,i.jsx)(n.li,{children:"When there are more than one catch in try block and at least one of them has some work."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.16.0"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-5",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    try {\n        // ...\n    } catch (e: IOException) {\n        throw e\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-3",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    try {\n        // ...\n    } catch (e: IOException) {\n        throw MyException(e)\n    }\n    try {\n        // ...\n    } catch (e: IOException) {\n        print(e)\n        throw e\n    }\n    try {\n        // ...\n    } catch (e: IOException) {\n        print(e.message)\n        throw e\n    }\n\n    try {\n        // ...\n    } catch (e: IOException) {\n        throw e\n    } catch (e: Exception) {\n        print(e.message)\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"returnfromfinally",children:"ReturnFromFinally"}),"\n",(0,i.jsxs)(n.p,{children:["Reports all ",(0,i.jsx)(n.code,{children:"return"})," statements in ",(0,i.jsx)(n.code,{children:"finally"})," blocks.\nUsing ",(0,i.jsx)(n.code,{children:"return"})," statements in ",(0,i.jsx)(n.code,{children:"finally"})," blocks can discard and hide exceptions that are thrown in the ",(0,i.jsx)(n.code,{children:"try"})," block.\nFurthermore, this rule reports values from ",(0,i.jsx)(n.code,{children:"finally"})," blocks, if the corresponding ",(0,i.jsx)(n.code,{children:"try"})," is used as an expression."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.16.0"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,i.jsx)(n.h4,{id:"configuration-options-1",children:"Configuration options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ignoreLabeled"})," (default: ",(0,i.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"ignores labeled return statements"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-6",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'fun foo() {\n    try {\n        throw MyException()\n    } finally {\n        return // prevents MyException from being propagated\n    }\n}\n\nval a: String = try { "s" } catch (e: Exception) { "e" } finally { "f" }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"swallowedexception",children:"SwallowedException"}),"\n",(0,i.jsxs)(n.p,{children:["Exceptions should not be swallowed. This rule reports all instances where exceptions are ",(0,i.jsx)(n.code,{children:"caught"})," and not correctly\npassed (e.g. as a cause) into a newly thrown exception."]}),"\n",(0,i.jsxs)(n.p,{children:["The exception types configured in ",(0,i.jsx)(n.code,{children:"ignoredExceptionTypes"})," indicate nonexceptional outcomes.\nThese by default configured exception types are part of Java.\nTherefore, Kotlin developers have to handle them by using the catch clause.\nFor that reason, this rule ignores that these configured exception types are caught."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.16.0"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,i.jsx)(n.h4,{id:"configuration-options-2",children:"Configuration options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ignoredExceptionTypes"})," (default: ",(0,i.jsx)(n.code,{children:"['InterruptedException', 'MalformedURLException', 'NumberFormatException', 'ParseException']"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"exception types which should be ignored (both in the catch clause and body)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"allowedExceptionNameRegex"})," (default: ",(0,i.jsx)(n.code,{children:"'_|(ignore|expected).*'"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"ignores too generic exception types which match this regex"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-7",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    try {\n        // ...\n    } catch(e: IOException) {\n        throw MyException(e.message) // e is swallowed\n    }\n    try {\n        // ...\n    } catch(e: IOException) {\n        throw MyException() // e is swallowed\n    }\n    try {\n        // ...\n    } catch(e: IOException) {\n        bar() // exception is unused\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-4",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    try {\n        // ...\n    } catch(e: IOException) {\n        throw MyException(e)\n    }\n    try {\n        // ...\n    } catch(e: IOException) {\n        println(e) // logging is ok here\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"throwingexceptionfromfinally",children:"ThrowingExceptionFromFinally"}),"\n",(0,i.jsxs)(n.p,{children:["This rule reports all cases where exceptions are thrown from a ",(0,i.jsx)(n.code,{children:"finally"})," block. Throwing exceptions from a ",(0,i.jsx)(n.code,{children:"finally"}),"\nblock should be avoided as it can lead to confusion and discarded exceptions."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.16.0"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-8",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    try {\n        // ...\n    } finally {\n        throw IOException()\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"throwingexceptioninmain",children:"ThrowingExceptionInMain"}),"\n",(0,i.jsxs)(n.p,{children:["This rule reports all exceptions that are thrown in a ",(0,i.jsx)(n.code,{children:"main"}),' method.\nAn exception should only be thrown if it can be handled by a "higher" function.']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-9",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun main(args: Array<String>) {\n    // ...\n    throw IOException() // exception should not be thrown here\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"throwingexceptionswithoutmessageorcause",children:"ThrowingExceptionsWithoutMessageOrCause"}),"\n",(0,i.jsx)(n.p,{children:"This rule reports all exceptions which are thrown without arguments or further description.\nExceptions should always call one of the constructor overloads to provide a message or a cause.\nExceptions should be meaningful and contain as much detail about the error case as possible. This will help to track\ndown an underlying issue in a better way."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.16.0"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,i.jsx)(n.h4,{id:"configuration-options-3",children:"Configuration options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"exceptions"})," (default: ",(0,i.jsx)(n.code,{children:"['ArrayIndexOutOfBoundsException', 'Exception', 'IllegalArgumentException', 'IllegalMonitorStateException', 'IllegalStateException', 'IndexOutOfBoundsException', 'NullPointerException', 'RuntimeException', 'Throwable']"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"exceptions which should not be thrown without message or cause"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-10",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo(bar: Int) {\n    if (bar < 1) {\n        throw IllegalArgumentException()\n    }\n    // ...\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-5",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'fun foo(bar: Int) {\n    if (bar < 1) {\n        throw IllegalArgumentException("bar must be greater than zero")\n    }\n    // ...\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"throwingnewinstanceofsameexception",children:"ThrowingNewInstanceOfSameException"}),"\n",(0,i.jsx)(n.p,{children:"Exceptions should not be wrapped inside the same exception type and then rethrown. Prefer wrapping exceptions in more\nmeaningful exception types."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.16.0"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-11",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    try {\n        // ...\n    } catch (e: IllegalStateException) {\n        throw IllegalStateException(e) // rethrows the same exception\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-6",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    try {\n        // ...\n    } catch (e: IllegalStateException) {\n        throw MyException(e)\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"toogenericexceptioncaught",children:"TooGenericExceptionCaught"}),"\n",(0,i.jsxs)(n.p,{children:["This rule reports ",(0,i.jsx)(n.code,{children:"catch"})," blocks for exceptions that have a type that is too generic.\nIt should be preferred to catch specific exceptions to the case that is currently handled. If the scope of the caught\nexception is too broad it can lead to unintended exceptions being caught."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,i.jsx)(n.h4,{id:"configuration-options-4",children:"Configuration options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"exceptionNames"})," (default: ",(0,i.jsx)(n.code,{children:"['ArrayIndexOutOfBoundsException', 'Error', 'Exception', 'IllegalMonitorStateException', 'IndexOutOfBoundsException', 'NullPointerException', 'RuntimeException', 'Throwable']"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"exceptions which are too generic and should not be caught"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"allowedExceptionNameRegex"})," (default: ",(0,i.jsx)(n.code,{children:"'_|(ignore|expected).*'"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"ignores too generic exception types which match this regex"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-12",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    try {\n        // ... do some I/O\n    } catch(e: Exception) { } // too generic exception caught here\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-7",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    try {\n        // ... do some I/O\n    } catch(e: IOException) { }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"toogenericexceptionthrown",children:"TooGenericExceptionThrown"}),"\n",(0,i.jsx)(n.p,{children:"This rule reports thrown exceptions that have a type that is too generic. It should be preferred to throw specific\nexceptions to the case that has currently occurred."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,i.jsx)(n.h4,{id:"configuration-options-5",children:"Configuration options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"exceptionNames"})," (default: ",(0,i.jsx)(n.code,{children:"['Error', 'Exception', 'RuntimeException', 'Throwable']"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"exceptions which are too generic and should not be thrown"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-13",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo(bar: Int) {\n    if (bar < 1) {\n        throw Exception() // too generic exception thrown here\n    }\n    // ...\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-8",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'fun foo(bar: Int) {\n    if (bar < 1) {\n        throw IllegalArgumentException("bar must be greater than zero")\n    }\n    // ...\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>l});var i=o(7294);const t={},c=i.createContext(t);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);