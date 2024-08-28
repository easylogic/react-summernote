import{r as l,R as e}from"./index-CyuyzGzS.js";import{d as p}from"./util-jfGB622S.js";import{R as a}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const x={title:"Font Style API/Font Size",component:a},u={render:s=>{const n=l.useRef(null),i=()=>{n.current&&n.current.summernote("fontSize",30)};return e.createElement("div",{style:p},e.createElement("h1",null,"fontSize"),e.createElement("p",null,"글꼴 크기를 설정합니다."),e.createElement("pre",null,`
          <ReactSummernoteLite 
            id="sample" 
            onInit={({ note }) => {
              note.summernote('fontSize', 30);
            }} 
          />                
        `),e.createElement("button",{onClick:i},"글꼴 크기 30px"),e.createElement(a,{...s,onInit:({note:c})=>{n.current=c}}))}},t={...u,args:{id:"sample"}};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...FontSizeTemplate,
  args: {
    id: 'sample'
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const g=["FontSize"];export{t as FontSize,g as __namedExportsOrder,x as default};
