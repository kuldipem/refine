"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51515],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,f=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={id:"base64-upload",title:"Base64 Upload"},i=void 0,s={unversionedId:"advanced-tutorials/upload/base64-upload",id:"version-3.xx.xx/advanced-tutorials/upload/base64-upload",title:"Base64 Upload",description:"By encoding your files and images from your forms to Base64 you can change all files needed for the upload to Base64 format before the submit. This can be done via the onFinish property of the `` component that comes with Ant Design",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/upload/base64-upload.md",sourceDirName:"advanced-tutorials/upload",slug:"/advanced-tutorials/upload/base64-upload",permalink:"/docs/3.xx.xx/advanced-tutorials/upload/base64-upload",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/upload/base64-upload.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1678975056,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"base64-upload",title:"Base64 Upload"},sidebar:"someSidebar",previous:{title:"Next.js",permalink:"/docs/3.xx.xx/advanced-tutorials/ssr/nextjs"},next:{title:"Multipart Upload",permalink:"/docs/3.xx.xx/advanced-tutorials/upload/multipart-upload"}},l={},p=[{value:"Example",id:"example-1",level:2}],d=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const m={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By encoding your files and images from your forms to Base64 you can change all files needed for the upload to Base64 format before the submit. This can be done via the ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinish")," property of the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Form"},(0,r.kt)("inlineCode",{parentName:"a"},"<Form>"))," component that comes with ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design")," "),(0,r.kt)("h1",{id:"example"},"Example"),(0,r.kt)("p",null,"Now let's make a small example to see how its done. In this example, the file we are going to be uploading files in Base64 type  is going to be called ",(0,r.kt)("inlineCode",{parentName:"p"},"avatar")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/users/create.tsx"',title:'"pages/users/create.tsx"'},'import {\n    //highlight-start\n    file2Base64,\n    //highlight-end\n} from "@pankod/refine-core";\n\nimport {\n    Create,\n    Form,\n    Upload,\n    Input,\n    useForm,\n// highlight-start\n    getValueFromEvent,\n// highlight-end\n} from "@pankod/refine-antd";\n\nexport const UserCreate: React.FC = () => {\n    const { form, formProps, saveButtonProps } = useForm<IUser>();\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form\n                {...formProps}\n                layout="vertical"\n// highlight-start\n                onFinish={async (values) => {\n                    const base64Files = [];\n                    // @ts-ignore\n                    const { avatar } = values;\n\n                    for (const file of avatar) {\n                        if (file.originFileObj) {\n                            const base64String = await file2Base64(file);\n\n                            base64Files.push({\n                                ...file,\n                                base64String,\n                            });\n                        } else {\n                            base64Files.push(file);\n                        }\n                    }\n\n                    return (\n                        formProps.onFinish &&\n                        formProps.onFinish({\n                            ...values,\n                            avatar: base64Files,\n                        })\n                    );\n                }}\n// highlight-end\n            >\n                <Form.Item\n                    label="First Name"\n                    name="firstName"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item label="Avatar">\n                    <Form.Item\n                        name="avatar"\n                        valuePropName="fileList"\n// highlight-start\n                        getValueFromEvent={getValueFromEvent}\n                        noStyle\n                        rules={[\n                            {\n                                required: true,\n                            },\n                        ]}\n                    >\n                        <Upload.Dragger\n                            listType="picture"\n                            multiple\n// highlight-start\n                            beforeUpload={() => false}\n                        >\n                            <p className="ant-upload-text">\n                                Drag & drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n\ninterface IUser {\n    id: number;\n    firstName: string;\n    avatar: [\n        {\n            uid: string;\n            name: string;\n            url: string;\n            status: "error" | "success" | "done" | "uploading" | "removed";\n        },\n    ];\n}\n')),(0,r.kt)("p",null,"You can change files to Base64 by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"file2Base64")," function."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"An edit form can be made by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," component instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"<Create>")," without changing the rest of the code.")),(0,r.kt)("h2",{id:"example-1"},"Example"),(0,r.kt)(d,{path:"upload-antd-multipart",mdxType:"CodeSandboxExample"}))}c.isMDXComponent=!0}}]);