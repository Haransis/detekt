"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[8610],{9703:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(5999),i=n(2244),a=n(5893);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(i.Z,{permalink:n,title:(0,a.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,a.jsx)(i.Z,{permalink:r,title:(0,a.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(3548),i=n(6189),a=n(5893);function r(e){let{items:t,component:n=i.Z}=e;return(0,a.jsx)(a.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,a.jsx)(s.n4,{content:t,children:(0,a.jsx)(n,{children:(0,a.jsx)(t,{})})},t.metadata.permalink)}))})}},5699:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});n(7294);var s=n(512),i=n(5999),a=n(1667),r=n(5281),l=n(8824),o=n(5893);function c(){const{selectMessage:e}=(0,l.c)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function d(e){const t=c();return(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}var g=n(3692),u=n(1059),h=n(9703),p=n(197),m=n(9985),x=n(3230),b=n(7955);function j(e){let{tag:t}=e;const n=d(t);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.d,{title:n,description:t.description}),(0,o.jsx)(p.Z,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:n,sidebar:s,listMetadata:a}=e;const r=d(t);return(0,o.jsxs)(u.Z,{sidebar:s,children:[t.unlisted&&(0,o.jsx)(x.Z,{}),(0,o.jsxs)("header",{className:"margin-bottom--xl",children:[(0,o.jsx)(b.Z,{as:"h1",children:r}),t.description&&(0,o.jsx)("p",{children:t.description}),(0,o.jsx)(g.Z,{href:t.allTagsPath,children:(0,o.jsx)(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,o.jsx)(m.Z,{items:n}),(0,o.jsx)(h.Z,{metadata:a})]})}function Z(e){return(0,o.jsxs)(a.FG,{className:(0,s.Z)(r.k.wrapper.blogPages,r.k.page.blogTagPostListPage),children:[(0,o.jsx)(j,{...e}),(0,o.jsx)(f,{...e})]})}},3230:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var s=n(512),i=n(4061),a=n(5281),r=n(9047),l=n(5893);function o(e){let{className:t}=e;return(0,l.jsx)(r.Z,{type:"caution",title:(0,l.jsx)(i.cI,{}),className:(0,s.Z)(t,a.k.common.unlistedBanner),children:(0,l.jsx)(i.eU,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.T$,{}),(0,l.jsx)(o,{...e})]})}},4061:(e,t,n)=>{n.d(t,{T$:()=>o,cI:()=>r,eU:()=>l,ht:()=>c,xo:()=>d});n(7294);var s=n(5999),i=n(5742),a=n(5893);function r(){return(0,a.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,a.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,a.jsx)(i.Z,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,a.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,a.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);