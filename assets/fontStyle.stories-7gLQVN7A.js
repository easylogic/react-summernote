import{R as e}from"./index-RYns6xqu.js";import{d as c}from"./util-jfGB622S.js";import{R as i}from"./ReactSummernoteLite-C35-7mjT.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-DoLfHz0W.js";const k={title:"Font Style API/Font Style",component:i},u={render:s=>{const o=e.useRef(null),t=r=>{o.current&&o.current.summernote(r)};return e.createElement("div",{style:c},e.createElement("h1",null,"bold, italic, underline, strikethrough"),e.createElement("p",null,"Set font style."),e.createElement("pre",null,`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('bold');
            note.summernote('italic');
            note.summernote('underline');
            note.summernote('strikethrough');
          }} />                
        `),e.createElement("button",{onClick:()=>t("bold")},"bold"),e.createElement("button",{onClick:()=>t("italic")},"italic"),e.createElement("button",{onClick:()=>t("underline")},"underline"),e.createElement("button",{onClick:()=>t("strikethrough")},"strikethrough"),e.createElement(i,{...s,onInit:({note:r})=>{o.current=r}}))}},n={...u,args:{id:"sample"}};var l,m,a;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...FontStyleCommandTemplate,
  args: {
    id: 'sample'
  }
}`,...(a=(m=n.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const g=["FontStyle"];export{n as FontStyle,g as __namedExportsOrder,k as default};
