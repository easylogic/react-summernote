import{R as e,r as l}from"./index-RYns6xqu.js";import{R as m}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const f={title:"Basic API/CreateRange",component:m},i=()=>{const r=l.useRef(null),s=e.useCallback(()=>{if(r.current){const n=r.current.summernote("createRange");console.log(n)}},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"800px",margin:"0 auto"}},e.createElement("h1",null,"createRange"),e.createElement("p",null,"You can create a range object using the API."),e.createElement("pre",null,`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            nodeRef.current = note;
          }} 
        />
      `),e.createElement("button",{onClick:s},"Create Range"),e.createElement(m,{id:"sample",onInit:({note:n})=>{r.current=n}}))},t={render:()=>e.createElement(i,null)};var a,o,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <CreateRangeComponent />
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const x=["CreateRange"];export{t as CreateRange,x as __namedExportsOrder,f as default};
