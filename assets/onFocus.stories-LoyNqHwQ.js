import{R as e}from"./index-RYns6xqu.js";import{d as c}from"./util-jfGB622S.js";import{R as a}from"./ReactSummernoteLite-B5zbsaz-.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-C2VawFWZ.js";const E={title:"Callbacks/OnFocus",component:a},o={render:s=>e.createElement("div",{style:c},e.createElement("h1",null,"onFocus"),e.createElement("pre",null,`
        <ReactSummernoteLite
          id="sample"
          onFocus={() => {
            console.log('Editable area is focused');
          }}
        />
      `),e.createElement(a,{...s})),args:{id:"sample",onFocus:()=>{console.log("Editable area is focused")}}};var t,n,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(n=o.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const F=["OnFocus"];export{o as OnFocus,F as __namedExportsOrder,E as default};
