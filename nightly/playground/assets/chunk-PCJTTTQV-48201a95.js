import{_ as m}from"./iframe-143f24d8.js";import{R as o,r as a}from"./index-c0290abd.js";import{c as p}from"./client-295e1f1c.js";import{C as l,g as h,H as d,h as E}from"./index-37e8697c.js";var n=new Map,R=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},f=async(e,t)=>{let r=await _(t);return new Promise(s=>{r.render(o.createElement(R,{callback:()=>s(null)},e))})},x=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},_=async e=>{let t=n.get(e);return t||(t=p.createRoot(e),n.set(e,t)),t},w={code:l,a:h,...d},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:t}},M=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t==null?void 0:t.components};return new Promise((u,c)=>{m(()=>import("./index-0ce7c09e.js"),["./index-0ce7c09e.js","./index-cf712c1b.js","./index-c0290abd.js","./_commonjsHelpers-725317a4.js"],import.meta.url).then(({MDXProvider:i})=>f(o.createElement(g,{showException:c,key:Math.random()},o.createElement(i,{components:s},o.createElement(E,{context:e,docsParameter:t}))),r)).then(u)})},this.unmount=e=>{x(e)}}};export{M as D,w as d};
//# sourceMappingURL=chunk-PCJTTTQV-48201a95.js.map
