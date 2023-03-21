"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"add-show-page",title:"3. Adding Show Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-create-page"}},i=void 0,d={unversionedId:"tutorial/adding-crud-pages/antd/add-show-page",id:"tutorial/adding-crud-pages/antd/add-show-page",title:"3. Adding Show Page",description:"Show page is the page where you can see the record. In this tutorial, we will create the show page for the products resource.",source:"@site/docs/tutorial/4-adding-crud-pages/antd/add-show-page.md",sourceDirName:"tutorial/4-adding-crud-pages/antd",slug:"/tutorial/adding-crud-pages/antd/add-show-page",permalink:"/docs/tutorial/adding-crud-pages/antd/add-show-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/antd/add-show-page.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1679396820,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{id:"add-show-page",title:"3. Adding Show Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-create-page"}}},p={},s=[{value:"Creating Show Page",id:"creating-show-page",level:2},{value:"Understanding the Show Component",id:"understanding-the-show-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Show Page to the App",id:"adding-the-show-page-to-the-app",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=l("Checklist"),u=l("ChecklistItem"),h={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Show page is the page where you can see the record. In this tutorial, we will create the show page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource."),(0,o.kt)("h2",{id:"creating-show-page"},"Creating Show Page"),(0,o.kt)("p",null,"First, let's create our file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/products")," folder. We will name it ",(0,o.kt)("inlineCode",{parentName:"p"},"show.tsx"),". Then, we will copy the show page code generated by Inferencer and paste it into the file."),(0,o.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("a",{href:"http://localhost:3000/products",rel:"noopener noreferrer nofollow"},"localhost:3000/products")," in your browser.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'To open the show page, click any "Show" button in the "Actions" column of the table.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'On the show page, click on the "Show Code" button in the bottom right corner of the page.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'You can see the show page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,o.kt)("inlineCode",{parentName:"p"},"show.tsx")," file."))),(0,o.kt)("p",null,"You can see the show page code generated by Inferencer below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products/show/123"},'setInitialRoutes(["/products/show/123"]);\n\nimport { ErrorComponent, Layout, notificationProvider } from "@refinedev/antd";\nimport { Refine } from "@refinedev/core";\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport "@refinedev/antd/dist/reset.css";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                notificationProvider={notificationProvider}\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        }\n                    >\n                        <Route\n                            index\n                            element={<NavigateToResource resource="products" />}\n                        />\n\n                        {/* highlight-start */}\n                        <Route path="products">\n                            <Route index element={<AntdInferencer />} />\n                            <Route\n                                path="show/:id"\n                                element={<AntdInferencer />}\n                            />\n                            <Route\n                                path="edit/:id"\n                                element={<AntdInferencer />}\n                            />\n                            <Route path="create" element={<AntdInferencer />} />\n                        </Route>\n                        {/* highlight-end */}\n\n                        <Route path="*" element={<ErrorComponent />} />\n                    </Route>\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("p",null,"Instead of coding the show page component from scratch, Inferencer created the required code base on API response, so that we can customize."),(0,o.kt)("h2",{id:"understanding-the-show-component"},"Understanding the Show Component"),(0,o.kt)("p",null,"We will go through the show page components and hooks one by one."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<Show/>")," is a ",(0,o.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, list button, etc."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/basic-views/show/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<Show/>")," documentation for more information ","\u2192"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"useShow")," is a ",(0,o.kt)("strong",{parentName:"p"},"refine")," hook that is used to get single record data by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," in the URL. It sends the parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"getOne")," function and returns the result."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/show/useShow/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"useShow")," documentation for more information ","\u2192")))),(0,o.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,o.kt)("p",null,"In the show page, we have a single record. The record may have relationships with other resources."),(0,o.kt)("p",null,"For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource has a relationship with the ",(0,o.kt)("inlineCode",{parentName:"p"},"categories")," resource. In this case, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useOne")," hook provided by ",(0,o.kt)("strong",{parentName:"p"},"refine"),". This hook allows us to fetch single record data by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," parameters."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useOne/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"useOne")," documentation for more information ","\u2192")),(0,o.kt)("p",null,"In the auto-generated show page code, Inferencer used the ",(0,o.kt)("inlineCode",{parentName:"p"},"useOne")," hook to fetch the category data of the product record."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data: categoryData, isLoading: categoryIsLoading } = useOne({\n    resource: "categories",\n    id: record?.category?.id || "",\n});\n')),(0,o.kt)("p",null,"To ensure that the related data is only fetched after the product record has been successfully retrieved, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"queryOptions")," object. By setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," only if the record variable is truthy, we can control when the related data is fetched like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data: categoryData, isLoading: categoryIsLoading } = useOne({\n    resource: "categories",\n    id: record?.category?.id || "",\n    queryOptions: {\n        enabled: !!record,\n    },\n});\n')),(0,o.kt)("h2",{id:"adding-the-show-page-to-the-app"},"Adding the Show Page to the App"),(0,o.kt)("p",null,"Now that we have created the show page, we need to add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import the created ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductShow")," component.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdInferencer")," component with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductShow")," component."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { ErrorComponent, Layout, notificationProvider } from "@refinedev/antd";\nimport { Refine } from "@refinedev/core";\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { ProductEdit } from "pages/products/edit";\nimport { ProductList } from "pages/products/list";\n//highlight-next-line\nimport { ProductShow } from "pages/products/show";\n\nimport "@refinedev/antd/dist/reset.css";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                notificationProvider={notificationProvider}\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        // highlight-next-line\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        }\n                    >\n                        <Route\n                            index\n                            element={<NavigateToResource resource="products" />}\n                        />\n\n                        <Route path="products">\n                            <Route index element={<ProductList />} />\n                            {/* highlight-next-line */}\n                            <Route path="show/:id" element={<ProductShow />} />\n                            <Route path="edit/:id" element={<ProductEdit />} />\n                            <Route path="create" element={<AntdInferencer />} />\n                        </Route>\n\n                        <Route path="*" element={<ErrorComponent />} />\n                    </Route>\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"Now, we can see the show page in the browser at ",(0,o.kt)("a",{href:"http://localhost:3000/products/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/products/show/123")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)(c,{mdxType:"Checklist"},(0,o.kt)(u,{id:"add-show-page-antd",mdxType:"ChecklistItem"},"I added the show page to the app."),(0,o.kt)(u,{id:"add-show-page-antd-2",mdxType:"ChecklistItem"},"I understood the show page components and hooks."),(0,o.kt)(u,{id:"add-show-page-antd-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}m.isMDXComponent=!0}}]);