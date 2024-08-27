import{R as t}from"./index-RYns6xqu.js";import{d as g}from"./util-jfGB622S.js";import{R as p}from"./ReactSummernoteLite-C35-7mjT.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-DoLfHz0W.js";const u=({title:a,description:s})=>{const[r,m]=t.useState(null),c=()=>{console.log(r==null?void 0:r.summernote("getLastRange").toString())};return t.createElement("div",{style:g},t.createElement("h1",null,a),t.createElement("p",null,s),t.createElement("pre",null,`
          const text = rng.toString()
        `),t.createElement("button",{onClick:c},"toString"),t.createElement(p,{id:"sample",onInit:({note:l})=>{m(l)}}))},C={title:"Selection API/Range/toString",component:u,argTypes:{title:{control:"text"},description:{control:"text"}}},e={args:{title:"toString()",description:"returns text in range"}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'toString()',
    description: 'returns text in range'
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const I=["toString"];export{I as __namedExportsOrder,C as default,e as toString};
