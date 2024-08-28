import{R as e}from"./index-CyuyzGzS.js";import{d as a}from"./util-jfGB622S.js";import{R as u}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const g={title:"Callbacks/OnMouseup",component:u,argTypes:{onMouseup:{action:"mouseup"}}},o={render:n=>e.createElement("div",{style:a},e.createElement("h1",null,"onMouseup"),e.createElement("pre",null,`
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
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const M=["OnMouseup"];export{o as OnMouseup,M as __namedExportsOrder,g as default};
