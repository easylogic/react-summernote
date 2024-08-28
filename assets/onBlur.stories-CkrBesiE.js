import{R as e}from"./index-CyuyzGzS.js";import{d as n}from"./util-jfGB622S.js";import{R as l}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const B={title:"Callbacks/OnBlur",component:l},o={render:()=>e.createElement("div",{style:n},e.createElement("h1",null,"onBlur"),e.createElement("pre",null,`
      <ReactSummernoteLite id="sample" onBlur={(e: any) => {
          console.log('Editable area loses focus', e);
      }}
      `),e.createElement(l,{id:"sample",onBlur:s=>{console.log("Editable area loses focus",s)}}))};var r,t,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div style={defaultStyle}>
      <h1>onBlur</h1>
      <pre>{\`
      <ReactSummernoteLite id="sample" onBlur={(e: any) => {
          console.log('Editable area loses focus', e);
      }}
      \`}</pre>

      <ReactSummernoteLite id="sample" onBlur={(e: any) => {
      console.log('Editable area loses focus', e);
    }} />
    </div>
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const E=["OnBlur"];export{o as OnBlur,E as __namedExportsOrder,B as default};
