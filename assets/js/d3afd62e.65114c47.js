(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92323],{2199:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>R});var n=r(67294),a=r(37085),l=r(35742),i=r(16324),o=r(86010),s=r(97903),c=r(87462);const m={blue:"text-white text-center bg-gradient-to-l from-[#1890FF] to-[#47EBF5]  border-0",white:"text-[#1890FF] bg-white rounded-[4px] cursor-pointer border border-solid border-[#EDEDEF]"},f=e=>{let{className:t,href:r,variant:a="blue",children:l,...i}=e;return n.createElement("a",(0,c.Z)({href:r,target:"_blank",rel:"noopener noreferrer",className:`shadow-startTiles appearance-none flex items-center justify-center no-underline font-bold font-montserrat text-sm h-8 w-44 rounded-[4px] cursor-pointer ${m[a]} ${t}`},i),l)},d={blue:"text-white text-center bg-gradient-to-l from-[#1890FF] to-[#47EBF5]  border-0",white:"text-[#1890FF] bg-white rounded-[4px] cursor-pointer border border-solid border-[#EDEDEF]"},u=e=>{let{className:t,variant:r="blue",children:a,...l}=e;return n.createElement("button",(0,c.Z)({className:`shadow-startTiles appearance-none flex items-center justify-center no-underline font-bold font-montserrat text-sm h-8 w-44 rounded-[4px] cursor-pointer ${d[r]} ${t}`},l),a)};var p=r(25671),x=r.n(p),h="twttr",g=h,b=!("undefined"==typeof window||!window.document||!window.document.createElement);function w(){return new Promise((function(e,t){var r=function(){return t(new Error("Could not load remote twitter widgets js"))};x().isDefined(g)||x()("https://platform.twitter.com/widgets.js",g),x().ready(g,{success:function(){var t=window.twttr;t&&t.widgets||r(),e(t.widgets)},error:r})}))}function E(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function v(e){var t=(0,n.useRef)();return function(e,t){if(E(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var a=0;a<r.length;a++)if(!Object.prototype.hasOwnProperty.call(t,r[a])||!E(e[r[a]],t[r[a]]))return!1;return!0}(e,t.current)||(t.current=e),t.current}function N(e){return"object"==typeof e?Object.assign({},e):e}var k="twdiv";function y(e,t,r,a){var l=(0,n.useState)(null),i=l[0],o=l[1],s=(0,n.useRef)(null);if(!b)return{ref:s,error:i};var c=[e,v(t),v(r)];return(0,n.useEffect)((function(){o(null);var n,l,i=!1;if(s.current){if(n=s.current,l=k,n&&n.querySelectorAll("*").forEach((function(e){e.hasAttribute(l)&&e.remove()})),!s||!s.current)return;var c=document.createElement("div");c.setAttribute(k,"yes"),s.current.appendChild(c),w().then((function(n){return n[e](N(t),c,N(r))})).then((function(e){if(!e&&!i)throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");s&&s.current&&(i?c&&c.remove():a&&a())})).catch((function(e){console.error(e),o(e)}))}return function(){i=!0}}),c),{ref:s,error:i}}var A=function(e){var t=e.tweetId,r=e.options,a=e.onLoad,l=e.renderError,i=y("createTweet",t,r,a),o=i.ref,s=i.error;return n.createElement("div",{ref:o},s&&l&&l(s))};const C=[{date:"14th February 2023",title:"Pilot & refine architecture",description:'Overview about <strong className="font-bold">refine</strong> and <strong className="font-bold">Supabase</strong> the app we built during the article series',link:"https://refine.dev/blog/refine-pixels-1/"},{date:"15th February 2023",title:"Setting Up the Client App",description:'We start with setting up the Pixels client app using <strong className="font-bold">create refine-app</strong> by choosing <strong className="font-bold">Ant Design</strong> as a UI framework and <strong className="font-bold">Supabase</strong> as a dataprovider',link:"https://refine.dev/blog/refine-pixels-2/"},{date:"16th February 2022",title:"Adding CRUD Actions & Authentication",description:'We start implementing CRUD functionalities like creating, showing a canvas, drawing pixels and user authentication using <strong className="font-bold">Supabase</strong>',link:"https://refine.dev/blog/refine-pixels-3/"},{date:"17th February 2022",title:"Adding Realtime Collaboration",description:'Adding <strong className="font-bold">Supabase</strong> as live provider to the project in order that multiple users drawing on the same canvas can see each other\'s paintings in real-time.',link:"https://refine.dev/blog/refine-pixels-4/"},{date:"18th February 2022",title:"Initialize and Build Pixels Admin App",description:"We'll implement an admin dashboard app and explore how refine's Ant Design support module is geared to rapidly build CRUD pages for a refine app",link:"https://refine.dev/blog/refine-pixels-5/"},{date:"19th February 2022",title:"Add Role Based Authorization",description:"We'll implement Role Based Access Control (RBAC) on our Pixels Admin app.",link:"https://refine.dev/blog/refine-pixels-6/"},{date:"20th February 2022",title:"Implementing Audit Logs",description:'We\'ll record each canvas creation and pixel drawings to audit logs table in <strong className="font-bold">Supabase</strong>. And then we\u2019ll be able to display this logs on the admin and the client app.',link:"https://refine.dev/blog/refine-pixels-7/"}],F=[{title:"join our",label:"discord server",icon:n.createElement(s.D7,{color:"#ffffff",width:"36",height:"36"}),link:"https://discord.gg/refine",color:"#5865F2"},{title:"visit our",label:"github repo",icon:n.createElement(s.ET,{color:"#ffffff",width:"36",height:"36"}),link:"https://github.com/refinedev/refine",color:"#242436"},{title:"follow us",label:"on twitter",icon:n.createElement(s.Zm,{color:"#ffffff",width:"36",height:"36"}),link:"https://twitter.com/refine_dev",color:"#00AAEC"},{title:"follow us",label:"on reddit",icon:n.createElement(s.MP,{color:"#ffffff",width:"36",height:"36"}),link:"https://reddit.com/r/refine",color:"#FF4500"}],j=["1625488050863353856","1615260152822628352","1621513516036526080","1621932348009861132","1597878371760979970","1616390215068688384","1617841995233529861","1620724625536880641","1618180208414322689","1624015381403955200"],R=()=>{const e=(0,n.useRef)(null),t=(0,n.useMemo)((()=>C.findIndex((e=>!e.link))-1),[]);return n.createElement(a.Z,null,n.createElement(l.Z,{title:"Week of Refine | refine"},n.createElement("html",{"data-page":"week-of-refine","data-customized":"true"})),n.createElement("div",{className:"relative px-2 pt-0 pb-24 md:px-4 md:pt-12 lg:px-0 lg:pb-48 lg:pt-24"},n.createElement("div",{className:"font-montserrat flex flex-col"},n.createElement("div",{className:"mx-auto flex h-auto max-w-[904px] flex-col-reverse md:flex-row lg:h-[432px]"},n.createElement("div",{className:"flex flex-col items-center justify-center md:items-start"},n.createElement("div",{className:"flex items-center gap-2"},n.createElement("img",{src:"/week-of-refine/refine-week-calendar.png",alt:"Refine week calendar logo",className:"block h-[48px] w-[48px]"}),n.createElement("img",{src:"/week-of-refine/refine-week-ft-supabase.png",alt:"Refine week ft. supabase logo",className:"block h-[46px] w-[160px]"})),n.createElement("h2",{className:"font-montserrat mt-8 mb-0 max-w-[384px] text-center text-xl font-medium text-[#242436] md:text-start lg:text-[28px] lg:leading-9"},"Stay tuned all week and learn the basics of creating a CRUD app via"," ",n.createElement("strong",{className:"font-bold"},"refine")," &"," ",n.createElement("strong",{className:"font-bold"},"supabase")," ","on a fun project in a week."),n.createElement("div",{className:"mt-4 flex flex-col gap-2 sm:flex-row"},n.createElement(u,{onClick:()=>{e.current.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}},"Join Event"),n.createElement(f,{href:"https://twitter.com/intent/tweet?text=%23refineweek",variant:"white"},n.createElement("div",{className:"mr-3 h-[16px] w-[16px]"},n.createElement(s.Zm,{color:"#00AAEC",width:"16",height:"16"})),n.createElement("span",{className:"font-medium"},"#",n.createElement("strong",{className:"font-bold"},"refine"),"week")))),n.createElement("div",{className:"min-h-[318px] flex-1 lg:translate-x-[80px]"},n.createElement("img",{src:"/week-of-refine/refine-week-pixel-logo.png",alt:"Refine Pixel app logo",className:"block"}))),n.createElement("div",{className:"mt-16 md:mt-8"},n.createElement("div",{ref:e,className:"flex items-center justify-center"},n.createElement(i.EE,{className:"mr-2"}),n.createElement("h2",{className:"font-montserrat mb-0 text-3xl font-extrabold tracking-wide text-[#242436]"},"TIMELINE")),n.createElement("div",{className:"mt-8 flex flex-col items-center gap-[2px] pr-1 sm:pr-0"},C.map(((e,r)=>{const{title:a,description:l,date:i,link:s}=e,c=r!==C.length-1,m=`DAY ${r+1}:`,d=!!s,u=t===r&&d;return n.createElement("div",{key:r,className:"flex h-[285px] max-w-[384px]"},n.createElement("div",{className:"flex flex-col items-center"},n.createElement("div",{className:(0,o.Z)("mt-[6px] mb-[6px] h-[10px] w-[10px] rounded-full border-[2px] border-solid border-[#1890FF]",d?"border-[#1890FF]":"border-[#C1C1C6]")}),c&&n.createElement("div",{className:(0,o.Z)(" h-full w-[2px] rounded-sm",d?"bg-[#1890FF]":"bg-[#C1C1C6]")})),n.createElement("div",{className:"ml-4"},n.createElement("div",{className:"flex h-[22px] items-center"},n.createElement("div",{className:"text-xs font-medium text-[#96969E]"},i),u&&n.createElement("div",{className:"ml-2 flex h-[22px] w-[48px] items-center justify-center rounded-[4px] border border-solid border-[#C2E5A7] bg-[#67BE23] text-xs text-white"},"NEW")),n.createElement("div",{className:(0,o.Z)("text-xl",d?"text-[#1890FF]":"text-[#C1C1C6]")},n.createElement("span",{className:"font-medium"},m," "),n.createElement("strong",{className:"font-bold"},a)),n.createElement("div",{className:(0,o.Z)("text-xs font-medium",d?"text-[#242436]":"text-[#C1C1C6]"),dangerouslySetInnerHTML:{__html:l}}),s&&n.createElement(f,{href:s,className:"mt-4"},"Read Article")))})))),n.createElement("div",{className:"mx-auto mt-24 flex max-w-[1024px] flex-col items-center justify-center"},n.createElement("div",{className:"flex items-center justify-center"},n.createElement("div",{className:"mr-4 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#00AAEC]"},n.createElement(s.Zm,{color:"#ffffff",width:"12",height:"12"})),n.createElement("h2",{className:"font-montserrat mb-0 text-3xl tracking-wide"},n.createElement("span",{className:"font-extrabold text-[#242436]"},"JOIN")," ",n.createElement("span",{className:"font-bold text-[#00AAEC]"},"#refineweek"))),n.createElement("div",{className:"mx-6 mt-8 grid min-w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"},j.map((e=>n.createElement("div",{key:e,className:"w-full"},n.createElement(A,{tweetId:e}))))))),n.createElement("div",{className:"mx-auto mt-16 flex max-w-[800px] flex-col items-center justify-center"},n.createElement("h2",{className:"font-montserrat mb-0 text-center text-3xl font-extrabold tracking-wide text-[#242436]"},"ADDITIONAL SOURCES"),n.createElement("div",{className:"mt-8 flex flex-wrap items-center justify-center gap-4"},F.map(((e,t)=>{const{title:r,label:a,icon:l,color:i,link:o}=e;return n.createElement("a",{key:t,href:o,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:i},className:"flex w-[176px] items-center justify-between rounded-md px-3 py-4"},n.createElement("div",{className:"font-montserrat mr-2 text-center text-xs uppercase text-white"},n.createElement("div",{className:"font-medium"},r),n.createElement("div",{className:"whitespace-nowrap font-bold"},a)),l)}))))))}},25671:function(e,t){var r,n,a;n=[],void 0===(a="function"==typeof(r=function(){var e=function(){},t={},r={},n={};function a(e,t){e=e.push?e:[e];var a,l,i,o=[],s=e.length,c=s;for(a=function(e,r){r.length&&o.push(e),--c||t(o)};s--;)l=e[s],(i=r[l])?a(l,i):(n[l]=n[l]||[]).push(a)}function l(e,t){if(e){var a=n[e];if(r[e]=t,a)for(;a.length;)a[0](e,t),a.splice(0,1)}}function i(t,r){t.call&&(t={success:t}),r.length?(t.error||e)(r):(t.success||e)(t)}function o(t,r,n,a){var l,i,s=document,c=n.async,m=(n.numRetries||0)+1,f=n.before||e,d=t.replace(/[\?|#].*$/,""),u=t.replace(/^(css|img)!/,"");a=a||0,/(^css!|\.css$)/.test(d)?((i=s.createElement("link")).rel="stylesheet",i.href=u,(l="hideFocus"in i)&&i.relList&&(l=0,i.rel="preload",i.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)?(i=s.createElement("img")).src=u:((i=s.createElement("script")).src=t,i.async=void 0===c||c),i.onload=i.onerror=i.onbeforeload=function(e){var s=e.type[0];if(l)try{i.sheet.cssText.length||(s="e")}catch(c){18!=c.code&&(s="e")}if("e"==s){if((a+=1)<m)return o(t,r,n,a)}else if("preload"==i.rel&&"style"==i.as)return i.rel="stylesheet";r(t,s,e.defaultPrevented)},!1!==f(t,i)&&s.head.appendChild(i)}function s(e,t,r){var n,a,l=(e=e.push?e:[e]).length,i=l,s=[];for(n=function(e,r,n){if("e"==r&&s.push(e),"b"==r){if(!n)return;s.push(e)}--l||t(s)},a=0;a<i;a++)o(e[a],n,r)}function c(e,r,n){var a,o;if(r&&r.trim&&(a=r),o=(a?n:r)||{},a){if(a in t)throw"LoadJS";t[a]=!0}function c(t,r){s(e,(function(e){i(o,e),t&&i({success:t,error:r},e),l(a,e)}),o)}if(o.returnPromise)return new Promise(c);c()}return c.ready=function(e,t){return a(e,(function(e){i(t,e)})),c},c.done=function(e){l(e,[])},c.reset=function(){t={},r={},n={}},c.isDefined=function(e){return e in t},c})?r.apply(t,n):r)||(e.exports=a)}}]);