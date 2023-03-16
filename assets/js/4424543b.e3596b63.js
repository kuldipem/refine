"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={id:"useModalForm",title:"useModalForm",sidebar_label:"useModalForm"},l=void 0,i={unversionedId:"packages/documentation/react-hook-form/useModalForm",id:"packages/documentation/react-hook-form/useModalForm",title:"useModalForm",description:"useModalForm hook allows you to manage a form within a modal. It provides some useful methods to handle the form modal.",source:"@site/docs/packages/documentation/react-hook-form/useModalForm.md",sourceDirName:"packages/documentation/react-hook-form",slug:"/packages/documentation/react-hook-form/useModalForm",permalink:"/docs/packages/documentation/react-hook-form/useModalForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/documentation/react-hook-form/useModalForm.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1678975056,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"useModalForm",title:"useModalForm",sidebar_label:"useModalForm"},sidebar:"someSidebar",previous:{title:"useForm",permalink:"/docs/packages/documentation/react-hook-form/useForm"},next:{title:"useStepsForm",permalink:"/docs/packages/documentation/react-hook-form/useStepsForm"}},s={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>defaultValues</code>",id:"defaultvalues",level:3},{value:"<code>defaultVisible</code>",id:"defaultvisible",level:3},{value:"<code>autoSubmitClose</code>",id:"autosubmitclose",level:3},{value:"<code>autoResetForm</code>",id:"autoresetform",level:3},{value:"<code>warnWhenUnsavedChanges</code>",id:"warnwhenunsavedchanges",level:3},{value:"<code>syncWithLocation</code>",id:"syncwithlocation",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>visible</code>",id:"visible",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"<code>submit</code>",id:"submit",level:3},{value:"<code>show</code>",id:"show",level:3},{value:"<code>saveButtonProps</code>",id:"savebuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return values",id:"return-values-1",level:3},{value:"Example",id:"example",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=p("Tabs"),u=p("TabItem"),c=p("PropsTable"),h=p("CodeSandboxExample"),k={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'type ModalPropsType = {\n    isOpen: boolean;\n    onClose: () => void;\n    children: React.ReactNode;\n};\n\nconst Modal: React.FC<ModalPropsType> = ({ isOpen, onClose, children }) => {\n    if (!isOpen) return null;\n    return (\n        <>\n            <div className="overlay" onClick={onClose}></div>\n            <div className="modal">\n                <div className="modal-title">\n                    <button className="close-button" onClick={onClose}>\n                        &times;\n                    </button>\n                </div>\n                <div className="modal-content">{children}</div>\n            </div>\n        </>\n    );\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"html,\nbody {\n    background: white;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.7);\n    z-index: 1000;\n}\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #fff;\n    z-index: 1000;\n    width: 500px;\n    overflow-y: auto;\n}\n\n.modal .modal-title {\n    display: flex;\n    justify-content: flex-end;\n    padding: 4px;\n}\n\n.modal .modal-content {\n    padding: 0px 16px 16px 16px;\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.form .form-group {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.form input,\nselect,\ntextarea {\n    width: 100%;\n    padding: 8px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook allows you to manage a form within a modal. It provides some useful methods to handle the form modal."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook is extended from ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/react-hook-form"},(0,a.kt)("inlineCode",{parentName:"a"},"@refinedev/react-hook-form"))," package. This means that you can use all the features of ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," hook.")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"We'll show three examples, ",(0,a.kt)("inlineCode",{parentName:"p"},'"create"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"edit"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"clone"'),". Let's see how ",(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm")," is used in all."),(0,a.kt)(m,{defaultValue:"create",values:[{label:"create",value:"create"},{label:"edit",value:"edit"},{label:"clone",value:"clone"}],mdxType:"Tabs"},(0,a.kt)(u,{value:"create",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts",live:!0,url:"http://localhost:3000/posts"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport React from "react";\nimport { HttpError, useTable } from "@refinedev/core";\nimport { useModalForm } from "@refinedev/react-hook-form";\n\nimport { Modal, PostsTable } from "@components";\n\nconst PostList = () => {\n    const { tableQueryResult } = useTable<IPost>({\n        sorters: {\n            initial: [\n                {\n                    field: "id",\n                    order: "desc",\n                },\n            ],\n        },\n    });\n\n    // highlight-start\n    const {\n        formState: { errors },\n        refineCore: { onFinish, formLoading },\n        modal: { visible, close, show },\n        register,\n        handleSubmit,\n        saveButtonProps,\n    } = useModalForm<IPost, HttpError, IPost>({\n        refineCoreProps: { action: "create" },\n    });\n    // highlight-end\n\n    const loading = tableQueryResult?.isLoading;\n\n    if (loading) {\n        return <div>Loading...</div>;\n    }\n\n    return (\n        <div>\n            {/* highlight-start */}\n            <Modal isOpen={visible} onClose={close}>\n                <form className="form" onSubmit={handleSubmit(onFinish)}>\n                    <div className="form-group">\n                        <label>Title: </label>\n                        <input\n                            {...register("title", {\n                                required: "This field is required",\n                            })}\n                        />\n                        {errors.title && <span>{errors.title.message}</span>}\n                    </div>\n                    <div className="form-group">\n                        <label>Status: </label>\n                        <select {...register("status")}>\n                            <option value="published">published</option>\n                            <option value="draft">draft</option>\n                            <option value="rejected">rejected</option>\n                        </select>\n                    </div>\n                    <button type="submit" {...saveButtonProps}>\n                        {formLoading ? "Loading" : "Save"}\n                    </button>\n                </form>\n            </Modal>\n            <button onClick={() => show()}>Create Post</button>\n            {/* highlight-end */}\n            <table>\n                <thead>\n                    <tr>\n                        <th>ID</th>\n                        <th>Title</th>\n                        <th>Status</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    {tableQueryResult.data?.data.map((post) => (\n                        <tr key={post.id}>\n                            <td>{post.id}</td>\n                            <td>{post.title}</td>\n                            <td>{post.status}</td>\n                        </tr>\n                    ))}\n                </tbody>\n            </table>\n        </div>\n    );\n};\n\nexport interface IPost {\n    id: number;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "posts",\n            list: PostList,\n        },\n    ],\n});\n\nrender(<RefineHeadlessDemo />);\n'))),(0,a.kt)(u,{value:"edit",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts",live:!0,url:"http://localhost:3000/posts"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport React from "react";\nimport { HttpError, useTable } from "@refinedev/core";\nimport { useModalForm } from "@refinedev/react-hook-form";\n\nimport { Modal, PostsTable } from "@components";\n\nconst PostList = () => {\n    const { tableQueryResult } = useTable<IPost>({\n        sorters: {\n            initial: [\n                {\n                    field: "id",\n                    order: "desc",\n                },\n            ],\n        },\n    });\n\n    // highlight-start\n    const {\n        formState: { errors },\n        refineCore: { onFinish, formLoading },\n        modal: { visible, close, show },\n        register,\n        handleSubmit,\n        saveButtonProps,\n    } = useModalForm<IPost, HttpError, IPost>({\n        refineCoreProps: { action: "edit" },\n    });\n    // highlight-end\n\n    const loading = tableQueryResult?.isLoading;\n\n    if (loading) {\n        return <div>Loading...</div>;\n    }\n\n    return (\n        <div>\n            {/* highlight-start */}\n            <Modal isOpen={visible} onClose={close}>\n                <form className="form" onSubmit={handleSubmit(onFinish)}>\n                    <div className="form-group">\n                        <label>Title: </label>\n                        <input\n                            {...register("title", {\n                                required: "This field is required",\n                            })}\n                        />\n                        {errors.title && <span>{errors.title.message}</span>}\n                    </div>\n                    <div className="form-group">\n                        <label>Status: </label>\n                        <select {...register("status")}>\n                            <option value="published">published</option>\n                            <option value="draft">draft</option>\n                            <option value="rejected">rejected</option>\n                        </select>\n                    </div>\n                    <button type="submit" {...saveButtonProps}>\n                        {formLoading ? "Loading" : "Save"}\n                    </button>\n                </form>\n            </Modal>\n            {/* highlight-end */}\n            <table>\n                <thead>\n                    <tr>\n                        <th>ID</th>\n                        <th>Title</th>\n                        <th>Status</th>\n                        <th>Actions</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    {tableQueryResult.data?.data.map((post) => (\n                        <tr key={post.id}>\n                            <td>{post.id}</td>\n                            <td>{post.title}</td>\n                            <td>{post.status}</td>\n                            <td>\n                                {/* highlight-start */}\n                                <button onClick={() => show(post.id)}>\n                                    Edit\n                                </button>\n                                {/* highlight-end */}\n                            </td>\n                        </tr>\n                    ))}\n                </tbody>\n            </table>\n        </div>\n    );\n};\n\nexport interface IPost {\n    id: number;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "posts",\n            list: PostList,\n        },\n    ],\n});\n\nrender(<RefineHeadlessDemo />);\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"refine")," doesn't automatically add a ",(0,a.kt)("inlineCode",{parentName:"p"},"<EditButton/>")," to the each record in ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostList>")," which opens edit form in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Modal>")," when clicked."),(0,a.kt)("p",{parentName:"admonition"},"So, we have to put the ",(0,a.kt)("inlineCode",{parentName:"p"},"<EditButton/>")," on our list. In that way, ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," form in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Modal>")," can fetch data by the record ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<td>\n    {/* highlight-start */}\n    <button onClick={() => show(post.id)}>Edit</button>\n    {/* highlight-end */}\n</td>\n"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Don't forget to pass the record ",(0,a.kt)("inlineCode",{parentName:"p"},'"id"')," to ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," to fetch the record data. This is necessary for both ",(0,a.kt)("inlineCode",{parentName:"p"},'"edit"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"clone"')," forms."))),(0,a.kt)(u,{value:"clone",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts",live:!0,url:"http://localhost:3000/posts"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport React from "react";\nimport { HttpError, useTable } from "@refinedev/core";\nimport { useModalForm } from "@refinedev/react-hook-form";\n\nimport { Modal, PostsTable } from "@components";\n\nconst PostList = () => {\n    const { tableQueryResult } = useTable<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "desc",\n            },\n        ],\n    });\n\n    // highlight-start\n    const {\n        formState: { errors },\n        refineCore: { onFinish, formLoading },\n        modal: { visible, close, show },\n        register,\n        handleSubmit,\n        saveButtonProps,\n    } = useModalForm<IPost, HttpError, IPost>({\n        refineCoreProps: { action: "clone" },\n    });\n    // highlight-end\n\n    const loading = tableQueryResult?.isLoading;\n\n    if (loading) {\n        return <div>Loading...</div>;\n    }\n\n    return (\n        <div>\n            {/* highlight-start */}\n            <Modal isOpen={visible} onClose={close}>\n                <form className="form" onSubmit={handleSubmit(onFinish)}>\n                    <div className="form-group">\n                        <label>Title: </label>\n                        <input\n                            {...register("title", {\n                                required: "This field is required",\n                            })}\n                        />\n                        {errors.title && <span>{errors.title.message}</span>}\n                    </div>\n                    <div className="form-group">\n                        <label>Status: </label>\n                        <select {...register("status")}>\n                            <option value="published">published</option>\n                            <option value="draft">draft</option>\n                            <option value="rejected">rejected</option>\n                        </select>\n                    </div>\n                    <button type="submit" {...saveButtonProps}>\n                        {formLoading ? "Loading" : "Save"}\n                    </button>\n                </form>\n            </Modal>\n            {/* highlight-end */}\n            <table>\n                <thead>\n                    <tr>\n                        <th>ID</th>\n                        <th>Title</th>\n                        <th>Status</th>\n                        <th>Actions</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    {tableQueryResult.data?.data.map((post) => (\n                        <tr key={post.id}>\n                            <td>{post.id}</td>\n                            <td>{post.title}</td>\n                            <td>{post.status}</td>\n                            <td>\n                                {/* highlight-start */}\n                                <button onClick={() => show(post.id)}>\n                                    Clone\n                                </button>\n                                {/* highlight-end */}\n                            </td>\n                        </tr>\n                    ))}\n                </tbody>\n            </table>\n        </div>\n    );\n};\n\nexport interface IPost {\n    id: number;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "posts",\n            list: PostList,\n        },\n    ],\n});\n\nrender(<RefineHeadlessDemo />);\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"refine")," doesn't automatically add a ",(0,a.kt)("inlineCode",{parentName:"p"},"<CloneButton/>")," to the each record in ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostList>")," which opens edit form in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Modal>")," when clicked."),(0,a.kt)("p",{parentName:"admonition"},"So, we have to put the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CloneButton/>")," on our list. In that way, ",(0,a.kt)("inlineCode",{parentName:"p"},"<Clone>")," form in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Modal>")," can fetch data by the record ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<td>\n    {/* highlight-start */}\n    <button onClick={() => show(post.id)}>clone</button>\n    {/* highlight-end */}\n</td>\n"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Don't forget to pass the record ",(0,a.kt)("inlineCode",{parentName:"p"},'"id"')," to ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," to fetch the record data. This is necessary for both ",(0,a.kt)("inlineCode",{parentName:"p"},'"edit"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"clone"')," forms.")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"See Modal component"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Modal/index.tsx"',title:'"src/components/Modal/index.tsx"'},'type ModalPropsType = {\n    isOpen: boolean;\n    onClose: () => void;\n    children: React.ReactNode;\n};\n\nconst Modal: React.FC<ModalPropsType> = ({ isOpen, onClose, children }) => {\n    if (!isOpen) return null;\n    return (\n        <>\n            <div className="overlay" onClick={onClose}></div>\n            <div className="modal">\n                <div className="modal-title">\n                    <button className="close-button" onClick={onClose}>\n                        &times;\n                    </button>\n                </div>\n                <div className="modal-content">{children}</div>\n            </div>\n        </>\n    );\n};\n')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"See styles"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/styles.css"',title:'"src/styles.css"'},"* {\n    box-sizing: border-box;\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.7);\n    z-index: 1000;\n}\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #fff;\n    z-index: 1000;\n    width: 500px;\n    overflow-y: auto;\n}\n\n.modal .modal-title {\n    display: flex;\n    justify-content: flex-end;\n    padding: 4px;\n}\n\n.modal .modal-content {\n    padding: 0px 16px 16px 16px;\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.form .form-group {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.form input,\nselect,\ntextarea {\n    width: 100%;\n    padding: 8px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"All ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," props also available in ",(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm"),". You can find descriptions on ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/#properties"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," docs."),(0,a.kt)("p",{parentName:"admonition"},"All ",(0,a.kt)("a",{parentName:"p",href:"https://react-hook-form.com/api/useform"},(0,a.kt)("inlineCode",{parentName:"a"},"React Hook Form useForm"))," props also available in ",(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm"),". You can find descriptions on ",(0,a.kt)("a",{parentName:"p",href:"https://react-hook-form.com/api/useform"},(0,a.kt)("inlineCode",{parentName:"a"},"React Hook Form"))," docs.")),(0,a.kt)("h3",{id:"defaultvalues"},(0,a.kt)("inlineCode",{parentName:"h3"},"defaultValues")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only available in ",(0,a.kt)("inlineCode",{parentName:"p"},'"create"')," form.")),(0,a.kt)("p",null,"Default values for the form. Use this to pre-populate the form with data that needs to be displayed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const modalForm = useModalForm({\n    defaultValues: {\n        title: "Hello World",\n    },\n});\n')),(0,a.kt)("h3",{id:"defaultvisible"},(0,a.kt)("inlineCode",{parentName:"h3"},"defaultVisible")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"))),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", modal will be visible by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const modalForm = useModalForm({\n    modalProps: {\n        defaultVisible: true,\n    },\n});\n")),(0,a.kt)("h3",{id:"autosubmitclose"},(0,a.kt)("inlineCode",{parentName:"h3"},"autoSubmitClose")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"true"))),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", modal will be closed after successful submit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const modalForm = useModalForm({\n    modalProps: {\n        autoSubmitClose: false,\n    },\n});\n")),(0,a.kt)("h3",{id:"autoresetform"},(0,a.kt)("inlineCode",{parentName:"h3"},"autoResetForm")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"true"))),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", form will be reset after successful submit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const modalForm = useModalForm({\n    modalProps: {\n        autoResetForm: false,\n    },\n});\n")),(0,a.kt)("h3",{id:"warnwhenunsavedchanges"},(0,a.kt)("inlineCode",{parentName:"h3"},"warnWhenUnsavedChanges")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"))),(0,a.kt)("p",null,"When you have unsaved changes and try to leave the current page, refine shows a confirmation modal box. To activate this feature."),(0,a.kt)("p",null,"You can also set this value in ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#warnwhenunsavedchanges"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const modalForm = useModalForm({\n    warnWhenUnsavedChanges: true,\n});\n")),(0,a.kt)("h3",{id:"syncwithlocation"},(0,a.kt)("inlineCode",{parentName:"h3"},"syncWithLocation")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"))),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the modals visibility state and the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the record will be synced with the URL."),(0,a.kt)("p",null,"This property can also be set as an object ",(0,a.kt)("inlineCode",{parentName:"p"},"{ key: string; syncId?: boolean }")," to customize the key of the URL query parameter. ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," will be synced with the URL only if ",(0,a.kt)("inlineCode",{parentName:"p"},"syncId")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const modalForm = useModalForm({\n    syncWithLocation: { key: "my-modal", syncId: true },\n});\n')),(0,a.kt)("h2",{id:"return-values"},"Return Values"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"All ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," return values also available in ",(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm"),". You can find descriptions on ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/#return-values"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," docs."),(0,a.kt)("p",{parentName:"admonition"},"All ",(0,a.kt)("a",{parentName:"p",href:"https://react-hook-form.com/api/useform"},(0,a.kt)("inlineCode",{parentName:"a"},"React Hook Form useForm"))," return values also available in ",(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm"),". You can find descriptions on ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/#return-values"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," docs.")),(0,a.kt)("h3",{id:"visible"},(0,a.kt)("inlineCode",{parentName:"h3"},"visible")),(0,a.kt)("p",null,"Current visibility state of the modal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const modalForm = useModalForm({\n    defaultVisible: true,\n});\n\nconsole.log(modalForm.modal.visible); // true\n")),(0,a.kt)("h3",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h3"},"title")),(0,a.kt)("p",null,"Title of the modal. Based on resource and action values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const {\n    modal: { title },\n} = useModalForm({\n    refineCoreProps: {\n        resource: "posts",\n        action: "create",\n    },\n});\n\nconsole.log(title); // "Create Post"\n')),(0,a.kt)("h3",{id:"close"},(0,a.kt)("inlineCode",{parentName:"h3"},"close")),(0,a.kt)("p",null,"A function that can close the modal. It's useful when you want to close the modal manually."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const {\n    getInputProps,\n    handleSubmit,\n    register,\n    modal,\n    refineCore: { onFinish },\n} = useModalForm();\n\nreturn (\n    <>\n        <button onClick={show}>Show Modal</button>\n        <Modal {...modal}>\n            <form onSubmit={handleSubmit(onFinish)}>\n                <div>\n                    <label>Title: </label>\n                    <input {...register("title")} />\n                </div>\n                <div>\n                    <button type="submit" onClick={modal.close}>\n                        Cancel\n                    </button>\n                    <button type="submit" onClick={modal.submit}>\n                        Save\n                    </button>\n                </div>\n            </form>\n        </Modal>\n    </>\n);\n')),(0,a.kt)("h3",{id:"submit"},(0,a.kt)("inlineCode",{parentName:"h3"},"submit")),(0,a.kt)("p",null,"A function that can submit the form. It's useful when you want to submit the form manually."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const {\n    getInputProps,\n    handleSubmit,\n    register,\n    modal,\n    refineCore: { onFinish },\n} = useModalForm();\n\n// ---\n\nreturn (\n    <>\n        <button onClick={show}>Show Modal</button>\n        <Modal {...modal}>\n            <form onSubmit={handleSubmit(onFinish)}>\n                <div>\n                    <label>Title: </label>\n                    <input {...register("title")} />\n                </div>\n                <div>\n                    <button type="submit" onClick={modal.submit}>\n                        Save\n                    </button>\n                </div>\n            </form>\n        </Modal>\n    </>\n);\n')),(0,a.kt)("h3",{id:"show"},(0,a.kt)("inlineCode",{parentName:"h3"},"show")),(0,a.kt)("p",null,"A function that can show the modal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const {\n    saveButtonProps,\n    handleSubmit,\n    register,\n    modal,\n    refineCore: { onFinish, formLoading },\n} = useModalForm();\n\nreturn (\n    <>\n        <button onClick={show}>Show Modal</button>\n        <Modal {...modal}>\n            <form onSubmit={handleSubmit(onFinish)}>\n                <div>\n                    <label>Title: </label>\n                    <input {...register("title")} />\n                </div>\n                <div>\n                    <button type="submit" {...saveButtonProps}>\n                        Save\n                    </button>\n                </div>\n            </form>\n        </Modal>\n    </>\n);\n')),(0,a.kt)("h3",{id:"savebuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"saveButtonProps")),(0,a.kt)("p",null,'It contains all the props needed by the "submit" button within the modal (disabled,loading etc.). You can manually pass these props to your custom button.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const {\n    saveButtonProps,\n    handleSubmit,\n    register,\n    modal,\n    refineCore: { onFinish, formLoading },\n} = useModalForm();\n\nreturn (\n    <>\n        <button onClick={show}>Show Modal</button>\n        <Modal {...modal}>\n            <form onSubmit={handleSubmit(onFinish)}>\n                <div>\n                    <label>Title: </label>\n                    <input {...register("title")} />\n                </div>\n                <div>\n                    <button\n                        type="submit"\n                        disabled={saveButtonProps.disabled}\n                        onClick={(e) => {\n                            // -- your custom logic\n                            saveButtonProps.onClick(e);\n                        }}\n                    >\n                        Save\n                    </button>\n                </div>\n            </form>\n        </Modal>\n    </>\n);\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(c,{module:"@refinedev/react-hook-form/useModalForm",mdxType:"PropsTable"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"*"),": These properties have default values in ",(0,a.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on the ",(0,a.kt)("strong",{parentName:"p"},"<",(0,a.kt)("a",{parentName:"strong",href:"/docs/api-reference/core/components/refine-config"},"Refine"),">")," component.")),(0,a.kt)("admonition",{title:"External Props",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It also accepts all props of ",(0,a.kt)("a",{parentName:"p",href:"https://react-hook-form.com/api/useform"},"useForm")," hook available in the ",(0,a.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},"React Hook Form"),".")),(0,a.kt)("h3",{id:"return-values-1"},"Return values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"modal"),(0,a.kt)("td",{parentName:"tr",align:null},"Relevant states and methods to control the modal"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#modalreturnvalues"},(0,a.kt)("inlineCode",{parentName:"a"},"ModalReturnValues")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"refineCore"),(0,a.kt)("td",{parentName:"tr",align:null},"The return values of the ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," in the core"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm#return-values"},(0,a.kt)("inlineCode",{parentName:"a"},"UseFormReturnValues")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"React Hook Form Return Values"),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"https://react-hook-form.com/api/useform"},"React Hook Form")," documentation"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"modalreturnvalues"},"ModalReturnValues"))),(0,a.kt)("table",{parentName:"blockquote"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"visible"),(0,a.kt)("td",{parentName:"tr",align:null},"State of modal visibility"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the visible state to true"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(id?: BaseKey) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"close"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the visible state to false"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"submit"),(0,a.kt)("td",{parentName:"tr",align:null},"Submits the form"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(values: TVariables) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"title"),(0,a.kt)("td",{parentName:"tr",align:null},"Modal title based on resource and action value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean, onClick: (e: React.BaseSyntheticEvent) => void; }")))))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(h,{path:"form-react-hook-form-use-modal-form",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);