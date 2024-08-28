import{R as e}from"./index-CyuyzGzS.js";import{R as d}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const g={title:"Paragraph API/Insert List",component:d},t={render:i=>{let r=null;const m=()=>{r&&r.summernote("insertOrderedList")},a=()=>{r&&r.summernote("insertUnorderedList")};return e.createElement("div",null,e.createElement("h1",null,"insertOrderedList, insertUnorderedList"),e.createElement("p",null,"Toggle ordered list or unordered list"),e.createElement("button",{onClick:m},"insertOrderedList"),e.createElement("button",{onClick:a},"insertUnorderedList"),e.createElement(d,{...i,onInit:({note:l})=>{r=l}}))},args:{id:"sample"}};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    let $note: SummernoteJQueryInstance | null = null;
    const doInsertOrderedList = () => {
      if ($note) {
        $note.summernote('insertOrderedList');
      }
    };
    const doInsertUnorderedList = () => {
      if ($note) {
        $note.summernote('insertUnorderedList');
      }
    };
    return <div>
        <h1>insertOrderedList, insertUnorderedList</h1>
        <p>Toggle ordered list or unordered list</p>
        <button onClick={doInsertOrderedList}>insertOrderedList</button>
        <button onClick={doInsertUnorderedList}>insertUnorderedList</button>
        <ReactSummernoteLite {...args} onInit={({
        note
      }) => {
        $note = note;
      }} />
      </div>;
  },
  args: {
    id: 'sample'
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const U=["InsertOrderedListCommand"];export{t as InsertOrderedListCommand,U as __namedExportsOrder,g as default};
