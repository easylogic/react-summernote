import{R as e}from"./index-CyuyzGzS.js";import{a}from"./chunk-454WOBUV-DFv1A5Wi.js";import{d as u}from"./util-jfGB622S.js";import{R as i}from"./ReactSummernoteLite-BDzohGId.js";import"./v4-CQkTLCs1.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const S={title:"Paragraph API/InsertParagraph",component:i},r={render:m=>{const t=e.useRef(null),p=()=>{t.current&&(t.current.summernote("insertParagraph"),a("insertParagraph")("단락이 삽입되었습니다"))};return e.createElement("div",{style:u},e.createElement("h1",null,"insertParagraph"),e.createElement("p",null,"단락 삽입하기"),e.createElement("pre",null,`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('insertParagraph');
          }} />                
        `),e.createElement("button",{onClick:p},"insertParagraph"),e.createElement(i,{...m,id:"sample",onInit:({note:c})=>{t.current=c,a("onInit")("에디터가 초기화되었습니다")}}))},args:{height:200},argTypes:{height:{control:{type:"number"},description:"에디터의 높이"}}};var n,o,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const $note = React.useRef<SummernoteJQueryInstance | null>(null);
    const doInsertParagraph = () => {
      if ($note.current) {
        $note.current.summernote('insertParagraph');
        action('insertParagraph')('단락이 삽입되었습니다');
      }
    };
    return <div style={defaultStyle}>
        <h1>insertParagraph</h1>
        <p>단락 삽입하기</p>
        <pre>{\`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('insertParagraph');
          }} />                
        \`}</pre>
        <button onClick={doInsertParagraph}>insertParagraph</button>
        <ReactSummernoteLite {...args} id="sample" onInit={({
        note
      }) => {
        $note.current = note;
        action('onInit')('에디터가 초기화되었습니다');
      }} />
      </div>;
  },
  args: {
    height: 200
  },
  argTypes: {
    height: {
      control: {
        type: 'number'
      },
      description: '에디터의 높이'
    }
  }
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const E=["InsertParagraphCommand"];export{r as InsertParagraphCommand,E as __namedExportsOrder,S as default};
