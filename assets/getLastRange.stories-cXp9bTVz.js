import{R as e}from"./index-CyuyzGzS.js";import{d as i}from"./util-jfGB622S.js";import{R as s}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const E={title:"Selection API/getLastRange",component:s},n={render:()=>{let o=null;return e.createElement("div",{style:i},e.createElement("p",null,"summernote is saving a range object(WrappedRange) on current cursor."),e.createElement("pre",null,`
        const $note: any = null;
        <ReactSummernoteLite id="sample" 
          onInit={({ note }: any ) => {
            console.log(note.summernote('getLastRange'))
            $note = note; 
          }}

          onChange={(value: string) => {
            console.log(value, $note.summernote('getLastRange'))
          }}

          onMouseup={() => {
            console.log($note.summernote('getLastRange'))
          }}
        />
      `),e.createElement("blockquote",null,e.createElement("h4",{id:"when-summernote-save-a-range-with-dom-event"},"when summernote save a range with dom event"),e.createElement("ul",null,e.createElement("li",null,"keydown"),e.createElement("li",null,"keyup"),e.createElement("li",null,"focus"),e.createElement("li",null,"mouseup"),e.createElement("li",null,"paste"))),e.createElement("blockquote",null,e.createElement("h4",{id:"when-summernote-save-a-range-with-api"},"when summernote save a range with api"),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"editor.insertImage")," -> Image"),e.createElement("li",null,e.createElement("code",null,"editor.insertNode")," -> Node"),e.createElement("li",null,e.createElement("code",null,"editor.insertText")," -> TextNode"),e.createElement("li",null,e.createElement("code",null,"editor.pasteHTML")," -> last Node of contents"),e.createElement("li",null,e.createElement("code",null,"editor.insertHorizontalRule")," -> next sibling node of hr node"),e.createElement("li",null,e.createElement("code",null,"editor.createLink")," -> link node"))),e.createElement(s,{id:"sample",onInit:({note:t})=>{console.log(t.summernote("getLastRange")),o=t},onChange:t=>{console.log(t,o.summernote("getLastRange"))},onMouseup:()=>{console.log(o.summernote("getLastRange"))}}))}};var l,a,r;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    let $note: any = null;
    return <div style={defaultStyle}>
        <p>summernote is saving a range object(WrappedRange) on current cursor.</p>
        <pre>{\`
        const $note: any = null;
        <ReactSummernoteLite id="sample" 
          onInit={({ note }: any ) => {
            console.log(note.summernote('getLastRange'))
            $note = note; 
          }}

          onChange={(value: string) => {
            console.log(value, $note.summernote('getLastRange'))
          }}

          onMouseup={() => {
            console.log($note.summernote('getLastRange'))
          }}
        />
      \`}</pre>
        <blockquote>
          <h4 id="when-summernote-save-a-range-with-dom-event">when summernote save a range with dom event</h4>
          <ul>
            <li>keydown</li>
            <li>keyup</li>
            <li>focus</li>
            <li>mouseup</li>
            <li>paste</li>
          </ul>
        </blockquote>
        <blockquote>
          <h4 id="when-summernote-save-a-range-with-api">when summernote save a range with api</h4>
          <ul>
            <li>
              <code>editor.insertImage</code> -&gt; Image
            </li>
            <li>
              <code>editor.insertNode</code> -&gt; Node
            </li>
            <li>
              <code>editor.insertText</code> -&gt; TextNode
            </li>
            <li>
              <code>editor.pasteHTML</code> -&gt; last Node of contents
            </li>
            <li>
              <code>editor.insertHorizontalRule</code> -&gt; next sibling node of hr node
            </li>
            <li>
              <code>editor.createLink</code> -&gt; link node
            </li>
          </ul>
        </blockquote>
        <ReactSummernoteLite id="sample" onInit={({
        note
      }) => {
        console.log(note.summernote('getLastRange'));
        $note = note;
      }} onChange={value => {
        console.log(value, $note.summernote('getLastRange'));
      }} onMouseup={() => {
        console.log($note.summernote('getLastRange'));
      }} />
      </div>;
  }
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const R=["getLastRange"];export{R as __namedExportsOrder,E as default,n as getLastRange};
