import{R as e}from"./index-CyuyzGzS.js";import{R as i}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const f={title:"Paragraph API/Line Height",component:i},u=({lineHeight:t=1.2})=>{const[r,l]=e.useState(null),s=()=>{r&&r.summernote("lineHeight",t)};return e.createElement("div",null,e.createElement("h1",null,"Line Height"),e.createElement("p",null,"Set line height."),e.createElement("pre",null,`
        <ReactSummernoteLite onInit={({ note }) => {
          note.summernote('lineHeight', ${t});
        }} />                
      `),e.createElement("button",{onClick:s},"Line Height ",t),e.createElement(i,{onInit:({note:c})=>l(c)}))},n={render:t=>e.createElement(u,null)};var o,a,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <LineHeightExample />
}`,...(m=(a=n.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const H=["Default"];export{n as Default,H as __namedExportsOrder,f as default};
