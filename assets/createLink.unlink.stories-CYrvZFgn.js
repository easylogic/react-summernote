import{R as e}from"./index-RYns6xqu.js";import{d as l}from"./util-jfGB622S.js";import{R as m}from"./ReactSummernoteLite-B5zbsaz-.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-C2VawFWZ.js";const S={title:"Insertion API/CreateLink and Unlink",component:m},n={render:()=>{const t=e.useRef(null),u=()=>{t.current&&t.current.summernote("createLink",{text:"This is the Summernote's Official Site",url:"http://summernote.org",isNewWindow:!0})},s=()=>{t.current&&t.current.summernote("unlink")};return e.createElement("div",{style:l},e.createElement("h1",null,"createLink, unlink"),e.createElement("p",null,"Create link and unlink."),e.createElement("pre",null,`
          <ReactSummernoteLite
            id="sample"
            onInit={({ note }) => {
              note.summernote('createLink', {
                text: "This is the Summernote's Official Site",
                url: 'http://summernote.org',
                isNewWindow: true
              });
              
              note.summernote('unlink')  
            }}
          />        
        `),e.createElement("button",{onClick:u},"createLink https://summernote.org"),e.createElement("button",{onClick:s},"unlink"),e.createElement(m,{id:"sample",onInit:({note:a})=>{t.current=a}}))}};var r,o,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const $noteRef = React.useRef<any>(null);
    const doCreateLink = () => {
      if ($noteRef.current) {
        $noteRef.current.summernote('createLink', {
          text: "This is the Summernote's Official Site",
          url: 'http://summernote.org',
          isNewWindow: true
        });
      }
    };
    const doUnlink = () => {
      if ($noteRef.current) {
        $noteRef.current.summernote('unlink');
      }
    };
    return <div style={defaultStyle}>
        <h1>createLink, unlink</h1>
        <p>Create link and unlink.</p>
        <pre>{\`
          <ReactSummernoteLite
            id="sample"
            onInit={({ note }) => {
              note.summernote('createLink', {
                text: "This is the Summernote's Official Site",
                url: 'http://summernote.org',
                isNewWindow: true
              });
              
              note.summernote('unlink')  
            }}
          />        
        \`}</pre>
        <button onClick={doCreateLink}>createLink https://summernote.org</button>
        <button onClick={doUnlink}>unlink</button>
        <ReactSummernoteLite id="sample" onInit={({
        note
      }) => {
        $noteRef.current = note;
      }} />
      </div>;
  }
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const C=["CreateLinkandUnlink"];export{n as CreateLinkandUnlink,C as __namedExportsOrder,S as default};
