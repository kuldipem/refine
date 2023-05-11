"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||l[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"benchmarks",title:"Benchmarks"},o=void 0,c={unversionedId:"further-readings/benchmarks",id:"further-readings/benchmarks",title:"Benchmarks",description:"Many refine projects involve migrating an existing vanilla React application to the refine framework. By collecting data from various migration projects, we were able to do some benchmarking by comparing codebases.",source:"@site/docs/further-readings/benchmarks.md",sourceDirName:"further-readings",slug:"/further-readings/benchmarks",permalink:"/docs/further-readings/benchmarks",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/further-readings/benchmarks.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1683792955,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{id:"benchmarks",title:"Benchmarks"},sidebar:"someSidebar",previous:{title:"Further Readings",permalink:"/docs/further-readings"},next:{title:"Telemetry",permalink:"/docs/further-readings/telemetry"}},s={},p=[],m={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Many ",(0,a.kt)("strong",{parentName:"p"},"refine")," projects involve migrating an existing vanilla React application to the ",(0,a.kt)("strong",{parentName:"p"},"refine")," framework. By collecting data from various migration projects, we were able to do some benchmarking by comparing codebases. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," makes your codebase significantly smaller, by eliminating redundant code such as ",(0,a.kt)("em",{parentName:"p"},"reducers"),", ",(0,a.kt)("em",{parentName:"p"},"actions"),", and ",(0,a.kt)("em",{parentName:"p"},"unit tests"),".  We've measured a significant reduction in project size in terms of ",(0,a.kt)("em",{parentName:"p"},'"lines of code"')," and ",(0,a.kt)("em",{parentName:"p"},'"number of files"'),":"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/getting-started/benchmark.png",width:"400px",align:"center"})))}l.isMDXComponent=!0}}]);