import{R as e}from"./index-CyuyzGzS.js";import{d as m}from"./util-jfGB622S.js";import{R as l}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const f={title:"Option/Hint",component:l},t={render:r=>e.createElement("div",{style:m},e.createElement("h1",null,"Hint"),e.createElement("p",null,"Summernote supports autocomplete features, hint to help typing. You can define custom hints with options. Hint options can be an object or array for multiple hints."),e.createElement("pre",null,`
<ReactSummernoteLite 
  id="sample" 
  hint={{
    words: ['apple', 'orange', 'watermelon', 'lemon'],
    match: /\b(w{1,})$/,
    search: function (keyword: string, callback: Function) {
      callback($.grep(this.words, function (item: string) {
        return item.indexOf(keyword) === 0;
      }));
    }
  }} 
  value="sample text" 
  placeholder="type with apple, orange, watermelon, lemon" 
/>
      `),e.createElement("p",{style:{border:"1px solid #ececec"}},e.createElement(l,{...r}))),args:{id:"sample",hint:{words:["apple","orange","watermelon","lemon"],match:/\b(\w{1,})$/,search:function(r,i){i($.grep(this.words,function(p){return p.indexOf(r)===0}))}},value:"sample text",placeholder:"type with apple, orange, watermelon, lemon"}};var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <div style={defaultStyle}>
      <h1>Hint</h1>
      <p>
        Summernote supports autocomplete features, hint to help typing. You can define custom hints with options. Hint
        options can be an object or array for multiple hints.
      </p>
      {/* 테이블 내용은 그대로 유지 */}
      <pre>{\`
<ReactSummernoteLite 
  id="sample" 
  hint={{
    words: ['apple', 'orange', 'watermelon', 'lemon'],
    match: /\\b(\\w{1,})$/,
    search: function (keyword: string, callback: Function) {
      callback($.grep(this.words, function (item: string) {
        return item.indexOf(keyword) === 0;
      }));
    }
  }} 
  value="sample text" 
  placeholder="type with apple, orange, watermelon, lemon" 
/>
      \`}</pre>
      <p style={{
      border: '1px solid #ececec'
    }}>
        <ReactSummernoteLite {...args} />
      </p>
    </div>,
  args: {
    id: 'sample',
    hint: {
      words: ['apple', 'orange', 'watermelon', 'lemon'],
      match: /\\b(\\w{1,})$/,
      search: function (keyword: string, callback: Function) {
        callback($.grep(this.words, function (item: string) {
          return item.indexOf(keyword) === 0;
        }));
      }
    },
    value: 'sample text',
    placeholder: 'type with apple, orange, watermelon, lemon'
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const y=["Hint"];export{t as Hint,y as __namedExportsOrder,f as default};
