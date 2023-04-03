"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90513],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(t),h=a,f=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},59586:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}},i=void 0,p={unversionedId:"tutorial/getting-started/chakra-ui/generate-crud-pages",id:"version-3.xx.xx/tutorial/getting-started/chakra-ui/generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/chakra-ui/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/chakra-ui",slug:"/tutorial/getting-started/chakra-ui/generate-crud-pages",permalink:"/docs/3.xx.xx/tutorial/getting-started/chakra-ui/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/chakra-ui/3-generate-crud-pages.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1680522984,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}}},s={},l=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)},c=d("Checklist"),u=d("ChecklistItem"),h={toc:l};function f(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"inferencer"},"Inferencer"),(0,a.kt)("p",null,"Inferencer is a powerful tool in the ",(0,a.kt)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with required forms and tables for CRUD operations."),(0,a.kt)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,a.kt)("p",null,"There are several benefits:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inferencer generates code that is easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to fit your specific needs. This allows you to quickly iterate and get your project up and running faster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By using Inferencer, you can avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,a.kt)("p",null,"Overall, using Inferencer can greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, freeing you up to focus on more complex tasks."),(0,a.kt)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn about ",(0,a.kt)("a",{parentName:"li",href:"/docs/packages/documentation/inferencer"},"how Inferencer works"),"."),(0,a.kt)("li",{parentName:"ul"},"Learn about ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/chakra-ui/components/inferencer/"},"how to use Inferencer with Chakra UI"),".")),(0,a.kt)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ChakraUIInferencer/>")," component, which can be imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/chakra-ui"),". It used to generate CRUD pages based on your API response with Chakra UI components."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<ChakraUIInferencer/>")," component is used by passing to appropriate values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-resources/index"},"Unit 4"),", the resources concept will be explained in detail. For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    ChakraProvider,\n    ErrorComponent,\n    Layout,\n    refineTheme,\n    ReadyPage,\n    notificationProvider,\n} from "@pankod/refine-chakra-ui";\n//highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                notificationProvider={notificationProvider()}\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                Layout={Layout}\n                ReadyPage={ReadyPage}\n                catchAll={<ErrorComponent />}\n                //highlight-start\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                        create: ChakraUIInferencer,\n                        edit: ChakraUIInferencer,\n                    },\n                ]}\n                //highlight-end\n            />\n        </ChakraProvider>\n    );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"At this point, ",(0,a.kt)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource based on the API response."),(0,a.kt)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,a.kt)("p",null,"So far we have added complete CRUD pages by utilizing Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,a.kt)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,a.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,a.kt)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/index"},"Unit 3"),", it will be explained in detail how ",(0,a.kt)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,a.kt)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.'),(0,a.kt)("h3",{id:"list-page"},"List Page"),(0,a.kt)("p",null,"To preview the list page, go back to your browser and open the ",(0,a.kt)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," address."),(0,a.kt)("p",null,"You should see the list page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When you navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,a.kt)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component like ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000/blog-posts"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    ChakraProvider,\n    ErrorComponent,\n    Layout,\n    refineTheme,\n    ReadyPage,\n    notificationProvider,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                notificationProvider={notificationProvider()}\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                Layout={Layout}\n                ReadyPage={ReadyPage}\n                catchAll={<ErrorComponent />}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                        create: ChakraUIInferencer,\n                        edit: ChakraUIInferencer,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)("h3",{id:"create-page"},"Create Page"),(0,a.kt)("p",null,"To preview the create page, go back to your browser and open the ",(0,a.kt)("a",{href:"localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create"),' address or click the "Create" button on the list page.'),(0,a.kt)("p",null,"You should see the create page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    ChakraProvider,\n    ErrorComponent,\n    Layout,\n    refineTheme,\n    ReadyPage,\n    notificationProvider,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                notificationProvider={notificationProvider()}\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                Layout={Layout}\n                ReadyPage={ReadyPage}\n                catchAll={<ErrorComponent />}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                        create: ChakraUIInferencer,\n                        edit: ChakraUIInferencer,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)("h3",{id:"edit-page"},"Edit Page"),(0,a.kt)("p",null,"To preview the edit page, go back to your browser and open the ",(0,a.kt)("a",{href:"localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123"),' address or click the "Edit" button on the record in the list page.'),(0,a.kt)("p",null,"You should see the edit page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,a.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    ChakraProvider,\n    ErrorComponent,\n    Layout,\n    refineTheme,\n    ReadyPage,\n    notificationProvider,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                notificationProvider={notificationProvider()}\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                Layout={Layout}\n                ReadyPage={ReadyPage}\n                catchAll={<ErrorComponent />}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                        create: ChakraUIInferencer,\n                        edit: ChakraUIInferencer,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)("h3",{id:"show-page"},"Show Page"),(0,a.kt)("p",null,"To preview the show page, go back to your browser and open the ",(0,a.kt)("a",{href:"localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123"),' address or click the "Show" button on the record in the list page.'),(0,a.kt)("p",null,"You should see the show page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,a.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    ChakraProvider,\n    ErrorComponent,\n    Layout,\n    refineTheme,\n    ReadyPage,\n    notificationProvider,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                notificationProvider={notificationProvider()}\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                Layout={Layout}\n                ReadyPage={ReadyPage}\n                catchAll={<ErrorComponent />}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                        create: ChakraUIInferencer,\n                        edit: ChakraUIInferencer,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/chakra-ui/index"},"Unit 5"),", you will learn how to create CRUD pages manually using the code generated by Inferencer as a reference."),(0,a.kt)(c,{mdxType:"Checklist"},(0,a.kt)(u,{id:"generated-chakra-crud-pages",mdxType:"ChecklistItem"},"I understood what is Inferencer, how it works and how Inferencer make my work easier."),(0,a.kt)(u,{id:"generated-chakra-crud-pages-2",mdxType:"ChecklistItem"},(0,a.kt)("p",null,"I inspected the auto-generated ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," pages."))))}f.isMDXComponent=!0}}]);