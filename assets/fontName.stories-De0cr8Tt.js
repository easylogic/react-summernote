import{r as u,R as e}from"./index-CyuyzGzS.js";import{d as s}from"./util-jfGB622S.js";import{R as a}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const E={title:"Font Style API/fontName",component:a},n={render:()=>{const t=u.useRef(null),l=()=>{t.current&&t.current.summernote("fontName","Arial")};return e.createElement("div",{style:s},e.createElement("h1",null,"fontName"),e.createElement("p",null,"글꼴 패밀리를 설정합니다."),e.createElement("pre",null,`
          <ReactSummernoteLite 
            onInit={({ note }) => {
              note.summernote('fontName', 'Arial');
            }} 
          />                
        `),e.createElement("button",{onClick:l},"fontName Arial"),e.createElement(a,{onInit:({note:c})=>{t.current=c}}))}};n.storyName="fontName";var o,r,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const nodeRef = useRef<SummernoteJQueryInstance | null>(null);
    const doFontName = () => {
      if (nodeRef.current) {
        nodeRef.current.summernote('fontName', 'Arial');
      }
    };
    return <div style={defaultStyle}>
        <h1>fontName</h1>
        <p>글꼴 패밀리를 설정합니다.</p>
        <pre>{\`
          <ReactSummernoteLite 
            onInit={({ note }) => {
              note.summernote('fontName', 'Arial');
            }} 
          />                
        \`}</pre>
        <button onClick={doFontName}>fontName Arial</button>
        <ReactSummernoteLite onInit={({
        note
      }) => {
        nodeRef.current = note;
      }} />
      </div>;
  }
}`,...(m=(r=n.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const y=["FontNameCommand"];export{n as FontNameCommand,y as __namedExportsOrder,E as default};
