"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,u=m["".concat(p,".").concat(f)]||m[f]||d[f]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"email",title:"Email",swizzle:!0},o=void 0,l={unversionedId:"api-reference/antd/components/fields/email",id:"version-3.xx.xx/api-reference/antd/components/fields/email",title:"Email",description:"This field is used to display email values. It uses the ` component of ` from Ant Design.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/email.md",sourceDirName:"api-reference/antd/components/fields",slug:"/api-reference/antd/components/fields/email",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/email",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/email.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6zg\xfcr Ak\xe7a",lastUpdatedAt:1683630067,formattedLastUpdatedAt:"May 9, 2023",frontMatter:{id:"email",title:"Email",swizzle:!0},sidebar:"someSidebar",previous:{title:"Date",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/date"},next:{title:"File",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/file"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2}],c=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const m={toc:s};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This field is used to display email values. It uses the ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/typography/#FAQ"},(0,a.kt)("inlineCode",{parentName:"a"},"<Link>"))," component of ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/typography"},(0,a.kt)("inlineCode",{parentName:"a"},"<Typography>"))," from Ant Design."),(0,a.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,a.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,a.kt)("strong",{parentName:"a"},"refine CLI")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's see how we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<EmailField>")," with the example in the user list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport { \n    List,\n    Table,\n    useTable,\n    // highlight-next-line\n    EmailField\n} from "@pankod/refine-antd";\n\nconst UserList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                 <Table.Column\n                    dataIndex="email"\n                    title="Email"\n                    // highlight-next-line\n                    render={(value: string) => <EmailField value={value} />}\n                    width="100%"\n                />\n                ...\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    email: string;\n}\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        resources={[\n            {\n                name: "users",\n                list: UserList\n            },\n        ]}\n    />,\n);\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"<EmailField>"),' uses "mailto:" in the href prop of the ',(0,a.kt)("inlineCode",{parentName:"p"},"<Link>")," component. For this reason, clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"<EmailField>")," opens your device's default mail application.")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)(c,{module:"@pankod/refine-antd/EmailField",mdxType:"PropsTable"}),(0,a.kt)("admonition",{title:"External Props",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/typography/#How-to-use-Typography.Link-in-react-router"},"Link"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/typography/#API"},"Refer to the documentation for the rest of Link properties. ","\u2192")))}f.isMDXComponent=!0}}]);