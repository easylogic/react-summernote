import{R as e}from"./index-CyuyzGzS.js";import{d as m}from"./util-jfGB622S.js";import{R as o}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const S={title:"Selection API/Range Select",component:o},n={render:()=>{let t=null;return e.createElement("div",{style:m},e.createElement("h1",null,"select()"),e.createElement("p",null,"select update visible range"),e.createElement("pre",null,`
          rng.select()
          `),e.createElement(o,{id:"sample",onInit:({note:s})=>{t=s},onChange:()=>{t==null||t.summernote("getLastRange").select()}}))}};var r,l,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    let $note: SummernoteJQueryInstance | null = null;
    return <div style={defaultStyle}>
        <h1>select()</h1>
        <p>select update visible range</p>
        <pre>
          {\`
          rng.select()
          \`}
        </pre>

        <ReactSummernoteLite id="sample" onInit={({
        note
      }) => {
        $note = note;
      }} onChange={() => {
        $note?.summernote('getLastRange').select();
      }} />
      </div>;
  }
}`,...(a=(l=n.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const f=["RangeSelect"];export{n as RangeSelect,f as __namedExportsOrder,S as default};
