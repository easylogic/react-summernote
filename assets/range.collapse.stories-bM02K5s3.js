import{R as t}from"./index-CyuyzGzS.js";import{d as m}from"./util-jfGB622S.js";import{R as p}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const i=()=>{let e=null;function r(){e==null||e.summernote("getLastRange").collapse(!0)}function s(){e==null||e.summernote("getLastRange").collapse()}return t.createElement("div",{style:m},t.createElement("h1",null,"collapse(isCollapseToStart: boolean = false)"),t.createElement("p",null,"select update visible range"),t.createElement("pre",null,`
        const newRng = rng.collapse(true);   // to start rng  

        or 
        
        const newRng = rng.collapse();  // to end rng 
        `),t.createElement("button",{onClick:r},"range.collapse(true)"),t.createElement("button",{onClick:s},"range.collapse()"),t.createElement(p,{id:"sample",onInit:({note:c})=>{e=c}}))},S={title:"Selection API/Range Collapse",component:i},a={};var l,o,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const b=["RangeCollapse"];export{a as RangeCollapse,b as __namedExportsOrder,S as default};
