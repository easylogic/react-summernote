import{R as e}from"./index-RYns6xqu.js";import{d as p}from"./util-jfGB622S.js";import{R as o}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const E={title:"Insertion API/InsertImage",component:o},c={render:s=>{let m=null;function g(){m&&m.summernote("insertImage","https://summernote.org/img/img_main_picture-big.jpg",function(n){console.log(n)})}return e.createElement("div",{style:p},e.createElement("h1",null,"insertImage"),e.createElement("p",null,"insert an image"),e.createElement("pre",null,`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            // default insert image 
            note.summernote('insertImage', 'https://summernote.org/img/img_main_picture-big.jpg')

            // append alt text 
            note.summernote('insertImage', 'https://summernote.org/img/img_main_picture-big.jpg', 'SummernoteLog')

            // You can modify image with passing callback as second argument.
            note.summernote('insertImage', 'https://summernote.org/img/img_main_picture-big.jpg', function ($image) {
              $image.css('width', $image.width() / 3);
              $image.attr('data-filename', 'retriever');
            })
          }} />                
        `),e.createElement("button",{onClick:g},"insertImage https://summernote.org/img/img_main_picture-big.jpg"),e.createElement(o,{id:"sample",onInit:({note:n})=>{m=n},...s}))}},t={...c};var r,i,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...InsertImageTemplate
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const j=["InsertImage"];export{t as InsertImage,j as __namedExportsOrder,E as default};
