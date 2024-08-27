import{R as e}from"./index-RYns6xqu.js";import{d as l}from"./util-jfGB622S.js";import{R as m}from"./ReactSummernoteLite-C35-7mjT.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-DoLfHz0W.js";const R={title:"Callbacks/OnKeyup",component:m},p={render:n=>e.createElement("div",{style:l},e.createElement("h1",null,"onKeyup"),e.createElement("pre",null,`
        <ReactSummernoteLite
          id="sample"
          onKeyup={(e: any) => {
            console.log('Key is released:', e.keyCode);
          }}
          {...args}
        />
      `),e.createElement(m,{onKeyup:s=>{console.log("Key is released:",s.keyCode)},...n}))},t={...p};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const g=["OnKeyup"];export{t as OnKeyup,g as __namedExportsOrder,R as default};
