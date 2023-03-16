"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={id:"useLogin",title:"useLogin",siderbar_label:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication.",source:"/packages/core/src/hooks/auth/useLogin/index.ts"},a=void 0,s={unversionedId:"api-reference/core/hooks/auth/useLogin",id:"api-reference/core/hooks/auth/useLogin",title:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication.",source:"@site/docs/api-reference/core/hooks/auth/useLogin.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useLogin",permalink:"/docs/api-reference/core/hooks/auth/useLogin",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/auth/useLogin.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1678975056,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"useLogin",title:"useLogin",siderbar_label:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication.",source:"/packages/core/src/hooks/auth/useLogin/index.ts"},sidebar:"someSidebar",previous:{title:"useGetIdentity",permalink:"/docs/api-reference/core/hooks/auth/useGetIdentity"},next:{title:"useLogout",permalink:"/docs/api-reference/core/hooks/auth/useLogout"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Redirection after login",id:"redirection-after-login",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," calls ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,o.kt)("p",null,"It returns the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation")," which includes many properties, some of which being isSuccess and isError."),(0,o.kt)("p",null,"Data that is resolved from ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," will be returned as the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,o.kt)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values ",(0,o.kt)("inlineCode",{parentName:"li"},'{ name: "Login Error", message: "Invalid credentials" }'),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If has a value, the app will be redirected to the given URL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error"),": If has a value, a notification will be shown with the error message and name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Normally refine provides a default login page. If you prefer to use this default login page, there is no need to handle login flow manually.",(0,o.kt)("br",{parentName:"p"}),"\n","If we want to build a custom login page instead of the default one that comes with ",(0,o.kt)("strong",{parentName:"p"},"refine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," can be used like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customLoginPage"',title:'"pages/customLoginPage"'},'import { useLogin } from "@refinedev/core";\nimport { Form } from "antd";\n\ntype LoginVariables = {\n    username: string;\n    password: string;\n};\n\nexport const LoginPage = () => {\n    const { mutate: login } = useLogin<LoginVariables>();\n\n    const onSubmit = (values: LoginVariables) => {\n        login(values);\n    };\n\n    return <Form onFinish={onSubmit}>// rest of the login form</Form>;\n};\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," can accept any kind of object for values since ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,o.kt)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: login } = useLogin<{ username: string; password: string }>();\n"))),(0,o.kt)("h2",{id:"redirection-after-login"},"Redirection after login"),(0,o.kt)("p",null,"A custom URL can be given to mutate the function from the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," hook if you want to redirect yourself to a certain URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogin } from "@refinedev/core";\n\nconst { mutate: login } = useLogin();\n\nlogin({ redirectPath: "/custom-url" });\n')),(0,o.kt)("p",null,"Then, you can handle this URL in your ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    login: async ({ redirectPath }) => {\n        // ---\n        return {\n            success: true,\n            redirectTo: redirectPath,\n        };\n    },\n};\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}p.isMDXComponent=!0}}]);