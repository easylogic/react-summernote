import{R as e}from"./index-CyuyzGzS.js";import{d as s}from"./util-jfGB622S.js";import{R as a}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const v={title:"Callbacks/OnBlurCodeview",component:a},o={render:()=>e.createElement("div",{style:s},e.createElement("h1",null,"onBlurCodeview"),e.createElement("pre",null,`
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
}`,...(l=(t=o.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const C=["OnBlurCodeview"];export{o as OnBlurCodeview,C as __namedExportsOrder,v as default};
