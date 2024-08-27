import{R as e,r as s}from"./index-RYns6xqu.js";import{d as i}from"./util-jfGB622S.js";import{R as l}from"./ReactSummernoteLite-C35-7mjT.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-DoLfHz0W.js";const S={title:"Basic API/Enable",component:l},u=()=>{const n=s.useRef(null),m=e.useCallback(()=>{n.current&&n.current.summernote("enable")},[]);return e.createElement("div",{style:i},e.createElement("h1",null,"Enable"),e.createElement("p",null,"If you want to enable editor again, call API with enable."),e.createElement("pre",null,`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            note.summernote('enable');
          }} 
        />
      `),e.createElement("button",{onClick:m},"Enable summernote"),e.createElement(l,{id:"sample",onInit:({note:c})=>{n.current=c}}))},t={render:()=>e.createElement(u,null)};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <EnableComponent />
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const x=["Enable"];export{t as Enable,x as __namedExportsOrder,S as default};
