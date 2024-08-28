import{R as e}from"./index-CyuyzGzS.js";import{d as m}from"./util-jfGB622S.js";import{R as a}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const f={title:"Callbacks/OnMousedown",component:a,argTypes:{onMousedown:{action:"mousedown"}}},o={render:n=>e.createElement("div",{style:m},e.createElement("h1",null,"onMousedown"),e.createElement("pre",null,`
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
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const g=["OnMousedown"];export{o as OnMousedown,g as __namedExportsOrder,f as default};
