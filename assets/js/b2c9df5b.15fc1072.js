"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71615],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>p});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=o.createContext({}),c=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=c(t.components);return o.createElement(u.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),h=c(n),p=a,m=h["".concat(u,".").concat(p)]||h[p]||g[p]||i;return n?o.createElement(m,r(r({ref:e},s),{},{components:n})):o.createElement(m,r({ref:e},s))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25742:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",slug:"nextauth-google-github-authentication-nextjs",authors:"ekekenta_clinton",tags:["nextjs","nextauth","github-authentication","google-authentication","oauth"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",social_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",hide_table_of_contents:!1},r=void 0,l={permalink:"/blog/nextauth-google-github-authentication-nextjs",source:"@site/blog/2022-08-18-auth-with-nextauth.md",title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",date:"2022-08-18T00:00:00.000Z",formattedDate:"August 18, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"nextauth",permalink:"/blog/tags/nextauth"},{label:"github-authentication",permalink:"/blog/tags/github-authentication"},{label:"google-authentication",permalink:"/blog/tags/google-authentication"},{label:"oauth",permalink:"/blog/tags/oauth"}],readingTime:13.75,hasTruncateMarker:!0,authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],frontMatter:{title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",slug:"nextauth-google-github-authentication-nextjs",authors:"ekekenta_clinton",tags:["nextjs","nextauth","github-authentication","google-authentication","oauth"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",social_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",hide_table_of_contents:!1},prevItem:{title:"Temporal API - A new approach to managing Date and Time in JS",permalink:"/blog/temporal-date-api"},nextItem:{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image"},relatedPosts:[{title:"A Guide to useContext and React Context API",permalink:"/blog/usecontext-and-react-context",formattedDate:"October 23, 2022",authors:[{name:"Chibuzor Otuokwu",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"chibuzor_otuokwu"}],readingTime:12.315,date:"2022-10-23T00:00:00.000Z"},{title:"What is Next.js getInitialProps and getServerSideProps?",permalink:"/blog/next-js-getinitialprops-and-getserversideprops",formattedDate:"October 31, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:9.315,date:"2022-10-31T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.685,date:"2022-09-04T00:00:00.000Z"}],authorPosts:[{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui",formattedDate:"September 2, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:10.24,date:"2022-09-02T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2}],s={toc:c};function g(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"We know how exhausting and time-consuming it can be to set up authentication, which includes handling databases, cookies, JWT, sessions, etc., on your own.\nThe goal of this article is for you to learn about an alternative and simple tool (NextAuth), which we will use to easily add Google and GitHub authentication to our application."))}g.isMDXComponent=!0}}]);