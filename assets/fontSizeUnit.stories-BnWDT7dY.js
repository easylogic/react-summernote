import{r as l,R as e}from"./index-RYns6xqu.js";import{d as p}from"./util-jfGB622S.js";import{R as m}from"./ReactSummernoteLite-B5zbsaz-.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-C2VawFWZ.js";const x={title:"Font Style API/FontSizeUnit",component:m},u={render:a=>{const n=l.useRef(null),s=()=>{n.current&&n.current.summernote("fontSizeUnit","pt")};return e.createElement("div",{style:p},e.createElement("h1",null,"fontSizeUnit"),e.createElement("p",null,"글꼴 크기 단위 설정 - 기본값은 px"),e.createElement("pre",null,`
          <ReactSummernoteLite 
            id="sample" 
            onInit={({ note } ) => {
              note.summernote('fontSizeUnit', 'pt');
            }} 
          />                
        `),e.createElement("button",{onClick:s},"글꼴 크기 단위 pt로 설정"),e.createElement(m,{...a,id:"sample",onInit:({note:c})=>{n.current=c}}))}},t={...u};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...FontSizeUnitTemplate
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const y=["FontSizeUnit"];export{t as FontSizeUnit,y as __namedExportsOrder,x as default};
