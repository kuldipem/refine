"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99567],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,h=m["".concat(d,".").concat(u)]||m[u]||s[u]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23673:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}},i=void 0,p={unversionedId:"tutorial/adding-crud-pages/antd/add-create-page",id:"version-3.xx.xx/tutorial/adding-crud-pages/antd/add-create-page",title:"4. Adding Create Page",description:"Create page is the page where you can create the record. In this tutorial, we will create the create page for the products resource.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/antd/add-create-page.md",sourceDirName:"tutorial/4-adding-crud-pages/antd",slug:"/tutorial/adding-crud-pages/antd/add-create-page",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/antd/add-create-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/antd/add-create-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1678726323,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}}},d={},c=[{value:"Creating Create Page",id:"creating-create-page",level:2},{value:"Understanding the Create Component",id:"understanding-the-create-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Create Page to the App",id:"adding-the-create-page-to-the-app",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=l("Checklist"),m=l("ChecklistItem"),u={toc:c};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create page is the page where you can create the record. In this tutorial, we will create the create page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," resource."),(0,a.kt)("h2",{id:"creating-create-page"},"Creating Create Page"),(0,a.kt)("p",null,"First, let's create our file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/products")," folder. We will name it ",(0,a.kt)("inlineCode",{parentName:"p"},"create.tsx"),". Then, we will copy the create page code generated by Inferencer and paste it into the file."),(0,a.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("a",{href:"http://localhost:3000/products",rel:"noopener noreferrer nofollow"},"localhost:3000/products")," in your browser.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'To open the create page, click the "Create" button in the top right corner of the table.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'On the create page, click on the "Show Code" button in the bottom right corner of the page.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'You can see the create page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,a.kt)("inlineCode",{parentName:"p"},"create.tsx")," file."))),(0,a.kt)("p",null,"You can see the create page code generated by Inferencer below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products/create"},'setInitialRoutes(["/products/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    notificationProvider,\n    ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            Layout={Layout}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n            resources={[\n                {\n                    name: "products",\n                    list: AntdInferencer,\n                    show: AntdInferencer,\n                    create: AntdInferencer,\n                    edit: AntdInferencer,\n                },\n            ]}\n        />\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)("p",null,"Instead of coding the create page component from scratch, Inferencer've created the required code base on API response, so that we can customize."),(0,a.kt)("h2",{id:"understanding-the-create-component"},"Understanding the Create Component"),(0,a.kt)("p",null,"We will go through the create page components and hooks one by one."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<Create/>")," is a ",(0,a.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, save button etc."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/basic-views/create"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<Create/>")," documentation for more information ","\u2192"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<Form/>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<Form.Item/>")," are ",(0,a.kt)("strong",{parentName:"p"},"Ant Design")," components that are used to build the form."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"Ant Design")," ",(0,a.kt)("inlineCode",{parentName:"a"},"<Form/>")," documentation for more information ","\u2192"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," is a ",(0,a.kt)("strong",{parentName:"p"},"refine")," hook that provides the necessary props for the form. It also provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,a.kt)("p",{parentName:"li"},"When you use ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," in the create page, it sends the form data to ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method when the form is submitted."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/form/useForm/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")))),(0,a.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,a.kt)("p",null,"In the create page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the product to the category. In this case, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelect")," hook provided by ",(0,a.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the resource name to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the necessary props for the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/field/useSelect/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/select"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"Ant Design")," ",(0,a.kt)("inlineCode",{parentName:"a"},"<Select/>")," documentation for more information ","\u2192")),(0,a.kt)("p",null,"In the auto-generated create page code, Inferencer used the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect({\n    resource: "categories",\n});\n')),(0,a.kt)("h2",{id:"adding-the-create-page-to-the-app"},"Adding the Create Page to the App"),(0,a.kt)("p",null,"Now that we have created the create page, we need to add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the created ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductCreate")," component.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"AntdInferencer")," component with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductCreate")," component."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    notificationProvider,\n    ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { ProductList } from "pages/products/list";\nimport { ProductEdit } from "pages/products/edit";\nimport { productshow } from "pages/products/show";\n//highlight-next-line\nimport { ProductCreate } from "pages/products/create";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            Layout={Layout}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n            resources={[\n                {\n                    name: "products",\n                    list: ProductList,\n                    edit: ProductEdit,\n                    show: ProductShow,\n                    //highlight-next-line\n                    create: ProductCreate,\n                },\n            ]}\n        />\n    );\n};\nexport default App;\n')),(0,a.kt)("p",null,"Now, we can see the create page in the browser at ",(0,a.kt)("a",{href:"http://localhost:3000/products/create",rel:"noopener noreferrer nofollow"},"localhost:3000/products/create")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(s,{mdxType:"Checklist"},(0,a.kt)(m,{id:"add-create-page-antd",mdxType:"ChecklistItem"},"I added the create page to the app."),(0,a.kt)(m,{id:"add-create-page-antd-2",mdxType:"ChecklistItem"},"I understood the create page components and hooks."),(0,a.kt)(m,{id:"add-create-page-antd-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}h.isMDXComponent=!0}}]);