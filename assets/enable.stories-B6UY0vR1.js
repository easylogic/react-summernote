import{R as e,r as s}from"./index-CyuyzGzS.js";import{d as i}from"./util-jfGB622S.js";import{R as l}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const C={title:"Basic API/Enable",component:l},u=()=>{const n=s.useRef(null),m=e.useCallback(()=>{n.current&&n.current.summernote("enable")},[]);return e.createElement("div",{style:i},e.createElement("h1",null,"Enable"),e.createElement("p",null,"If you want to enable editor again, call API with enable."),e.createElement("pre",null,`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            note.summernote('enable');
          }} 
        />
      `),e.createElement("button",{onClick:m},"Enable summernote"),e.createElement(l,{id:"sample",onInit:({note:c})=>{n.current=c}}))},t={render:()=>e.createElement(u,null)};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <EnableComponent />
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const S=["Enable"];export{t as Enable,S as __namedExportsOrder,C as default};
