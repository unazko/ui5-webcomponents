import{g as u,i as l,a as d}from"./chunk-KDRLDMCT.b9542094.js";import{r as G,b as K}from"./chunk-KDRLDMCT.b9542094.js";import{S as i,e as y,a as D}from"./index.d2348c08.js";import{Z as E}from"./lit-html.df91382b.js";import"./index.5ca63ce8.js";import"./index.b38f6aa4.js";import"./_commonjsHelpers.b8add541.js";const{logger:f}=__STORYBOOK_MODULE_CLIENT_LOGGER__;function m(r,e){var t,s;let a=e==="properties"?{name:((t=r.type)==null?void 0:t.text)||r.type}:{name:"void"};return{name:r.name,required:!1,description:r.description,type:a,table:{category:e,type:{summary:((s=r.type)==null?void 0:s.text)||r.type},defaultValue:{summary:r.default!==void 0?r.default:r.defaultValue}}}}function _(r){let e=r.name.replace(/(-|_|:|\.|\s)+(.)?/g,(a,t,s)=>s?s.toUpperCase():"").replace(/^([A-Z])/,a=>a.toLowerCase());return e=`on${e.charAt(0).toUpperCase()+e.substr(1)}`,[{name:e,action:{name:r.name},table:{disable:!0}},m(r,"events")]}function n(r,e){return r&&r.filter(a=>a&&a.name).reduce((a,t)=>{if(t.kind==="method")return a;switch(e){case"events":_(t).forEach(s=>{a[s.name]=s});break;default:a[t.name]=m(t,e);break}return a},{})}var C=(r,e)=>{if(!l(r)||!d(e))return null;let a=e.tags.find(t=>t.name.toUpperCase()===r.toUpperCase());return a||f.warn(`Component not found in custom-elements.json: ${r}`),a},g=(r,e)=>{var t;if(!l(r)||!d(e))return null;let a;return(t=e==null?void 0:e.modules)==null||t.forEach(s=>{var o;(o=s==null?void 0:s.declarations)==null||o.forEach(p=>{p.tagName===r&&(a=p)})}),a||f.warn(`Component not found in custom-elements.json: ${r}`),a},c=(r,e)=>(e==null?void 0:e.version)==="experimental"?C(r,e):g(r,e),v=(r,e)=>{let a=c(r,e);return a&&{...n(a.attributes,"attributes"),...n(a.members,"properties"),...n(a.properties,"properties"),...n(a.events,"events"),...n(a.slots,"slots"),...n(a.cssProperties,"css custom properties"),...n(a.cssParts,"css shadow parts")}},S=r=>{let e=u();return v(r,e)},T=r=>{let e=c(r,u());return e&&e.description};const{addons:O,useEffect:b}=__STORYBOOK_MODULE_PREVIEW_API__;var h=/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;function M(r){var t;let e=(t=r==null?void 0:r.parameters.docs)==null?void 0:t.source,a=r==null?void 0:r.parameters.__isArgsStory;return(e==null?void 0:e.type)===i.DYNAMIC?!1:!a||(e==null?void 0:e.code)||(e==null?void 0:e.type)===i.CODE}function A(r,e){var t;let{transformSource:a}=(t=e.parameters.docs)!=null?t:{};return typeof a!="function"?r:a(r,e)}function w(r,e){var s,o;let a=(o=(s=e==null?void 0:e.parameters.docs)==null?void 0:s.source)!=null&&o.excludeDecorators?e.originalStoryFn(e.args,e):r(),t;if(b(()=>{t&&O.getChannel().emit(D,e.id,t)}),!M(e)){let p=window.document.createElement("div");E(a,p),t=A(p.innerHTML.replace(h,""),e)}return a}var Y=[w],I={docs:{extractArgTypes:S,extractComponentDescription:T,story:{inline:!0},source:{type:i.DYNAMIC,language:"html"}}},N=[y],j={framework:"web-components",...I};export{N as argTypesEnhancers,Y as decorators,j as parameters,G as render,K as renderToCanvas};
//# sourceMappingURL=config.ab5eea8f.js.map
