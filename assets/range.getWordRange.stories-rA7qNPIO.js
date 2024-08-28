import{R as e}from"./index-CyuyzGzS.js";import{d as l}from"./util-jfGB622S.js";import{R as c}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const g=()=>{let t=null;function m(){console.log("before cursor",t.summernote("getLastRange").getWordRange().toString()),console.log("after cursor",t.summernote("getLastRange").getWordRange(!0).toString())}return e.createElement("div",{style:l},e.createElement("h1",null,"getWordRange(findAfter: boolean = false)"),e.createElement("p",null,"returns range for word before(or after) cursor"),e.createElement("pre",null,`
          const newRng = rng.getWordRange();   // before cursor 

          // or 
          
          const newRng = rng.getWordRange(true);   // after cursor 
        `),e.createElement("button",{onClick:m},"getWordRange"),e.createElement(c,{id:"sample",onInit:({note:s})=>{t=s}}))},E={title:"Selection API/Range/getWordRange",component:g},r={render:()=>e.createElement(g,null)};var o,n,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <RangeGetWordRangeCommand />
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const S=["getWordRange"];export{S as __namedExportsOrder,E as default,r as getWordRange};
