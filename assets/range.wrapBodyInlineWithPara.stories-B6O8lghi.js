import{R as e}from"./index-CyuyzGzS.js";import{d}from"./util-jfGB622S.js";import{R as m}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const h=({title:i,description:l})=>{const[n,s]=e.useState(null),p=()=>{console.log(n==null?void 0:n.summernote("getLastRange").wrapBodyInlineWithPara())};return e.createElement("div",{style:d},e.createElement("h1",null,i),e.createElement("p",null,l),e.createElement("pre",null,`
          const newRng = rng.WrapBodyInlineWithPara()
        `),e.createElement("button",{onClick:p},"wrapBodyInlineWithPara"),e.createElement(m,{id:"sample",onInit:({note:c})=>{s(c)}}))},P={title:"Selection API/Range/wrapBodyInlineWithPara",component:h,argTypes:{title:{control:"text"},description:{control:"text"}}},t={args:{title:"wrapBodyInlineWithPara()",description:"wrap inline nodes which children of body with paragraph"}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'wrapBodyInlineWithPara()',
    description: 'wrap inline nodes which children of body with paragraph'
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,P as default};
