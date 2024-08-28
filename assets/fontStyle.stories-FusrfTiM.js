import{R as e}from"./index-CyuyzGzS.js";import{d as c}from"./util-jfGB622S.js";import{R as i}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const b={title:"Font Style API/Font Style",component:i},u={render:s=>{const o=e.useRef(null),t=r=>{o.current&&o.current.summernote(r)};return e.createElement("div",{style:c},e.createElement("h1",null,"bold, italic, underline, strikethrough"),e.createElement("p",null,"Set font style."),e.createElement("pre",null,`
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
}`,...(a=(m=n.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const k=["FontStyle"];export{n as FontStyle,k as __namedExportsOrder,b as default};
