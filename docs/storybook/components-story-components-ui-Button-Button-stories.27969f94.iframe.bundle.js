"use strict";(self.webpackChunknoplus_web=self.webpackChunknoplus_web||[]).push([[765],{"./src/components/story/components/ui/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Icon:()=>Icon,JustLoading:()=>JustLoading,Loading:()=>Loading,OutlinedPrimary:()=>OutlinedPrimary,OutlinedSecondary:()=>OutlinedSecondary,OutlinedSoft:()=>OutlinedSoft,OutlinedTertiary:()=>OutlinedTertiary,Primary:()=>Primary,Secondary:()=>Secondary,Soft:()=>Soft,Tertiary:()=>Tertiary,Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Primary_parameters,_Primary_parameters_docs,_Primary_parameters1,_Secondary_parameters,_Secondary_parameters_docs,_Secondary_parameters1,_Tertiary_parameters,_Tertiary_parameters_docs,_Tertiary_parameters1,_Soft_parameters,_Soft_parameters_docs,_Soft_parameters1,_Text_parameters,_Text_parameters_docs,_Text_parameters1,_OutlinedPrimary_parameters,_OutlinedPrimary_parameters_docs,_OutlinedPrimary_parameters1,_OutlinedSecondary_parameters,_OutlinedSecondary_parameters_docs,_OutlinedSecondary_parameters1,_OutlinedTertiary_parameters,_OutlinedTertiary_parameters_docs,_OutlinedTertiary_parameters1,_OutlinedSoft_parameters,_OutlinedSoft_parameters_docs,_OutlinedSoft_parameters1,_Disabled_parameters,_Disabled_parameters_docs,_Disabled_parameters1,_Loading_parameters,_Loading_parameters_docs,_Loading_parameters1,_JustLoading_parameters,_JustLoading_parameters_docs,_JustLoading_parameters1,_Icon_parameters,_Icon_parameters_docs,_Icon_parameters1,_ui_Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ui/Button.tsx"),react_feather__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-feather/dist/index.js"),_ui_Feather__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Feather.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/Button",component:_ui_Button__WEBPACK_IMPORTED_MODULE_0__.$,argTypes:{children:{name:"Children / Text",description:"The text to display inside the button",defaultValue:"Button",control:"text"},type:{name:"Type",description:"The variant of the button",control:{type:"select",options:["primary","secondary","tertiary","text","icon"]}},size:{name:"Size",description:"The size of the button",control:{type:"select",options:["sm","md","lg"]}},rounded:{name:"Rounded",description:"Whether the button should be rounded",control:"boolean"},disabled:{name:"Disabled",description:"Whether the button should be disabled",control:"boolean"},outlined:{name:"Outlined",description:"Whether the button should be outlined",control:"boolean"},textexpand:{name:"Text Expand",description:"Hover animation for text buttons",defaultValue:!1,control:"boolean"},shape:{name:"Shape",description:"The shape of the button",control:{type:"select",options:["round","square"]}},Prefix:{name:"Prefix",description:"The prefix icon of the button",control:{type:"select",options:Object.keys(react_feather__WEBPACK_IMPORTED_MODULE_2__)}},Suffix:{name:"Suffix",description:"The suffix icon of the button",control:{type:"select",options:Object.keys(react_feather__WEBPACK_IMPORTED_MODULE_2__)}},Icon:{name:"Icon",description:"The icon of the button",control:{type:"select",options:Object.keys(react_feather__WEBPACK_IMPORTED_MODULE_2__)}},Loading:{name:"Loading",description:"The loading state of the button",control:{type:"select",options:Object.keys(_ui_Feather__WEBPACK_IMPORTED_MODULE_1__.I)}}}},Default={args:{children:"Button",type:"secondary",size:"md",rounded:!0,disabled:!1,outlined:!1,textexpand:!1}},Primary={args:{...Default.args,type:"primary",children:"Primary"}},Secondary={args:{...Default.args,type:"secondary",children:"Secondary"}},Tertiary={args:{...Default.args,type:"tertiary",children:"Tertiary"}},Soft={args:{...Default.args,type:"soft",children:"Soft"}},Text={args:{...Default.args,type:"text",children:"Text"}},OutlinedPrimary={args:{...Primary.args,outlined:!0}},OutlinedSecondary={args:{...Secondary.args,outlined:!0}},OutlinedTertiary={args:{...Tertiary.args,outlined:!0}},OutlinedSoft={args:{...Soft.args,outlined:!0}},Disabled={args:{...Default.args,disabled:!0,children:"Disabled"}},Loading={args:{...Default.args,loading:"hash",children:"Loading"}},JustLoading={args:{...Default.args,loading:"hash",children:"",shape:"round"}},Icon={args:{...Default.args,icon:"GitHub",children:""}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    children: "Button",\n    type: "secondary",\n    size: "md",\n    rounded: true,\n    disabled: false,\n    outlined: false,\n    textexpand: false\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "primary",\n    children: "Primary"\n  }\n}',...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}},Secondary.parameters={...Secondary.parameters,docs:{...null===(_Secondary_parameters=Secondary.parameters)||void 0===_Secondary_parameters?void 0:_Secondary_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "secondary",\n    children: "Secondary"\n  }\n}',...null===(_Secondary_parameters1=Secondary.parameters)||void 0===_Secondary_parameters1||null===(_Secondary_parameters_docs=_Secondary_parameters1.docs)||void 0===_Secondary_parameters_docs?void 0:_Secondary_parameters_docs.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...null===(_Tertiary_parameters=Tertiary.parameters)||void 0===_Tertiary_parameters?void 0:_Tertiary_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "tertiary",\n    children: "Tertiary"\n  }\n}',...null===(_Tertiary_parameters1=Tertiary.parameters)||void 0===_Tertiary_parameters1||null===(_Tertiary_parameters_docs=_Tertiary_parameters1.docs)||void 0===_Tertiary_parameters_docs?void 0:_Tertiary_parameters_docs.source}}},Soft.parameters={...Soft.parameters,docs:{...null===(_Soft_parameters=Soft.parameters)||void 0===_Soft_parameters?void 0:_Soft_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "soft",\n    children: "Soft"\n  }\n}',...null===(_Soft_parameters1=Soft.parameters)||void 0===_Soft_parameters1||null===(_Soft_parameters_docs=_Soft_parameters1.docs)||void 0===_Soft_parameters_docs?void 0:_Soft_parameters_docs.source}}},Text.parameters={...Text.parameters,docs:{...null===(_Text_parameters=Text.parameters)||void 0===_Text_parameters?void 0:_Text_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    type: "text",\n    children: "Text"\n  }\n}',...null===(_Text_parameters1=Text.parameters)||void 0===_Text_parameters1||null===(_Text_parameters_docs=_Text_parameters1.docs)||void 0===_Text_parameters_docs?void 0:_Text_parameters_docs.source}}},OutlinedPrimary.parameters={...OutlinedPrimary.parameters,docs:{...null===(_OutlinedPrimary_parameters=OutlinedPrimary.parameters)||void 0===_OutlinedPrimary_parameters?void 0:_OutlinedPrimary_parameters.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    outlined: true\n  }\n}",...null===(_OutlinedPrimary_parameters1=OutlinedPrimary.parameters)||void 0===_OutlinedPrimary_parameters1||null===(_OutlinedPrimary_parameters_docs=_OutlinedPrimary_parameters1.docs)||void 0===_OutlinedPrimary_parameters_docs?void 0:_OutlinedPrimary_parameters_docs.source}}},OutlinedSecondary.parameters={...OutlinedSecondary.parameters,docs:{...null===(_OutlinedSecondary_parameters=OutlinedSecondary.parameters)||void 0===_OutlinedSecondary_parameters?void 0:_OutlinedSecondary_parameters.docs,source:{originalSource:"{\n  args: {\n    ...Secondary.args,\n    outlined: true\n  }\n}",...null===(_OutlinedSecondary_parameters1=OutlinedSecondary.parameters)||void 0===_OutlinedSecondary_parameters1||null===(_OutlinedSecondary_parameters_docs=_OutlinedSecondary_parameters1.docs)||void 0===_OutlinedSecondary_parameters_docs?void 0:_OutlinedSecondary_parameters_docs.source}}},OutlinedTertiary.parameters={...OutlinedTertiary.parameters,docs:{...null===(_OutlinedTertiary_parameters=OutlinedTertiary.parameters)||void 0===_OutlinedTertiary_parameters?void 0:_OutlinedTertiary_parameters.docs,source:{originalSource:"{\n  args: {\n    ...Tertiary.args,\n    outlined: true\n  }\n}",...null===(_OutlinedTertiary_parameters1=OutlinedTertiary.parameters)||void 0===_OutlinedTertiary_parameters1||null===(_OutlinedTertiary_parameters_docs=_OutlinedTertiary_parameters1.docs)||void 0===_OutlinedTertiary_parameters_docs?void 0:_OutlinedTertiary_parameters_docs.source}}},OutlinedSoft.parameters={...OutlinedSoft.parameters,docs:{...null===(_OutlinedSoft_parameters=OutlinedSoft.parameters)||void 0===_OutlinedSoft_parameters?void 0:_OutlinedSoft_parameters.docs,source:{originalSource:"{\n  args: {\n    ...Soft.args,\n    outlined: true\n  }\n}",...null===(_OutlinedSoft_parameters1=OutlinedSoft.parameters)||void 0===_OutlinedSoft_parameters1||null===(_OutlinedSoft_parameters_docs=_OutlinedSoft_parameters1.docs)||void 0===_OutlinedSoft_parameters_docs?void 0:_OutlinedSoft_parameters_docs.source}}},Disabled.parameters={...Disabled.parameters,docs:{...null===(_Disabled_parameters=Disabled.parameters)||void 0===_Disabled_parameters?void 0:_Disabled_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    disabled: true,\n    children: "Disabled"\n  }\n}',...null===(_Disabled_parameters1=Disabled.parameters)||void 0===_Disabled_parameters1||null===(_Disabled_parameters_docs=_Disabled_parameters1.docs)||void 0===_Disabled_parameters_docs?void 0:_Disabled_parameters_docs.source}}},Loading.parameters={...Loading.parameters,docs:{...null===(_Loading_parameters=Loading.parameters)||void 0===_Loading_parameters?void 0:_Loading_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    loading: "hash",\n    children: "Loading"\n  }\n}',...null===(_Loading_parameters1=Loading.parameters)||void 0===_Loading_parameters1||null===(_Loading_parameters_docs=_Loading_parameters1.docs)||void 0===_Loading_parameters_docs?void 0:_Loading_parameters_docs.source}}},JustLoading.parameters={...JustLoading.parameters,docs:{...null===(_JustLoading_parameters=JustLoading.parameters)||void 0===_JustLoading_parameters?void 0:_JustLoading_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    loading: "hash",\n    children: "",\n    shape: "round"\n  }\n}',...null===(_JustLoading_parameters1=JustLoading.parameters)||void 0===_JustLoading_parameters1||null===(_JustLoading_parameters_docs=_JustLoading_parameters1.docs)||void 0===_JustLoading_parameters_docs?void 0:_JustLoading_parameters_docs.source}}},Icon.parameters={...Icon.parameters,docs:{...null===(_Icon_parameters=Icon.parameters)||void 0===_Icon_parameters?void 0:_Icon_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    icon: "GitHub",\n    children: ""\n  }\n}',...null===(_Icon_parameters1=Icon.parameters)||void 0===_Icon_parameters1||null===(_Icon_parameters_docs=_Icon_parameters1.docs)||void 0===_Icon_parameters_docs?void 0:_Icon_parameters_docs.source}}};const __namedExportsOrder=["Default","Primary","Secondary","Tertiary","Soft","Text","OutlinedPrimary","OutlinedSecondary","OutlinedTertiary","OutlinedSoft","Disabled","Loading","JustLoading","Icon"]}}]);