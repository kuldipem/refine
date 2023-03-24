"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"live-provider",title:"Live Provider",sidebar_label:"Live Provider"},o=void 0,l={unversionedId:"api-reference/core/providers/live-provider",id:"api-reference/core/providers/live-provider",title:"Live Provider",description:"Overview",source:"@site/docs/api-reference/core/providers/live-provider.md",sourceDirName:"api-reference/core/providers",slug:"/api-reference/core/providers/live-provider",permalink:"/docs/api-reference/core/providers/live-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/providers/live-provider.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1679647522,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"live-provider",title:"Live Provider",sidebar_label:"Live Provider"},sidebar:"someSidebar",previous:{title:"i18n Provider",permalink:"/docs/api-reference/core/providers/i18n-provider"},next:{title:"Notification Provider",permalink:"/docs/api-reference/core/providers/notification-provider"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Creating a live provider",id:"creating-a-live-provider",level:2},{value:"<code>subscribe</code>",id:"subscribe",level:3},{value:"Parameter Types",id:"parameter-types",level:4},{value:"Return Type",id:"return-type",level:4},{value:"<code>unsubscribe</code>",id:"unsubscribe",level:3},{value:"Parameter Types",id:"parameter-types-1",level:4},{value:"Return Type",id:"return-type-1",level:4},{value:"<code>publish</code>",id:"publish",level:3},{value:"Parameter Types",id:"parameter-types-2",level:4},{value:"Return Type",id:"return-type-2",level:4},{value:"<code>liveMode</code>",id:"livemode",level:2},{value:"Usage in <code>&lt;Refine&gt;</code>:",id:"usage-in-refine",level:4},{value:"Usage in a hook:",id:"usage-in-a-hook",level:4},{value:"<code>auto</code>",id:"auto",level:3},{value:"<code>manual</code>",id:"manual",level:3},{value:"<code>off</code>",id:"off",level:3},{value:"<code>onLiveEvent</code>",id:"onliveevent",level:2},{value:"<code>&lt;Refine&gt;</code>",id:"refine",level:3},{value:"Hooks",id:"hooks",level:3},{value:"Supported Hooks",id:"supported-hooks",level:2},{value:"Supported Hooks Subscriptions",id:"supported-hooks-subscriptions",level:2},{value:"<code>useList</code>",id:"uselist",level:3},{value:"<code>useOne</code>",id:"useone",level:3},{value:"<code>useMany</code>",id:"usemany",level:3},{value:"Publish Events from Hooks",id:"publish-events-from-hooks",level:2},{value:"<code>useCreate</code>",id:"usecreate",level:3},{value:"<code>useCreateMany</code>",id:"usecreatemany",level:3},{value:"<code>useDelete</code>",id:"usedelete",level:3},{value:"<code>useDeleteMany</code>",id:"usedeletemany",level:3},{value:"<code>useUpdate</code>",id:"useupdate",level:3},{value:"<code>useUpdateMany</code>",id:"useupdatemany",level:3},{value:"Publish Events from API",id:"publish-events-from-api",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," lets you add Realtime support to your app via ",(0,r.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop for ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>")),". It can be used to update and show data in Realtime throughout your app. ",(0,r.kt)("strong",{parentName:"p"},"refine")," remains agnostic in its API to allow different solutions(",(0,r.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably"),", ",(0,r.kt)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mercure.rocks/"},"Mercure"),", ",(0,r.kt)("a",{parentName:"p",href:"https://supabase.com"},"supabase"),", ",(0,r.kt)("a",{parentName:"p",href:"https://hasura.io/"},"Hasura"),", GraphQL Subscriptions, etc.) to be integrated."),(0,r.kt)("p",null,"A live provider must include following methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const liveProvider = {\n    subscribe: ({ channel, params: { ids }, types, callback }) => any,\n    unsubscribe: (subscription) => void,\n    publish?: (event) => void,\n};\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"refine")," uses these methods in ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/live/useSubscription"},(0,r.kt)("inlineCode",{parentName:"a"},"useSubscription"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/live/usePublish"},(0,r.kt)("inlineCode",{parentName:"a"},"usePublish")),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"refine")," includes out-of-the-box live providers to use in your projects like:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ably")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/ably/src/index.ts"},"Source Code")," - ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/master/examples/live-provider-ably/?view=preview&theme=dark&codemirror=1"},"Demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Supabase")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/supabase/src/index.ts#L187"},"Source Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Appwrite")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/appwrite/src/index.ts#L252"},"Source Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hasura")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/hasura/src/liveProvider/index.ts#L16"},"Source Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nhost")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/nhost/src/liveProvider/index.ts#L16"},"Source Code")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You must pass a live provider to the ",(0,r.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop of ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\n\nimport liveProvider from "./liveProvider";\n\nconst App: React.FC = () => {\n    return <Refine liveProvider={liveProvider} />;\n};\n')),(0,r.kt)("h2",{id:"creating-a-live-provider"},"Creating a live provider"),(0,r.kt)("p",null,"We will build ",(0,r.kt)("strong",{parentName:"p"},'"Ably Live Provider"')," of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/ably"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/ably"))," from scratch to show the logic of how live provider methods interact with Ably."),(0,r.kt)("h3",{id:"subscribe"},(0,r.kt)("inlineCode",{parentName:"h3"},"subscribe")),(0,r.kt)("p",null,"This method is used to subscribe to a Realtime channel. ",(0,r.kt)("strong",{parentName:"p"},"refine")," subscribes to the related channels using subscribe method in supported hooks. This way it can be aware of data changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="liveProvider.ts"',title:'"liveProvider.ts"'},'import { LiveProvider, LiveEvent } from "@refinedev/core";\nimport Ably from "ably/promises";\nimport { Types } from "ably";\n\ninterface MessageType extends Types.Message {\n    data: LiveEvent;\n}\n\nconst liveProvider = (client: Ably.Realtime): LiveProvider => {\n    return {\n        // highlight-start\n        subscribe: ({ channel, types, params, callback }) => {\n            const channelInstance = client.channels.get(channel);\n\n            const listener = function (message: MessageType) {\n                if (types.includes("*") || types.includes(message.data.type)) {\n                    if (\n                        message.data.type !== "created" &&\n                        params?.ids !== undefined &&\n                        message.data?.payload?.ids !== undefined\n                    ) {\n                        if (\n                            params.ids.filter((value) =>\n                                message.data.payload.ids!.includes(value),\n                            ).length > 0\n                        ) {\n                            callback(message.data as LiveEvent);\n                        }\n                    } else {\n                        callback(message.data);\n                    }\n                }\n            };\n            channelInstance.subscribe(listener);\n\n            return { channelInstance, listener };\n        },\n        // highlight-end\n    };\n};\n')),(0,r.kt)("h4",{id:"parameter-types"},"Parameter Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"types"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'Array<"deleted"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"updated"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"created"')," ","|",' "',(0,r.kt)("inlineCode",{parentName:"td"},"*"),'" ',"|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["*"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ids?: string[]; [key: string]: any;}")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(event: LiveEvent) => void;")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#liveevent"},(0,r.kt)("inlineCode",{parentName:"a"},"LiveEvent")))),(0,r.kt)("h4",{id:"return-type"},"Return Type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The values returned from the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method are passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe")," method. Thus values needed for ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscription")," must be returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method.")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," will use this subscribe method in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/live/useSubscription"},(0,r.kt)("inlineCode",{parentName:"a"},"useSubscription"))," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useSubscription } from "@refinedev/core";\n\nuseSubscription({\n    channel: "channel-name",\n    onLiveEvent: (event) => {},\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/live/useSubscription"},"Refer to the useSubscription documentation for more information. ","\u2192"))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"unsubscribe"},(0,r.kt)("inlineCode",{parentName:"h3"},"unsubscribe")),(0,r.kt)("p",null,"This method is used to unsubscribe from a channel. The values returned from the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method are passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="liveProvider.ts"',title:'"liveProvider.ts"'},"const liveProvider = (client: Ably.Realtime): LiveProvider => {\n    return {\n        // highlight-start\n        unsubscribe: (payload: {\n            channelInstance: Types.RealtimeChannelPromise;\n            listener: () => void;\n        }) => {\n            const { channelInstance, listener } = payload;\n            channelInstance.unsubscribe(listener);\n        },\n        // highlight-end\n    };\n};\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you don't handle unsubscription it could lead to memory leaks.")),(0,r.kt)("h4",{id:"parameter-types-1"},"Parameter Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscription"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"The values returned from the ",(0,r.kt)("inlineCode",{parentName:"td"},"subscribe"))))),(0,r.kt)("h4",{id:"return-type-1"},"Return Type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"publish"},(0,r.kt)("inlineCode",{parentName:"h3"},"publish")),(0,r.kt)("p",null,"This method is used to publish an event on client side. Beware that publishing events on client side is not recommended and best practice is to publish events from server side. You can refer ",(0,r.kt)("a",{parentName:"p",href:"#publish-events-from-api"},"Publish Events from API")," to see which events must be published from the server."),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," is used in ",(0,r.kt)("a",{parentName:"p",href:"#publish-events-from-hooks"},"realated hooks"),". When ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," is used, subscribers to these events are notified. You can also publish your custom events using ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/live/usePublish"},(0,r.kt)("inlineCode",{parentName:"a"},"usePublish")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="liveProvider.ts"',title:'"liveProvider.ts"'},"const liveProvider = (client: Ably.Realtime): LiveProvider => {\n    return {\n        // highlight-start\n        publish: (event: LiveEvent) => {\n            const channelInstance = client.channels.get(event.channel);\n\n            channelInstance.publish(event.type, event);\n        },\n        // highlight-end\n    };\n};\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," is used on client side you must handle the security of it by yourself.")),(0,r.kt)("h4",{id:"parameter-types-2"},"Parameter Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LiveEvent"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#liveevent"},(0,r.kt)("inlineCode",{parentName:"a"},"LiveEvent")))),(0,r.kt)("h4",{id:"return-type-2"},"Return Type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," will provide this publish method via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/live/usePublish"},(0,r.kt)("inlineCode",{parentName:"a"},"usePublish"))," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { usePublish } from "@refinedev/core";\n\nconst publish = usePublish();\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/live/usePublish"},"Refer to the usePublish documentation for more information. ","\u2192"))),(0,r.kt)("h2",{id:"livemode"},(0,r.kt)("inlineCode",{parentName:"h2"},"liveMode")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"liveMode")," must be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," or ",(0,r.kt)("a",{parentName:"p",href:"#supported-hooks"},"supported hooks")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"liveProvider")," to work. If it's not provided live features won't be activated. Passing it to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," configures it app wide and hooks will use this option. It can also be passed to hooks directly without passing to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," for detailed configuration. If both are provided value passed to the hook will override the value at ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.kt)("h4",{id:"usage-in-refine"},"Usage in ",(0,r.kt)("inlineCode",{parentName:"h4"},"<Refine>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'// ...\n\nconst App: React.FC = () => {\n    return (\n        <Refine liveProvider={liveProvider} options={{ liveMode: "auto" }} />\n    );\n};\n')),(0,r.kt)("h4",{id:"usage-in-a-hook"},"Usage in a hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data } = useList({ liveMode: "auto" });\n')),(0,r.kt)("h3",{id:"auto"},(0,r.kt)("inlineCode",{parentName:"h3"},"auto")),(0,r.kt)("p",null,"Queries of related resource are invalidated in Realtime as new events from subscription arrive.\nFor example data from a ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook will be automatically updated when data is changed."),(0,r.kt)("h3",{id:"manual"},(0,r.kt)("inlineCode",{parentName:"h3"},"manual")),(0,r.kt)("p",null,"Queries of related resource are ",(0,r.kt)("strong",{parentName:"p"},"not invalidated")," in Realtime, instead ",(0,r.kt)("a",{parentName:"p",href:"#onliveevent"},(0,r.kt)("inlineCode",{parentName:"a"},"onLiveEvent"))," is run with the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," as new events from subscription arrive.\nFor example while in an edit form, it would be undesirable for data shown to change. ",(0,r.kt)("inlineCode",{parentName:"p"},"manual")," mode can be used to prevent data from changing."),(0,r.kt)("h3",{id:"off"},(0,r.kt)("inlineCode",{parentName:"h3"},"off")),(0,r.kt)("p",null,"Disables live mode.\nFor example it can be used to disable some parts of the app if you have app wide live mode configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.kt)("h2",{id:"onliveevent"},(0,r.kt)("inlineCode",{parentName:"h2"},"onLiveEvent")),(0,r.kt)("p",null,"Callback that is run when new events from subscription arrive. It can be passed to both ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," and ",(0,r.kt)("a",{parentName:"p",href:"#supported-hooks"},"supported hooks"),"."),(0,r.kt)("h3",{id:"refine"},(0,r.kt)("inlineCode",{parentName:"h3"},"<Refine>")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onLiveEvent")," passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," will run every time when a new event occurs if ",(0,r.kt)("inlineCode",{parentName:"p"},"liveMode")," is not ",(0,r.kt)("inlineCode",{parentName:"p"},"off"),". It can be used for actions that are generally applicable to all events from active subscriptions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'// ...\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            liveProvider={liveProvider}\n            options={{ liveMode: "auto" }}\n            onLiveEvent={(event) => {\n                // Put your own logic based on event\n            }}\n        />\n    );\n};\n')),(0,r.kt)("h3",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onLiveEvent")," passed to hooks runs when ",(0,r.kt)("inlineCode",{parentName:"p"},"liveMode")," is not ",(0,r.kt)("inlineCode",{parentName:"p"},"off"),". It is run with the event for related channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data } = useList({\n    liveMode: "manual",\n    onLiveEvent: (event) => {\n        // Put your own logic based on event\n    },\n});\n')),(0,r.kt)("h2",{id:"supported-hooks"},"Supported Hooks"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Supported data hooks"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported form hooks"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported other hooks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/data/useList/"},(0,r.kt)("inlineCode",{parentName:"a"},"useList")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useTable"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable")," ","\u2192"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/data/useOne/"},(0,r.kt)("inlineCode",{parentName:"a"},"useOne")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/antd/hooks/form/useModalForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useModalForm")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/antd/hooks/table/useEditableTable"},(0,r.kt)("inlineCode",{parentName:"a"},"useEditableTable")," ","\u2192"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/data/useMany/"},(0,r.kt)("inlineCode",{parentName:"a"},"useMany")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/antd/hooks/form/useDrawerForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useDrawerForm")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/antd/hooks/list/useSimpleList"},(0,r.kt)("inlineCode",{parentName:"a"},"useSimpleList")," ","\u2192"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/antd/hooks/form/useStepsForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useStepsForm")," ","\u2192")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/show/useShow"},(0,r.kt)("inlineCode",{parentName:"a"},"useShow")," ","\u2192"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/antd/hooks/field/useCheckboxGroup"},(0,r.kt)("inlineCode",{parentName:"a"},"useCheckboxGroup")," ","\u2192"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useSelect/"},(0,r.kt)("inlineCode",{parentName:"a"},"useSelect")," ","\u2192"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/antd/hooks/field/useRadioGroup"},(0,r.kt)("inlineCode",{parentName:"a"},"useRadioGroup")," ","\u2192"))))),(0,r.kt)("h2",{id:"supported-hooks-subscriptions"},"Supported Hooks Subscriptions"),(0,r.kt)("p",null,"Supported hooks subscribe in the following way:"),(0,r.kt)("h3",{id:"uselist"},(0,r.kt)("inlineCode",{parentName:"h3"},"useList")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'useList({ resource: "posts" });\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    types: ["*"],\n    channel: "resources/posts"\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Following hooks uses ",(0,r.kt)("inlineCode",{parentName:"p"},"useList")," under the hood and subscribe to same event."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useTable"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/hooks/table/useEditableTable"},(0,r.kt)("inlineCode",{parentName:"a"},"useEditableTable"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/hooks/list/useSimpleList"},(0,r.kt)("inlineCode",{parentName:"a"},"useSimpleList"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/hooks/field/useCheckboxGroup"},(0,r.kt)("inlineCode",{parentName:"a"},"useCheckboxGroup"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useSelect/"},(0,r.kt)("inlineCode",{parentName:"a"},"useSelect"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/hooks/field/useRadioGroup"},(0,r.kt)("inlineCode",{parentName:"a"},"useRadioGroup"))))),(0,r.kt)("h3",{id:"useone"},(0,r.kt)("inlineCode",{parentName:"h3"},"useOne")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'useOne({ resource: "posts", id: "1" });\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    types: ["*"],\n    channel: "resources/posts",\n    params: { ids: ["1"] }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Following hooks uses ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne")," under the hood and subscribe to same event."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/hooks/form/useModalForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useModalForm"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/hooks/form/useDrawerForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useDrawerForm"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/hooks/form/useStepsForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useStepsForm"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/show/useShow"},(0,r.kt)("inlineCode",{parentName:"a"},"useShow"))))),(0,r.kt)("h3",{id:"usemany"},(0,r.kt)("inlineCode",{parentName:"h3"},"useMany")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'useMany({ resource: "posts", ids: ["1", "2"] });\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    types: ["*"],\n    channel: "resources/posts"\n    params: { ids: ["1", "2"] }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Following hooks uses ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," under the hood and subscribe to same event."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useSelect/"},(0,r.kt)("inlineCode",{parentName:"a"},"useSelect"))))),(0,r.kt)("h2",{id:"publish-events-from-hooks"},"Publish Events from Hooks"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," publishes these events in the hooks. Let's see usage of hooks and what kind of events are published:"),(0,r.kt)("h3",{id:"usecreate"},(0,r.kt)("inlineCode",{parentName:"h3"},"useCreate")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useCreate();\n\nmutate({\n    resource: "posts",\n    values: {\n        title: "New Post",\n    },\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Published event"',title:'"Published','event"':!0},'{\n    channel: `resources/posts`,\n    type: "created",\n    payload: {\n        ids: ["id-of-created-post"]\n    },\n    date: new Date(),\n}\n')),(0,r.kt)("h3",{id:"usecreatemany"},(0,r.kt)("inlineCode",{parentName:"h3"},"useCreateMany")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useCreateMany();\n\nmutate({\n    resource: "posts",\n    values: [\n        {\n            title: "New Post",\n        },\n        {\n            title: "Another New Post",\n        },\n    ],\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Published event"',title:'"Published','event"':!0},'{\n    channel: `resources/posts`,\n    type: "created",\n    payload: {\n        ids: ["id-of-new-post", "id-of-another-new-post"]\n    },\n    date: new Date(),\n}\n')),(0,r.kt)("h3",{id:"usedelete"},(0,r.kt)("inlineCode",{parentName:"h3"},"useDelete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useDelete();\n\nmutate({\n    resource: "posts",\n    id: "1",\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Published event"',title:'"Published','event"':!0},'{\n    channel: `resources/posts`,\n    type: "deleted",\n    payload: {\n        ids: ["1"]\n    },\n    date: new Date(),\n}\n')),(0,r.kt)("h3",{id:"usedeletemany"},(0,r.kt)("inlineCode",{parentName:"h3"},"useDeleteMany")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useDeleteMany();\n\nmutate({\n    resource: "posts",\n    ids: ["1", "2"],\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Published event"',title:'"Published','event"':!0},'{\n    channel: `resources/posts`,\n    type: "deleted",\n    payload: {\n        ids: ["1", "2"]\n    },\n    date: new Date(),\n}\n')),(0,r.kt)("h3",{id:"useupdate"},(0,r.kt)("inlineCode",{parentName:"h3"},"useUpdate")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useUpdate();\n\nmutate({\n    resource: "posts",\n    id: "2",\n    values: { title: "New Post Title" },\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Published event"',title:'"Published','event"':!0},'{\n    channel: `resources/posts`,\n    type: "updated",\n    payload: {\n        ids: ["1"]\n    },\n    date: new Date(),\n}\n')),(0,r.kt)("h3",{id:"useupdatemany"},(0,r.kt)("inlineCode",{parentName:"h3"},"useUpdateMany")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useUpdateMany();\n\nmutate({\n    resource: "posts",\n    ids: ["1", "2"],\n    values: { title: "New Post Title" },\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Published event"',title:'"Published','event"':!0},'{\n    channel: `resources/posts`,\n    type: "updated",\n    payload: {\n        ids: ["1", "2"]\n    },\n    date: new Date(),\n}\n')),(0,r.kt)("h2",{id:"publish-events-from-api"},"Publish Events from API"),(0,r.kt)("p",null,"Publishing in client side must be avoided generally. It's recommended to handle it in server side. Events published from the server must be in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When creating a record:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    channel: `resources/${resource}`,\n    type: "created",\n    payload: {\n        ids: [id]\n    },\n    date: new Date(),\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When deleting a record:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    channel: `resources/${resource}`,\n    type: "deleted",\n    payload: {\n        ids: [id]\n    },\n    date: new Date(),\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When updating a record:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    channel: `resources/${resource}`,\n    type: "updated",\n    payload: {\n        ids: [id]\n    },\n    date: new Date(),\n}\n')))}u.isMDXComponent=!0}}]);