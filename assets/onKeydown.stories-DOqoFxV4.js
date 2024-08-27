import{R as e}from"./index-RYns6xqu.js";import{d as s}from"./util-jfGB622S.js";import{R as d}from"./ReactSummernoteLite-C35-7mjT.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-DoLfHz0W.js";const u={title:"Callbacks/OnKeydown",component:d},n={render:o=>e.createElement("div",{style:s},e.createElement("h1",null,"onKeydown"),e.createElement("pre",null,`
      <ReactSummernoteLite id="sample" 
        onKeydown={(e: any) => {
          console.log('Key is downed:', e.keyCode);
        }}
      />
      `),e.createElement(d,{...o})),args:{id:"sample",onKeydown:o=>{console.log("Key is downed:",o.keyCode)}}};var t,r,a;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <div style={defaultStyle}>
      <h1>onKeydown</h1>
      <pre>{\`
      <ReactSummernoteLite id="sample" 
        onKeydown={(e: any) => {
          console.log('Key is downed:', e.keyCode);
        }}
      />
      \`}</pre>
      <ReactSummernoteLite {...args} />
    </div>,
  args: {
    id: 'sample',
    onKeydown: e => {
      console.log('Key is downed:', e.keyCode);
    }
  }
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const g=["OnKeydown"];export{n as OnKeydown,g as __namedExportsOrder,u as default};
