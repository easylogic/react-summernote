import{R as e}from"./index-RYns6xqu.js";import{R as a}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const F={title:"Basic API/FullScreenToggle",component:a},u=()=>{const t=e.useRef(null),c=e.useCallback(()=>{t.current&&t.current.summernote("fullscreen.toggle")},[]),m=e.useCallback(({note:s})=>{t.current=s},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"800px",margin:"0 auto"}},e.createElement("h1",null,"fullscreen.toggle"),e.createElement("p",null,"You can toggle fullscreen mode by API."),e.createElement("pre",null,`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            note.summernote('fullscreen.toggle');
          }} 
        />      
      `),e.createElement("button",{onClick:c},"Fullscreen"),e.createElement(a,{id:"sample",onInit:m}))},n={args:{id:"sample"},render:t=>e.createElement(u,{...t})};var r,l,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    id: 'sample'
  },
  render: args => <FullScreenToggleComponent {...args} />
}`,...(o=(l=n.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const R=["FullScreenToggle"];export{n as FullScreenToggle,R as __namedExportsOrder,F as default};
