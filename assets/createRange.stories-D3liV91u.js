import{R as e,r as l}from"./index-CyuyzGzS.js";import{R as m}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const E={title:"Basic API/CreateRange",component:m},i=()=>{const n=l.useRef(null),s=e.useCallback(()=>{if(n.current){const r=n.current.summernote("createRange");console.log(r)}},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"800px",margin:"0 auto"}},e.createElement("h1",null,"createRange"),e.createElement("p",null,"You can create a range object using the API."),e.createElement("pre",null,`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            const range = note.summernote('createRange');
            console.log(range);
          }} 
        />
      `),e.createElement("button",{onClick:s},"Create Range"),e.createElement(m,{id:"sample",onInit:({note:r})=>{n.current=r}}))},t={render:()=>e.createElement(i,null)};var a,o,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <CreateRangeComponent />
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const f=["CreateRange"];export{t as CreateRange,f as __namedExportsOrder,E as default};
