"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={id:"index",title:"1. Adding List Page",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page"}},i=void 0,p={unversionedId:"tutorial/adding-crud-pages/antd/index",id:"tutorial/adding-crud-pages/antd/index",title:"1. Adding List Page",description:"In Unit 2.4, we created the CRUD pages automatically with Inferencer, and now we will do it manually by using the code generated by Inferencer to customize those pages freely.",source:"@site/docs/tutorial/4-adding-crud-pages/antd/add-list-page.md",sourceDirName:"tutorial/4-adding-crud-pages/antd",slug:"/tutorial/adding-crud-pages/antd/index",permalink:"/docs/tutorial/adding-crud-pages/antd/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/antd/add-list-page.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1683792955,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{id:"index",title:"1. Adding List Page",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page"}}},l={},s=[{value:"Creating the list page",id:"creating-the-list-page",level:2},{value:"Understanding the List Component",id:"understanding-the-list-component",level:2},{value:"Hooks and Components in List Page",id:"hooks-and-components-in-list-page",level:3},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the List Page to the App",id:"adding-the-list-page-to-the-app",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=d("Checklist"),m=d("ChecklistItem"),u={toc:s};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages/"},"Unit 2.4"),", we created the CRUD pages automatically with Inferencer, and now we will do it manually by using the code generated by Inferencer to customize those pages freely."),(0,r.kt)("h2",{id:"creating-the-list-page"},"Creating the list page"),(0,r.kt)("p",null,"First, we need to create our file, named ",(0,r.kt)("inlineCode",{parentName:"p"},"list.tsx"),", under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will then copy the list page code generated by Inferencer and paste it into the file; for this, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on the "Show Code" button in the bottom right corner of the page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You will see the list page code that was generated by Inferencer. Copy it by clicking on the "Copy" button.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the code into the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"list.tsx")," file."))),(0,r.kt)("p",null,"You can see an example list page generated by Inferencer below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport {\n    ErrorComponent,\n    ThemedLayoutV2,\n    RefineThemes,\n    notificationProvider,\n} from "@refinedev/antd";\nimport { Refine } from "@refinedev/core";\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\nimport routerBindings, { NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { ConfigProvider } from "antd";\nimport "@refinedev/antd/dist/reset.css";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerBindings}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route\n                                index\n                                element={\n                                    <NavigateToResource resource="blog_posts" />\n                                }\n                            />\n\n                            {/* highlight-start */}\n                            <Route path="blog-posts">\n                                <Route index element={<AntdInferencer />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<AntdInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<AntdInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<AntdInferencer />}\n                                />\n                            </Route>\n                            {/* highlight-end */}\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("h2",{id:"understanding-the-list-component"},"Understanding the List Component"),(0,r.kt)("h3",{id:"hooks-and-components-in-list-page"},"Hooks and Components in List Page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," is a ",(0,r.kt)("strong",{parentName:"p"},"refine")," component that is used for presentation purposes like showing the create button, page title etc."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/basic-views/list"},(0,r.kt)("inlineCode",{parentName:"a"},"<List/>")," documentation","\u2192")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Table/>")," is a native ",(0,r.kt)("strong",{parentName:"p"},"Ant Design")," component. It renders records row by row as a table. It expects a ",(0,r.kt)("inlineCode",{parentName:"p"},"rowKey")," prop as the unique key of the records. In the auto-generated list page code, Inferencer used ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field as the ",(0,r.kt)("inlineCode",{parentName:"p"},"rowKey"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/table/"},(0,r.kt)("strong",{parentName:"a"},"Ant Design")," ",(0,r.kt)("inlineCode",{parentName:"a"},"<Table/>")," documentation","\u2192")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook fetches data from API, provides helper hooks for ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table/>")," component, enabling instant access to sorting, filtering, pagination with single line of code, and returns necessary ",(0,r.kt)("inlineCode",{parentName:"p"},"tableProps")," values."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/table/useTable/"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable")," documentation","\u2192")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Table.Column/>")," is a native ",(0,r.kt)("strong",{parentName:"p"},"Ant Design")," component that renders a column in the table with ",(0,r.kt)("inlineCode",{parentName:"p"},"dataIndex")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," props used to specify the record field and custom content, respectively, such as rendering ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"<MarkdownField/>"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/fields/markdown/"},(0,r.kt)("inlineCode",{parentName:"a"},"<MarkdownField/>")," documentation","\u2192")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<EditButton/>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<ShowButton/>")," are ",(0,r.kt)("strong",{parentName:"p"},"refine")," components that are used to navigate to the edit and show pages of the record, respectively."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/buttons/edit-button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<EditButton/>"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/buttons/show-button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<ShowButton/>")," documentations","\u2192"))))),(0,r.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,r.kt)("p",null,"Each blog post includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," field, which has an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property. This is a foreign key that points to the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories"),' resource, which is different from the "blog_posts" resource.'),(0,r.kt)("p",null,"There is a ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource; to display it in the table, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," hook provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),"."),(0,r.kt)("p",null,"This hook allows us to fetch data for multiple records in a single request by providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"'s of the related records. In this case, we need to provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"'s of the blog posts categories. It is particularly useful when we need to fetch related data for multiple records."),(0,r.kt)("p",null,"In the code below, each blog post record has a ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/blog_posts"',title:'"https://api.fake-rest.refine.dev/blog_posts"'},'{\n  ...\n  "category": {\n    "id": 1\n  }\n  ...\n},\n{\n  ...\n  "category": {\n    "id": 2\n  }\n  ...\n}\n')),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," hook to fetch the full category records for each of these blog posts like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useMany } from "@refinedev/core";\n\nconst { data } = useMany({\n    resource: "categories",\n    ids: blogPosts.map((blogPost) => blogPost.category.id),\n});\n')),(0,r.kt)("p",null,"This will pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),"\xa0and ",(0,r.kt)("inlineCode",{parentName:"p"},"ids")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"getMany")," function. The ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," will then make a single request to the API to fetch the full records for each category related to the blog posts. The resulting ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," variable will be an array of category records, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'[\n    {\n        id: 1,\n        title: "mock category title",\n    },\n    {\n        id: 2,\n        title: "another mock category title",\n    },\n];\n')),(0,r.kt)("p",null,"We can then use this ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," array to display the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," of each category in the table."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useMany/"},(0,r.kt)("inlineCode",{parentName:"a"},"useMany")," documentation","\u2192"))),(0,r.kt)("h2",{id:"adding-the-list-page-to-the-app"},"Adding the List Page to the App"),(0,r.kt)("p",null,"Now that we have created the list page, we can add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," file:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the created ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostList")," component.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"AntdInferencer")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostList")," component."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import {\n    ErrorComponent,\n    ThemedLayoutV2,\n    RefineThemes,\n    notificationProvider,\n} from "@refinedev/antd";\nimport { Refine } from "@refinedev/core";\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\nimport routerBindings, { NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\n//highlight-next-line\nimport { BlogPostList } from "pages/blog-posts/list";\n\nimport { ConfigProvider } from "antd";\nimport "@refinedev/antd/dist/reset.css";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerBindings}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            //highlight-next-line\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route\n                                index\n                                element={\n                                    <NavigateToResource resource="blog_posts" />\n                                }\n                            />\n\n                            <Route path="blog-posts">\n                                {/* highlight-next-line */}\n                                <Route index element={<BlogPostList />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<AntdInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<AntdInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<AntdInferencer />}\n                                />\n                            </Route>\n\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\nexport default App;\n')),(0,r.kt)("p",null,"Now, we can see the list page in the browser at ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Checklist"},(0,r.kt)(m,{id:"add-list-page-antd",mdxType:"ChecklistItem"},"I have added the list page to the app."),(0,r.kt)(m,{id:"add-list-page-antd-2",mdxType:"ChecklistItem"},"I understood the list page components and hooks."),(0,r.kt)(m,{id:"add-list-page-antd-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}h.isMDXComponent=!0}}]);