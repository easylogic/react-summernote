import{R as e}from"./index-RYns6xqu.js";import{d as i}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const I={title:"Basic API/Reset",component:s},p={render:a=>{let r=null;function l(){r&&r.summernote("reset")}return e.createElement("div",{style:i},e.createElement("h1",null,"reset"),e.createElement("p",null,"Clear the editor content and remove all stored history."),e.createElement("pre",null,`
          <ReactSummernoteLite id="sample" onInit={({ note } ) => {
            note.summernote('reset')
          }} />
        `),e.createElement("button",{onClick:l},"reset"),e.createElement(s,{...a,id:"sample",onInit:({note:c})=>{r=c}}))}},t={...p};var o,n,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...ResetTemplate
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const v=["Reset"];export{t as Reset,v as __namedExportsOrder,I as default};
