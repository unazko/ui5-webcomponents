"use strict";import{getCurrentRuntimeIndex as a,compareRuntimes as g}from"./Runtimes.js";const l=typeof document>"u",o=(e,t)=>t?`${e}|${t}`:e,f=e=>e===void 0?!0:g(a(),parseInt(e))===1,u=(e,t,n="",i)=>{const s=typeof e=="string"?e:e.content,c=a(),r=new CSSStyleSheet;r.replaceSync(s),r._ui5StyleId=o(t,n),i&&(r._ui5RuntimeIndex=c,r._ui5Theme=i),document.adoptedStyleSheets=[...document.adoptedStyleSheets,r]},S=(e,t,n="",i)=>{const s=typeof e=="string"?e:e.content,c=a(),r=document.adoptedStyleSheets.find(d=>d._ui5StyleId===o(t,n));if(r)if(!i)r.replaceSync(s||"");else{const d=r._ui5RuntimeIndex;(r._ui5Theme!==i||f(d))&&(r.replaceSync(s||""),r._ui5RuntimeIndex=String(c),r._ui5Theme=i)}},y=(e,t="")=>l?!0:!!document.adoptedStyleSheets.find(n=>n._ui5StyleId===o(e,t)),p=(e,t="")=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(n=>n._ui5StyleId!==o(e,t))},m=(e,t,n="",i)=>{y(t,n)?S(e,t,n,i):u(e,t,n,i)},R=(e,t)=>{if(e===void 0)return t;if(t===void 0)return e;const n=typeof t=="string"?t:t.content;return typeof e=="string"?`${e} ${n}`:{content:`${e.content} ${n}`,packageName:e.packageName,fileName:e.fileName}};export{u as createStyle,y as hasStyle,S as updateStyle,p as removeStyle,m as createOrUpdateStyle,R as mergeStyles};
//# sourceMappingURL=ManagedStyles.js.map