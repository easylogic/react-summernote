import{R as e}from"./index-CyuyzGzS.js";import{d as s}from"./util-jfGB622S.js";import{R as d}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const K={title:"Callbacks/OnKeydown",component:d},n={render:o=>e.createElement("div",{style:s},e.createElement("h1",null,"onKeydown"),e.createElement("pre",null,`
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
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const u=["OnKeydown"];export{n as OnKeydown,u as __namedExportsOrder,K as default};
