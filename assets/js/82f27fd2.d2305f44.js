"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",slug:"javascript-slice",authors:"abdullah_numan",tags:["javascript","javascript-slice"],image:"/img/blog/2022-10-17-js-slice/social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/javascript-slice",source:"@site/blog/2022-10-17-js-slice.md",title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",date:"2022-10-17T00:00:00.000Z",formattedDate:"October 17, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"javascript-slice",permalink:"/blog/tags/javascript-slice"}],readingTime:8.215,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",slug:"javascript-slice",authors:"abdullah_numan",tags:["javascript","javascript-slice"],image:"/img/blog/2022-10-17-js-slice/social.png",hide_table_of_contents:!1},prevItem:{title:"A Guide on Material UI AutoComplete in React",permalink:"/blog/material-ui-autocomplete-component"},nextItem:{title:"Why you should prefer using pnpm over npm and yarn?",permalink:"/blog/pnpm-vs-npm-and-yarn"},relatedPosts:[{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills",formattedDate:"September 6, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:9.48,date:"2022-09-06T00:00:00.000Z"},{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying",formattedDate:"August 28, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.82,date:"2022-08-28T00:00:00.000Z"},{title:"How to Become A Production Hero as Developer with Refine in 2022",permalink:"/blog/how-to-become-a-production-hero-refine-2022",formattedDate:"February 21, 2022",authors:[{name:"Melih \xd6zkalay",title:"Frontend Developer",url:"https://github.com/ozkalai",imageURL:"https://github.com/ozkalai.png",key:"ozkalai"}],readingTime:2.04,date:"2022-02-21T00:00:00.000Z"}],authorPosts:[{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.44,date:"2022-09-30T00:00:00.000Z"},{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.87,date:"2022-10-10T00:00:00.000Z"},{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.845,date:"2022-09-16T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is Iteration?",id:"what-is-iteration",level:2},{value:"JS slice - <code>Array.prototype.slice()</code>",id:"js-slice---arrayprototypeslice",level:2},{value:"Slicing an Array",id:"slicing-an-array",level:3},{value:"Other Nuances",id:"other-nuances",level:3},{value:"Creating Arrays from a List of Arguments",id:"creating-arrays-from-a-list-of-arguments",level:3},{value:"JS slice - <code>String.prototype.slice()</code>",id:"js-slice---stringprototypeslice",level:2},{value:"Slicing a String",id:"slicing-a-string",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This is a series on sparsely used iteration methods in JavaScript. In this series, we cover several methods that are used to iterate over a collection of data, act on them or produce side effects. These operations, especially with arrays and strings, are very common in front end development with libraries like React and Angular."),(0,r.kt)("p",null,"Steps we'll cover: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-iteration"},"What is Iteration?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#arrayprototypeslice"},"JS slice - ",(0,r.kt)("inlineCode",{parentName:"a"},"Array.prototype.slice()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#slicing-an-array"},"Slicing an Array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#other-nuances"},"Other Nuances")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-arrays-from-a-list-of-arguments"},"Creating Arrays from a List of Arguments")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#stringprototypeslice"},"JS slice - ",(0,r.kt)("inlineCode",{parentName:"a"},"String.prototype.slice()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#slicing-a-string"},"Slicing a String"))))),(0,r.kt)("h2",{id:"what-is-iteration"},"What is Iteration?"),(0,r.kt)("p",null,"Iteration is the process of looping through a collection of data and acting on each item in order to manipulate the item or create a side effect from it. Common examples of iteration methods in JavaScript are ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce()"),"."),(0,r.kt)("p",null,"There are other iteration methods which are not as often used, but when needed are always handy tools for iterating over arrays, strings and objects. ",(0,r.kt)("inlineCode",{parentName:"p"},"slice()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"some()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"every()")," are such examples."),(0,r.kt)("p",null,"Some iteration methods, like ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," iterates over all items in a collection and some like ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," iterates over the array partially."),(0,r.kt)("p",null,"We will cover several of these methods in this series, each in their own post."),(0,r.kt)("p",null,"In this article, we look into the details of using ",(0,r.kt)("strong",{parentName:"p"},"JavaScript slice")," which is available with identical implementations in ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," prototypes. We'll get into their nuances with examples of both of these types."),(0,r.kt)("p",null,"Let's start with the array version of Javascript ",(0,r.kt)("inlineCode",{parentName:"p"},"slice()"),"."),(0,r.kt)("h2",{id:"js-slice---arrayprototypeslice"},"JS slice - ",(0,r.kt)("inlineCode",{parentName:"h2"},"Array.prototype.slice()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," is an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," method that is used to extract a contiguous portion from an existing array. It can take two arguments: the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," indicator of the slice -- both of which are optional:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// Method signature\n\nslice();\nslice(start);\nslice(start, end);\n")),(0,r.kt)("p",null,"In this section, we set off with an example that expounds some general cases for selecting and storing a section from a source array. Then we'll see a couple of more interesting examples that help us generate arrays from arguments passed to a function using ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.call()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.bind()"),"."),(0,r.kt)("h3",{id:"slicing-an-array"},"Slicing an Array"),(0,r.kt)("p",null,"A typical examples of slicing an array involves extracting a contiguous part from an existing array. Such as the first three items, last three items and some items spanning from a certain index up until another index, as shown in the examples below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const elements = ['Please', 'Send', 'Cats', 'Monkeys', 'And', 'Zebras', 'In', 'Large', 'Cages', 'Make', 'Sure', 'Padlocked'];\n\nconst firstThree = elements.slice(0, 3);\nconst lastThree = elements.slice(-3, elements.length);\nconst fromThirdToFifth = elements.slice(2, 5);\n")),(0,r.kt)("p",null,"Both arguments of ",(0,r.kt)("inlineCode",{parentName:"p"},"slice()")," stand for ",(0,r.kt)("em",{parentName:"p"},"zero-based")," index numbers or negative offset values. The first one (",(0,r.kt)("inlineCode",{parentName:"p"},"0")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"firstThree")," assignment above) represents the starting index or offset in the source array where slicing should begin and the second one (",(0,r.kt)("inlineCode",{parentName:"p"},"3"),") is the index or offset ",(0,r.kt)("strong",{parentName:"p"},"before")," which extraction should stop."),(0,r.kt)("p",null,"If we log the extracted values above, we can see the three elements we want from each slice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'console.log(firstThree); // ["Please", "Send", "Cats"]\nconsole.log(lastThree); // ["Make", "Sure", "Padlocked"]\nconsole.log(fromThirdToFifth); // ["Cats", "Monkeys", "And"]\n')),(0,r.kt)("p",null,"It is important to notice that the item represented by the second argument is ",(0,r.kt)("strong",{parentName:"p"},"excluded")," from the extracted part. And we should be careful that unlike in ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.splice()"),", whose second argument is the count of items to be deleted, the second argument of ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," does not stand for the number of items to be extracted, rather the position before which slicing should stop."),(0,r.kt)("h3",{id:"other-nuances"},"Other Nuances"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No Arguments")),(0,r.kt)("p",null," If we don't pass in any argument, we just get a ",(0,r.kt)("strong",{parentName:"p"},"shallow copy")," of the source array with all items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const allCopied = elements.slice();\n\nconsole.log(allCopied);\n// (12) ["Please", "Send", "Cats", "Monkeys", "And", "Zebras", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\n')),(0,r.kt)("p",null,"It's effectively ",(0,r.kt)("inlineCode",{parentName:"p"},"[...elements]"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No Second Argument")),(0,r.kt)("p",null,"If we don't pass in the second argument, the ",(0,r.kt)("strong",{parentName:"p"},"JavaScript")," slice extends to the last element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const fromThird = elements.slice(2);\nconst lastThree = elements.slice(-3, elements.length);\nconst lastThreeWithNoSecArg = elements.slice(-3);\n\nconsole.log(fromThird);\n// (10) ["Cats", "Monkeys", "And", "Zebras", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\n\nconsole.log(lastThree); // (3) ["Make", "Sure", "Padlocked"]\nconsole.log(lastThreeWithNoSecArg); // (3) ["Make", "Sure", "Padlocked"]\n')),(0,r.kt)("p",null,"Do notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"lastThreeWithNoSecArg")," evaluates to the same portion as ",(0,r.kt)("inlineCode",{parentName:"p"},"lastThree"),", albeit missing the second argument."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"/img/discord_big_blue.png",alt:"discord banner"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Negative Offsets")),(0,r.kt)("p",null,"As we've already seen above, we can pass in as arguments negative numbers that denote offset positions counted backwards from the last item. We can do this for both arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const latestTwoBeforeLast = elements.slice(-3, -1);\nconsole.log(latestTwoBeforeLast); // (2) ["Make", "Sure"]\n')),(0,r.kt)("p",null,"Here, with ",(0,r.kt)("inlineCode",{parentName:"p"},"latestTwoBeforeLast"),", we're getting the latest two items without the final one."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Starting Position Greater Than Ending Position")),(0,r.kt)("p",null,"If we pass in a greater value for ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," than ",(0,r.kt)("inlineCode",{parentName:"p"},"end"),", we get an empty array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const somewhereWeDontKnow = elements.slice(5, 2);\nconsole.log(somewhereWeDontKnow); // []\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Starting Position Greater Than Length of Array")),(0,r.kt)("p",null,"Likewise, if we pass in a greater value for ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," than array's ",(0,r.kt)("inlineCode",{parentName:"p"},"length"),", we get an empty array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const somewhereInOuterSpace = elements.slice(15, 2);\nconsole.log(somewhereInOuterSpace); // []\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sparse Arrays")),(0,r.kt)("p",null,"If we our target portion has sparse items, they are also copied over:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const elements = ['Please', 'Send', , 'Cats', , 'Monkeys', 'And', 'Zebras', 'In', 'Large', 'Cages', 'Make', 'Sure', 'Padlocked'];\n\nconst sparseItems = elements.slice(0, 6);\n\nconsole.log(sparseItems);\n// (6) [ 'Please', 'Send', <1 empty item>, 'Cats', <1 empty item>, 'Monkeys' ]\n")),(0,r.kt)("h3",{id:"creating-arrays-from-a-list-of-arguments"},"Creating Arrays from a List of Arguments"),(0,r.kt)("p",null,"Now we can go a bit crazy about slicing. Let's construct an array from a list of arguments passed to a function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const createArray = (...args) => Array.prototype.slice.call(args);\nconst array = createArray(1, 2, 3, 4);\nconsole.log(array); // (4) [1, 2, 3, 4]\n")),(0,r.kt)("p",null,"Here, we received ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," as a list first, but converted it to an array with rest params ",(0,r.kt)("inlineCode",{parentName:"p"},"...args"),". We then bound the array to ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.call()"),"."),(0,r.kt)("p",null,"That was easy."),(0,r.kt)("p",null,"The next level way of doing this is in the messiest possible way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const boundSlice = Function.prototype.call.bind(Array.prototype.slice);\n\nconst createArray = (...args) => boundSlice(args);\n\nconst array = createArray(1, 2, 3, 4);\nconsole.log(array); // (4) [1, 2, 3, 4]\n")),(0,r.kt)("p",null,"It seems like a overhead, but what were are doing is declaring two helper functions."),(0,r.kt)("p",null,"The first one, ",(0,r.kt)("inlineCode",{parentName:"p"},"boundSlice"),", is derived from binding the ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.call()")," method with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," which is an array function object. So, we are getting a copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.call()")," bound to ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," and storing it in ",(0,r.kt)("inlineCode",{parentName:"p"},"boundSlice"),". "),(0,r.kt)("p",null,"This basically means, if we invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"boundSlice()"),", we are in effect invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice.call()"),". If we then pass in an argument list as rest params to ",(0,r.kt)("inlineCode",{parentName:"p"},"boundSlice()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," is invoked on this array and a copy of the array is created from it."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"createArray()"),", we are accumulating the arguments and passing them to ",(0,r.kt)("inlineCode",{parentName:"p"},"boundSlice()")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"args"),". So, whatever we pass to ",(0,r.kt)("inlineCode",{parentName:"p"},"createArray()")," is returned as items inside an array."),(0,r.kt)("h2",{id:"js-slice---stringprototypeslice"},"JS slice - ",(0,r.kt)("inlineCode",{parentName:"h2"},"String.prototype.slice()")),(0,r.kt)("p",null,"Now, let's consider the  ",(0,r.kt)("strong",{parentName:"p"},"JavaScript ",(0,r.kt)("inlineCode",{parentName:"strong"},"slice()"))," method for strings."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.slice()")," does the exact same thing as ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()"),", but with characters in a string."),(0,r.kt)("p",null,"Like ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()"),", it takes two optional arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"end"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JavaScript"},"// Method signature\n\nslice();\nslice(start);\nslice(end);\n")),(0,r.kt)("h3",{id:"slicing-a-string"},"Slicing a String"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.slice()")," is useful for directly working on strings. It removes the hassle of converting a string to an array with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.split()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const mnemonic = \'Please Send Cats Monkeys And Zebras In Large Cages Make Sure Padlocked\';\n\nconst firstThreeChars = mnemonic.slice(0, 3);\nconst lastThreeChars = mnemonic.slice(-3, mnemonic.length);\nconst fromThirdToFifthChars = mnemonic.slice(2, 5);\n\nconsole.log(firstThreeChars); // "Ple"\nconsole.log(lastThreeChars); // "ked"\nconsole.log(fromThirdToFifthChars); // "eas"\n')),(0,r.kt)("p",null,"Again, both arguments represent zero-based index numbers or negative offset values. Here, the first one, ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"firstThree")," assignment, stands for the starting index or offset of the portion and the second one (",(0,r.kt)("inlineCode",{parentName:"p"},"3"),") for the index or offset ",(0,r.kt)("strong",{parentName:"p"},"before")," which extraction should stop."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"With No Arguments")),(0,r.kt)("p",null,"If we don't pass in any arguments, we get a new copy of the whole string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const mnemonic = 'Please Send Cats Monkeys And Zebras In Large Cages Make Sure Padlocked';\nconst memorizedMnemonic = mnemonic.slice();\n\nconsole.log(memorizedMnemonic);\n// \"Please Send Cats Monkeys And Zebras In Large Cages Make Sure Padlocked\"\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"With No Second Argument")),(0,r.kt)("p",null,"If we don't pass the second argument, the ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," of the string becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"end"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const charsFromThird = mnemonic.slice(2);\n\nconsole.log(charsFromThird);\n// "ease Send Cats Monkeys And Zebras In Large Cages Make Sure Padlocked"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Negative Offsets")),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()"),", negative values for ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," represent offset positions from the end of the array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const lastThreeChars = mnemonic.slice(-3);\nconst latestTwoCharsBeforeLast = mnemonic.slice(-3, -1);\n\nconsole.log(lastThreeChars); // "ked"\nconsole.log(latestTwoCharsBeforeLast); // "ke"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Starting Position Greater Than Ending Position or Length of Array")),(0,r.kt)("p",null,"Again, similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()"),", if ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," is greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," of string, we get an empty string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const inAnotherDimension = mnemonic.slice(5, 2);\nconst doingStringTheory = mnemonic.slice(15, 2);\n\nconsole.log(inAnotherDimension); // ""\nconsole.log(doingStringTheory); // ""\n')),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"banner-container"},(0,r.kt)("div",{className:"banner-header"},"Stop wasting your time copy/pasting your table code all over your application!"),(0,r.kt)("p",null,"Meet the headless, React-based solution to build sleek ",(0,r.kt)("strong",{parentName:"p"},"CRUD")," applications. With refine, you can be confident that your codebase will always stay clean and boilerplate-free."),(0,r.kt)("p",null,"Try ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," to rapidly build your next ",(0,r.kt)("strong",{parentName:"p"},"CRUD")," project, whether it's an admin panel, dashboard, internal tool or storefront."),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://github.com/refinedev/refine"},(0,r.kt)("img",{src:"/img/generic_banner.png",alt:"refine blog logo"}))),(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this post, we expounded the ",(0,r.kt)("inlineCode",{parentName:"p"},"slice()")," method in JavaScript. We saw that JavaScript implements ",(0,r.kt)("inlineCode",{parentName:"p"},"slice()")," in two flavors: one for ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),"s with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," and one for ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"s with ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.slice()"),". We found out through examples that both methods are used to extract contiguous portions from a source object representing these types."),(0,r.kt)("p",null,"We also saw that ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.slice()")," is identical implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," that removes the overhead of converting a string to an array of characters."),(0,r.kt)("p",null,"We also covered how function composition and context binding with ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.call()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.bind()")," allows us to define custom functions that help us generate arrays from a list of arguments."))}m.isMDXComponent=!0}}]);