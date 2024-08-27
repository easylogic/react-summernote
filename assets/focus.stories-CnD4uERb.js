import{R as e}from"./index-RYns6xqu.js";import{d as l}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-C35-7mjT.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-DoLfHz0W.js";const b={title:"Basic API/Focus",component:s},i={render:c=>{let o=null;function a(){o&&o.summernote("Focus")}return e.createElement("div",{style:l},e.createElement("h1",null,"Focus"),e.createElement("p",null,"Sets focus in current summernote"),e.createElement("pre",null,`
          <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
            note.summernote('focus')
          }} />      
        `),e.createElement("button",{onClick:a},"Focus summernote"),e.createElement(s,{...c,id:"sample",onInit:({note:u})=>{o=u}}))}},t={...i};var r,n,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...FocusTemplate
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const k=["Focus"];export{t as Focus,k as __namedExportsOrder,b as default};
