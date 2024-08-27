import{R as n}from"./index-RYns6xqu.js";import{a as t}from"./chunk-454WOBUV-CM0pFb8Z.js";import{R as m}from"./ReactSummernoteLite-Chf2t645.js";import"./v4-CQkTLCs1.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const h={title:"Basic API/Undo And Redo",component:m},o={render:s=>{const e=n.useRef(null),u=()=>{e.current&&(e.current.summernote("undo"),t("undo")())},i=()=>{e.current&&(e.current.summernote("redo"),t("redo")())};return n.createElement("div",null,n.createElement("h1",null,"Undo & Redo"),n.createElement("p",null,"Undoes and Redoes the last command"),n.createElement("button",{onClick:u},"undo"),n.createElement("button",{onClick:i},"redo"),n.createElement(m,{...s,onInit:({note:r})=>{e.current=r,t("onInit")(r)}}))},args:{id:"sample"}};var d,c,a;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const $note = React.useRef<any>(null);
    const doUndo = () => {
      if ($note.current) {
        $note.current.summernote('undo');
        action('undo')();
      }
    };
    const doRedo = () => {
      if ($note.current) {
        $note.current.summernote('redo');
        action('redo')();
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
        action('onInit')(note);
      }} />
      </div>;
  },
  args: {
    id: 'sample'
  }
}`,...(a=(c=o.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const I=["UndoAndRedo"];export{o as UndoAndRedo,I as __namedExportsOrder,h as default};
