"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34478],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=o,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(g,n(n({ref:t},p),{},{components:a})):r.createElement(g,n({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var d=2;d<i;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(87462),o=(a(67294),a(3905));const i={title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and refine framework, from start to finish!",slug:"next-js-pwa",authors:"david_omotayo",tags:["nextjs","react","pwa","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/featured.png",is_featured:!0,hide_table_of_contents:!1},n=void 0,l={permalink:"/blog/next-js-pwa",source:"@site/blog/2022-09-11-next-refine-pwa.md",title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and refine framework, from start to finish!",date:"2022-09-11T00:00:00.000Z",formattedDate:"September 11, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"react",permalink:"/blog/tags/react"},{label:"pwa",permalink:"/blog/tags/pwa"},{label:"refine",permalink:"/blog/tags/refine"}],readingTime:18.495,hasTruncateMarker:!0,authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],frontMatter:{title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and refine framework, from start to finish!",slug:"next-js-pwa",authors:"david_omotayo",tags:["nextjs","react","pwa","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/featured.png",is_featured:!0,hide_table_of_contents:!1},prevItem:{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript"},nextItem:{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide"},relatedPosts:[{title:"A Guide on React Lazy Loading",permalink:"/blog/react-lazy-loading",formattedDate:"December 7, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:9.935,date:"2022-12-07T00:00:00.000Z"},{title:"Material UI button in React",permalink:"/blog/mui-button-in-react",formattedDate:"September 5, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.04,date:"2022-09-05T00:00:00.000Z"},{title:"refine vs RedwoodJS",permalink:"/blog/refine-vs-redwood-js",formattedDate:"January 23, 2023",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:26.435,date:"2023-01-23T00:00:00.000Z"}],authorPosts:[{title:"Dynamic Forms with React Hook Form",permalink:"/blog/dynamic-forms-in-react-hook-form",formattedDate:"December 23, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:22.45,date:"2022-12-23T00:00:00.000Z"},{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:23.255,date:"2022-11-17T00:00:00.000Z"},{title:"React Hook Form Validation with Complete Examples",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:17.63,date:"2022-09-27T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Building a complex site requires a one-size-fits-all framework that not only simplifies the complexity but also integrates seamlessly with other build tools on a whim."),(0,o.kt)("p",null,"Over the years, frameworks and libraries such as React have been the go-to packages for building complex and large applications, even in the face of their susceptible nature to tiresome caveats. "),(0,o.kt)("p",null,"Fast forward to today, there are several frameworks and libraries in the picture, and they all promise to do a better job than their predecessors. However, many still don't meet the flexibility mark, except for a handful of them.  "),(0,o.kt)("p",null,"In this article, we'll look at what refine is and demonstrate how to use it to build a ",(0,o.kt)("strong",{parentName:"p"},"Next.js PWA")," storefront application."))}m.isMDXComponent=!0}}]);