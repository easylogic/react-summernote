import{R as e}from"./index-CyuyzGzS.js";import{d as i}from"./util-jfGB622S.js";import{R as m}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const R={title:"Insertion API/InsertText",component:m},p={render:l=>{const r=e.useRef(null);function a(){r.current&&r.current.summernote("insertText","Hello, World")}return e.createElement("div",{style:i},e.createElement("h1",null,"insertText"),e.createElement("p",null,"insert a Text"),e.createElement("pre",null,`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('insertText','Hello, World')
          }} />                
        `),e.createElement("button",{onClick:a},"insertText Hello, World"),e.createElement(m,{...l,id:"sample",onInit:({note:c})=>{r.current=c}}))}},t={...p};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...InsertTextTemplate
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const S=["InsertText"];export{t as InsertText,S as __namedExportsOrder,R as default};
