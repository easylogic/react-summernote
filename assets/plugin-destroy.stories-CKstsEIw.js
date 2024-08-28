import{R as t}from"./index-CyuyzGzS.js";import{d as s}from"./util-jfGB622S.js";import{c as i,S as a}from"./Summernote-94-QudP_.js";import{R as n}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";i("sample-destroy",class extends a{destroy(){console.log("summernote is destroyed ",this.context.options)}});const S={title:"Extensions/Plugin Destroy",component:n},e={render:()=>t.createElement("div",{style:s},t.createElement("h1",null,"Destroy Plugin"),t.createElement("pre",null,`
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
}`,...(m=(r=e.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const f=["DestroyPlugin"];export{e as DestroyPlugin,f as __namedExportsOrder,S as default};
