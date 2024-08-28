import{R as e}from"./index-CyuyzGzS.js";import{d as l}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const P={title:"Callbacks/OnPaste",component:s},t={render:n=>e.createElement("div",{style:l},e.createElement("h1",null,"onPaste"),e.createElement("pre",null,`
      <ReactSummernoteLite
        id="sample"
        onPaste={(e: any) => {
          console.log('Called event paste', e);
        }}
      />
      `),e.createElement(s,{...n})),args:{id:"sample",onPaste:n=>{console.log("Called event paste",n)}}};var a,o,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <div style={defaultStyle}>
      <h1>onPaste</h1>
      <pre>{\`
      <ReactSummernoteLite
        id="sample"
        onPaste={(e: any) => {
          console.log('Called event paste', e);
        }}
      />
      \`}</pre>
      <ReactSummernoteLite {...args} />
    </div>,
  args: {
    id: 'sample',
    onPaste: (e: any) => {
      console.log('Called event paste', e);
    }
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const v=["OnPaste"];export{t as OnPaste,v as __namedExportsOrder,P as default};
