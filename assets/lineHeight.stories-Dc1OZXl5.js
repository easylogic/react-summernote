import{R as e}from"./index-RYns6xqu.js";import{R as i}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const H={title:"Paragraph API/Line Height",component:i},p=({lineHeight:t=1.2})=>{const[r,l]=e.useState(null),s=()=>{r&&r.summernote("lineHeight",t)};return e.createElement("div",null,e.createElement("h1",null,"Line Height"),e.createElement("p",null,"Set line height."),e.createElement("pre",null,`
        <ReactSummernoteLite onInit={({ note }) => {
          note.summernote('lineHeight', ${t});
        }} />                
      `),e.createElement("button",{onClick:s},"Line Height ",t),e.createElement(i,{onInit:({note:c})=>l(c)}))},n={render:t=>e.createElement(p,null)};var o,a,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <LineHeightExample />
}`,...(m=(a=n.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const R=["Default"];export{n as Default,R as __namedExportsOrder,H as default};
