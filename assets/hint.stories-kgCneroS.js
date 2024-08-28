import{R as e}from"./index-RYns6xqu.js";import{d as m}from"./util-jfGB622S.js";import{R as i}from"./ReactSummernoteLite-B5zbsaz-.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-C2VawFWZ.js";const y={title:"Option/Hint",component:i},t={render:r=>e.createElement("div",{style:m},e.createElement("h1",null,"Hint"),e.createElement("p",null,"Summernote supports autocomplete features, hint to help typing. You can define custom hints with options. Hint options can be an object or array for multiple hints."),e.createElement("pre",null,`
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
      `),e.createElement("p",{style:{border:"1px solid #ececec"}},e.createElement(i,{...r}))),args:{id:"sample",hint:{words:["apple","orange","watermelon","lemon"],match:/\b(\w{1,})$/,search:function(r,l){l($.grep(this.words,function(p){return p.indexOf(r)===0}))}},value:"sample text",placeholder:"type with apple, orange, watermelon, lemon"}};var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const b=["Hint"];export{t as Hint,b as __namedExportsOrder,y as default};
