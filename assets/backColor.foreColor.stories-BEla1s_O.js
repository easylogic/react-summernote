import{R as o}from"./index-CyuyzGzS.js";import{a as r}from"./chunk-454WOBUV-DFv1A5Wi.js";import{R as m}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./v4-CQkTLCs1.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const E={title:"Font Style API/BackColor ForeColor",component:m},n={render:u=>{const e=o.useRef(null),s=()=>{e.current&&(e.current.summernote("backColor","yellow"),r("backColor")("yellow"))},i=()=>{e.current&&(e.current.summernote("foreColor","red"),r("foreColor")("red"))};return o.createElement("div",null,o.createElement("h1",null,"backColor, foreColor"),o.createElement("p",null,"배경색 또는 전경색을 설정합니다."),o.createElement("pre",null,`
          <ReactSummernoteLite onInit={({ note }) => {
            note.summernote('backColor', 'yellow')  
            note.summernote('foreColor', 'red')  
          }} />                
        `),o.createElement("button",{onClick:s},"배경색 노랑"),o.createElement("button",{onClick:i},"전경색 빨강"),o.createElement(m,{...u,onInit:({note:t})=>{e.current=t,r("onInit")(t)}}))},args:{id:"sample"}};var l,c,a;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const $note = React.useRef<any>(null);
    const doBackColor = () => {
      if ($note.current) {
        $note.current.summernote('backColor', 'yellow');
        action('backColor')('yellow');
      }
    };
    const doForeColor = () => {
      if ($note.current) {
        $note.current.summernote('foreColor', 'red');
        action('foreColor')('red');
      }
    };
    return <div>
        <h1>backColor, foreColor</h1>
        <p>배경색 또는 전경색을 설정합니다.</p>
        <pre>{\`
          <ReactSummernoteLite onInit={({ note }) => {
            note.summernote('backColor', 'yellow')  
            note.summernote('foreColor', 'red')  
          }} />                
        \`}</pre>
        <button onClick={doBackColor}>배경색 노랑</button>
        <button onClick={doForeColor}>전경색 빨강</button>
        <ReactSummernoteLite {...args} onInit={({
        note
      }) => {
        $note.current = note;
        action('onInit')(note);
      }} />
      </div>;
  },
  args: {
    id: 'sample'
  }
}`,...(a=(c=n.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const F=["BackColorForeColor"];export{n as BackColorForeColor,F as __namedExportsOrder,E as default};
