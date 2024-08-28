import{R as o}from"./index-RYns6xqu.js";import{a as r}from"./chunk-454WOBUV-CM0pFb8Z.js";import{R as m}from"./ReactSummernoteLite-B5zbsaz-.js";import"./v4-CQkTLCs1.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-C2VawFWZ.js";const F={title:"Font Style API/BackColor ForeColor",component:m},n={render:u=>{const e=o.useRef(null),i=()=>{e.current&&(e.current.summernote("backColor","yellow"),r("backColor")("yellow"))},s=()=>{e.current&&(e.current.summernote("foreColor","red"),r("foreColor")("red"))};return o.createElement("div",null,o.createElement("h1",null,"backColor, foreColor"),o.createElement("p",null,"배경색 또는 전경색을 설정합니다."),o.createElement("pre",null,`
          <ReactSummernoteLite onInit={({ note }) => {
            note.summernote('backColor', 'yellow')  
            note.summernote('foreColor', 'red')  
          }} />                
        `),o.createElement("button",{onClick:i},"배경색 노랑"),o.createElement("button",{onClick:s},"전경색 빨강"),o.createElement(m,{...u,onInit:({note:t})=>{e.current=t,r("onInit")(t)}}))},args:{id:"sample"}};var l,c,a;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(a=(c=n.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const I=["BackColorForeColor"];export{n as BackColorForeColor,I as __namedExportsOrder,F as default};
