import{r as p,R as e}from"./index-RYns6xqu.js";import{d as c}from"./util-jfGB622S.js";import{R as i}from"./ReactSummernoteLite-C35-7mjT.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-DoLfHz0W.js";const u=({htmlContent:r})=>{const o=p.useRef(null),m=()=>{o.current&&o.current.summernote("pasteHTML",r)};return e.createElement("div",{style:c},e.createElement("h1",null,"pasteHTML"),e.createElement("p",null,"HTML 문자열 붙여넣기."),e.createElement("pre",null,`
        <ReactSummernoteLite 
          id="sample" 
          opt={{ 
            callbacks: { 
              onInit: ({ note }: any ) => {
                note.summernote('pasteHTML', '${r}')
              }
            }
          }} 
        />
      `),e.createElement("button",{onClick:m},"pasteHTML ",r),e.createElement(i,{id:"sample",onInit:({note:l})=>{o.current=l}}))},R={title:"Insertion API/PasteHTML",component:u,argTypes:{htmlContent:{control:"text"}}},t={args:{htmlContent:'<span style="font-size:30px">30px 크기의 Hello, world</span>'}};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    htmlContent: '<span style="font-size:30px">30px 크기의 Hello, world</span>'
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const y=["PasteHTML"];export{t as PasteHTML,y as __namedExportsOrder,R as default};
