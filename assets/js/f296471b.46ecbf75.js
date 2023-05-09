"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84643],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},59166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={id:"useParsed",title:"useParsed",sidebar_label:"useParsed \ud83c\udd95"},o=void 0,s={unversionedId:"api-reference/core/hooks/navigation/useParsed",id:"api-reference/core/hooks/navigation/useParsed",title:"useParsed",description:"useParsed is a hook that leverages the parse method of the routerProvider to access the URL and query parameters along with the inferred resource, action and id from the URL.",source:"@site/docs/api-reference/core/hooks/navigation/useParsed.md",sourceDirName:"api-reference/core/hooks/navigation",slug:"/api-reference/core/hooks/navigation/useParsed",permalink:"/docs/api-reference/core/hooks/navigation/useParsed",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/navigation/useParsed.md",tags:[],version:"current",lastUpdatedBy:"\xd6zg\xfcr Ak\xe7a",lastUpdatedAt:1683630067,formattedLastUpdatedAt:"May 9, 2023",frontMatter:{id:"useParsed",title:"useParsed",sidebar_label:"useParsed \ud83c\udd95"},sidebar:"someSidebar",previous:{title:"useGo \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useGo"},next:{title:"useBack \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useBack"}},p={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Return Values",id:"return-values",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>action</code>",id:"action",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>pathname</code>",id:"pathname",level:3},{value:"<code>params.filters</code>",id:"paramsfilters",level:3},{value:"<code>params.sorters</code>",id:"paramssorters",level:3},{value:"<code>params.current</code>",id:"paramscurrent",level:3},{value:"<code>params.pageSize</code>",id:"paramspagesize",level:3},{value:"<code>params</code>",id:"params",level:3},{value:"Type Parameters",id:"type-parameters",level:2}],d={toc:l};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useParsed")," is a hook that leverages the ",(0,n.kt)("inlineCode",{parentName:"p"},"parse")," method of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/router-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"routerProvider"))," to access the URL and query parameters along with the inferred ",(0,n.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"action")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," from the URL."),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useParsed } from "@refinedev/core";\n\nconst MyComponent = () => {\n    const {\n        resource,\n        action,\n        id,\n        pathname,\n        params: {\n            filters,\n            sorters,\n            current,\n            pageSize,\n            ...restParams // Any other parameters are also parsed and available in `params`\n        },\n    } = useParsed();\n\n    /* ... */\n};\n')),(0,n.kt)("h2",{id:"return-values"},"Return Values"),(0,n.kt)("h3",{id:"resource"},(0,n.kt)("inlineCode",{parentName:"h3"},"resource")),(0,n.kt)("p",null,"This is the active resource that is matched by the current route and the action definitions in the ",(0,n.kt)("inlineCode",{parentName:"p"},"resources")," array of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Refine")," component. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no match."),(0,n.kt)("h3",{id:"action"},(0,n.kt)("inlineCode",{parentName:"h3"},"action")),(0,n.kt)("p",null,"This is the active action that is matched by the current route and the action definitions in the ",(0,n.kt)("inlineCode",{parentName:"p"},"resources")," array of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Refine")," component. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no match."),(0,n.kt)("h3",{id:"id"},(0,n.kt)("inlineCode",{parentName:"h3"},"id")),(0,n.kt)("p",null,"This is the main parameter used by the ",(0,n.kt)("strong",{parentName:"p"},"refine")," in API interactions. It will also be available in the ",(0,n.kt)("inlineCode",{parentName:"p"},"params")," object but it is also available as a separate value for convenience. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," parameter in the URL."),(0,n.kt)("h3",{id:"pathname"},(0,n.kt)("inlineCode",{parentName:"h3"},"pathname")),(0,n.kt)("p",null,"This is the current pathname of the URL."),(0,n.kt)("h3",{id:"paramsfilters"},(0,n.kt)("inlineCode",{parentName:"h3"},"params.filters")),(0,n.kt)("p",null,"This is the filters that are parsed from the URL. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"filters")," parameter in the URL. This property is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),"."),(0,n.kt)("h3",{id:"paramssorters"},(0,n.kt)("inlineCode",{parentName:"h3"},"params.sorters")),(0,n.kt)("p",null,"This is the sorters that are parsed from the URL. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"sorters")," parameter in the URL. This property is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),"."),(0,n.kt)("h3",{id:"paramscurrent"},(0,n.kt)("inlineCode",{parentName:"h3"},"params.current")),(0,n.kt)("p",null,"This is the current page that is parsed from the URL. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"current")," parameter in the URL. This property is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),"."),(0,n.kt)("h3",{id:"paramspagesize"},(0,n.kt)("inlineCode",{parentName:"h3"},"params.pageSize")),(0,n.kt)("p",null,"This is the page size that is parsed from the URL. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"pageSize")," parameter in the URL. This property is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),"."),(0,n.kt)("h3",{id:"params"},(0,n.kt)("inlineCode",{parentName:"h3"},"params")),(0,n.kt)("p",null,"This is the object that contains all the parameters that are parsed from the URL. It will be an empty object if there is no parameter in the URL. ",(0,n.kt)("inlineCode",{parentName:"p"},"params")," object contains both the URL parameters and the query parameters."),(0,n.kt)("h2",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Desription"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TParams"),(0,n.kt)("td",{parentName:"tr",align:null},"Query parameters type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))))))}c.isMDXComponent=!0}}]);