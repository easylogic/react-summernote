import{R as e}from"./index-CyuyzGzS.js";import{d as m}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const l=({onImageUpload:o})=>e.createElement("div",{style:m},e.createElement("h1",null,"onImageUpdate"),e.createElement("div",null,"Override image upload handler(default: base64 dataURL on IMG tag). You can upload image to server or AWS S3:"," ",e.createElement("a",{href:"https://github.com/summernote/summernote/issues/72"},"more…")),e.createElement("pre",null,`
      // 코드 예시...
      `),e.createElement(s,{id:"sample",onInit:({note:c})=>{},onImageUpload:o})),U={title:"Callbacks/OnImageUpdate",component:l},t={args:{onImageUpload:o=>{console.log(o),console.log("$note is not accessible here")}}};var a,n,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    onImageUpload: (files: File[]) => {
      // upload image to server and create imgNode...
      console.log(files);
      // $note.summernote('insertNode', imgNode);
      console.log('$note is not accessible here');
    }
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const h=["OnImageUpdate"];export{t as OnImageUpdate,h as __namedExportsOrder,U as default};
