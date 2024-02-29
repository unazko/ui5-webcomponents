try{
(()=>{var N=__STORYBOOK_API__,{ActiveTabs:I,Consumer:k,ManagerContext:v,Provider:P,addons:a,combineParameters:w,controlOrMetaKey:G,controlOrMetaSymbol:L,eventMatchesShortcut:Y,eventToShortcut:x,isMacLike:U,isShortcutTaken:H,keyToSymbol:W,merge:M,mockChannel:B,optionOrAltSymbol:F,shortcutMatchesShortcut:$,shortcutToHumanString:V,types:_,useAddonState:K,useArgTypes:j,useArgs:X,useChannel:z,useGlobalTypes:Q,useGlobals:J,useParameter:q,useSharedState:Z,useStoryPrepared:ee,useStorybookApi:te,useStorybookState:oe}=__STORYBOOK_API__;var ie=__STORYBOOK_THEMING__,{CacheProvider:pe,ClassNames:le,Global:ce,ThemeProvider:_e,background:ue,color:Ee,convert:de,create:u,createCache:me,createGlobal:Se,createReset:Te,css:be,darken:Re,ensure:ye,ignoreSsrWarning:Oe,isPropValid:Ae,jsx:ge,keyframes:he,lighten:Ce,styled:fe,themes:De,typography:Ne,useTheme:Ie,withTheme:ke}=__STORYBOOK_THEMING__;var E=u({base:"light",brandTitle:"UI5 Web Components",brandImage:"../assets/images/sb-logo.png",brandUrl:"../",brandTarget:"_self"});var r=__REACT__,{Children:We,Component:Me,Fragment:Be,Profiler:Fe,PureComponent:$e,StrictMode:Ve,Suspense:Ke,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:je,cloneElement:Xe,createContext:ze,createElement:Qe,createFactory:Je,createRef:qe,forwardRef:Ze,isValidElement:et,lazy:tt,memo:ot,useCallback:st,useContext:rt,useDebugValue:at,useEffect:nt,useImperativeHandle:it,useLayoutEffect:pt,useMemo:lt,useReducer:ct,useRef:_t,useState:ut,version:Et}=__REACT__;var d=()=>r.createElement("svg",{className:"sb-ui5-github-svg",viewBox:"0 0 512 499.36",xmlns:"http://www.w3.org/2000/svg"},r.createElement("title",null,"GitHub"),r.createElement("path",{d:"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z",fill:"#404040",fillRule:"evenodd"}));var l={name:"@ui5/webcomponents-playground",private:!0,version:"1.23.0-rc.5",description:"UI5\xA0Web\xA0Components\xA0Playground",author:"SAP\xA0SE\xA0(https://www.sap.com)",license:"Apache-2.0",keywords:["ui5-web-components","openui5","sapui5"],repository:{type:"git",url:"https://github.com/SAP/ui5-webcomponents.git"},devDependencies:{"@storybook/addon-actions":"^7.6.0","@storybook/addon-essentials":"^7.6.0","@storybook/addon-links":"^7.6.0","@storybook/web-components":"^7.6.0","@storybook/web-components-vite":"^7.6.0","@types/react":"^18.0.27","@types/react-dom":"^18.0.11","@whitespace/storybook-addon-html":"^5.1.0","copy-and-watch":"^0.1.5",lit:"^2.7.1","npm-run-all":"^4.1.5",prettier:"^2.8.1",react:"^18.2.0","react-dom":"^18.2.0","react-syntax-highlighter":"^15.5.0","remark-gfm":"^3.0.1",rimraf:"^3.0.2",storybook:"^7.6.0",typescript:"^5.2.2","vite-node":"^0.29.8"},scripts:{build:"npm run build-storybook && npm run build-sitemap","build:bundle":"vite build",clean:"npm-run-all --parallel clean:*","clean:assets":"rimraf ./assets/js/ui5-webcomponents/*","clean:pages":"rimraf ./docs/storybook-pages/main && rimraf ./docs/storybook-pages/fiori",start:"npm run storybook","copy:assets":"npm-run-all copy:assets:resources copy:assets:main copy:assets:fiori","copy:assets:resources":'copy-and-watch "../fiori/dist/resources/*" "./assets/js/ui5-webcomponents"',"copy:assets:main":'copy-and-watch "../main/dist/assets/**/*" "./assets/"',"copy:assets:fiori":'copy-and-watch "../fiori/dist/assets/**/*" "./assets/"',"prepare:build:bundle":"npm run build:bundle","prepare:build:nojekyll":'copy-and-watch "./.nojekyll" "./dist"',"prepare:build:pages":"npm run clean:pages && vite-node ./build-scripts-storybook/pages-prepare.ts","prepare:assets":"npm run clean:assets && npm run copy:assets","prepare:samples":"vite-node ./build-scripts-storybook/samples-prepare.ts","prepare:manifest":"node ./build-scripts-storybook/parse-manifest.js","prepare:documentation":"vite-node ./build-scripts-storybook/documentation-prepare.ts","prepare:types":"vite-node ./build-scripts-storybook/types-prepare.ts","prepare:overviews":"vite-node ./build-scripts-storybook/overviews-prepare.ts",storybook:"npm-run-all --parallel prepare:* && storybook dev -p 6006","build-storybook":"npm-run-all --parallel prepare:build:* prepare:* && tsc && storybook build -o ./dist/playground","build-sitemap":"vite-node ./build-scripts-storybook/sitemap-prepare.ts"},dependencies:{xmlbuilder:"^15.1.1"}};var m="github-button",R=()=>r.createElement("div",{style:{display:"flex",height:"100%",alignItems:"center",gap:"5px"}},r.createElement("a",{style:{width:"20px",height:"20px"},href:"https://github.com/SAP/ui5-webcomponents",target:"_blank",rel:"noreferrer"},r.createElement(d,null)),r.createElement("a",{style:{textDecoration:"none",color:"inherit"},href:`https://github.com/SAP/ui5-webcomponents/tree/v${l.version}`,target:"_blank",rel:"noreferrer"},"v",l.version));a.register(m,n=>{a.add(m,{title:"Github",type:_.TOOLEXTRA,match:({viewMode:i})=>!!(i&&i.match(/^(story|docs)$/)),render:R})});var vt=__STORYBOOK_CORE_EVENTS__,{CHANNEL_CREATED:Pt,CONFIG_ERROR:wt,CURRENT_STORY_WAS_SET:S,DOCS_PREPARED:Gt,DOCS_RENDERED:Lt,FORCE_REMOUNT:Yt,FORCE_RE_RENDER:xt,GLOBALS_UPDATED:Ut,IGNORED_EXCEPTION:Ht,NAVIGATE_URL:Wt,PLAY_FUNCTION_THREW_EXCEPTION:Mt,PRELOAD_ENTRIES:Bt,PREVIEW_BUILDER_PROGRESS:Ft,PREVIEW_KEYDOWN:$t,REGISTER_SUBSCRIPTION:Vt,REQUEST_WHATS_NEW_DATA:Kt,RESET_STORY_ARGS:jt,RESULT_WHATS_NEW_DATA:Xt,SELECT_STORY:zt,SET_CONFIG:Qt,SET_CURRENT_STORY:Jt,SET_GLOBALS:qt,SET_INDEX:Zt,SET_STORIES:eo,SET_WHATS_NEW_CACHE:to,SHARED_STATE_CHANGED:oo,SHARED_STATE_SET:so,STORIES_COLLAPSE_ALL:ro,STORIES_EXPAND_ALL:ao,STORY_ARGS_UPDATED:no,STORY_CHANGED:io,STORY_ERRORED:po,STORY_INDEX_INVALIDATED:lo,STORY_MISSING:co,STORY_PREPARED:_o,STORY_RENDERED:uo,STORY_RENDER_PHASE_CHANGED:Eo,STORY_SPECIFIED:mo,STORY_THREW_EXCEPTION:So,STORY_UNCHANGED:To,TELEMETRY_ERROR:bo,TOGGLE_WHATS_NEW_NOTIFICATIONS:Ro,UPDATE_GLOBALS:yo,UPDATE_QUERY_PARAMS:Oo,UPDATE_STORY_ARGS:Ao}=__STORYBOOK_CORE_EVENTS__;var y="title-enhancer";a.register(y,n=>{let i=()=>{let e=n.getCurrentStoryData(),c=T=>`ui5-${T.split("/").pop()?.split(" ").join("-").toLowerCase()}`,p="";e?.tags?.includes("autodocs")?p=`${e.title} - ${c(e.title)}`:e?.tags?.includes("story")?p=`${e.title} - ${c(e.title)} - ${e.name}`:e?.tags?.includes("docs")&&(p=`${e.title}`),document.title=`${p} | UI5 Web Components | Documentation`};n.on(S,()=>{i()})});a.setConfig({theme:E});a.setConfig({sidebar:{filters:{patterns:n=>!(n.tags?.includes("_hidden_")&&n.tags?.includes("story"))}}});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
