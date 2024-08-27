import{R as e}from"./index-RYns6xqu.js";import{d as c}from"./util-jfGB622S.js";import{R as a}from"./ReactSummernoteLite-C35-7mjT.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-DoLfHz0W.js";const y={title:"Option/Toolbar",component:a},u=`
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
`,r={render:t=>e.createElement("div",{style:c},e.createElement("h1",null,"Toolbar"),e.createElement("a",{href:"?path=/docs/api-feature-list--page"}," >> Feature List"),e.createElement("pre",null,u),e.createElement(a,{...t})),args:{id:"sample"}},o={render:t=>e.createElement("div",{style:c},e.createElement("h2",null,"Custom Toolbar"),e.createElement("pre",null,d),e.createElement(a,{...t})),args:{id:"sample2",toolbar:[["group",["fontsize","color"]]]}};var l,s,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={defaultStyle}>
      <h1>Toolbar</h1>
      <a href="?path=/docs/api-feature-list--page"> &gt;&gt; Feature List</a>
      <pre>{DefaultToolbarCode}</pre>
      <ReactSummernoteLite {...args} />
    </div>,
  args: {
    id: 'sample'
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,i,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={defaultStyle}>
      <h2>Custom Toolbar</h2>
      <pre>{CustomToolbarCode}</pre>
      <ReactSummernoteLite {...args} />
    </div>,
  args: {
    id: 'sample2',
    toolbar: [['group', ['fontsize', 'color']]]
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const S=["DefaultToolbar","CustomToolbar"];export{o as CustomToolbar,r as DefaultToolbar,S as __namedExportsOrder,y as default};
