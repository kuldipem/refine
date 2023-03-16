"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(n),m=o,h=l["".concat(p,".").concat(m)]||l[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},66848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={id:"index",title:"Resources",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/index"}},i=void 0,s={unversionedId:"tutorial/understanding-resources/index",id:"tutorial/understanding-resources/index",title:"Resources",description:"In the Unit 2.4, we have defined a resource to create our CRUD pages with the Inferencer component. However, we have not explained how it works. In this unit, we will explain the resources prop of the `` component using the mock components.",source:"@site/docs/tutorial/3-understanding-resources/0-intro.md",sourceDirName:"tutorial/3-understanding-resources",slug:"/tutorial/understanding-resources/index",permalink:"/docs/tutorial/understanding-resources/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/3-understanding-resources/0-intro.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1678975056,formattedLastUpdatedAt:"Mar 16, 2023",sidebarPosition:0,frontMatter:{id:"index",title:"Resources",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/index"}}},p={},d=[{value:"What is resource?",id:"what-is-resource",level:2},{value:"Note on resources and routes",id:"note-on-resources-and-routes",level:3},{value:"Defining Actions for a Resource",id:"defining-actions-for-a-resource",level:2},{value:"Learn More",id:"learn-more",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=u("UIConditional"),l=u("Checklist"),m=u("ChecklistItem"),h={toc:d};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Remember",type:"info"},(0,o.kt)(c,{is:"antd",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages/"},"Unit 2.4"),", we have defined a resource to create our CRUD pages with the Inferencer component. However, we have not explained how it works. In this unit, we will explain the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using the mock components.")),(0,o.kt)(c,{is:"chakra-ui",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/chakra-ui/generate-crud-pages/"},"Unit 2.4"),", we have defined a resource to create our CRUD pages with the Inferencer component. However, we have not explained how it works. In this unit, we will explain the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using the mock components.")),(0,o.kt)(c,{is:"headless",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/headless/generate-crud-pages/"},"Unit 2.4"),", we have defined a resource to create our CRUD pages with the Inferencer component. However, we have not explained how it works. In this unit, we will explain the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using the mock components.")),(0,o.kt)(c,{is:"mantine",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mantine/generate-crud-pages/"},"Unit 2.4"),", we have defined a resource to create our CRUD pages with the Inferencer component. However, we have not explained how it works. In this unit, we will explain the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using the mock components.")),(0,o.kt)(c,{is:"mui",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mui/generate-crud-pages/"},"Unit 2.4"),", we have defined a resource to create our CRUD pages with the Inferencer component. However, we have not explained how it works. In this unit, we will explain the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using the mock components."))),(0,o.kt)("p",null,"Before we start, let's understand what ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component is."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component serves as the starting point for ",(0,o.kt)("strong",{parentName:"p"},"refine"),". It is a wrapper component that offers context to the ",(0,o.kt)("strong",{parentName:"p"},"refine")," components and hooks. It is utilized to configure the top-level settings of the application."),(0,o.kt)("p",null,"To initialize the app, the dataProvider is the only necessary prop that must be provided. Additionally, there are other props such as ",(0,o.kt)("inlineCode",{parentName:"p"},"resources"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider"),", etc."),(0,o.kt)("p",null,"These props enable the configuration of various aspects of the application, such as data management, routing, authentication, localization, layout, and more."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>")," documentation for more information ","\u2192")),(0,o.kt)("h2",{id:"what-is-resource"},"What is resource?"),(0,o.kt)("p",null,"In the context of a CRUD application, a resource typically refers to a data entity that can be created, read, updated, or deleted. For example, a resource could be a user account, a blog post, a product in an online store, or any other piece of data that can be managed by the CRUD app."),(0,o.kt)("p",null,"To add a ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," to our app, we need use ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component. This prop accepts an array of objects. Each object represents a resource. The resource object may contain properties to define the name of the resource, the routes of the actions and additional metadata such as label, icon, audit log settings, and sider menu nesting etc."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The action paths we define in resources helps ",(0,o.kt)("strong",{parentName:"p"},"refine")," to render menu items, breadcrumbs, and handle form redirections, among other things. This means ",(0,o.kt)("strong",{parentName:"p"},"refine")," co-exists with your routes and complements them and doesn't impose any limitation.")),(0,o.kt)("h3",{id:"note-on-resources-and-routes"},"Note on resources and routes"),(0,o.kt)("p",null,"Path definitions in the resource configuration helps ",(0,o.kt)("strong",{parentName:"p"},"refine")," to recognize the available actions for the resource at that particular path. This way, ",(0,o.kt)("strong",{parentName:"p"},"refine")," can automatically identify the resource based on the current path, without requiring users to manually specify the resource prop in their hooks and components."),(0,o.kt)("p",null,"It's important to note that ",(0,o.kt)("strong",{parentName:"p"},"route management will be handled by your preferred framework")," (React Router, Next.js, Remix). This makes it possible to use ",(0,o.kt)("strong",{parentName:"p"},"refine")," with any React (Web, Electron, React Native etc.) application, without any constraints."),(0,o.kt)("p",null,"Thanks to its flexibility, ",(0,o.kt)("strong",{parentName:"p"},"refine")," can be seamlessly integrated into existing React applications without imposing any limitations on users. It can be attached to routes where it's needed without interfering with your routing logic. This makes it possible to use ",(0,o.kt)("strong",{parentName:"p"},"refine")," with enterprise-grade applications that have complex requirements such as nested routes and multi-tenancy."),(0,o.kt)(c,{is:"headless",mdxType:"UIConditional"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                routerProvider={routerBindings}\n                //highlight-start\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                //highlight-end\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        index\n                        element={<NavigateToResource resource="products" />}\n                    />\n\n                    <Route path="products">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n\n                    <Route path="*" element={<div>Error!</div>} />\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n'))),(0,o.kt)(c,{is:"antd",mdxType:"UIConditional"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { ErrorComponent, Layout } from "@refinedev/antd";\nimport "@refinedev/antd/dist/reset.css";\nimport { Refine } from "@refinedev/core";\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                routerProvider={routerBindings}\n                //highlight-start\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                //highlight-end\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        }\n                    >\n                        <Route\n                            index\n                            element={<NavigateToResource resource="products" />}\n                        />\n                        <Route path="products">\n                            <Route index element={<AntdInferencer />} />\n                            <Route\n                                path="show/:id"\n                                element={<AntdInferencer />}\n                            />\n                            <Route\n                                path="edit/:id"\n                                element={<AntdInferencer />}\n                            />\n                            <Route path="create" element={<AntdInferencer />} />\n                        </Route>\n\n                        <Route path="*" element={<ErrorComponent />} />\n                    </Route>\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n'))),(0,o.kt)(c,{is:"chakra-ui",mdxType:"UIConditional"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { ErrorComponent, Layout } from "@refinedev/chakra-ui";\nimport { Refine } from "@refinedev/core";\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                routerProvider={routerBindings}\n                //highlight-start\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                //highlight-end\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        }\n                    >\n                        <Route\n                            index\n                            element={<NavigateToResource resource="products" />}\n                        />\n                        <Route path="products">\n                            <Route index element={<ChakraUIInferencer />} />\n                            <Route\n                                path="show/:id"\n                                element={<ChakraUIInferencer />}\n                            />\n                            <Route\n                                path="edit/:id"\n                                element={<ChakraUIInferencer />}\n                            />\n                            <Route\n                                path="create"\n                                element={<ChakraUIInferencer />}\n                            />\n                        </Route>\n\n                        <Route path="*" element={<ErrorComponent />} />\n                    </Route>\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n'))),(0,o.kt)(c,{is:"mantine",mdxType:"UIConditional"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\nimport { ErrorComponent, Layout } from "@refinedev/mantine";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                routerProvider={routerBindings}\n                //highlight-start\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                //highlight-end\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        }\n                    >\n                        <Route\n                            index\n                            element={<NavigateToResource resource="products" />}\n                        />\n                        <Route path="products">\n                            <Route index element={<MantineInferencer />} />\n                            <Route\n                                path="show/:id"\n                                element={<MantineInferencer />}\n                            />\n                            <Route\n                                path="edit/:id"\n                                element={<MantineInferencer />}\n                            />\n                            <Route\n                                path="create"\n                                element={<MantineInferencer />}\n                            />\n                        </Route>\n\n                        <Route path="*" element={<ErrorComponent />} />\n                    </Route>\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n'))),(0,o.kt)(c,{is:"mui",mdxType:"UIConditional"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\nimport { ErrorComponent, Layout } from "@refinedev/mui";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                routerProvider={routerBindings}\n                //highlight-start\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                //highlight-end\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        }\n                    >\n                        <Route\n                            index\n                            element={<NavigateToResource resource="products" />}\n                        />\n                        <Route path="products">\n                            <Route index element={<MuiInferencer />} />\n                            <Route\n                                path="show/:id"\n                                element={<MuiInferencer />}\n                            />\n                            <Route\n                                path="edit/:id"\n                                element={<MuiInferencer />}\n                            />\n                            <Route path="create" element={<MuiInferencer />} />\n                        </Route>\n\n                        <Route path="*" element={<ErrorComponent />} />\n                    </Route>\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n'))),(0,o.kt)("p",null,"To have more information about router usage, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main/components/routes"},"React Router Documentation"),"."),(0,o.kt)("h2",{id:"defining-actions-for-a-resource"},"Defining Actions for a Resource"),(0,o.kt)("p",null,"A resource can perform actions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"show"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edit"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clone"),". These actions except ",(0,o.kt)("inlineCode",{parentName:"p"},"delete"),", are defined in the properties of the resource object."),(0,o.kt)("p",null,"The simplest way to define the actions is to provide the path of the page. For example, if we want to define the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," action of the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource, we can do it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    name: "products",\n    list: "/products",\n}\n')),(0,o.kt)("p",null,"Paths can include parameters with a convention similar ",(0,o.kt)("inlineCode",{parentName:"p"},":paramName"),". For example, if we want to define the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," action of the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource, we can do it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    name: "products",\n    show: "/products/show/:id",\n}\n')),(0,o.kt)("p",null,"Additional parameters can also be defined in the path. For example, if we want to define the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," action of the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource, we can do it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    name: "products",\n    edit: "/products/edit/:id/:version",\n}\n')),(0,o.kt)("p",null,"These additional parameters except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," parameter, can be passed to the components or hooks using ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," properties. Also the existing parameters in the URL will be used by default when handling the navigation. So, let's say we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," action for the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource as ",(0,o.kt)("inlineCode",{parentName:"p"},"/:userId/products/create")," and the user is currently on the ",(0,o.kt)("inlineCode",{parentName:"p"},"/:userId/products")," page. When the user clicks on the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," button, the user will be redirected to ",(0,o.kt)("inlineCode",{parentName:"p"},"/:userId/products/create")," page. The ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," parameter will be inferred from the current path unless it is explicitly defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," property."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Features related to routing such as the inference of the resource by the route, the generation of the routes (optional) and etc. require the use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#routerprovider"},"Refer to the documentation for more information ","\u2192")),(0,o.kt)("p",{parentName:"admonition"},"When using the ",(0,o.kt)("strong",{parentName:"p"},"refine")," hooks and components, if you provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," will be inferred from the current route and the inferred resource will be passed as ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," functions, hooks and components by default.")),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("p",null,"Learn more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#resources"},"resources")," in the API reference."),(0,o.kt)(l,{mdxType:"Checklist"},(0,o.kt)(m,{id:"understanding-resource",mdxType:"ChecklistItem"},"I understood what a resource is and how to add a resource to the app.")))}f.isMDXComponent=!0}}]);