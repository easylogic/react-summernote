import{r as p,R as e}from"./index-RYns6xqu.js";import{d as i}from"./util-jfGB622S.js";import{R as n}from"./ReactSummernoteLite-B5zbsaz-.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-C2VawFWZ.js";const y={title:"Font Style API/Remove Format",component:n},u={render:s=>{const r=p.useRef(null),c=()=>{r.current&&r.current.summernote("removeFormat")};return e.createElement("div",{style:i},e.createElement("h1",null,"removeFormat"),e.createElement("p",null,"스타일을 제거합니다."),e.createElement("pre",null,`
          <ReactSummernoteLite
            id="sample"
            onInit={({ note }) => {
              note.summernote('removeFormat');
            }}
          />
        `),e.createElement("button",{onClick:c},"removeFormat"),e.createElement(n,{...s,id:"sample",onInit:({note:l})=>{r.current=l}}))}},t={...u};var o,m,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...RemoveFormatTemplate
}`,...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const I=["RemoveFormat"];export{t as RemoveFormat,I as __namedExportsOrder,y as default};
