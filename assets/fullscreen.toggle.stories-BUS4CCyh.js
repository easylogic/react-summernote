import{R as e}from"./index-CyuyzGzS.js";import{R as a}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const E={title:"Basic API/FullScreenToggle",component:a},u=()=>{const t=e.useRef(null),c=e.useCallback(()=>{t.current&&t.current.summernote("fullscreen.toggle")},[]),s=e.useCallback(({note:m})=>{t.current=m},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"800px",margin:"0 auto"}},e.createElement("h1",null,"fullscreen.toggle"),e.createElement("p",null,"You can toggle fullscreen mode by API."),e.createElement("pre",null,`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            note.summernote('fullscreen.toggle');
          }} 
        />      
      `),e.createElement("button",{onClick:c},"Fullscreen"),e.createElement(a,{id:"sample",onInit:s}))},n={args:{id:"sample"},render:t=>e.createElement(u,{...t})};var r,l,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    id: 'sample'
  },
  render: args => <FullScreenToggleComponent {...args} />
}`,...(o=(l=n.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const F=["FullScreenToggle"];export{n as FullScreenToggle,F as __namedExportsOrder,E as default};
