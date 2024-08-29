import{r as l,R as e}from"./index-CyuyzGzS.js";import{d as p}from"./util-jfGB622S.js";import{R as m}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const R={title:"Font Style API/FontSizeUnit",component:m},u={render:a=>{const n=l.useRef(null),s=()=>{n.current&&n.current.summernote("fontSizeUnit","pt")};return e.createElement("div",{style:p},e.createElement("h1",null,"fontSizeUnit"),e.createElement("p",null,"글꼴 크기 단위 설정 - 기본값은 px"),e.createElement("pre",null,`
          <ReactSummernoteLite 
            id="sample" 
            onInit={({ note } ) => {
              note.summernote('fontSizeUnit', 'pt');
            }} 
          />                
        `),e.createElement("button",{onClick:s},"글꼴 크기 단위 pt로 설정"),e.createElement(m,{...a,id:"sample",onInit:({note:c})=>{n.current=c}}))}},t={...u};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...FontSizeUnitTemplate
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const x=["FontSizeUnit"];export{t as FontSizeUnit,x as __namedExportsOrder,R as default};
