"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2365],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),m=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,g=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return a?i.createElement(g,o(o({ref:t},s),{},{components:a})):i.createElement(g,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=a(87462),n=(a(67294),a(3905));a(3126),a(63098),a(1936),a(63152);const r={title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",slug:"build-admin-panel-with-material-ui-and-strapi",authors:"necati",tags:["refine","fundamentals","react","javascript","low-code","internal-tools","crud","material-ui","mui"],image:"/img/blog/2022-07-21-admin-panel-with-materialui-and-strapi/social.png",featured_image:"/img/blog/2022-07-21-admin-panel-with-materialui-and-strapi/featured.png",is_featured:!0,hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",source:"@site/blog/2022-07-21-admin-panel-with-materialui-and-strapi.md",title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",date:"2022-07-21T00:00:00.000Z",formattedDate:"July 21, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"fundamentals",permalink:"/blog/tags/fundamentals"},{label:"react",permalink:"/blog/tags/react"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"low-code",permalink:"/blog/tags/low-code"},{label:"internal-tools",permalink:"/blog/tags/internal-tools"},{label:"crud",permalink:"/blog/tags/crud"},{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"mui",permalink:"/blog/tags/mui"}],readingTime:17.495,hasTruncateMarker:!0,authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",slug:"build-admin-panel-with-material-ui-and-strapi",authors:"necati",tags:["refine","fundamentals","react","javascript","low-code","internal-tools","crud","material-ui","mui"],image:"/img/blog/2022-07-21-admin-panel-with-materialui-and-strapi/social.png",featured_image:"/img/blog/2022-07-21-admin-panel-with-materialui-and-strapi/featured.png",is_featured:!0,hide_table_of_contents:!1},prevItem:{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react"},nextItem:{title:"Become a Refine guest technical writer",permalink:"/blog/refine-writer-program"},relatedPosts:[{title:"Memoization in React - How useCallback Works",permalink:"/blog/react-usecallback-guide",formattedDate:"September 20, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.185,date:"2022-09-20T00:00:00.000Z"},{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:16.75,date:"2022-08-23T00:00:00.000Z"},{title:"MUI Icons in React",permalink:"/blog/mui-icons-in-react",formattedDate:"August 24, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:10.835,date:"2022-08-24T00:00:00.000Z"}],authorPosts:[{title:"Become a Refine guest technical writer",permalink:"/blog/refine-writer-program",formattedDate:"July 20, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.68,date:"2022-07-20T00:00:00.000Z"},{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react",formattedDate:"August 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.46,date:"2022-08-04T00:00:00.000Z"},{title:"An article guideline for refine blog posts",permalink:"/blog/article-guideline",formattedDate:"September 23, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:4.145,date:"2022-09-23T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2}],s={toc:m};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"We will build an ",(0,n.kt)("strong",{parentName:"p"},"admin panel")," that supports ",(0,n.kt)("strong",{parentName:"p"},"CRUD")," operations, has built-in ",(0,n.kt)("strong",{parentName:"p"},"authentication"),", and a ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/mutation-mode/"},"mutation mode"),"  feature using industry-standard best tools. "),(0,n.kt)("p",null,"Industry-standard tools and practices can be hard to reach and time-consuming to maintain on your own. Frameworks can save you time by doing these jobs for you. So, we'll use powerful frameworks including  ",(0,n.kt)("a",{parentName:"p",href:"https://mui.com"},"Material UI"),", ",(0,n.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/"},"refine")," to build a high-quality admin panel."))}p.isMDXComponent=!0},63098:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-e6dbc8fe7ab92ba832924f91bbb24635.gif"},1936:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-record-e0e0396878f2cc93a8cf3f119e808700.gif"},3126:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/list-page-11523fd650356a4cd3a8bbd965deef25.png"},63152:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/undoable-mode-c47ce4349a54c3abfe8c43c4df74f03b.gif"}}]);