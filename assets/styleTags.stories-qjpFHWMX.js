import{R as e}from"./index-CyuyzGzS.js";import{d as s}from"./util-jfGB622S.js";import{R as n}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const d={title:"Option/StyleTags",component:n},t={render:()=>e.createElement("div",{style:s},e.createElement("h1",null,"styleTags"),e.createElement("p",null,"You can set your own selection of styles with the styleTags option."),e.createElement("p",null,"The tags can be specified just by tag name (as with p or pre or h1-h6 above). It is also possible to customize the style in more detail by providing an object looking like:"),e.createElement("pre",null,`
{
    tag : 'tag name ',
    title : 'dropdown item title',
    style : 'dropdown item style',
    className : 'applyed element class name and dropdown item className',
    value : 'Value to apply when clicked'
}
      `),e.createElement("pre",null,`
<ReactSummernoteLite 
  id="sample" 
  styleTags={[
    'p',
    { title: 'Blockquote', tag: 'blockquote', className: 'blockquote', value: 'blockquote' },
    'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
  ]} 
/>
      `),e.createElement(n,{id:"sample",styleTags:["p",{title:"Blockquote",tag:"blockquote",className:"blockquote",value:"blockquote"},"pre","h1","h2","h3","h4","h5","h6"]}))};var o,l,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={defaultStyle}>
      <h1>styleTags</h1>
      <p>You can set your own selection of styles with the styleTags option.</p>
      <p>
        The tags can be specified just by tag name (as with p or pre or h1-h6 above). It is also possible to customize
        the style in more detail by providing an object looking like:
      </p>
      <pre>{\`
{
    tag : 'tag name ',
    title : 'dropdown item title',
    style : 'dropdown item style',
    className : 'applyed element class name and dropdown item className',
    value : 'Value to apply when clicked'
}
      \`}</pre>
      <pre>{\`
<ReactSummernoteLite 
  id="sample" 
  styleTags={[
    'p',
    { title: 'Blockquote', tag: 'blockquote', className: 'blockquote', value: 'blockquote' },
    'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
  ]} 
/>
      \`}</pre>
      <ReactSummernoteLite id="sample" styleTags={['p', {
      title: 'Blockquote',
      tag: 'blockquote',
      className: 'blockquote',
      value: 'blockquote'
    }, 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']} />
    </div>
}`,...(a=(l=t.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const y=["StyleTags"];export{t as StyleTags,y as __namedExportsOrder,d as default};
