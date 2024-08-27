import{R as e}from"./index-RYns6xqu.js";import{d as s}from"./util-jfGB622S.js";import{R as a}from"./ReactSummernoteLite-C35-7mjT.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-DoLfHz0W.js";const S={title:"Callbacks/OnInit",component:a},n={render:t=>e.createElement("div",{style:s},e.createElement("h1",null,"onInit("," { note }: SummernoteCallbackInitProps ",")"),e.createElement("pre",null,`
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            console.log('summernote is launched', note);
          }}
        />        
        `),e.createElement(a,{...t})),args:{id:"sample",onInit:({note:t})=>{console.log("summernote is launched",t)}}};var o,r,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div style={defaultStyle}>
      <h1>onInit({\` { note }: SummernoteCallbackInitProps \`})</h1>
      <pre>
        {\`
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            console.log('summernote is launched', note);
          }}
        />        
        \`}
      </pre>
      <ReactSummernoteLite {...args} />
    </div>,
  args: {
    id: 'sample',
    onInit: ({
      note
    }) => {
      console.log('summernote is launched', note);
    }
  }
}`,...(m=(r=n.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const h=["OnInit"];export{n as OnInit,h as __namedExportsOrder,S as default};
