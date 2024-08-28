import{r as a,R as e}from"./index-CyuyzGzS.js";import{d as c}from"./util-jfGB622S.js";import{R as i}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const I={title:"Insertion API/InsertNode",component:i},t={render:()=>{const r=a.useRef(null),m=()=>{if(r.current){const n=document.createElement("div");n.innerHTML="<span>안녕하세요, 세계</span>",r.current.summernote("insertNode",n)}};return e.createElement("div",{style:c},e.createElement("h1",null,"insertNode"),e.createElement("p",null,"노드 삽입"),e.createElement("pre",null,`
          <ReactSummernoteLite
            id="sample"
            onInit={({ note }) => {
              const div = document.createElement('div');
              div.innerHTML = \`<span>안녕하세요, 세계</span>\`;
              note.summernote('insertNode', div);
            }}
          />
        `),e.createElement("button",{onClick:m},"insertNode 안녕하세요, 세계"),e.createElement(i,{id:"sample",onInit:({note:n})=>{r.current=n}}))}};var o,s,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const nodeRef = useRef<SummernoteJQueryInstance | null>(null);
    const doInsertNode = () => {
      if (nodeRef.current) {
        const div = document.createElement('div');
        div.innerHTML = \`<span>안녕하세요, 세계</span>\`;
        nodeRef.current.summernote('insertNode', div);
      }
    };
    return <div style={defaultStyle}>
        <h1>insertNode</h1>
        <p>노드 삽입</p>
        <pre>{\`
          <ReactSummernoteLite
            id="sample"
            onInit={({ note }) => {
              const div = document.createElement('div');
              div.innerHTML = \\\`<span>안녕하세요, 세계</span>\\\`;
              note.summernote('insertNode', div);
            }}
          />
        \`}</pre>
        <button onClick={doInsertNode}>insertNode 안녕하세요, 세계</button>
        <ReactSummernoteLite id="sample" onInit={({
        note
      }) => {
        nodeRef.current = note;
      }} />
      </div>;
  }
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const E=["InsertNode"];export{t as InsertNode,E as __namedExportsOrder,I as default};
