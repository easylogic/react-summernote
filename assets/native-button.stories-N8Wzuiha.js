import{R as t}from"./index-RYns6xqu.js";import{d as m}from"./util-jfGB622S.js";import{R as a,c as i}from"./ReactSummernoteLite-C35-7mjT.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-DoLfHz0W.js";const x={title:"Extensions/Native Button",component:a},e={render:()=>t.createElement("div",{style:m},t.createElement("h1",null,"Define Native button"),t.createElement("pre",null,`
        import ReactSummernoteLite, { createSummernoteButton } from '@easylogic/react-summernote-lite';

        <ReactSummernoteLite id="sample" 
          toolbar={[
            ['group', ['default']]
          ]}
          buttons={{
            default: createSummernoteButton({
              title: 'default button',
              onClick: (context: any) => {
                context.invoke('insertText', 'default');
              }
            })
          }}  
        />
      `),t.createElement(a,{id:"sample",toolbar:[["group",["default"]]],buttons:{default:i({title:"default button",onClick:u=>{u.invoke("insertText","default")}})}}))};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={defaultStyle}>
      <h1>Define Native button</h1>
      <pre>{\`
        import ReactSummernoteLite, { createSummernoteButton } from '@easylogic/react-summernote-lite';

        <ReactSummernoteLite id="sample" 
          toolbar={[
            ['group', ['default']]
          ]}
          buttons={{
            default: createSummernoteButton({
              title: 'default button',
              onClick: (context: any) => {
                context.invoke('insertText', 'default');
              }
            })
          }}  
        />
      \`}</pre>
      <ReactSummernoteLite id="sample" toolbar={[['group', ['default']]]} buttons={{
      default: createSummernoteButton({
        title: 'default button',
        onClick: (context: any) => {
          context.invoke('insertText', 'default');
        }
      })
    }} />
    </div>
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const v=["NativeButton"];export{e as NativeButton,v as __namedExportsOrder,x as default};
