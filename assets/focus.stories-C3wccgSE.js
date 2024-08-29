import{R as e}from"./index-CyuyzGzS.js";import{d as l}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const I={title:"Basic API/Focus",component:s},i={render:c=>{let o=null;function a(){o&&o.summernote("focus")}return e.createElement("div",{style:l},e.createElement("h1",null,"Focus"),e.createElement("p",null,"Sets focus in current summernote"),e.createElement("pre",null,`
          <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
            note.summernote('focus')
          }} />      
        `),e.createElement("button",{onClick:a},"Focus summernote"),e.createElement(s,{...c,id:"sample",onInit:({note:u})=>{o=u}}))}},t={...i};var r,n,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...FocusTemplate
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const b=["Focus"];export{t as Focus,b as __namedExportsOrder,I as default};
