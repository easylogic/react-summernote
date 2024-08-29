import{R as e}from"./index-CyuyzGzS.js";import{d as p}from"./util-jfGB622S.js";import{R as a}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const v={title:"Option/Toolbar",component:a},u=`
// default toolbar 
toolbar: [
  ['style', ['style']],
  ['font', ['bold', 'underline', 'clear']],
  ['fontname', ['fontname']],
  ['color', ['color']],
  ['para', ['ul', 'ol', 'paragraph']],
  ['table', ['table']],
  ['insert', ['link', 'picture', 'video']],
  ['view', ['fullscreen', 'codeview', 'help']],
],
`,d=`
<ReactSummernoteLite id="sample2" toolbar={[
    ['group',['fontsize', 'color']]
]} />          
`,r={render:t=>e.createElement("div",{style:p},e.createElement("h1",null,"Toolbar"),e.createElement("a",{href:"?path=/docs/api-feature-list--page"}," >> Feature List"),e.createElement("pre",null,u),e.createElement(a,{...t})),args:{id:"sample"}},o={render:t=>e.createElement("div",{style:p},e.createElement("h2",null,"Custom Toolbar"),e.createElement("pre",null,d),e.createElement(a,{...t})),args:{id:"sample2",toolbar:[["group",["fontsize","color"]]]}};var l,s,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={defaultStyle}>
      <h1>Toolbar</h1>
      <a href="?path=/docs/api-feature-list--page"> &gt;&gt; Feature List</a>
      <pre>{DefaultToolbarCode}</pre>
      <ReactSummernoteLite {...args} />
    </div>,
  args: {
    id: 'sample'
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,c,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={defaultStyle}>
      <h2>Custom Toolbar</h2>
      <pre>{CustomToolbarCode}</pre>
      <ReactSummernoteLite {...args} />
    </div>,
  args: {
    id: 'sample2',
    toolbar: [['group', ['fontsize', 'color']]]
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const y=["DefaultToolbar","CustomToolbar"];export{o as CustomToolbar,r as DefaultToolbar,y as __namedExportsOrder,v as default};
