"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84480],{3905:(t,e,o)=>{o.d(e,{Zo:()=>m,kt:()=>d});var n=o(67294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(t,e){if(null==t)return{};var o,n,i=function(t,e){if(null==t)return{};var o,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var p=n.createContext({}),s=function(t){var e=n.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var o=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,m=r(t,["components","mdxType","originalType","parentName"]),u=s(o),d=i,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||a;return o?n.createElement(h,l(l({ref:e},m),{},{components:o})):n.createElement(h,l({ref:e},m))}));function d(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=o.length,l=new Array(a);l[0]=u;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=t,r.mdxType="string"==typeof t?t:i,l[1]=r;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},49600:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var n=o(87462),i=(o(67294),o(3905));const a={title:"How to use Material UI Tooltip",description:"We'll discover the Material UI (MUI) Tooltip component with examples",slug:"material-ui-tooltip-component",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-29-mui-tooltip/social.png",hide_table_of_contents:!1},l=void 0,r={permalink:"/blog/material-ui-tooltip-component",source:"@site/blog/2022-11-29-mui-tooltip.md",title:"How to use Material UI Tooltip",description:"We'll discover the Material UI (MUI) Tooltip component with examples",date:"2022-11-29T00:00:00.000Z",formattedDate:"November 29, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"}],readingTime:8.38,hasTruncateMarker:!1,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"How to use Material UI Tooltip",description:"We'll discover the Material UI (MUI) Tooltip component with examples",slug:"material-ui-tooltip-component",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-29-mui-tooltip/social.png",hide_table_of_contents:!1},prevItem:{title:"git stash - Save the Uncommitted Changes Locally",permalink:"/blog/git-stash"},nextItem:{title:"How to Delete Local and Remote Git Branches",permalink:"/blog/git-delete-remote-branch-and-local-branch"},relatedPosts:[{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.13,date:"2022-09-18T00:00:00.000Z"},{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:16.85,date:"2022-08-23T00:00:00.000Z"},{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.195,date:"2022-03-01T00:00:00.000Z"}],authorPosts:[{title:"A Guide on Material UI AutoComplete in React",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"October 19, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:14.075,date:"2022-10-19T00:00:00.000Z"},{title:"How to use Material UI Select in React",permalink:"/blog/material-ui-select-component",formattedDate:"October 30, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.375,date:"2022-10-30T00:00:00.000Z"},{title:"How to use Material UI Checkbox",permalink:"/blog/material-ui-checkbox-component",formattedDate:"December 15, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.36,date:"2022-12-15T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2},{value:"What is Material UI?",id:"what-is-material-ui",level:2},{value:"Getting started with Material UI Tooltip",id:"getting-started-with-material-ui-tooltip",level:2},{value:"Positioning MUI Tooltips",id:"positioning-mui-tooltips",level:2},{value:"How to customise your MUI Tooltip component",id:"how-to-customise-your-mui-tooltip-component",level:2},{value:"Arrow Tooltips",id:"arrow-tooltips",level:3},{value:"Width variations",id:"width-variations",level:3},{value:"MUI Tooltip Transitions",id:"mui-tooltip-transitions",level:3},{value:"Virtual element placement",id:"virtual-element-placement",level:3},{value:"MUI Tooltip Event Triggers",id:"mui-tooltip-event-triggers",level:2},{value:"MUI Tooltip custom child(ren) elements",id:"mui-tooltip-custom-children-elements",level:2},{value:"Building a Login form UI with React and MUI Tooltip",id:"building-a-login-form-ui-with-react-and-mui-tooltip",level:2},{value:"Conclusion",id:"conclusion",level:2}],m=(c="PromotionBanner",function(t){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)});var c;const u={toc:s};function d(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Material UI is a dynamic React framework that offers abundant customisable components and utilities that help developers create better web apps with improved UI/UX. One such component is the MUI Tooltip, which is a custom-made MUI component that displays informative text on an element\u2019s hover, click, focus, or tap.  "),(0,i.kt)("p",null,"This article will deeply dive into the Material UI Tooltip component and highlight its functionalities, variations, and event placements. We will also explore a potential use case in a typical React application. "),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-material-ui"},"What is Material UI?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#getting-started-with-material-ui-tooltip"},"Getting started with Material UI Tooltip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#positioning-mui-tooltips"},"Positioning MUI Tooltips")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-customise-your-mui-tooltip-component"},"How to customise your MUI Tooltip component")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#mui-tooltip-event-triggers"},"MUI Tooltip Event Triggers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#mui-tooltip-custom-children-elements"},"MUI Tooltip custom child(ren) elements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#building-a-login-form-ui-with-react-and-mui-tooltip"},"Building a Login form UI with React and MUI Tooltip"))),(0,i.kt)("h2",{id:"what-is-material-ui"},"What is Material UI?"),(0,i.kt)("p",null,"Material-UI is a user interface framework that provides pre-defined and customisable React components to help with web development. The Material-UI components are based on Google's top Material Design. Many developers now structure their projects with Material UI because it simplifies and improves web design."),(0,i.kt)("p",null,"Material UI comes with several component categories, including"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Display components"),(0,i.kt)("li",{parentName:"ul"},"Input components"),(0,i.kt)("li",{parentName:"ul"},"Navigation components"),(0,i.kt)("li",{parentName:"ul"},"Layout components, e.t.c.")),(0,i.kt)("p",null,"The MUI Tooltip is a vivid example of the Data display components. "),(0,i.kt)("h2",{id:"getting-started-with-material-ui-tooltip"},"Getting started with Material UI Tooltip"),(0,i.kt)("p",null,"Tooltips reveal explanatory text when an element is hovered, focused, or tapped. Material UI includes custom Tooltip components that help highlight the context of an element on the DOM."),(0,i.kt)("p",null,"Here\u2019s a demo of how to use the MUI ",(0,i.kt)("inlineCode",{parentName:"p"},"<Tooltip/>")," component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react';\nimport  ZoomInIcon from '@mui/icons-material/ZoomIn';\nimport IconButton from '@mui/material/IconButton';\nimport Tooltip from '@mui/material/Tooltip';\n\nexport default function BasicTooltip() {\n  return (\n    <div style={{margin: '100px'}}>\n    <Tooltip title=\"Zoom In\">\n      <IconButton>\n        <ZoomInIcon />\n      </IconButton>\n    </Tooltip>\n    </div>\n  );\n}\n\n")),(0,i.kt)("p",null,"Here\u2019s the result:"),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center",width:"250px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-29-mui-tooltip/tooltip-1.gif",alt:"MUI tooltip "})),(0,i.kt)("h2",{id:"positioning-mui-tooltips"},"Positioning MUI Tooltips"),(0,i.kt)("p",null,"The Tooltip has 12 different placement options. They lack directional arrows and instead rely on the motion from the source to convey direction."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Show Code"),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import * as React from \'react\';\nimport Box from \'@mui/material/Box\';\nimport Grid from \'@mui/material/Grid\';\nimport Button from \'@mui/material/Button\';\nimport Tooltip from \'@mui/material/Tooltip\';\n\nexport default function PositionedTooltips() {\n  return (\n    <Box sx={{ width: 500 }}>\n      <Grid container justifyContent="center">\n        <Grid item>\n          <Tooltip title="Top start" placement="top-start">\n            <Button>top-start</Button>\n          </Tooltip>\n          <Tooltip title="Top" placement="top">\n            <Button>top</Button>\n          </Tooltip>\n          <Tooltip title="Top end" placement="top-end">\n            <Button>top-end</Button>\n          </Tooltip>\n        </Grid>\n      </Grid>\n      <Grid container justifyContent="center">\n        <Grid item xs={6}>\n          <Tooltip title="Left start" placement="left-start">\n            <Button>left-start</Button>\n          </Tooltip>\n          <br />\n          <Tooltip title="Left" placement="left">\n            <Button>left</Button>\n          </Tooltip>\n          <br />\n          <Tooltip title="Left end" placement="left-end">\n            <Button>left-end</Button>\n          </Tooltip>\n        </Grid>\n        <Grid item container xs={6} alignItems="flex-end" direction="column">\n          <Grid item>\n            <Tooltip title="Right start" placement="right-start">\n              <Button>right-start</Button>\n            </Tooltip>\n          </Grid>\n          <Grid item>\n            <Tooltip title="Right" placement="right">\n              <Button>right</Button>\n            </Tooltip>\n          </Grid>\n          <Grid item>\n            <Tooltip title="Right end" placement="right-end">\n              <Button>right-end</Button>\n            </Tooltip>\n          </Grid>\n        </Grid>\n      </Grid>\n      <Grid container justifyContent="center">\n        <Grid item>\n          <Tooltip title="Bottom start" placement="bottom-start">\n            <Button>bottom-start</Button>\n          </Tooltip>\n          <Tooltip title="Bottom" placement="bottom">\n            <Button>bottom</Button>\n          </Tooltip>\n          <Tooltip title="Bottom end" placement="bottom-end">\n            <Button>bottom-end</Button>\n          </Tooltip>\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n')))),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-29-mui-tooltip/tooltip-2.gif",alt:"MUI tooltip "})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Tooltip positioning is critical when using them in a web application. A poorly placed Tooltip may detract from the overall UX of the app."),(0,i.kt)("h2",{id:"how-to-customise-your-mui-tooltip-component"},"How to customise your MUI Tooltip component"),(0,i.kt)("p",null,"MUI Tooltip is a very dynamic component, so it has several variations. Here are a few ways you can customise MUI Tooltip in your next project:"),(0,i.kt)("h3",{id:"arrow-tooltips"},"Arrow Tooltips"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"arrow")," prop to add an arrow to your tooltip, indicating which element it refers to. This gives the Tooltip element more definition as it points at the element it describes."),(0,i.kt)("p",null,"Here\u2019s what I mean:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react';\nimport Button from '@mui/material/Button';\nimport Tooltip from '@mui/material/Tooltip';\n\nexport default function ArrowTooltips() {\n  return (\n    <div style={{margin: '25%'}}>\n      {/* adding the arrow prop to ensure our tooltip has a pointer */}\n    <Tooltip title=\"Arrow Tooltip\" arrow>\n      <Button>Arrow Tooltip</Button>\n    </Tooltip>\n    </div>\n  );\n}\n")),(0,i.kt)("p",null,"Here\u2019s what it looks like:"),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-29-mui-tooltip/tooltip-3.gif",alt:"MUI tooltip "})),(0,i.kt)("hr",null),(0,i.kt)(m,{title:"Does your CRUD app need server state management?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/mui_banner.png",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"width-variations"},"Width variations"),(0,i.kt)("p",null,"The MUI Tooltip component wraps long text by default, but you can adjust its width to suit your preferences and how well it fits that aspect of your application."),(0,i.kt)("p",null,"Here\u2019s a sample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Button from '@mui/material/Button';\nimport Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';\n\nconst CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (\n  <Tooltip {...props} classes={{ popper: className }} />\n))({\n  [`& .${tooltipClasses.tooltip}`]: {\n    maxWidth: 500,\n  },\n});\n\nconst NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (\n  <Tooltip {...props} classes={{ popper: className }} />\n))({\n  [`& .${tooltipClasses.tooltip}`]: {\n    maxWidth: 'none',\n  },\n});\n\nconst longText = `\nAliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.\nPraesent non nunc mollis, fermentum neque at, semper arcu.\nNullam eget est sed sem iaculis gravida eget vitae justo.\n`;\n\nexport default function VariableWidth() {\n  return (\n    <div style={{margin: '25%'}}>\n      <Tooltip title={longText}>\n        <Button sx={{ m: 1 }}>Default Width [300px]</Button>\n      </Tooltip>\n      <CustomWidthTooltip title={longText}>\n        <Button sx={{ m: 1 }}>Custom Width [500px]</Button>\n      </CustomWidthTooltip>\n      <NoMaxWidthTooltip title={longText}>\n        <Button sx={{ m: 1 }}>No width set</Button>\n      </NoMaxWidthTooltip>\n    </div>\n  );\n}\n")),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-29-mui-tooltip/tooltip-4.gif",alt:"MUI tooltip "})),(0,i.kt)("h3",{id:"mui-tooltip-transitions"},"MUI Tooltip Transitions"),(0,i.kt)("p",null,"The MUI Tooltip can be animated with different transitions and display delay variations. It could be set to grow, fade and zoom like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react';\nimport Button from '@mui/material/Button';\nimport Tooltip from '@mui/material/Tooltip';\nimport Fade from '@mui/material/Fade';\nimport Zoom from '@mui/material/Zoom';\n\nexport default function TransitionsTooltips() {\n  return (\n    <div style={{margin: '25%'}}>\n      <Tooltip title=\"Grow\" TransitionProps={{ timeout: 1000 }}>\n        <Button>Grow</Button>\n      </Tooltip>\n      <Tooltip\n        TransitionComponent={Fade}\n        TransitionProps={{ timeout: 1000 }}\n        title=\"Fade\"\n      >\n        <Button>Fade</Button>\n      </Tooltip>\n      <Tooltip TransitionComponent={Zoom} title=\"Zoom\" TransitionProps={{ timeout: 1000 }}>\n        <Button>Zoom</Button>\n      </Tooltip>\n    </div>\n  );\n}\n\n")),(0,i.kt)("p",null,"In the code above, three tooltips have been set to display with varying transitions. The tooltips will grow, fade and zoom with a 1000ms delay. "),(0,i.kt)("p",null,"Here\u2019s the result:"),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-29-mui-tooltip/tooltip-5.gif",alt:"MUI tooltip "})),(0,i.kt)("h3",{id:"virtual-element-placement"},"Virtual element placement"),(0,i.kt)("p",null,"Say you want to control the Tooltip's position and relate it to your mouse movements; you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"anchorEl")," prop to implement a custom placement. The ",(0,i.kt)("inlineCode",{parentName:"p"},"anchorEl")," prop's value can be a reference to a bogus DOM element. You must create an object in the shape of the ",(0,i.kt)("a",{parentName:"p",href:"https://popper.js.org/docs/v2/virtual-elements/"},"VirtualElement"),"."),(0,i.kt)("p",null,"Here\u2019s a demo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Tooltip from '@mui/material/Tooltip';\nimport { Instance } from '@popperjs/core';\n\nexport default function AnchorElTooltips() {\n  const positionRef = React.useRef<{ x: number; y: number }>({\n    x: 0,\n    y: 0,\n  });\n  const popperRef = React.useRef<Instance>(null);\n  const areaRef = React.useRef<HTMLDivElement>(null);\n\n  const handleMouseMove = (event: React.MouseEvent) => {\n    positionRef.current = { x: event.clientX, y: event.clientY };\n\n    if (popperRef.current != null) {\n      popperRef.current.update();\n    }\n  };\n\n  return (\n    <div style={{marginTop: 100}}>\n    <Tooltip\n      title=\"Hover moves\"\n      placement=\"top\"\n      arrow\n      PopperProps={{\n        popperRef,\n        anchorEl: {\n          getBoundingClientRect: () => {\n            return new DOMRect(\n              positionRef.current.x,\n              areaRef.current!.getBoundingClientRect().y,\n              0,\n              0,\n            );\n          },\n        },\n      }}\n    >\n      <Box\n        ref={areaRef}\n        onMouseMove={handleMouseMove}\n        sx={{\n          bgcolor: 'primary.main',\n          color: 'primary.contrastText',\n          p: 2,\n        }}\n      >\n        Hover\n      </Box>\n    </Tooltip>\n    </div>\n  );\n}\n")),(0,i.kt)("p",null,"In the code above, "),(0,i.kt)("p",null,"Here\u2019s the result:"),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-29-mui-tooltip/tooltip-6.gif",alt:"MUI tooltip "})),(0,i.kt)("h2",{id:"mui-tooltip-event-triggers"},"MUI Tooltip Event Triggers"),(0,i.kt)("p",null,"You can control the kind of events that have to be carried out for your Tooltip to display. You can customise the actions required to show a Tooltip like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Grid from '@mui/material/Grid';\nimport Button from '@mui/material/Button';\nimport Tooltip from '@mui/material/Tooltip';\nimport ClickAwayListener from '@mui/material/ClickAwayListener';\n\nexport default function TriggersTooltips() {\n  const [open, setOpen] = React.useState(false);\n\n  const handleTooltipClose = () => {\n    setOpen(false);\n  };\n\n  const handleTooltipOpen = () => {\n    setOpen(true);\n  };\n\n  return (\n    <div style={{margin: '25%'}}>\n      <Grid container justifyContent=\"center\">\n        <Grid item>\n          <Tooltip disableFocusListener disableTouchListener title=\"Hover\">\n            <Button>Hover</Button>\n          </Tooltip>\n        </Grid>\n        <Grid item>\n          <ClickAwayListener onClickAway={handleTooltipClose}>\n            <div>\n              <Tooltip\n                PopperProps={{\n                  disablePortal: true,\n                }}\n                onClose={handleTooltipClose}\n                open={open}\n                disableFocusListener\n                disableHoverListener\n                disableTouchListener\n                title=\"Click\"\n              >\n                <Button onClick={handleTooltipOpen}>Click</Button>\n              </Tooltip>\n            </div>\n          </ClickAwayListener>\n        </Grid>\n      </Grid>\n    </div>\n  );\n}\n\n")),(0,i.kt)("p",null,"Here\u2019s the result:"),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-29-mui-tooltip/tooltip-7.gif",alt:"MUI tooltip"})),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,i.kt)("h2",{id:"mui-tooltip-custom-children-elements"},"MUI Tooltip custom child(ren) elements"),(0,i.kt)("p",null,"The MUI tooltip's child element must have DOM event listeners. If the child is a custom React element, you must ensure that its props are distributed to the underlying DOM element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = React.forwardRef(function MyComponent(props, ref) {\n  //  Spread the props to the preceding DOM element.\n  return (\n    <div {...props} ref={ref}>\n      Bin\n    </div>\n  );\n});\n\n// ...\n\n<Tooltip title="Spread the props">\n  <MyComponent />\n</Tooltip>\n')),(0,i.kt)("h2",{id:"building-a-login-form-ui-with-react-and-mui-tooltip"},"Building a Login form UI with React and MUI Tooltip"),(0,i.kt)("p",null,"The Material UI Tooltip component can be used in so many ways and in different aspects of any web application. For the sake of this article, we will demonstrate some of its functionalities in a typical currency Login form UI."),(0,i.kt)("p",null,"Here\u2019s the code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react';\nimport Tooltip from '@mui/material/Tooltip';\nimport Fade from '@mui/material/Fade';\nimport Zoom from '@mui/material/Zoom';\n\nexport default function TransitionsTooltips() {\n  return (\n    <div className=\"login-container\">\n      <Tooltip \n      title=\"Please fill in this field.\" \n      placement='right'>\n            <input className='input' \n            type='text'\n            placeholder='Username'\n            />\n      </Tooltip>\n      <Tooltip\n        TransitionComponent={Fade}\n        TransitionProps={{ timeout: 600 }}\n        title=\"Password should be at least 10 characters and include 1 uppercase and 1 lowercase alpha character, 1 number and 1 special character. Passwords are case sensitive. \"\n        placement=\"right\"\n      >\n            <input \n            type='password'\n            className='input'\n            placeholder='Password'\n            placement=\"right\"\n            />\n      </Tooltip>\n      <Tooltip TransitionComponent={Zoom} \n      title=\"\" \n      placement='right'>\n        <button className='button'>Login</button>\n      </Tooltip>\n    </div>\n  );\n}\n")),(0,i.kt)("p",null,"The code above illustrates a simple login form UI with instructions provided to users with the Material UI Tooltip component."),(0,i.kt)("p",null,"Here\u2019s the result:"),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-29-mui-tooltip/tooltip-8.gif",alt:"MUI tooltip"})),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This article showcased the importance of Material UI to web applications. We then put the spotlight on the MUI Tooltip component describing its striking functionalities and application in a React application. We also looked into a Login page with instructions displayed in MUI Tooltips as a potential use case."))}d.isMDXComponent=!0}}]);