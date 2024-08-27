import{R as e,r as i}from"./index-RYns6xqu.js";import{d as c}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const I={title:"Basic API/Disable",component:s},u=()=>{const r=i.useRef(null),l=e.useCallback(()=>{r.current&&r.current.summernote("disable")},[]);return e.createElement("div",{style:c},e.createElement("h1",null,"disable"),e.createElement("p",null,"You can disable editor by API."),e.createElement("pre",null,`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            note.summernote('disable');
          }} 
        />
      `),e.createElement("button",{onClick:l},"disable summernote"),e.createElement(s,{id:"sample",onInit:({note:m})=>{r.current=m}}))},t={render:()=>e.createElement(u,null)};var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <DisableComponent />
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const S=["Disable"];export{t as Disable,S as __namedExportsOrder,I as default};
