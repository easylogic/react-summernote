import{R as t}from"./index-CyuyzGzS.js";import{d as E}from"./util-jfGB622S.js";import{R as h}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const v=({initialContent:f})=>{const[n,C]=t.useState(null),g=()=>{n&&n.summernote("formatPara")};return t.createElement("div",{style:E},t.createElement("h1",null,"formatPara"),t.createElement("p",null,"현재 단락을 ","<p>"," 태그로 변경합니다."),t.createElement("pre",null,`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            note.summernote('formatPara');
          }} 
        />                
      `),t.createElement("button",{onClick:g},"formatPara"),t.createElement(h,{id:"sample",onInit:({note:P})=>C(P),value:f}))},L={title:"Paragraph API/FormatPara",component:v,argTypes:{initialContent:{control:"text"}}},e={args:{initialContent:"여기에 초기 내용을 입력하세요. 이 텍스트를 선택하고 formatPara 버튼을 클릭해보세요."}},a={args:{initialContent:"<h1>제목</h1><p>이것은 단락입니다.</p><div>이것은 div입니다.</div>"}},r={args:{initialContent:""}};var o,m,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    initialContent: '여기에 초기 내용을 입력하세요. 이 텍스트를 선택하고 formatPara 버튼을 클릭해보세요.'
  }
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    initialContent: '<h1>제목</h1><p>이것은 단락입니다.</p><div>이것은 div입니다.</div>'
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    initialContent: ''
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const W=["Default","WithFormattedContent","EmptyContent"];export{e as Default,r as EmptyContent,a as WithFormattedContent,W as __namedExportsOrder,L as default};
