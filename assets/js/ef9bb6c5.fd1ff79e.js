"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44818],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={id:"list-button",title:"List",swizzle:!0},i=void 0,s={unversionedId:"api-reference/chakra-ui/components/buttons/list-button",id:"version-3.xx.xx/api-reference/chakra-ui/components/buttons/list-button",title:"List",description:"` is using Chakra UI's  component. It uses the list method from useNavigation` under the hood. It can be useful when redirecting the app to the list page route of resource.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/buttons/list.md",sourceDirName:"api-reference/chakra-ui/components/buttons",slug:"/api-reference/chakra-ui/components/buttons/list-button",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/buttons/list-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/buttons/list.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1678975056,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"list-button",title:"List",swizzle:!0},sidebar:"someSidebar",previous:{title:"Import",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/buttons/import-button"},next:{title:"Refresh",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/buttons/refresh-button"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = RefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    routerProvider,\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    Layout: RefineChakra.Layout,\n    Sider: () => null,\n    catchAll: <RefineChakra.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <RefineChakra.ChakraProvider theme={RefineChakra.refineTheme}>\n            {children}\n        </RefineChakra.ChakraProvider>\n    );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<ListButton>")," is using Chakra UI's ",(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/button/usage"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the list page route of resource."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/show/123"]);\nimport { Refine } from "@pankod/refine-core";\nimport { ShowButton } from "@pankod/refine-chakra-ui";\n\n// visible-block-start\nimport { useShow } from "@pankod/refine-core";\nimport {\n    Show,\n    Heading,\n    Text,\n    Spacer,\n    MarkdownField,\n    //highlight-next-line\n    ListButton,\n} from "@pankod/refine-chakra-ui";\n\nconst PostShow: React.FC<IResourceComponentsProps> = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        // highlight-next-line\n        <Show headerButtons={<ListButton />} isLoading={isLoading}>\n            <Heading as="h5" size="sm">\n                Id\n            </Heading>\n            <Text mt={2}>{record?.id}</Text>\n\n            <Heading as="h5" size="sm" mt={4}>\n                Title\n            </Heading>\n            <Text mt={2}>{record?.title}</Text>\n\n            <Heading as="h5" size="sm" mt={4}>\n                Content\n            </Heading>\n            <Spacer mt={2} />\n            <MarkdownField value={record?.content} />\n        </Show>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            notificationProvider={RefineChakra.notificationProvider()}\n            resources={[\n                {\n                    name: "posts",\n                    show: PostShow,\n                    list: () => (\n                        <RefineChakra.VStack alignItems="flex-start">\n                            <RefineChakra.Text>\n                                This page is empty.\n                            </RefineChakra.Text>\n                            <ShowButton colorScheme="black" recordItemId="123">\n                                Show Item 123\n                            </ShowButton>\n                        </RefineChakra.VStack>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The button text is defined automatically by ",(0,o.kt)("strong",{parentName:"p"},"refine")," based on ",(0,o.kt)("em",{parentName:"p"},"resource")," object name property.")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"resourcenameorroutename"},(0,o.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,o.kt)("p",null,"Redirection endpoint(",(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName/list"),") is defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," property. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"<ListButton>")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property of the resource object as the endpoint to redirect after clicking."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@pankod/refine-core";\n\n// visible-block-start\nimport { ListButton } from "@pankod/refine-chakra-ui";\n\nconst MyListComponent = () => {\n    return (\n        <ListButton colorScheme="black" resourceNameOrRouteName="categories" />\n    );\n};\n// visible-block-end\n\nconst ListPage = () => {\n    const { list } = RefineCore.useNavigation();\n    const params = RefineCore.useRouterContext().useParams();\n\n    return (\n        <RefineChakra.VStack alignItems="flex-start">\n            <RefineChakra.Text as="i" color="gray.700" fontSize="sm">\n                URL Parameters:\n            </RefineChakra.Text>\n            <RefineChakra.Code>{JSON.stringify(params)}</RefineChakra.Code>\n\n            <RefineChakra.Button\n                size="sm"\n                onClick={() => list("posts")}\n                colorScheme="green"\n            >\n                Go back\n            </RefineChakra.Button>\n        </RefineChakra.VStack>\n    );\n};\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    list: MyListComponent,\n                },\n                {\n                    name: "categories",\n                    list: ListPage,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect to ",(0,o.kt)("inlineCode",{parentName:"p"},"/categories"),"."),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@pankod/refine-core";\n\n// visible-block-start\nimport { ListButton } from "@pankod/refine-chakra-ui";\n\nconst MyListComponent = () => {\n    return <ListButton colorScheme="black" hideText />;\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    list: MyListComponent,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"accesscontrol"},(0,o.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,o.kt)("p",null,"This prop can be used to skip access control check with its ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ListButton } from "@pankod/refine-chakra-ui";\n\nexport const MyListComponent = () => {\n    return (\n        <ListButton\n            accessControl={{ enabled: true, hideIfUnauthorized: true }}\n        />\n    );\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(l,{module:"@pankod/refine-chakra-ui/ListButton",mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);