import{R as e}from"./index-CyuyzGzS.js";import{d}from"./util-jfGB622S.js";import{R as m}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const I={title:"Selection API/Range/insertNode",component:m},l={render:()=>{let t=null;function s(){console.log(t==null?void 0:t.summernote("getLastRange").insertNode(document.createElement("div")))}return e.createElement("div",{style:d},e.createElement("h1",null,"insertNode(node)"),e.createElement("p",null,"insert node at current cursor"),e.createElement("pre",null,`
            const newRng = rng.insertNode(document.createElement('div'))
          `),e.createElement("button",{onClick:s},"insertNode"),e.createElement(m,{id:"sample",onInit:({note:c})=>{t=c}}))}},n=l;var r,o,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:"RangeInsertNodeCommand",...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const f=["InsertNode"];export{n as InsertNode,f as __namedExportsOrder,I as default};
