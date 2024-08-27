import{R as e}from"./index-RYns6xqu.js";import{d as s}from"./util-jfGB622S.js";import{R as a}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const C={title:"Callbacks/OnBlurCodeview",component:a},o={render:()=>e.createElement("div",{style:s},e.createElement("h1",null,"onBlurCodeview"),e.createElement("pre",null,`
      <ReactSummernoteLite id="sample" 
        onBlurCodeview={() => {
          console.log('Codeview area loses focus');
        }}
      />
      `),e.createElement(a,{id:"sample",onBlurCodeview:()=>{console.log("Codeview area loses focus")}}))};var r,t,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div style={defaultStyle}>
      <h1>onBlurCodeview</h1>
      <pre>
        {\`
      <ReactSummernoteLite id="sample" 
        onBlurCodeview={() => {
          console.log('Codeview area loses focus');
        }}
      />
      \`}
      </pre>

      <ReactSummernoteLite id="sample" onBlurCodeview={() => {
      console.log('Codeview area loses focus');
    }} />
    </div>
}`,...(l=(t=o.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const w=["OnBlurCodeview"];export{o as OnBlurCodeview,w as __namedExportsOrder,C as default};
