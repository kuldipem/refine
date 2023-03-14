"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[464],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,h=u["".concat(d,".").concat(m)]||u[m]||s[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},70372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}},i=void 0,p={unversionedId:"tutorial/adding-crud-pages/mui/add-create-page",id:"tutorial/adding-crud-pages/mui/add-create-page",title:"4. Adding Create Page",description:"Create page is the page where you can create the record. In this tutorial, we will create the create page for the products resource.",source:"@site/docs/tutorial/4-adding-crud-pages/mui/add-create-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mui",slug:"/tutorial/adding-crud-pages/mui/add-create-page",permalink:"/docs/tutorial/adding-crud-pages/mui/add-create-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/mui/add-create-page.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1678726323,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}}},d={},l=[{value:"Creating Create Page",id:"creating-create-page",level:2},{value:"Understanding the Create Component",id:"understanding-the-create-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Create Page to the App",id:"adding-the-create-page-to-the-app",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},s=c("Checklist"),u=c("ChecklistItem"),m={toc:l};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create page is the page where you can create the record. In this tutorial, we will create the create page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource."),(0,o.kt)("h2",{id:"creating-create-page"},"Creating Create Page"),(0,o.kt)("p",null,"First, let's create our file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/products")," folder. We will name it ",(0,o.kt)("inlineCode",{parentName:"p"},"create.tsx"),". Then, we will copy the create page code generated by Inferencer and paste it into the file."),(0,o.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("a",{href:"http://localhost:3000/products",rel:"noopener noreferrer nofollow"},"localhost:3000/products")," in your browser.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'To open the create page, click the "Create" button in the top right corner of the table.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'On the create page, click on the "Show Code" button in the bottom right corner of the page.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'You can see the create page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,o.kt)("inlineCode",{parentName:"p"},"create.tsx")," file."))),(0,o.kt)("p",null,"You can see the create page code generated by Inferencer below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products/create"},'setInitialRoutes(["/products/create"]);\n\nimport { Refine } from "@refinedev/core";\nimport {\n    Layout,\n    ErrorComponent,\n    LightTheme,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "products",\n                                list: "/products",\n                                show: "/products/show/:id",\n                                create: "/products/create",\n                                edit: "/products/edit/:id",\n                            },\n                        ]}\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <Layout>\n                                        <Outlet />\n                                    </Layout>\n                                }\n                            >\n                                <Route path="products">\n                                    <Route index element={<MuiInferencer />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("p",null,"Instead of coding the create page component from scratch, Inferencer've created the required code base on API response, so that we can customize."),(0,o.kt)("h2",{id:"understanding-the-create-component"},"Understanding the Create Component"),(0,o.kt)("p",null,"We will go through the create page components and hooks one by one."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<Create/>")," is a ",(0,o.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, save button etc."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/basic-views/create"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<Create/>")," documentation for more information ","\u2192"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook, imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form")," package, has been developed by using the ",(0,o.kt)("strong",{parentName:"p"},"React Hook Form")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," package."),(0,o.kt)("p",{parentName:"li"},"It provides all the features of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," package as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("strong",{parentName:"p"},"React Hook Form"),"."),(0,o.kt)("p",{parentName:"li"},"It also provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,o.kt)("p",{parentName:"li"},"When you use ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," in the edit page,it sends the form data to ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," method when the form is submitted."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"@refinedev/react-hook-form")," ",(0,o.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"React Hook Form")," documentation for more information ","\u2192"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"All other components provided by ",(0,o.kt)("strong",{parentName:"p"},"Material UI")," are used to display the form fields."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://mui.com/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"Material UI")," documentation for more information ","\u2192")))),(0,o.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,o.kt)("p",null,"In the edit page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,o.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the product to the category. In this case, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," hook provided by ",(0,o.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the params to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the necessary props for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Autocomplete/>")," component."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/hooks/useAutocomplete/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"useAutocomplete")," documentation for more information ","\u2192")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-autocomplete/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"Material UI")," ",(0,o.kt)("inlineCode",{parentName:"a"},"<Autocomplete/>")," documentation for more information ","\u2192")),(0,o.kt)("p",null,"In the auto-generated create page code, Inferencer used the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," hook to select a category from the ",(0,o.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useAutocomplete({\n    resource: "categories",\n});\n')),(0,o.kt)("h2",{id:"adding-the-create-page-to-the-app"},"Adding the Create Page to the App"),(0,o.kt)("p",null,"Now that we have created the create page, we need to add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import the created ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductCreate")," component.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"MuiInferencer")," component with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductCreate")," component."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport {\n    Layout,\n    ErrorComponent,\n    LightTheme,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { ProductList } from "pages/products/list";\nimport { ProductEdit } from "pages/products/edit";\nimport { ProductShow } from "pages/products/show";\n//highlight-next-line\nimport { ProductCreate } from "pages/products/create";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "products",\n                                list: "/products",\n                                show: "/products/show/:id",\n                                // highlight-next-line\n                                create: "/products/create",\n                                edit: "/products/edit/:id",\n                            },\n                        ]}\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <Layout>\n                                        <Outlet />\n                                    </Layout>\n                                }\n                            >\n                                <Route path="products">\n                                    <Route index element={<ProductList />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<ProductShow />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<ProductEdit />}\n                                    />\n                                    {/* highlight-next-line */}\n                                    <Route\n                                        path="create"\n                                        element={<ProductCreate />}\n                                    />\n                                </Route>\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\nexport default App;\n')),(0,o.kt)("p",null,"Now, we can see the create page in the browser at ",(0,o.kt)("a",{href:"http://localhost:3000/products/create",rel:"noopener noreferrer nofollow"},"localhost:3000/products/create")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)(s,{mdxType:"Checklist"},(0,o.kt)(u,{id:"add-create-page-mui",mdxType:"ChecklistItem"},"I added the create page to the app."),(0,o.kt)(u,{id:"add-create-page-mui-2",mdxType:"ChecklistItem"},"I understood the create page components and hooks."),(0,o.kt)(u,{id:"add-create-page-mui-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}h.isMDXComponent=!0}}]);