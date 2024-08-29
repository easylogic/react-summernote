import{R as e,r as u}from"./index-CyuyzGzS.js";import{d}from"./util-jfGB622S.js";import{c as b}from"./Summernote-BFqpfptl.js";import{R as y}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const E=({context:t,title:B})=>{const[s,f]=u.useState(0);return u.useEffect(()=>{const n=setInterval(()=>{f(S=>S+1)},1e3);return()=>{clearInterval(n)}},[]),e.createElement("button",{onClick:()=>{var n;(n=t==null?void 0:t.invoke)==null||n.call(t,"editor.insertText",`현재 시간: ${s}`)}},B," - ",s)},M={title:"Extensions/Button",component:y,argTypes:{id:{control:"text"},toolbar:{control:"object"},buttons:{control:"object"}}},C={render:t=>e.createElement("div",{style:d},e.createElement("h1",null,"Define React Button"),e.createElement(y,{...t}))},o={...C,args:{id:"sample",toolbar:[["group",["hello"]]],buttons:{hello:b({element:E,props:{title:"sample"},container:"body",tooltip:"yellow"})}}},r={render:()=>e.createElement("div",{style:d},e.createElement("h1",null,"Define React Button"),e.createElement("pre",null,`
import React, { useState, useEffect } from 'react';
import { SummernoteButtonProps, createSummernoteButton } from '@easylogic/react-summernote-lite';

const MyButton = ({ context, options }: SummernoteButtonProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <button
      onClick={() => {
        context.invoke('editor.insertText', \`현재 시간: \${count}\`);
      }}
    >
      {options.title} - {count}
    </button>
  );
};

// 버튼 생성 및 사용
const myCustomButton = createSummernoteButton({
  element: MyButton,
  props: {
    title: 'sample'
  },
  container: 'body',
  tooltip: 'yellow'
});

// ReactSummernoteLite 컴포넌트에서 사용
<ReactSummernoteLite
  id="sample"
  toolbar={[['group', ['hello']]]}
  buttons={{
    hello: myCustomButton
  }}
/>
      `))};var m,a,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template,
  args: {
    id: 'sample',
    toolbar: [['group', ['hello']]],
    buttons: {
      hello: createSummernoteButton({
        element: MyButton,
        props: {
          title: 'sample'
        },
        container: 'body',
        tooltip: 'yellow'
      })
    }
  }
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={defaultStyle}>
      <h1>Define React Button</h1>
      <pre>{\`
import React, { useState, useEffect } from 'react';
import { SummernoteButtonProps, createSummernoteButton } from '@easylogic/react-summernote-lite';

const MyButton = ({ context, options }: SummernoteButtonProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <button
      onClick={() => {
        context.invoke('editor.insertText', \\\`현재 시간: \\\${count}\\\`);
      }}
    >
      {options.title} - {count}
    </button>
  );
};

// 버튼 생성 및 사용
const myCustomButton = createSummernoteButton({
  element: MyButton,
  props: {
    title: 'sample'
  },
  container: 'body',
  tooltip: 'yellow'
});

// ReactSummernoteLite 컴포넌트에서 사용
<ReactSummernoteLite
  id="sample"
  toolbar={[['group', ['hello']]]}
  buttons={{
    hello: myCustomButton
  }}
/>
      \`}</pre>
    </div>
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const T=["Button","CodeExample"];export{o as Button,r as CodeExample,T as __namedExportsOrder,M as default};
