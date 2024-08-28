import{R as e}from"./index-CyuyzGzS.js";import{d as c}from"./util-jfGB622S.js";import{R as r}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const g={title:"Callbacks/OnFocus",component:r},o={render:s=>e.createElement("div",{style:c},e.createElement("h1",null,"onFocus"),e.createElement("pre",null,`
        <ReactSummernoteLite
          id="sample"
          onFocus={() => {
            console.log('Editable area is focused');
          }}
        />
      `),e.createElement(r,{...s})),args:{id:"sample",onFocus:()=>{console.log("Editable area is focused")}}};var t,n,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <div style={defaultStyle}>
      <h1>onFocus</h1>
      <pre>{\`
        <ReactSummernoteLite
          id="sample"
          onFocus={() => {
            console.log('Editable area is focused');
          }}
        />
      \`}</pre>
      <ReactSummernoteLite {...args} />
    </div>,
  args: {
    id: 'sample',
    onFocus: () => {
      console.log('Editable area is focused');
    }
  }
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const E=["OnFocus"];export{o as OnFocus,E as __namedExportsOrder,g as default};
