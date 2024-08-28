import{R as t}from"./index-RYns6xqu.js";import{d as s}from"./util-jfGB622S.js";import{c as i,S as a}from"./Summernote-C2VawFWZ.js";import{R as n}from"./ReactSummernoteLite-B5zbsaz-.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";i("sample-destroy",class extends a{destroy(){console.log("summernote is destroyed ",this.context.options)}});const f={title:"Extensions/Plugin Destroy",component:n},e={render:()=>t.createElement("div",{style:s},t.createElement("h1",null,"Destroy Plugin"),t.createElement("pre",null,`
import ReactSummernoteLite, { createSummernotePlugin } from '@easylogic/react-summernote-lite';

// plugin name : sample-destroy 
createSummernotePlugin('sample-destroy', function (context: SummernoteContext) {
  this.destroy = function () {
    console.log('summernote is destroyed ');
  }
})

<ReactSummernoteLite id="sample" />
      `),t.createElement(n,{id:"sample"}))};e.storyName="Plugin - Destroy";var o,r,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={defaultStyle}>
      <h1>Destroy Plugin</h1>
      <pre>{\`
import ReactSummernoteLite, { createSummernotePlugin } from '@easylogic/react-summernote-lite';

// plugin name : sample-destroy 
createSummernotePlugin('sample-destroy', function (context: SummernoteContext) {
  this.destroy = function () {
    console.log('summernote is destroyed ');
  }
})

<ReactSummernoteLite id="sample" />
      \`}</pre>
      <ReactSummernoteLite id="sample" />
    </div>
}`,...(m=(r=e.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const P=["DestroyPlugin"];export{e as DestroyPlugin,P as __namedExportsOrder,f as default};
