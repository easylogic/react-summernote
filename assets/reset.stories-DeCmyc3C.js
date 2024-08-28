import{R as e}from"./index-CyuyzGzS.js";import{d as i}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const y={title:"Basic API/Reset",component:s},p={render:a=>{let r=null;function l(){r&&r.summernote("reset")}return e.createElement("div",{style:i},e.createElement("h1",null,"reset"),e.createElement("p",null,"Clear the editor content and remove all stored history."),e.createElement("pre",null,`
          <ReactSummernoteLite id="sample" onInit={({ note } ) => {
            note.summernote('reset')
          }} />
        `),e.createElement("button",{onClick:l},"reset"),e.createElement(s,{...a,id:"sample",onInit:({note:c})=>{r=c}}))}},t={...p};var o,n,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...ResetTemplate
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const I=["Reset"];export{t as Reset,I as __namedExportsOrder,y as default};
