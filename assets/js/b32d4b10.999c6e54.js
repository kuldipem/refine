"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(r),c=n,m=h["".concat(p,".").concat(c)]||h[c]||l[c]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},23393:(e,t,r)=>{r.d(t,{ZP:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={toc:[]};function i(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the following auth provider examples as a starting point for your own auth provider or you can use them as it is. Check the links below to see the details of each example."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/authentication/headless/"},"Basic")," - A basic auth provider example."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/keycloak"},"Keycloak")," - An auth provider example with Keycloak."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/auth0"},"Auth0")," - An auth provider example with Auth0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/google-auth"},"Google Auth")," - An auth provider example with Google Auth."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/otpLogin"},"OTP Login")," - An auth provider example with OTP Login."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/appwrite"},"Appwrite")," - An auth provider example with Appwrite."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/supabase"},"Supabase")," - An auth provider example with Supabase."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/strapi-v4"},"Strapi")," - An auth provider example with Strapi."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/strapi-graphql"},"Strapi Graphql")," - An auth provider example with Strapi Graphql."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/nhost"},"Nhost")," - An auth provider example with Nhost."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/next-js/"},"Basic with Nextjs")," - A basic auth provider example with Nextjs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/remix/remix-headless"},"Basic with Remix")," - A basic auth provider example with Remix.")))}i.isMDXComponent=!0},31994:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(23393);const i={id:"index",title:"1. Auth Provider",tutorial:{order:0,prev:!1,next:"tutorial/understanding-authprovider/create-authprovider"}},s=void 0,p={unversionedId:"tutorial/understanding-authprovider/index",id:"tutorial/understanding-authprovider/index",title:"1. Auth Provider",description:"What is auth provider?",source:"@site/docs/tutorial/5-understanding-authprovider/0-intro.md",sourceDirName:"tutorial/5-understanding-authprovider",slug:"/tutorial/understanding-authprovider/index",permalink:"/docs/tutorial/understanding-authprovider/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/5-understanding-authprovider/0-intro.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1678975056,formattedLastUpdatedAt:"Mar 16, 2023",sidebarPosition:0,frontMatter:{id:"index",title:"1. Auth Provider",tutorial:{order:0,prev:!1,next:"tutorial/understanding-authprovider/create-authprovider"}}},u={},d=[{value:"What is auth provider?",id:"what-is-auth-provider",level:2},{value:"Using Auth Providers in refine",id:"using-auth-providers-in-refine",level:2},{value:"How are auth provider methods used in the app?",id:"how-are-auth-provider-methods-used-in-the-app",level:2},{value:"Auth Provider Examples",id:"auth-provider-examples",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},h=l("Checklist"),c=l("ChecklistItem"),m={toc:d};function v(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-auth-provider"},"What is auth provider?"),(0,n.kt)("p",null,"Auth provider is an object which contains methods to handle authentication and authorization in your app. It provides a way to authenticate users and authorize them to access resources. ",(0,n.kt)("strong",{parentName:"p"},"refine")," consumes these methods via auth hooks."),(0,n.kt)("p",null,"Auth provider's methods expect to return a Promise. So, you can use async methods to create auth provider. Therefore, to create auth provider from scratch, you can use any third-party authentication service like Auth0, Okta, etc. or your own custom methods. We'll see how to create auth provider in the next sections."),(0,n.kt)("p",null,"Moreover, ",(0,n.kt)("strong",{parentName:"p"},"refine")," offers built-in examples for auth providers. You can use them as a starting point for your own auth provider. You can check ",(0,n.kt)("a",{parentName:"p",href:"#auth-provider-examples"},"Auth Provider Examples")," to see the list of examples."),(0,n.kt)("p",null,"The typical auth provider has the following methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // required methods\n    login: async (params: any) => ({}),\n    check: async (params: any) => ({}),\n    logout: async (params: any) => ({}),\n    onError: async (params: any) => ({}),\n    // optional methods\n    register: async (params: any) => ({}),\n    forgotPassword: async (params: any) => ({}),\n    updatePassword: async (params: any) => ({}),\n    getPermissions: async (params: any) => ({}),\n    getIdentity: async (params?: any) => ({}),\n};\n')),(0,n.kt)("p",null,"These methods are used to perform auth operations by ",(0,n.kt)("strong",{parentName:"p"},"refine")," hooks. You can check ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/"},"Auth Provider")," documentation to see the details of each method."),(0,n.kt)("h2",{id:"using-auth-providers-in-refine"},"Using Auth Providers in refine"),(0,n.kt)("p",null,"When you create a new auth provider, you need to pass it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component as a prop. So, ",(0,n.kt)("strong",{parentName:"p"},"refine")," can use to handle authentication."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'// ---\nimport { AuthBindings, Refine } from "@refinedev/core";\n\n// It is a mock auth provider.\nconst authProvider: AuthBindings = {\n    // required methods\n    login: async (params: any) => ({}),\n    check: async (params: any) => ({}),\n    logout: async (params: any) => ({}),\n    onError: async (params: any) => ({}),\n};\n\n<Refine\n    // ---\n    authProvider={authProvider}\n/>;\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"<Refine/>")," documentation for more information ","\u2192")),(0,n.kt)("h2",{id:"how-are-auth-provider-methods-used-in-the-app"},"How are auth provider methods used in the app?"),(0,n.kt)("p",null,"Each method of auth provider is corresponding to a hook in ",(0,n.kt)("strong",{parentName:"p"},"refine"),". So, you can use these hooks to perform auth operations in your app. You can check ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/auth/useIsAuthenticated/"},"Auth Hooks")," documentation to see the details of each hook."),(0,n.kt)("p",null,"For example, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"useLogin")," hook to perform login operation like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogin } from "@refinedev/core";\n\ntype LoginVariables = {\n    email: string;\n    password: string;\n};\n\nconst { mutate } = useLogin<LoginVariables>();\n\nconst handleLogin = async (values) => {\n    await mutate(values);\n};\n')),(0,n.kt)("p",null,"As you can see, ",(0,n.kt)("inlineCode",{parentName:"p"},"useLogin")," hook returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," function. When you call this function, it calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"login")," method of auth provider like the below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    login: ({ email, password }) => {\n        const response = await axios.post("/api/login", { email, password });\n\n        if (response.status === 200) {\n            return {\n                success: true,\n                redirectTo: "/",\n            };\n        }\n\n        return {\n            success: false,\n            error: new Error("Invalid credentials"),\n        };\n    },\n    // ---\n};\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We made an example to show the relationship between auth provider methods and auth hooks. We used the ",(0,n.kt)("inlineCode",{parentName:"p"},"useLogin")," hook in the example, but all auth hooks work the same way.")),(0,n.kt)("h2",{id:"auth-provider-examples"},"Auth Provider Examples"),(0,n.kt)(o.ZP,{mdxType:"AuthProviderExamplesLinks"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(h,{mdxType:"Checklist"},(0,n.kt)(c,{id:"auth-provider-intro",mdxType:"ChecklistItem"},"I understood what is auth provider and how it works."),(0,n.kt)(c,{id:"auth-provider-intro-2",mdxType:"ChecklistItem"},"I learned that refine offers built-in auth provider examples.")))}v.isMDXComponent=!0}}]);