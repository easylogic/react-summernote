import{R as e}from"./index-CyuyzGzS.js";import{d as r}from"./util-jfGB622S.js";import{a,S as l}from"./Summernote-BFqpfptl.js";import{R as m}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";a("sample-initialize",class extends l{initialize(){console.log("summernote is initialized ",this.context.options)}});const f={title:"Extensions/Plugin Initialize",component:m},t={render:()=>e.createElement("div",{style:r},e.createElement("h1",null,"Initialize Plugin"),e.createElement("pre",null,`
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const z=["PluginInitialize"];export{t as PluginInitialize,z as __namedExportsOrder,f as default};
