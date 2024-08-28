import{R as t}from"./index-RYns6xqu.js";import{d as E}from"./util-jfGB622S.js";import{R as h}from"./ReactSummernoteLite-B5zbsaz-.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-C2VawFWZ.js";const v=({initialContent:f})=>{const[o,C]=t.useState(null),g=()=>{o&&o.summernote("formatPara")};return t.createElement("div",{style:E},t.createElement("h1",null,"formatPara"),t.createElement("p",null,"현재 단락을 ","<p>"," 태그로 변경합니다."),t.createElement("pre",null,`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            note.summernote('formatPara');
          }} 
        />                
      `),t.createElement("button",{onClick:g},"formatPara"),t.createElement(h,{id:"sample",onInit:({note:P})=>C(P),value:f}))},W={title:"Paragraph API/FormatPara",component:v,argTypes:{initialContent:{control:"text"}}},e={args:{initialContent:"여기에 초기 내용을 입력하세요. 이 텍스트를 선택하고 formatPara 버튼을 클릭해보세요."}},a={args:{initialContent:"<h1>제목</h1><p>이것은 단락입니다.</p><div>이것은 div입니다.</div>"}},r={args:{initialContent:""}};var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    initialContent: '여기에 초기 내용을 입력하세요. 이 텍스트를 선택하고 formatPara 버튼을 클릭해보세요.'
  }
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    initialContent: '<h1>제목</h1><p>이것은 단락입니다.</p><div>이것은 div입니다.</div>'
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    initialContent: ''
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const _=["Default","WithFormattedContent","EmptyContent"];export{e as Default,r as EmptyContent,a as WithFormattedContent,_ as __namedExportsOrder,W as default};
