import{R as e}from"./index-RYns6xqu.js";import{d as c}from"./util-jfGB622S.js";import{R as m}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const S={title:"Insertion API/InsertText",component:m},p={render:l=>{const r=e.useRef(null);function a(){r.current&&r.current.summernote("insertText","Hello, World")}return e.createElement("div",{style:c},e.createElement("h1",null,"insertText"),e.createElement("p",null,"insert a Text"),e.createElement("pre",null,`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('insertText','Hello, World')
          }} />                
        `),e.createElement("button",{onClick:a},"insertText Hello, World"),e.createElement(m,{...l,id:"sample",onInit:({note:i})=>{r.current=i}}))}},t={...p};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...InsertTextTemplate
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const H=["InsertText"];export{t as InsertText,H as __namedExportsOrder,S as default};
