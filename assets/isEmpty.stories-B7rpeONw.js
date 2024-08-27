import{r as l,R as e}from"./index-RYns6xqu.js";import{d as u}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const S={title:"Basic API/IsEmpty",component:s},n={render:()=>{const t=l.useRef(null),p=()=>{t.current&&t.current.summernote("isEmpty")&&console.log("summernote가 비어 있습니다")};return e.createElement("div",{style:u},e.createElement("h1",null,"isEmpty"),e.createElement("p",null,"에디터 내용이 비어 있는지 여부를 반환합니다. 편집 영역은 포커스를 위해 ","<p><br></p>","가 필요하며, 에디터 내용이 비어 있어도 마찬가지입니다. 따라서 Summernote는 에디터 내용이 비어 있는지 확인하는 데 도움이 되는 이 메서드를 지원합니다."),e.createElement("pre",null,`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            if (note.summernote('isEmpty')) {
              console.log('summernote가 비어 있습니다')
            }
          }} />        
        `),e.createElement("button",{onClick:p},"isEmpty 확인"),e.createElement(s,{id:"sample",onInit:({note:i})=>{t.current=i}}))}};var o,r,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const nodeRef = useRef<SummernoteJQueryInstance | null>(null);
    const doIsEmpty = () => {
      if (nodeRef.current) {
        if (nodeRef.current.summernote('isEmpty')) {
          console.log('summernote가 비어 있습니다');
        }
      }
    };
    return <div style={defaultStyle}>
        <h1>isEmpty</h1>
        <p>
          에디터 내용이 비어 있는지 여부를 반환합니다. 편집 영역은 포커스를 위해 {\`<p><br></p>\`}가 필요하며, 에디터
          내용이 비어 있어도 마찬가지입니다. 따라서 Summernote는 에디터 내용이 비어 있는지 확인하는 데 도움이 되는 이
          메서드를 지원합니다.
        </p>
        <pre>{\`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            if (note.summernote('isEmpty')) {
              console.log('summernote가 비어 있습니다')
            }
          }} />        
        \`}</pre>
        <button onClick={doIsEmpty}>isEmpty 확인</button>
        <ReactSummernoteLite id="sample" onInit={({
        note
      }) => {
        nodeRef.current = note;
      }} />
      </div>;
  }
}`,...(m=(r=n.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const b=["IsEmpty"];export{n as IsEmpty,b as __namedExportsOrder,S as default};
