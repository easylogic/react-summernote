import{R as e}from"./index-CyuyzGzS.js";import{d as s}from"./util-jfGB622S.js";import{R as m}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const g={title:"Callbacks/OnInit",component:m},n={render:t=>e.createElement("div",{style:s},e.createElement("h1",null,"onInit("," { note }: SummernoteCallbackInitProps ",")"),e.createElement("pre",null,`
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            console.log('summernote is launched', note);
          }}
        />        
        `),e.createElement(m,{...t})),args:{id:"sample",onInit:({note:t})=>{console.log("summernote is launched",t)}}};var o,r,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const S=["OnInit"];export{n as OnInit,S as __namedExportsOrder,g as default};
