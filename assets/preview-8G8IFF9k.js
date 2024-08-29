import{_ as a}from"./iframe-CK4KOf4T.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-C1vbljgk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-PKQXORMH-C1vbljgk.js","./chunk-HLWAVYOI-C8X37Ivr.js","./iframe-CK4KOf4T.js","./index-CyuyzGzS.js","./react-18-BGSGWmJe.js","./client-vtXVjOFi.js","./index-Cpnl9FGv.js","./index-DexMHRHT.js","./index-Cu4lwwaE.js","./index-Dkt4J_BZ.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
