"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"export-button",title:"Export",swizzle:!0},a=void 0,p={unversionedId:"api-reference/antd/components/buttons/export-button",id:"api-reference/antd/components/buttons/export-button",title:"Export",description:'` is an Ant Design ` with a default export icon and a default text with "Export". It only has presentational value.',source:"@site/docs/api-reference/antd/components/buttons/export.md",sourceDirName:"api-reference/antd/components/buttons",slug:"/api-reference/antd/components/buttons/export-button",permalink:"/docs/api-reference/antd/components/buttons/export-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/buttons/export.md",tags:[],version:"current",lastUpdatedBy:"\xd6zg\xfcr Ak\xe7a",lastUpdatedAt:1683630067,formattedLastUpdatedAt:"May 9, 2023",frontMatter:{id:"export-button",title:"Export",swizzle:!0},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/api-reference/antd/components/buttons/edit-button"},next:{title:"Import",permalink:"/docs/api-reference/antd/components/buttons/import-button"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],c=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const u={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<ExportButton>")," is an Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>")),' with a default export icon and a default text with "Export". It only has presentational value.'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/import-export/useExport"},"Refer to the for more detailed information about ",(0,o.kt)("inlineCode",{parentName:"a"},"useExport"),". ","\u2192")),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Use it like any other Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>")),". You can use it with ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/import-export/useExport"},"useExport"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport { useExport } from "@refinedev/core";\nimport {\n    List,\n    useTable,\n    // highlight-next-line\n    ExportButton,\n} from "@refinedev/antd";\nimport { Table } from "antd";\n\nconst PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    const { triggerExport, isLoading: exportLoading } = useExport<IPost>();\n\n    return (\n        <List\n            headerButtons={\n                // highlight-start\n                <ExportButton onClick={triggerExport} loading={exportLoading} />\n                // highlight-end\n            }\n        >\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { ExportButton } from "@refinedev/antd";\n\nconst MyExportComponent = () => {\n    return (\n        <ExportButton\n            // highlight-next-line\n            hideText={true}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: MyExportComponent,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(c,{module:"@refinedev/antd/ExportButton",mdxType:"PropsTable"}),(0,o.kt)("admonition",{title:"External Props",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),".")))}m.isMDXComponent=!0}}]);