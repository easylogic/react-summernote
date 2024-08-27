import{R as e}from"./index-RYns6xqu.js";import{d as m}from"./util-jfGB622S.js";import{R as a}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const g={title:"Callbacks/OnMousedown",component:a,argTypes:{onMousedown:{action:"mousedown"}}},o={render:n=>e.createElement("div",{style:m},e.createElement("h1",null,"onMousedown"),e.createElement("pre",null,`
        <ReactSummernoteLite
          id="sample"
          onMousedown={(e) => {
            console.log('mousedown event is fired', e);
          }}
        />
      `),e.createElement(a,{...n})),args:{id:"sample",onMousedown:n=>{console.log("mousedown event is fired",n)}}};var t,s,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <div style={defaultStyle}>
      <h1>onMousedown</h1>
      <pre>{\`
        <ReactSummernoteLite
          id="sample"
          onMousedown={(e) => {
            console.log('mousedown event is fired', e);
          }}
        />
      \`}</pre>
      <ReactSummernoteLite {...args} />
    </div>,
  args: {
    id: 'sample',
    onMousedown: (e: any) => {
      console.log('mousedown event is fired', e);
    }
  }
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const M=["OnMousedown"];export{o as OnMousedown,M as __namedExportsOrder,g as default};
