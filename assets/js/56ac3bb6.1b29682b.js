"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"create",title:"Create",swizzle:!0},i=void 0,s={unversionedId:"api-reference/mui/components/basic-views/create",id:"api-reference/mui/components/basic-views/create",title:"Create",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like action buttons and giving titles to the page.",source:"@site/docs/api-reference/mui/components/basic-views/create.md",sourceDirName:"api-reference/mui/components/basic-views",slug:"/api-reference/mui/components/basic-views/create",permalink:"/docs/api-reference/mui/components/basic-views/create",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/basic-views/create.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1678726323,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"create",title:"Create",swizzle:!0},sidebar:"someSidebar",previous:{title:"Inferencer \ud83c\udd99",permalink:"/docs/api-reference/mui/components/inferencer"},next:{title:"Edit",permalink:"/docs/api-reference/mui/components/basic-views/edit"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>saveButtonProps</code>",id:"savebuttonprops",level:3},{value:"<code>goBack</code>",id:"goback",level:3},{value:"<code>isLoading</code>",id:"isloading",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"<code>footerButtons</code>",id:"footerbuttons",level:3},{value:"<code>footerButtonProps</code>",id:"footerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like action buttons and giving titles to the page."),(0,o.kt)("p",null,"We'll show what ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," does using properties with examples."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/posts/create",live:!0,hideCode:!0,url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport React from "react";\nimport { Create, useAutocomplete } from "@refinedev/mui";\nimport { Autocomplete, Box, TextField } from "@mui/material";\nimport { useForm } from "@refinedev/react-hook-form";\nimport { Controller } from "react-hook-form";\n\nconst SampleCreate = () => {\n    const {\n        saveButtonProps,\n        refineCore: { formLoading },\n        register,\n        control,\n        formState: { errors },\n    } = useForm();\n\n    const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({\n        resource: "categories",\n    });\n\n    return (\n        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>\n            <Box\n                component="form"\n                sx={{ display: "flex", flexDirection: "column" }}\n                autoComplete="off"\n            >\n                <TextField\n                    {...register("title", {\n                        required: "This field is required",\n                    })}\n                    error={!!(errors as any)?.title}\n                    helperText={(errors as any)?.title?.message}\n                    margin="normal"\n                    fullWidth\n                    InputLabelProps={{ shrink: true }}\n                    type="text"\n                    label="Title"\n                    name="title"\n                />\n                <TextField\n                    {...register("content", {\n                        required: "This field is required",\n                    })}\n                    error={!!(errors as any)?.content}\n                    helperText={(errors as any)?.content?.message}\n                    margin="normal"\n                    fullWidth\n                    InputLabelProps={{ shrink: true }}\n                    multiline\n                    label="Content"\n                    name="content"\n                />\n                <Controller\n                    control={control}\n                    name="category"\n                    rules={{ required: "This field is required" }}\n                    // eslint-disable-next-line\n                    defaultValue={null as any}\n                    render={({ field }) => (\n                        <Autocomplete\n                            {...categoryAutocompleteProps}\n                            {...field}\n                            onChange={(_, value) => {\n                                field.onChange(value);\n                            }}\n                            getOptionLabel={(item) => {\n                                return (\n                                    categoryAutocompleteProps?.options?.find(\n                                        (p) =>\n                                            p?.id?.toString() ===\n                                            item?.id?.toString(),\n                                    )?.title ?? ""\n                                );\n                            }}\n                            isOptionEqualToValue={(option, value) =>\n                                value === undefined ||\n                                option.id.toString() === value?.id?.toString()\n                            }\n                            renderInput={(params) => (\n                                <TextField\n                                    {...params}\n                                    label="Category"\n                                    margin="normal"\n                                    variant="outlined"\n                                    error={!!(errors as any)?.category?.id}\n                                    helperText={\n                                        (errors as any)?.category?.id?.message\n                                    }\n                                    required\n                                />\n                            )}\n                        />\n                    )}\n                />\n            </Box>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/samples/create"]}\n        resources={[\n            { name: "samples", create: SampleCreate, list: SampleList },\n        ]}\n    />,\n);\n')),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h3"},"title")),(0,o.kt)("p",null,"It allows adding title inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>"),' component. if you don\'t pass title props it uses "Create" prefix and singular resource name by default. For example, for the ',(0,o.kt)("inlineCode",{parentName:"p"},"/posts/create"),' resource, it will be "Create post".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create } from "@refinedev/mui";\nimport { Typography } from "@mui/material";\n\nconst CreatePage: React.FC = () => {\n    return (\n        <Create\n            // highlight-next-line\n            title={<Typography variant="h5">Custom Title</Typography>}\n        >\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <RefineMui.CreateButton />\n                    </div>\n                ),\n                create: CreatePage,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," component reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. If you want to use a custom resource for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/custom",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/custom"},'// handle initial routes in new way\nsetInitialRoutes(["/custom"]);\n\nimport { Refine } from "@refinedev/core";\nimport { Layout } from "@refinedev/mui";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n// visible-block-start\nimport { Create } from "@refinedev/mui";\n\nconst CustomPage: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Create resource="posts">\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            legacyRouterProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            Layout={Layout}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"savebuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"saveButtonProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," component has a default button that submits the form. If you want to customize this button you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," property like the code below."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/save-button"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<SaveButton>")," documentation for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create } from "@refinedev/mui";\n\nconst PostCreate: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Create saveButtonProps={{ size: "small" }}>\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <RefineMui.CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"goback"},(0,o.kt)("inlineCode",{parentName:"h3"},"goBack")),(0,o.kt)("p",null,"To customize the back button or to disable it, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create } from "@refinedev/mui";\nimport { Button } from "@mui/material";\nimport { useBack } from "@refinedev/core";\n\nconst BackButton = () => {\n    const goBack = useBack();\n\n    return <Button onClick={() => goBack()}>BACK!</Button>;\n};\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-next-line\n            goBack={<BackButton />}\n        >\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts", "/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <RefineMui.CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"isloading"},(0,o.kt)("inlineCode",{parentName:"h3"},"isLoading")),(0,o.kt)("p",null,"To toggle the loading state of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create } from "@refinedev/mui";\n\nconst PostCreate: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <Create\n            // highlight-next-line\n            isLoading={loading}\n        >\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts", "/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <RefineMui.CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"breadcrumb"},(0,o.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,o.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/mui")," package."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/mui-breadcrumb"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create, Breadcrumb } from "@refinedev/mui";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            breadcrumb={\n                <div\n                    style={{\n                        padding: "3px 6px",\n                        border: "2px dashed cornflowerblue",\n                    }}\n                >\n                    <Breadcrumb />\n                </div>\n            }\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts", "/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <RefineMui.CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"wrapperprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,o.kt)("p",null,"If you want to customize the wrapper of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Card")," documentation from Material UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create } from "@refinedev/mui";\n\nconst PostCreate: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <Create\n            // highlight-start\n            wrapperProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts", "/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <RefineMui.CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"headerprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,o.kt)("p",null,"If you want to customize the header of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"CardHeader")," documentation from Material UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create } from "@refinedev/mui";\n\nconst PostCreate: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <Create\n            // highlight-start\n            headerProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts", "/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <RefineMui.CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"contentprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,o.kt)("p",null,"If you want to customize the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"CardContent")," documentation from Material UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create } from "@refinedev/mui";\n\nconst PostCreate: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <Create\n            // highlight-start\n            contentProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts", "/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <RefineMui.CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"headerbuttons"},(0,o.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,o.kt)("p",null,"You can customize the buttons at the header by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,o.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create } from "@refinedev/mui";\nimport { Button } from "@mui/material";\n\nconst PostCreate: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <Create\n            // highlight-start\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts", "/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <RefineMui.CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"headerbuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,o.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/box/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Material UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create } from "@refinedev/mui";\nimport { Button } from "@mui/material";\n\nconst PostCreate: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <Create\n            // highlight-start\n            headerButtonProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n        >\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts", "/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <RefineMui.CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"footerbuttons"},(0,o.kt)("inlineCode",{parentName:"h3"},"footerButtons")),(0,o.kt)("p",null,"You can customize the buttons at the footer by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"footerButtons")," property. It accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,o.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create } from "@refinedev/mui";\nimport { Button } from "@mui/material";\n\nconst PostCreate: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <Create\n            // highlight-start\n            footerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts", "/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <RefineMui.CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"footerbuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"footerButtonProps")),(0,o.kt)("p",null,"You can customize the wrapper element of the buttons at the footer by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"footerButtonProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-actions/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"CardActions")," documentation from Material UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { Create } from "@refinedev/mui";\nimport { Button } from "@mui/material";\n\nconst PostCreate: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <Create\n            // highlight-start\n            footerButtonProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n            footerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n        >\n            <span>Rest of your page here</span>\n        </Create>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts", "/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <RefineMui.CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(u,{module:"@refinedev/mui/Create","goBack-default":"`<ArrowLeft />`",mdxType:"PropsTable"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const SampleList = () => {\n    const { dataGridProps } = RefineMui.useDataGrid();\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        RefineCore.useMany({\n            resource: "categories",\n            ids:\n                dataGridProps?.rows?.map((item: any) => item?.category?.id) ??\n                [],\n            queryOptions: {\n                enabled: !!dataGridProps?.rows,\n            },\n        });\n\n    const columns = React.useMemo<GridColumns<any>>(\n        () => [\n            {\n                field: "id",\n                headerName: "Id",\n                type: "number",\n                minWidth: 50,\n            },\n            {\n                field: "title",\n                headerName: "Title",\n                minWidth: 200,\n            },\n            {\n                field: "category",\n                headerName: "Category",\n                valueGetter: ({ row }) => {\n                    const value = row?.category?.id;\n\n                    return value;\n                },\n                minWidth: 300,\n                renderCell: function render({ value }) {\n                    return categoryIsLoading ? (\n                        <>Loading...</>\n                    ) : (\n                        categoryData?.data?.find((item) => item.id === value)\n                            ?.title\n                    );\n                },\n            },\n            {\n                field: "createdAt",\n                headerName: "Created At",\n                minWidth: 250,\n                renderCell: function render({ value }) {\n                    return <RefineMui.DateField value={value} />;\n                },\n            },\n        ],\n        [categoryData?.data],\n    );\n\n    return (\n        <RefineMui.List>\n            <MuiXDataGrid.DataGrid\n                {...dataGridProps}\n                columns={columns}\n                autoHeight\n            />\n        </RefineMui.List>\n    );\n};\n\nconst Wrapper = ({ children }) => {\n    return (\n        <MuiMaterial.ThemeProvider theme={RefineMui.LightTheme}>\n            <MuiMaterial.CssBaseline />\n            <MuiMaterial.GlobalStyles\n                styles={{ html: { WebkitFontSmoothing: "auto" } }}\n            />\n            {children}\n        </MuiMaterial.ThemeProvider>\n    );\n};\n')))}m.isMDXComponent=!0}}]);