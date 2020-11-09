(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1007:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(465)},1779:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(79),_clientLogger=__webpack_require__(52),_configFilename=__webpack_require__(1780);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1780:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1781:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(465).configure)([__webpack_require__(1782),__webpack_require__(1783)],module,!1)}).call(this,__webpack_require__(143)(module))},1782:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1782},1783:function(module,exports,__webpack_require__){var map={"./components/atoms/I18nText/I18nText.stories.tsx":1784,"./components/atoms/InputDate/InputDate.stories.tsx":1813,"./components/atoms/LoadingSpiner/LoadingSpiner.stories.tsx":1815,"./components/molecules/WithLabel/WithLabel.stories.tsx":1819};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1783},1784:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Japanese",(function(){return Japanese})),__webpack_require__.d(__webpack_exports__,"English",(function(){return English}));var _Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),_I18nText__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(253),_utils_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(71),Component=_I18nText__WEBPACK_IMPORTED_MODULE_1__.a;__webpack_exports__.default=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_2__.a)(Component,{title:"Atoms/I18nText"});var DefaultProps={langCode:"jp",i18nObj:{jp:"サンプル",en:"Sample"}},Template=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_2__.b)(Component),Default=Template.bind({});Default.args=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},DefaultProps);var Japanese=Template.bind({});Japanese.args=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},DefaultProps);var English=Template.bind({});English.args=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},DefaultProps),{},{langCode:"en"}),Default.parameters=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"createStoryTemplate(Component)"}},Default.parameters),Japanese.parameters=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"createStoryTemplate(Component)"}},Japanese.parameters),English.parameters=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"createStoryTemplate(Component)"}},English.parameters)},1813:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Label",(function(){return Label})),__webpack_require__.d(__webpack_exports__,"Filled",(function(){return Filled})),__webpack_require__.d(__webpack_exports__,"Outlined",(function(){return Outlined}));var _Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),date_fns_parseISO__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(268),_utils_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(71),_InputDate__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(206);__webpack_exports__.default=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_2__.a)(_InputDate__WEBPACK_IMPORTED_MODULE_3__.a,{title:"Atoms/InputDate"});var DefaultProps={value:Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_1__.a)("2020-11-07"),onChange:_utils_storybook__WEBPACK_IMPORTED_MODULE_2__.c},Template=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_2__.b)(_InputDate__WEBPACK_IMPORTED_MODULE_3__.a),Default=Template.bind({});Default.args=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},DefaultProps);var Label=Template.bind({});Label.args=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},DefaultProps),{},{label:"DatePicker"});var Filled=Template.bind({});Filled.args=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},DefaultProps),{},{inputVariant:"filled"});var Outlined=Template.bind({});Outlined.args=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},DefaultProps),{},{inputVariant:"outlined"}),Default.parameters=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"createStoryTemplate(InputDate)"}},Default.parameters),Label.parameters=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"createStoryTemplate(InputDate)"}},Label.parameters),Filled.parameters=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"createStoryTemplate(InputDate)"}},Filled.parameters),Outlined.parameters=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"createStoryTemplate(InputDate)"}},Outlined.parameters)},1815:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),_LoadingSpiner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(207),_utils_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(71),Component=_LoadingSpiner__WEBPACK_IMPORTED_MODULE_1__.a;__webpack_exports__.default=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_2__.a)(Component,{title:"Atoms/LoadingSpiner"});var Default=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_2__.b)(_LoadingSpiner__WEBPACK_IMPORTED_MODULE_1__.a).bind({});Default.args=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},{isLoading:!1}),Default.parameters=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"createStoryTemplate(LoadingSpiner)"}},Default.parameters)},1819:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(24),jsx_runtime=__webpack_require__(41),parseISO=(__webpack_require__(0),__webpack_require__(268)),List=__webpack_require__(1856),ListItem=__webpack_require__(1857),Typography=__webpack_require__(1855),I18nText=__webpack_require__(253),WithLabel_WithLabel=function WithLabel(_ref){var label=_ref.label,children=_ref.children;return Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsxs)(List.a,{children:[Object(jsx_runtime.jsx)(ListItem.a,{children:Object(jsx_runtime.jsx)(Typography.a,{variant:"body1",color:"inherit",children:Object(jsx_runtime.jsx)(I18nText.b,{i18nObj:label})})}),Object(jsx_runtime.jsx)(ListItem.a,{alignItems:"flex-start",children:children})]})})};try{WithLabel_WithLabel.displayName="WithLabel",WithLabel_WithLabel.__docgenInfo={description:"",displayName:"WithLabel",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"I18nObj"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/WithLabel/WithLabel.tsx#WithLabel"]={docgenInfo:WithLabel_WithLabel.__docgenInfo,name:"WithLabel",path:"src/components/molecules/WithLabel/WithLabel.tsx#WithLabel"})}catch(__react_docgen_typescript_loader_error){}try{WithLabel_WithLabel.displayName="WithLabel",WithLabel_WithLabel.__docgenInfo={description:"",displayName:"WithLabel",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"I18nObj"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/WithLabel/WithLabel.tsx#WithLabel"]={docgenInfo:WithLabel_WithLabel.__docgenInfo,name:"WithLabel",path:"src/components/molecules/WithLabel/WithLabel.tsx#WithLabel"})}catch(__react_docgen_typescript_loader_error){}var storybook=__webpack_require__(71),InputDate=__webpack_require__(206),Component=(__webpack_require__(207),WithLabel_WithLabel),DefaultProps=(__webpack_exports__.default=Object(storybook.a)(Component,{title:"Molecules/WithLabel",decorators:[storybook.d]}),{label:{jp:"サンプル",en:"Sample"},children:Object(jsx_runtime.jsx)(InputDate.a,{value:Object(parseISO.a)("2020-11-07"),onChange:storybook.c})}),Default=Object(storybook.b)(Component).bind({});Default.args=Object(objectSpread2.a)({},DefaultProps),Default.parameters=Object(objectSpread2.a)({storySource:{source:"createStoryTemplate(Component)"}},Default.parameters)},206:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return InputDate}));var _Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),_material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(62),_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1824),_date_io_date_fns__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(619),date_fns_isValid__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(169),getValidDate=function getValidDate(initialDate){for(var _len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];var date=params[0];return date&&Object(date_fns_isValid__WEBPACK_IMPORTED_MODULE_7__.a)(date)?date:initialDate},InputDate=function InputDate(_ref){var value=_ref.value,onChange=_ref.onChange,_ref$format=_ref.format,format=void 0===_ref$format?"yyyy-MM-dd":_ref$format,_ref$initialDate=_ref.initialDate,initialDate=void 0===_ref$initialDate?new Date:_ref$initialDate,props=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref,["value","onChange","format","initialDate"]),onChangeDate=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(){for(var _len2=arguments.length,params=new Array(_len2),_key2=0;_key2<_len2;_key2++)params[_key2]=arguments[_key2];return onChange(getValidDate.apply(void 0,[initialDate].concat(params)))}),[initialDate,onChange]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__.a,{utils:_date_io_date_fns__WEBPACK_IMPORTED_MODULE_6__.a,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__.a,Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},props),{},{format:format,KeyboardButtonProps:{"aria-label":"pickers-date-input"},mask:"____-__-__",onChange:onChangeDate,value:value}))})};try{InputDate.displayName="InputDate",InputDate.__docgenInfo={description:"",displayName:"InputDate",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},focused:{defaultValue:null,description:"If `true`, the component will be displayed in focused state.",name:"focused",required:!1,type:{name:"boolean"}},hiddenLabel:{defaultValue:null,description:"If `true`, the label will be hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.",name:"hiddenLabel",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(date: Date) => void"}},initialDate:{defaultValue:{value:"new Date()"},description:"",name:"initialDate",required:!1,type:{name:"Date"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/InputDate/InputDate.tsx#InputDate"]={docgenInfo:InputDate.__docgenInfo,name:"InputDate",path:"src/components/atoms/InputDate/InputDate.tsx#InputDate"})}catch(__react_docgen_typescript_loader_error){}try{InputDate.displayName="InputDate",InputDate.__docgenInfo={description:"",displayName:"InputDate",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},focused:{defaultValue:null,description:"If `true`, the component will be displayed in focused state.",name:"focused",required:!1,type:{name:"boolean"}},hiddenLabel:{defaultValue:null,description:"If `true`, the label will be hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.",name:"hiddenLabel",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(date: Date) => void"}},initialDate:{defaultValue:{value:"new Date()"},description:"",name:"initialDate",required:!1,type:{name:"Date"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/InputDate/InputDate.tsx#InputDate"]={docgenInfo:InputDate.__docgenInfo,name:"InputDate",path:"src/components/atoms/InputDate/InputDate.tsx#InputDate"})}catch(__react_docgen_typescript_loader_error){}},207:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return LoadingSpiner}));var _Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(414),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41),styled_components__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(415)),_material_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1823);function _templateObject2(){var data=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  position: absolute;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  z-index: 9999;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  min-width: 100vw;\n  background-color: rgba(38, 38, 39, 0.5);\n  line-height: 1.5em;\n  .progress {\n    position: absolute;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var LoadingSpiner=function LoadingSpiner(_ref){var isLoading=_ref.isLoading,children=_ref.children;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[isLoading&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledWrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledCircularProgress,{})}),children]})},StyledWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.a.div(_templateObject()),StyledCircularProgress=Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.a)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a)(_templateObject2());try{LoadingSpiner.displayName="LoadingSpiner",LoadingSpiner.__docgenInfo={description:"",displayName:"LoadingSpiner",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/LoadingSpiner/LoadingSpiner.tsx#LoadingSpiner"]={docgenInfo:LoadingSpiner.__docgenInfo,name:"LoadingSpiner",path:"src/components/atoms/LoadingSpiner/LoadingSpiner.tsx#LoadingSpiner"})}catch(__react_docgen_typescript_loader_error){}try{LoadingSpiner.displayName="LoadingSpiner",LoadingSpiner.__docgenInfo={description:"",displayName:"LoadingSpiner",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/LoadingSpiner/LoadingSpiner.tsx#LoadingSpiner"]={docgenInfo:LoadingSpiner.__docgenInfo,name:"LoadingSpiner",path:"src/components/atoms/LoadingSpiner/LoadingSpiner.tsx#LoadingSpiner"})}catch(__react_docgen_typescript_loader_error){}},253:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return I18nText})),__webpack_require__.d(__webpack_exports__,"b",(function(){return I18nTextContainer}));var _Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(269),_store__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(272),InitialObj={jp:"unknown text",en:"unknown text"},I18nText=function I18nText(_ref){var langCode=_ref.langCode,_ref$i18nObj=_ref.i18nObj,i18nObj=void 0===_ref$i18nObj?InitialObj:_ref$i18nObj,text=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((function(){return i18nObj[langCode]||""}),[i18nObj,langCode]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:text})},I18nTextContainer=function I18nTextContainer(_ref2){var props=Object.assign({},_ref2),langCode=Object(react_redux__WEBPACK_IMPORTED_MODULE_3__.b)(_store__WEBPACK_IMPORTED_MODULE_4__.b);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(I18nText,Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},props),{},{langCode:langCode}))};try{I18nText.displayName="I18nText",I18nText.__docgenInfo={description:"",displayName:"I18nText",props:{langCode:{defaultValue:null,description:"",name:"langCode",required:!0,type:{name:"enum",value:[{value:'"jp"'},{value:'"en"'}]}},i18nObj:{defaultValue:null,description:"",name:"i18nObj",required:!1,type:{name:"I18nObj"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/I18nText/I18nText.tsx#I18nText"]={docgenInfo:I18nText.__docgenInfo,name:"I18nText",path:"src/components/atoms/I18nText/I18nText.tsx#I18nText"})}catch(__react_docgen_typescript_loader_error){}try{I18nTextContainer.displayName="I18nTextContainer",I18nTextContainer.__docgenInfo={description:"",displayName:"I18nTextContainer",props:{i18nObj:{defaultValue:null,description:"",name:"i18nObj",required:!1,type:{name:"I18nObj"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/I18nText/I18nText.tsx#I18nTextContainer"]={docgenInfo:I18nTextContainer.__docgenInfo,name:"I18nTextContainer",path:"src/components/atoms/I18nText/I18nText.tsx#I18nTextContainer"})}catch(__react_docgen_typescript_loader_error){}try{I18nText.displayName="I18nText",I18nText.__docgenInfo={description:"",displayName:"I18nText",props:{langCode:{defaultValue:null,description:"",name:"langCode",required:!0,type:{name:"enum",value:[{value:'"jp"'},{value:'"en"'}]}},i18nObj:{defaultValue:null,description:"",name:"i18nObj",required:!1,type:{name:"I18nObj"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/I18nText/I18nText.tsx#I18nText"]={docgenInfo:I18nText.__docgenInfo,name:"I18nText",path:"src/components/atoms/I18nText/I18nText.tsx#I18nText"})}catch(__react_docgen_typescript_loader_error){}try{I18nTextContainer.displayName="I18nTextContainer",I18nTextContainer.__docgenInfo={description:"",displayName:"I18nTextContainer",props:{i18nObj:{defaultValue:null,description:"",name:"i18nObj",required:!1,type:{name:"I18nObj"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/I18nText/I18nText.tsx#I18nTextContainer"]={docgenInfo:I18nTextContainer.__docgenInfo,name:"I18nTextContainer",path:"src/components/atoms/I18nText/I18nText.tsx#I18nTextContainer"})}catch(__react_docgen_typescript_loader_error){}},272:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return store_configureStore})),__webpack_require__.d(__webpack_exports__,"b",(function(){return langCodeSelector}));var defineProperty=__webpack_require__(39),redux=__webpack_require__(92),es=__webpack_require__(94),objectSpread2=__webpack_require__(24),redux_toolkit_esm=__webpack_require__(408),es6=__webpack_require__(620),language_initialState={langCode:Object(es6.a)(["jp","en"]).jp},languageModule=Object(redux_toolkit_esm.a)({name:"[50ra4-react-component/language]",initialState:language_initialState,reducers:{changeLanguage:function changeLanguage(state,action){return Object(objectSpread2.a)(Object(objectSpread2.a)({},state),{},{langCode:action.payload})}}}),s50ra4ReactComponentReducers=Object(redux.c)({language:languageModule.reducer}),rootReducer=Object(redux.c)(Object(defineProperty.a)({},"50ra4-react-component",s50ra4ReactComponentReducers)),enhancers=Object(redux.d)((function(f){return f})),store_configureStore=function __configureStore(initialState){return Object(redux.e)(rootReducer,initialState,enhancers)},langCodeSelector=Object(es.a)((function(appState){return appState["50ra4-react-component"]}),(function(state){return state.language.langCode}))},71:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createStoryMeta})),__webpack_require__.d(__webpack_exports__,"b",(function(){return createStoryTemplate})),__webpack_require__.d(__webpack_exports__,"c",(function(){return voidFunction})),__webpack_require__.d(__webpack_exports__,"d",(function(){return withReduxProvider}));var _Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41),react_redux__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(269)),_store__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(272),createStoryMeta=function createStoryMeta(Component,params){return Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},params),{},{component:Component})},createStoryTemplate=function createStoryTemplate(Component){return function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,Object(_Users_50ra4_Projects_50ra4_react_component_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))}},voidFunction=function voidFunction(){},store=Object(_store__WEBPACK_IMPORTED_MODULE_4__.a)({}),withReduxProvider=function withReduxProvider(storyFn){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.a,{store:store,children:storyFn()})};try{createStoryTemplate.displayName="createStoryTemplate",createStoryTemplate.__docgenInfo={description:"",displayName:"createStoryTemplate",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storybook.tsx#createStoryTemplate"]={docgenInfo:createStoryTemplate.__docgenInfo,name:"createStoryTemplate",path:"src/utils/storybook.tsx#createStoryTemplate"})}catch(__react_docgen_typescript_loader_error){}try{voidFunction.displayName="voidFunction",voidFunction.__docgenInfo={description:"",displayName:"voidFunction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storybook.tsx#voidFunction"]={docgenInfo:voidFunction.__docgenInfo,name:"voidFunction",path:"src/utils/storybook.tsx#voidFunction"})}catch(__react_docgen_typescript_loader_error){}try{withReduxProvider.displayName="withReduxProvider",withReduxProvider.__docgenInfo={description:"",displayName:"withReduxProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storybook.tsx#withReduxProvider"]={docgenInfo:withReduxProvider.__docgenInfo,name:"withReduxProvider",path:"src/utils/storybook.tsx#withReduxProvider"})}catch(__react_docgen_typescript_loader_error){}try{createStoryTemplate.displayName="createStoryTemplate",createStoryTemplate.__docgenInfo={description:"",displayName:"createStoryTemplate",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storybook.tsx#createStoryTemplate"]={docgenInfo:createStoryTemplate.__docgenInfo,name:"createStoryTemplate",path:"src/utils/storybook.tsx#createStoryTemplate"})}catch(__react_docgen_typescript_loader_error){}try{voidFunction.displayName="voidFunction",voidFunction.__docgenInfo={description:"",displayName:"voidFunction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storybook.tsx#voidFunction"]={docgenInfo:voidFunction.__docgenInfo,name:"voidFunction",path:"src/utils/storybook.tsx#voidFunction"})}catch(__react_docgen_typescript_loader_error){}try{withReduxProvider.displayName="withReduxProvider",withReduxProvider.__docgenInfo={description:"",displayName:"withReduxProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storybook.tsx#withReduxProvider"]={docgenInfo:withReduxProvider.__docgenInfo,name:"withReduxProvider",path:"src/utils/storybook.tsx#withReduxProvider"})}catch(__react_docgen_typescript_loader_error){}},856:function(module,exports,__webpack_require__){__webpack_require__(857),__webpack_require__(1006),__webpack_require__(1007),__webpack_require__(1168),__webpack_require__(1723),__webpack_require__(1755),__webpack_require__(1763),__webpack_require__(1775),__webpack_require__(1777),__webpack_require__(1779),module.exports=__webpack_require__(1781)},921:function(module,exports){}},[[856,1,2]]]);
//# sourceMappingURL=main.119cbe05533ce3af0e41.bundle.js.map