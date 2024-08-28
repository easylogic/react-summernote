import{R as e}from"./index-RYns6xqu.js";import{d as r}from"./util-jfGB622S.js";import{c as a,S as l}from"./Summernote-C2VawFWZ.js";import{R as m}from"./ReactSummernoteLite-B5zbsaz-.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";a("sample-initialize",class extends l{initialize(){console.log("summernote is initialized ",this.context.options)}});const z={title:"Extensions/Plugin Initialize",component:m},t={render:()=>e.createElement("div",{style:r},e.createElement("h1",null,"Initialize Plugin"),e.createElement("pre",null,`
import ReactSummernoteLite, { createSummernotePlugin } from '@easylogic/react-summernote-lite';

// plugin name : sample 
createSummernotePlugin('sample', function (context: SummernoteContext) {

  const options = context.options;    // options 
  this.initialize = function () {
    console.log('summernote is initialized ', options);
  }

})

<ReactSummernoteLite id="sample" />
      `),e.createElement(m,{id:"sample"}))};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={defaultStyle}>
      <h1>Initialize Plugin</h1>
      <pre>{\`
import ReactSummernoteLite, { createSummernotePlugin } from '@easylogic/react-summernote-lite';

// plugin name : sample 
createSummernotePlugin('sample', function (context: SummernoteContext) {

  const options = context.options;    // options 
  this.initialize = function () {
    console.log('summernote is initialized ', options);
  }

})

<ReactSummernoteLite id="sample" />
      \`}</pre>
      <ReactSummernoteLite id="sample" />
    </div>
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const x=["PluginInitialize"];export{t as PluginInitialize,x as __namedExportsOrder,z as default};
