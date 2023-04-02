/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const S=window,m=S.trustedTypes,B=m?m.createPolicy("lit-html",{createHTML:r=>r}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,E="?"+_,K=`<${E}>`,f=document,x=(r="")=>f.createComment(r),N=r=>r===null||typeof r!="object"&&typeof r!="function",k=Array.isArray,D=r=>k(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,R=/>/g,v=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,L=/"/g,W=/^(?:script|style|textarea|title)$/i,V=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),X=V(1),Y=V(2),T=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),O=new WeakMap,g=f.createTreeWalker(f,129,null,!1),z=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=H;for(let l=0;l<e;l++){const h=r[l];let c,$,d=-1,A=0;for(;A<h.length&&(n.lastIndex=A,$=n.exec(h),$!==null);)A=n.lastIndex,n===H?$[1]==="!--"?n=P:$[1]!==void 0?n=R:$[2]!==void 0?(W.test($[2])&&(s=RegExp("</"+$[2],"g")),n=v):$[3]!==void 0&&(n=v):n===v?$[0]===">"?(n=s!=null?s:H,d=-1):$[1]===void 0?d=-2:(d=n.lastIndex-$[2].length,c=$[1],n=$[3]===void 0?v:$[3]==='"'?L:U):n===L||n===U?n=v:n===P||n===R?n=H:(n=v,s=void 0);const M=n===v&&r[l+1].startsWith("/>")?" ":"";o+=n===H?h+K:d>=0?(i.push(c),h.slice(0,d)+"$lit$"+h.slice(d)+_+M):h+_+(d===-2?(i.push(void 0),l):M)}const a=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[B!==void 0?B.createHTML(a):a,i]};class b{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[h,c]=z(t,e);if(this.el=b.createElement(h,i),g.currentNode=this.el.content,e===2){const $=this.el.content,d=$.firstChild;d.remove(),$.append(...d.childNodes)}for(;(s=g.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const $=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(_)){const A=c[n++];if($.push(d),A!==void 0){const M=s.getAttribute(A.toLowerCase()+"$lit$").split(_),w=/([.?@])?(.*)/.exec(A);l.push({type:1,index:o,name:w[2],strings:M,ctor:w[1]==="."?F:w[1]==="?"?q:w[1]==="@"?G:C})}else l.push({type:6,index:o})}for(const d of $)s.removeAttribute(d)}if(W.test(s.tagName)){const $=s.textContent.split(_),d=$.length-1;if(d>0){s.textContent=m?m.emptyScript:"";for(let A=0;A<d;A++)s.append($[A],x()),g.nextNode(),l.push({type:2,index:++o});s.append($[d],x())}}}else if(s.nodeType===8)if(s.data===E)l.push({type:2,index:o});else{let $=-1;for(;($=s.data.indexOf(_,$+1))!==-1;)l.push({type:7,index:o}),$+=_.length-1}o++}}static createElement(t,e){const i=f.createElement("template");return i.innerHTML=t,i}}function p(r,t,e=r,i){var s,o,n,a;if(t===T)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=N(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,i)),i!==void 0?((n=(a=e)._$Co)!==null&&n!==void 0?n:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=p(r,l._$AS(r,t.values),l,i)),t}class Z{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:f).importNode(i,!0);g.currentNode=o;let n=g.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let c;h.type===2?c=new y(n,n.nextSibling,this,t):h.type===1?c=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(c=new J(n,this,t)),this.u.push(c),h=s[++l]}a!==(h==null?void 0:h.index)&&(n=g.nextNode(),a++)}return o}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class y{constructor(t,e,i,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=p(this,t,e),N(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==T&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):D(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(f.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=b.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(i);else{const n=new Z(o,this),a=n.v(this.options);n.p(i),this.T(a),this._$AH=n}}_$AC(t){let e=O.get(t.strings);return e===void 0&&O.set(t.strings,e=new b(t)),e}k(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new y(this.O(x()),this.O(x()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class C{constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=p(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const a=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=p(this,a[i+l],e,l),h===T&&(h=this._$AH[l]),n||(n=!N(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h!=null?h:"")+o[l+1]),this._$AH[l]=h}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class F extends C{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const Q=m?m.emptyScript:"";class q extends C{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class G extends C{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=p(this,t,e,0))!==null&&i!==void 0?i:u)===T)return;const s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){p(this,t)}}const tt={P:"$lit$",A:_,M:E,C:1,L:z,R:Z,D,V:p,I:y,H:C,N:q,U:G,B:F,F:J},j=S.litHtmlPolyfillSupport;j==null||j(b,y),((I=S.litHtmlVersions)!==null&&I!==void 0?I:S.litHtmlVersions=[]).push("2.6.1");const et=(r,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new y(t.insertBefore(x(),a),a,void 0,e!=null?e:{})}return n._$AI(r),n};export{tt as L,et as Z,u as b,Y as w,T as x,X as y};
//# sourceMappingURL=lit-html.df91382b.js.map
