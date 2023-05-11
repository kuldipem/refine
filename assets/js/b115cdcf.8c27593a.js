"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20169],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,u=m["".concat(l,".").concat(f)]||m[f]||d[f]||o;return r?t.createElement(u,i(i({ref:n},p),{},{components:r})):t.createElement(u,i({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24681:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=r(87462),a=r(67294),o=r(3905);const i={id:"inferencer",title:"Inferencer"},s=void 0,l={unversionedId:"api-reference/core/components/inferencer",id:"version-3.xx.xx/api-reference/core/components/inferencer",title:"Inferencer",description:"You can automatically generate views for your resources using @pankod/refine-inferencer. Inferencer exports HeadlessListInferencer, HeadlessShowInferencer, HeadlessEditInferencer, HeadlessCreateInferencer and HeadlessInferencer (which combines all in one place) components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/components/inferencer.md",sourceDirName:"api-reference/core/components",slug:"/api-reference/core/components/inferencer",permalink:"/docs/3.xx.xx/api-reference/core/components/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/components/inferencer.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1683792955,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{id:"inferencer",title:"Inferencer"},sidebar:"someSidebar",previous:{title:"<LayoutWrapper>",permalink:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},next:{title:"<Authenticated>",permalink:"/docs/3.xx.xx/api-reference/core/components/auth/authenticated"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"<code>List</code>",id:"list",level:3},{value:"<code>Show</code>",id:"show",level:3},{value:"<code>Create</code>",id:"create",level:3},{value:"<code>Edit</code>",id:"edit",level:3},{value:"Example",id:"example",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},m=d("Tabs"),f=d("TabItem"),u=d("CodeSandboxExample"),h={toc:p};function k(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can automatically generate views for your resources using ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer"),". Inferencer exports ",(0,o.kt)("inlineCode",{parentName:"p"},"HeadlessListInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HeadlessShowInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HeadlessEditInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HeadlessCreateInferencer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HeadlessInferencer")," (which combines all in one place) components."),(0,o.kt)("admonition",{title:"Dependencies",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/headless")," uses ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-react-hook-form"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-table"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-react-table"))," to create views."),(0,o.kt)("p",{parentName:"admonition"},"Make sure you include them in your dependencies.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Ant Design components can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/headless"),". You can directly use the components in ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"Refine")," component or you can use them in your custom components by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop as the resource name."),(0,o.kt)(m,{defaultValue:"resources",values:[{label:(0,o.kt)(a.Fragment,null,"In",(0,o.kt)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,o.kt)(f,{value:"resources",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "samples",\n                    // highlight-start\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                    create: HeadlessInferencer,\n                    edit: HeadlessInferencer,\n                    // highlight-end\n                },\n            ]}\n        />\n    );\n};\n'))),(0,o.kt)(f,{value:"custom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst SampleList = () => {\n    return (\n        // highlight-next-line\n        <HeadlessInferencer resource="samples" action="list" />\n    );\n};\n\nconst SampleShow = () => {\n    return (\n        // highlight-next-line\n        <HeadlessInferencer resource="samples" action="show" id="1" />\n    );\n};\n\nconst SampleCreate = () => {\n    return (\n        // highlight-next-line\n        <HeadlessInferencer resource="samples" action="create" />\n    );\n};\n\nconst SampleEdit = () => {\n    return (\n        // highlight-next-line\n        <HeadlessInferencer resource="samples" action="edit" id="1" />\n    );\n};\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package, please check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/inferencer"},"Docs"))),(0,o.kt)("h2",{id:"views"},"Views"),(0,o.kt)("h3",{id:"list"},(0,o.kt)("inlineCode",{parentName:"h3"},"List")),(0,o.kt)("p",null,"Generates a sample list view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-table"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            resources={[\n                {\n                    name: "samples",\n                    // highlight-next-line\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                    create: HeadlessInferencer,\n                    edit: HeadlessInferencer,\n                    canDelete: true,\n                },\n                {\n                    name: "categories",\n                    // highlight-next-line\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                },\n                {\n                    name: "tags",\n                    // highlight-next-line\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                },\n            ]}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"show"},(0,o.kt)("inlineCode",{parentName:"h3"},"Show")),(0,o.kt)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            resources={[\n                {\n                    name: "samples",\n                    list: HeadlessInferencer,\n                    // highlight-next-line\n                    show: HeadlessInferencer,\n                    create: HeadlessInferencer,\n                    edit: HeadlessInferencer,\n                    canDelete: true,\n                },\n                {\n                    name: "categories",\n                    list: HeadlessInferencer,\n                    // highlight-next-line\n                    show: HeadlessInferencer,\n                },\n                {\n                    name: "tags",\n                    list: HeadlessInferencer,\n                    // highlight-next-line\n                    show: HeadlessInferencer,\n                },\n            ]}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"create"},(0,o.kt)("inlineCode",{parentName:"h3"},"Create")),(0,o.kt)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            resources={[\n                {\n                    name: "samples",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                    // highlight-next-line\n                    create: HeadlessInferencer,\n                    edit: HeadlessInferencer,\n                    canDelete: true,\n                },\n                {\n                    name: "categories",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                },\n                {\n                    name: "tags",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                },\n            ]}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"edit"},(0,o.kt)("inlineCode",{parentName:"h3"},"Edit")),(0,o.kt)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            resources={[\n                {\n                    name: "samples",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                    create: HeadlessInferencer,\n                    // highlight-next-line\n                    edit: HeadlessInferencer,\n                    canDelete: true,\n                },\n                {\n                    name: "categories",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                },\n                {\n                    name: "tags",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                },\n            ]}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,o.kt)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/headless")," components."),(0,o.kt)(u,{path:"inferencer-headless",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);