import{R as n}from"./index-CyuyzGzS.js";import{R as c}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const E={title:"Basic API/Undo And Redo",component:c},o={render:s=>{const e=n.useRef(null),a=()=>{e.current&&e.current.summernote("undo")},m=()=>{e.current&&e.current.summernote("redo")};return n.createElement("div",null,n.createElement("h1",null,"Undo & Redo"),n.createElement("p",null,"Undoes and Redoes the last command"),n.createElement("button",{onClick:a},"undo"),n.createElement("button",{onClick:m},"redo"),n.createElement(c,{...s,onInit:({note:u})=>{e.current=u}}))},args:{id:"sample"}};var t,r,d;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const $note = React.useRef<any>(null);
    const doUndo = () => {
      if ($note.current) {
        $note.current.summernote('undo');
      }
    };
    const doRedo = () => {
      if ($note.current) {
        $note.current.summernote('redo');
      }
    };
    return <div>
        <h1>Undo & Redo</h1>
        <p>Undoes and Redoes the last command</p>
        <button onClick={doUndo}>undo</button>
        <button onClick={doRedo}>redo</button>
        <ReactSummernoteLite {...args} onInit={({
        note
      }) => {
        $note.current = note;
      }} />
      </div>;
  },
  args: {
    id: 'sample'
  }
}`,...(d=(r=o.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const $=["UndoAndRedo"];export{o as UndoAndRedo,$ as __namedExportsOrder,E as default};
