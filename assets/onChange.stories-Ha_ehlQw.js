import{R as e}from"./index-RYns6xqu.js";import{d as s}from"./util-jfGB622S.js";import{R as l}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const b={title:"Callbacks/OnChange",component:l},t={render:()=>e.createElement("div",{style:s},e.createElement("h1",null,"onChange(contents, $editable)"),e.createElement("ul",null,e.createElement("li",null,"IE9-10: DOMCharacterDataModified, DOMSubtreeModified, DOMNodeInserted"),e.createElement("li",null,"Chrome, FF: input")),e.createElement("pre",null,`
      <ReactSummernoteLite id="sample" onChange={(contents: string, $editable: any) => {
        console.log('onChange:', contents, $editable);
      }}
  />
      `),e.createElement(l,{id:"sample",onChange:(r,i)=>{console.log("onChange:",r,i)}}))};var n,a,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={defaultStyle}>
      <h1>onChange(contents, $editable)</h1>
      <ul>
        <li>IE9-10: DOMCharacterDataModified, DOMSubtreeModified, DOMNodeInserted</li>
        <li>Chrome, FF: input</li>
      </ul>
      <pre>
        {\`
      <ReactSummernoteLite id="sample" onChange={(contents: string, $editable: any) => {
        console.log('onChange:', contents, $editable);
      }}
  />
      \`}
      </pre>
      <ReactSummernoteLite id="sample" onChange={(contents, $editable: any) => {
      console.log('onChange:', contents, $editable);
    }} />
    </div>
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const f=["OnChange"];export{t as OnChange,f as __namedExportsOrder,b as default};
