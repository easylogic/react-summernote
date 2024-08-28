import{R as t}from"./index-CyuyzGzS.js";import{d as g}from"./util-jfGB622S.js";import{R as p}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const u=({title:i,description:s})=>{const[r,c]=t.useState(null),l=()=>{console.log(r==null?void 0:r.summernote("getLastRange").toString())};return t.createElement("div",{style:g},t.createElement("h1",null,i),t.createElement("p",null,s),t.createElement("pre",null,`
          const text = rng.toString()
        `),t.createElement("button",{onClick:l},"toString"),t.createElement(p,{id:"sample",onInit:({note:m})=>{c(m)}}))},T={title:"Selection API/Range/toString",component:u,argTypes:{title:{control:"text"},description:{control:"text"}}},e={args:{title:"toString()",description:"returns text in range"}};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'toString()',
    description: 'returns text in range'
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const C=["toString"];export{C as __namedExportsOrder,T as default,e as toString};
