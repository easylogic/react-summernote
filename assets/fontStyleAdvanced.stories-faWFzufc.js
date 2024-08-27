import{r as u,R as e}from"./index-RYns6xqu.js";import{d as l}from"./util-jfGB622S.js";import{R as m}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const A={title:"Font Style API/FontStyled Advanced",component:m},d={render:()=>{const t=u.useRef(null),s=()=>{t.current&&t.current.summernote("superscript")},a=()=>{t.current&&t.current.summernote("subscript")};return e.createElement("div",{style:l},e.createElement("h1",null,"superscript, subscript"),e.createElement("p",null,"위 첨자 또는 아래 첨자를 설정합니다."),e.createElement("pre",null,`
          <ReactSummernoteLite 
            id="sample" 
            onInit={({ note }) => {
              note.summernote('superscript');
              note.summernote('subscript');
            }} 
          />                
        `),e.createElement("button",{onClick:s},"위 첨자"),e.createElement("button",{onClick:a},"아래 첨자"),e.createElement(m,{id:"sample",onInit:({note:p})=>{t.current=p}}))}},r=d;var n,o,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"FontStyleAdvancedCommand",...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const F=["FontStyledAdvanced"];export{r as FontStyledAdvanced,F as __namedExportsOrder,A as default};
