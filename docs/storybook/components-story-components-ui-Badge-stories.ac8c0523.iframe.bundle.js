"use strict";(self.webpackChunknoplus_web=self.webpackChunknoplus_web||[]).push([[605],{"./src/components/story/components/ui/Badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Accent:()=>Accent,Danger:()=>Danger,DangerSuffix:()=>DangerSuffix,Default:()=>Default,Info:()=>Info,InfoPrefix:()=>InfoPrefix,Large:()=>Large,Medium:()=>Medium,Primary:()=>Primary,Secondary:()=>Secondary,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Medium_parameters,_Medium_parameters_docs,_Medium_parameters1,_Large_parameters,_Large_parameters_docs,_Large_parameters1,_InfoPrefix_parameters,_InfoPrefix_parameters_docs,_InfoPrefix_parameters1,_DangerSuffix_parameters,_DangerSuffix_parameters_docs,_DangerSuffix_parameters1,_Primary_parameters,_Primary_parameters_docs,_Primary_parameters1,_Secondary_parameters,_Secondary_parameters_docs,_Secondary_parameters1,_Accent_parameters,_Accent_parameters_docs,_Accent_parameters1,_Success_parameters,_Success_parameters_docs,_Success_parameters1,_Danger_parameters,_Danger_parameters_docs,_Danger_parameters1,_Warning_parameters,_Warning_parameters_docs,_Warning_parameters1,_Info_parameters,_Info_parameters_docs,_Info_parameters1,_ui_Badge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ui/Badge.tsx"),react_feather__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-feather/dist/icons/feather.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/Badge",component:_ui_Badge__WEBPACK_IMPORTED_MODULE_0__.E,tags:["autodocs"],argTypes:{type:{name:"Type",description:"Set the type of the badge",defaultValue:"secondary",control:{type:"select",options:["primary","secondary","accent","success","danger","warning","info"]}},opacity:{name:"Opacity",description:"Set the badge to be opaque",defaultValue:!1,control:{type:"boolean"}},size:{name:"Size",description:"Set the size of the badge",defaultValue:"sm",control:{type:"select",options:["sm","md","lg"]}},shadow:{name:"Shadow",description:"Set the shadow of the badge",defaultValue:"sm",control:{type:"select",options:["sm","md","lg","none"]}},prefix:{name:"Prefix",description:"Set the prefix icon of the badge",control:{type:"select",options:Object.keys(react_feather__WEBPACK_IMPORTED_MODULE_1__.A)}},suffix:{name:"Suffix",description:"Set the suffix icon of the badge",control:{type:"select",options:Object.keys(react_feather__WEBPACK_IMPORTED_MODULE_1__.A)}}}},Default={args:{type:"secondary",children:"Default Badge",size:"md",opacity:!1,shadow:"md"}},Medium={args:{...Default.args,size:"md",children:"Medium Sized Badge With Medium Shadow",shadow:"md"}},Large={args:{...Default.args,size:"lg",children:"Large Sized Badge With Large Shadow",shadow:"lg"}},InfoPrefix={args:{...Default.args,prefix:"Info",children:"Info Badge With Info Prefix"}},DangerSuffix={args:{...Default.args,type:"danger",suffix:"XCircle",children:"Danger Badge With Danger Suffix"}},Primary={args:{...Default.args,type:"primary",children:"Primary Badge"}},Secondary={args:{...Default.args,type:"secondary",children:"Secondary Badge"}},Accent={args:{...Default.args,type:"accent",children:"Accent Badge"}},Success={args:{...Default.args,type:"success",children:"Success Badge"}},Danger={args:{...Default.args,type:"danger",children:"Danger Badge"}},Warning={args:{...Default.args,type:"warning",children:"Warning Badge"}},Info={args:{...Default.args,type:"info",children:"Info Badge"}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    type: "secondary",\n    children: "Default Badge",\n    size: "md",\n    opacity: false,\n    shadow: "md"\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},Medium.parameters={...Medium.parameters,docs:{...null===(_Medium_parameters=Medium.parameters)||void 0===_Medium_parameters?void 0:_Medium_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    size: "md",\n    children: "Medium Sized Badge With Medium Shadow",\n    shadow: "md"\n  }\n}',...null===(_Medium_parameters1=Medium.parameters)||void 0===_Medium_parameters1||null===(_Medium_parameters_docs=_Medium_parameters1.docs)||void 0===_Medium_parameters_docs?void 0:_Medium_parameters_docs.source}}},Large.parameters={...Large.parameters,docs:{...null===(_Large_parameters=Large.parameters)||void 0===_Large_parameters?void 0:_Large_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    size: "lg",\n    children: "Large Sized Badge With Large Shadow",\n    shadow: "lg"\n  }\n}',...null===(_Large_parameters1=Large.parameters)||void 0===_Large_parameters1||null===(_Large_parameters_docs=_Large_parameters1.docs)||void 0===_Large_parameters_docs?void 0:_Large_parameters_docs.source}}},InfoPrefix.parameters={...InfoPrefix.parameters,docs:{...null===(_InfoPrefix_parameters=InfoPrefix.parameters)||void 0===_InfoPrefix_parameters?void 0:_InfoPrefix_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    prefix: "Info",\n    children: "Info Badge With Info Prefix"\n  }\n}',...null===(_InfoPrefix_parameters1=InfoPrefix.parameters)||void 0===_InfoPrefix_parameters1||null===(_InfoPrefix_parameters_docs=_InfoPrefix_parameters1.docs)||void 0===_InfoPrefix_parameters_docs?void 0:_InfoPrefix_parameters_docs.source}}},DangerSuffix.parameters={...DangerSuffix.parameters,docs:{...null===(_DangerSuffix_parameters=DangerSuffix.parameters)||void 0===_DangerSuffix_parameters?void 0:_DangerSuffix_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "danger",\n    suffix: "XCircle",\n    children: "Danger Badge With Danger Suffix"\n  }\n}',...null===(_DangerSuffix_parameters1=DangerSuffix.parameters)||void 0===_DangerSuffix_parameters1||null===(_DangerSuffix_parameters_docs=_DangerSuffix_parameters1.docs)||void 0===_DangerSuffix_parameters_docs?void 0:_DangerSuffix_parameters_docs.source}}},Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "primary",\n    children: "Primary Badge"\n  }\n}',...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}},Secondary.parameters={...Secondary.parameters,docs:{...null===(_Secondary_parameters=Secondary.parameters)||void 0===_Secondary_parameters?void 0:_Secondary_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "secondary",\n    children: "Secondary Badge"\n  }\n}',...null===(_Secondary_parameters1=Secondary.parameters)||void 0===_Secondary_parameters1||null===(_Secondary_parameters_docs=_Secondary_parameters1.docs)||void 0===_Secondary_parameters_docs?void 0:_Secondary_parameters_docs.source}}},Accent.parameters={...Accent.parameters,docs:{...null===(_Accent_parameters=Accent.parameters)||void 0===_Accent_parameters?void 0:_Accent_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "accent",\n    children: "Accent Badge"\n  }\n}',...null===(_Accent_parameters1=Accent.parameters)||void 0===_Accent_parameters1||null===(_Accent_parameters_docs=_Accent_parameters1.docs)||void 0===_Accent_parameters_docs?void 0:_Accent_parameters_docs.source}}},Success.parameters={...Success.parameters,docs:{...null===(_Success_parameters=Success.parameters)||void 0===_Success_parameters?void 0:_Success_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "success",\n    children: "Success Badge"\n  }\n}',...null===(_Success_parameters1=Success.parameters)||void 0===_Success_parameters1||null===(_Success_parameters_docs=_Success_parameters1.docs)||void 0===_Success_parameters_docs?void 0:_Success_parameters_docs.source}}},Danger.parameters={...Danger.parameters,docs:{...null===(_Danger_parameters=Danger.parameters)||void 0===_Danger_parameters?void 0:_Danger_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "danger",\n    children: "Danger Badge"\n  }\n}',...null===(_Danger_parameters1=Danger.parameters)||void 0===_Danger_parameters1||null===(_Danger_parameters_docs=_Danger_parameters1.docs)||void 0===_Danger_parameters_docs?void 0:_Danger_parameters_docs.source}}},Warning.parameters={...Warning.parameters,docs:{...null===(_Warning_parameters=Warning.parameters)||void 0===_Warning_parameters?void 0:_Warning_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "warning",\n    children: "Warning Badge"\n  }\n}',...null===(_Warning_parameters1=Warning.parameters)||void 0===_Warning_parameters1||null===(_Warning_parameters_docs=_Warning_parameters1.docs)||void 0===_Warning_parameters_docs?void 0:_Warning_parameters_docs.source}}},Info.parameters={...Info.parameters,docs:{...null===(_Info_parameters=Info.parameters)||void 0===_Info_parameters?void 0:_Info_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "info",\n    children: "Info Badge"\n  }\n}',...null===(_Info_parameters1=Info.parameters)||void 0===_Info_parameters1||null===(_Info_parameters_docs=_Info_parameters1.docs)||void 0===_Info_parameters_docs?void 0:_Info_parameters_docs.source}}};const __namedExportsOrder=["Default","Medium","Large","InfoPrefix","DangerSuffix","Primary","Secondary","Accent","Success","Danger","Warning","Info"]},"./src/components/twm.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/components/ui/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Badge,Z:()=>BadgedIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),cva__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/cva/dist/index.mjs"),_twm__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/twm.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_feather__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-feather/dist/index.js"),react_feather__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-feather/dist/icons/code.js");const BadgeVariants=(0,cva__WEBPACK_IMPORTED_MODULE_1__.Fj)({variants:{variant:{primary:" bg-l-prim text-d-txt dark:bg-d-bg dark:text-d-txt",oprimary:" bg-l-prim-600/40 text-l-txt/80 dark:bg-d-bg-600/40 dark:text-d-txt-300/80",secondary:" bg-l-sec text-l-txt dark:bg-d-sec-600 dark:text-d-txt-600",osecondary:" bg-l-sec-600/40 text-l-txt-600/80 dark:bg-d-bg-400/40 dark:text-d-sec-400/80 ",accent:" bg-l-acc-500 text-l-txt dark:bg-d-acc dark:text-d-txt-600",oaccent:" bg-l-acc/40 text-l-txt/80 dark:bg-d-bg-400/40 dark:text-d-acc-400/80",success:" bg-system-success text-system-success-bright dark:bg-system-success-dark",osuccess:" bg-system-success-bright/40 text-system-success-dark/80 dark:bg-d-bg-400/40 dark:text-system-success-light/80",danger:" bg-system-error-light text-l-txt-100 dark:bg-system-error dark:text-system-error-bright",odanger:" bg-system-error/40 text-l-txt/80 dark:bg-system-error-light/20 dark:text-system-error-dark/80",warning:" bg-system-warning text-d-acc-800 dark:bg-system-warning-dark dark:text-d-acc-400",owarning:" bg-system-warning/40 text-l-acc-900/80 dark:bg-system-warning-dark/40 dark:text-d-acc-400/80",info:" bg-sky-400 text-indigo-600 dark:bg-sky-600 dark:text-cyan-400",oinfo:" bg-sky-500/40 text-blue-700/80 dark:bg-sky-600/40 dark:text-cyan-400/80"},size:{sm:" rounded-xl py-1 px-2 font-normal",md:" py-2 px-3 font-semibold rounded-xl",lg:" py-2 px-5 font-black rounded-xl ",nsm:" rounded-full p-1",nmd:" rounded-full p-2",nlg:" rounded-full p-3"},shadouu:{sm:" shadow-md shadow-zinc-100 dark:shadow-zinc-950/70",md:" shadow-lg shadow-zinc-400 dark:shadow-zinc-500",lg:" shadow-2xl shadow-zinc-600 dark:shadow-zinc-400",osm:" shadow-md shadow-zinc-100/70 dark:shadow-zinc-600/70",omd:" shadow-lg shadow-zinc-100/70 dark:shadow-zinc-500/70",olg:" shadow-2xl shadow-zinc-100/70 dark:shadow-zinc-500/70",none:" shadow-none"}},defaultVariants:{variant:"secondary",size:"sm",shadouu:"sm"}}),Badge=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((param=>{let{type="secondary",size="sm",shadow="sm",children="unset",opacity=!1,className,prefix,suffix,...props}=param;const variant=opacity?"o".concat(type):type,shadouu=opacity?"o".concat(shadow):shadow,Prefix=prefix?react_feather__WEBPACK_IMPORTED_MODULE_3__[prefix]:null,Suffix=suffix?react_feather__WEBPACK_IMPORTED_MODULE_3__[suffix]:null,iconSize="sm"===size?10:"md"===size?15:"lg"===size?20:10;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:(0,_twm__WEBPACK_IMPORTED_MODULE_4__.cn)(BadgeVariants({variant,size,shadouu}),className),...props,style:{display:"inline-flex",alignItems:"center",width:"auto"},children:[Prefix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Prefix,{size:iconSize,style:{marginRight:"sm"===size?"2px":"md"===size?"0.25rem":"lg"==size?"0.5rem":"2px"}}),children,Suffix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Suffix,{size:iconSize,style:{marginLeft:"sm"===size?"2px":"md"===size?"0.25rem":"lg"==size?"0.5rem":"2px"}})]})}));Badge.displayName="Badge";const BadgedIcon=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((param=>{let{type="secondary",size,shadow="sm",opacity=!1,icon,className,color,...props}=param;const variant=opacity?"o".concat(type):type,shadouu=opacity?"o".concat(shadow):shadow,Icon=react_feather__WEBPACK_IMPORTED_MODULE_3__[icon]?react_feather__WEBPACK_IMPORTED_MODULE_3__[icon]:react_feather__WEBPACK_IMPORTED_MODULE_5__.A,IconSize="sm"===size?30:"md"===size?45:"lg"===size?60:30;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:(0,_twm__WEBPACK_IMPORTED_MODULE_4__.cn)(BadgeVariants({variant,size,shadouu}),className),style:{display:"inline-flex",alignItems:"center",width:"auto"},children:Icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{size:IconSize,color})})}));BadgedIcon.displayName="BadgeIcon",Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{type:{defaultValue:{value:'"secondary"',computed:!1},required:!1},size:{defaultValue:{value:'"sm"',computed:!1},required:!1},shadow:{defaultValue:{value:'"sm"',computed:!1},required:!1},children:{defaultValue:{value:'"unset"',computed:!1},required:!1},opacity:{defaultValue:{value:"false",computed:!1},required:!1}}},BadgedIcon.__docgenInfo={description:"",methods:[],displayName:"BadgeIcon",props:{type:{defaultValue:{value:'"secondary"',computed:!1},required:!1},shadow:{defaultValue:{value:'"sm"',computed:!1},required:!1},opacity:{defaultValue:{value:"false",computed:!1},required:!1}}}}}]);