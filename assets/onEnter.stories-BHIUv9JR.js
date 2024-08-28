import{R as e}from"./index-RYns6xqu.js";import{d as i}from"./util-jfGB622S.js";import{R as o}from"./ReactSummernoteLite-B5zbsaz-.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-C2VawFWZ.js";const f={title:"Callbacks/OnEnter",component:o},t={render:()=>e.createElement("div",{style:i},e.createElement("h1",null,"onEnter"),e.createElement("pre",null,`
      <ReactSummernoteLite id="sample"
          onEnter={(e: any) => {
            console.log('Enter/Return key pressed, shift is ', e.shiftKey);
          }}
      />
      `),e.createElement(o,{id:"sample",onEnter:a=>{console.log("Enter/Return key pressed, shift is ",a.shiftKey)}}))};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div style={defaultStyle}>
      <h1>onEnter</h1>
      <pre>
        {\`
      <ReactSummernoteLite id="sample"
          onEnter={(e: any) => {
            console.log('Enter/Return key pressed, shift is ', e.shiftKey);
          }}
      />
      \`}
      </pre>
      <ReactSummernoteLite id="sample" onEnter={(e: any) => {
      console.log('Enter/Return key pressed, shift is ', e.shiftKey);
    }} />
    </div>
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const h=["OnEnter"];export{t as OnEnter,h as __namedExportsOrder,f as default};
