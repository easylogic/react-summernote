import{_ as i}from"./iframe-EOGE8Qh7.js";import{R as t,r as p}from"./index-RYns6xqu.js";import{r as l,u}from"./react-18-D9w73zBb.js";import{ag as h,ah as E,ai as d,aj as x}from"./index-reV1EyC2.js";var _={code:h,a:E,...d},D=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:t.createElement(t.Fragment,null,e)}},M=class{constructor(){this.render=async(r,e,o)=>{let n={..._,...e==null?void 0:e.components},s=x;return new Promise((a,m)=>{i(()=>import("./index-CcnH5Kt0.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:c})=>l(t.createElement(D,{showException:m,key:Math.random()},t.createElement(c,{components:n},t.createElement(s,{context:r,docsParameter:e}))),o)).then(()=>a())})},this.unmount=r=>{u(r)}}};export{M as D,_ as d};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-CcnH5Kt0.js","./index-RYns6xqu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
