import{R as e}from"./index-RYns6xqu.js";import{d as m}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-B5zbsaz-.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-C2VawFWZ.js";const l=({onImageUpload:o})=>e.createElement("div",{style:m},e.createElement("h1",null,"onImageUpdate"),e.createElement("div",null,"Override image upload handler(default: base64 dataURL on IMG tag). You can upload image to server or AWS S3:"," ",e.createElement("a",{href:"https://github.com/summernote/summernote/issues/72"},"more…")),e.createElement("pre",null,`
      // 코드 예시...
      `),e.createElement(s,{id:"sample",onInit:({note:c})=>{},onImageUpload:o})),h={title:"Callbacks/OnImageUpdate",component:l},t={args:{onImageUpload:o=>{console.log(o),console.log("$note is not accessible here")}}};var a,r,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    onImageUpload: (files: File[]) => {
      // upload image to server and create imgNode...
      console.log(files);
      // $note.summernote('insertNode', imgNode);
      console.log('$note is not accessible here');
    }
  }
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const E=["OnImageUpdate"];export{t as OnImageUpdate,E as __namedExportsOrder,h as default};
