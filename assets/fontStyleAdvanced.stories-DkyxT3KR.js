import{r as l,R as e}from"./index-CyuyzGzS.js";import{d as p}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const v={title:"Font Style API/FontStyled Advanced",component:s},d={render:()=>{const t=l.useRef(null),m=()=>{t.current&&t.current.summernote("superscript")},a=()=>{t.current&&t.current.summernote("subscript")};return e.createElement("div",{style:p},e.createElement("h1",null,"superscript, subscript"),e.createElement("p",null,"위 첨자 또는 아래 첨자를 설정합니다."),e.createElement("pre",null,`
          <ReactSummernoteLite 
            id="sample" 
            onInit={({ note }) => {
              note.summernote('superscript');
              note.summernote('subscript');
            }} 
          />                
        `),e.createElement("button",{onClick:m},"위 첨자"),e.createElement("button",{onClick:a},"아래 첨자"),e.createElement(s,{id:"sample",onInit:({note:u})=>{t.current=u}}))}},r=d;var n,o,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"FontStyleAdvancedCommand",...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const A=["FontStyledAdvanced"];export{r as FontStyledAdvanced,A as __namedExportsOrder,v as default};
