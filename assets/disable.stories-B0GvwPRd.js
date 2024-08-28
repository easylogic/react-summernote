import{R as e,r as i}from"./index-CyuyzGzS.js";import{d as c}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const C={title:"Basic API/Disable",component:s},u=()=>{const r=i.useRef(null),l=e.useCallback(()=>{r.current&&r.current.summernote("disable")},[]);return e.createElement("div",{style:c},e.createElement("h1",null,"disable"),e.createElement("p",null,"You can disable editor by API."),e.createElement("pre",null,`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            note.summernote('disable');
          }} 
        />
      `),e.createElement("button",{onClick:l},"disable summernote"),e.createElement(s,{id:"sample",onInit:({note:m})=>{r.current=m}}))},t={render:()=>e.createElement(u,null)};var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <DisableComponent />
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const I=["Disable"];export{t as Disable,I as __namedExportsOrder,C as default};
