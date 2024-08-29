import{R as e}from"./index-CyuyzGzS.js";import{d as a}from"./util-jfGB622S.js";import{a as s,c as i,S as u}from"./Summernote-BFqpfptl.js";import{R as r}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";s("sample2-command",class extends u{externalCommand(){console.log("external command is called",this.context)}});const p=o=>e.createElement("span",{onClick:()=>o.context.invoke("sample2.externalCommand")},o.title),f={title:"Extensions/Plugin Command",component:r},t={render:()=>e.createElement("div",{style:a},e.createElement("h1",null,"Define Custom Command"),e.createElement("pre",null,`
import ReactSummernoteLite, { createSummernotePlugin } from '@easylogic/react-summernote-lite';

// plugin name : sample 
createSummernotePlugin('sample2', function (context: SummernoteContext) {
  this.externalCommand = function () {
    console.log('external command is called');
  }

})

function MyButton(props: SummernoteButtonProps) {

  // call plugin command 
  return <span onClick={() => props.context.invoke('sample2.externalCommand') }>{props.title}</span>
}

<ReactSummernoteLite id="sample" 
  toolbar={[
    ['group', ['hello2']]
  ]}
  buttons={{
    hello2: createSummernoteButton({
      element: MyButton,
      props: {
        title: 'sample'
      },
      container: 'body',
      tooltip: 'yellow'
    })
  }}
/>
      `),e.createElement(r,{id:"sample",toolbar:[["group",["hello2"]]],buttons:{hello2:i({element:p,props:{title:"sample"},container:"body",tooltip:"yellow"})}}))};t.storyName="Plugin - Command";var n,m,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={defaultStyle}>
      <h1>Define Custom Command</h1>
      <pre>{\`
import ReactSummernoteLite, { createSummernotePlugin } from '@easylogic/react-summernote-lite';

// plugin name : sample 
createSummernotePlugin('sample2', function (context: SummernoteContext) {
  this.externalCommand = function () {
    console.log('external command is called');
  }

})

function MyButton(props: SummernoteButtonProps) {

  // call plugin command 
  return <span onClick={() => props.context.invoke('sample2.externalCommand') }>{props.title}</span>
}

<ReactSummernoteLite id="sample" 
  toolbar={[
    ['group', ['hello2']]
  ]}
  buttons={{
    hello2: createSummernoteButton({
      element: MyButton,
      props: {
        title: 'sample'
      },
      container: 'body',
      tooltip: 'yellow'
    })
  }}
/>
      \`}</pre>
      <ReactSummernoteLite id="sample" toolbar={[['group', ['hello2']]]} buttons={{
      hello2: createSummernoteButton({
        element: MyButton,
        props: {
          title: 'sample'
        },
        container: 'body',
        tooltip: 'yellow'
      })
    }} />
    </div>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const h=["CommandPlugin"];export{t as CommandPlugin,h as __namedExportsOrder,f as default};
