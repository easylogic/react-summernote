import{R as e}from"./index-CyuyzGzS.js";import{d as l}from"./util-jfGB622S.js";import{R as m}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const E={title:"Callbacks/OnKeyup",component:m},p={render:n=>e.createElement("div",{style:l},e.createElement("h1",null,"onKeyup"),e.createElement("pre",null,`
        <ReactSummernoteLite
          id="sample"
          onKeyup={(e: any) => {
            console.log('Key is released:', e.keyCode);
          }}
          {...args}
        />
      `),e.createElement(m,{onKeyup:s=>{console.log("Key is released:",s.keyCode)},...n}))},t={...p};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const R=["OnKeyup"];export{t as OnKeyup,R as __namedExportsOrder,E as default};
