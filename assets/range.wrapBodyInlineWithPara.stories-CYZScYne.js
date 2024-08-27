import{R as e}from"./index-RYns6xqu.js";import{d as m}from"./util-jfGB622S.js";import{R as d}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const h=({title:i,description:l})=>{const[r,p]=e.useState(null),s=()=>{console.log(r==null?void 0:r.summernote("getLastRange").wrapBodyInlineWithPara())};return e.createElement("div",{style:m},e.createElement("h1",null,i),e.createElement("p",null,l),e.createElement("pre",null,`
          const newRng = rng.WrapBodyInlineWithPara()
        `),e.createElement("button",{onClick:s},"wrapBodyInlineWithPara"),e.createElement(d,{id:"sample",onInit:({note:c})=>{p(c)}}))},B={title:"Selection API/Range/wrapBodyInlineWithPara",component:h,argTypes:{title:{control:"text"},description:{control:"text"}}},t={args:{title:"wrapBodyInlineWithPara()",description:"wrap inline nodes which children of body with paragraph"}};var n,a,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'wrapBodyInlineWithPara()',
    description: 'wrap inline nodes which children of body with paragraph'
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,B as default};
