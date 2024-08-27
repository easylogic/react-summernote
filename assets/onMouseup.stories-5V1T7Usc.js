import{R as e}from"./index-RYns6xqu.js";import{d as a}from"./util-jfGB622S.js";import{R as u}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const M={title:"Callbacks/OnMouseup",component:u,argTypes:{onMouseup:{action:"mouseup"}}},o={render:n=>e.createElement("div",{style:a},e.createElement("h1",null,"onMouseup"),e.createElement("pre",null,`
        <ReactSummernoteLite
          id="sample"
          onMouseup={(e) => console.log('mouseup event is fired', e)}
        />
      `),e.createElement(u,{...n})),args:{id:"sample",onMouseup:n=>console.log("mouseup event is fired",n)}};var t,s,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <div style={defaultStyle}>
      <h1>onMouseup</h1>
      <pre>{\`
        <ReactSummernoteLite
          id="sample"
          onMouseup={(e) => console.log('mouseup event is fired', e)}
        />
      \`}</pre>
      <ReactSummernoteLite {...args} />
    </div>,
  args: {
    id: 'sample',
    onMouseup: (e: any) => console.log('mouseup event is fired', e)
  }
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const v=["OnMouseup"];export{o as OnMouseup,v as __namedExportsOrder,M as default};
