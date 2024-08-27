import{R as e}from"./index-RYns6xqu.js";import{d as l}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const v={title:"Callbacks/OnPaste",component:s},t={render:n=>e.createElement("div",{style:l},e.createElement("h1",null,"onPaste"),e.createElement("pre",null,`
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const y=["OnPaste"];export{t as OnPaste,y as __namedExportsOrder,v as default};
