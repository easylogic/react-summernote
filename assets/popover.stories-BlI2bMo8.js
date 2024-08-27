import{R as e}from"./index-RYns6xqu.js";import{d}from"./util-jfGB622S.js";import{R as t}from"./ReactSummernoteLite-C35-7mjT.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-DoLfHz0W.js";const h={title:"Option/Popover",component:t},c=a=>e.createElement("div",{style:d},e.createElement("h1",null,"Popover"),e.createElement("a",{href:"?path=/docs/api-feature-list--page"}," >> Feature List"),e.createElement("pre",null,`
// default popover 
popover: {
  image: [
    ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
    ['float', ['floatLeft', 'floatRight', 'floatNone']],
    ['remove', ['removeMedia']]
  ],
  link: [
    ['link', ['linkDialogShow', 'unlink']]
  ],
  table: [
    ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
    ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
  ],
  air: [
    ['color', ['color']],
    ['font', ['bold', 'underline', 'clear']],
    ['para', ['ul', 'paragraph']],
    ['table', ['table']],
    ['insert', ['link', 'picture']]
  ]
}
      `),e.createElement(t,{...a}),e.createElement("h2",null,"Custom popover"),e.createElement("pre",null,`
<ReactSummernoteLite id="sample2" popover={{
    air: [
      ['color', ['color']],
      ['font', ['bold', 'underline', 'clear']]
    ]
}} />          
      `),e.createElement(t,{...a,popover:{air:[["color",["color"]],["font",["bold","underline","clear"]]]}})),o={render:c,args:{id:"sample"}},r={render:c,args:{id:"sample2",popover:{air:[["color",["color"]],["font",["bold","underline","clear"]]]}}};var l,n,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (Template as StoryFn<typeof ReactSummernoteLite>),
  args: {
    id: 'sample'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (Template as StoryFn<typeof ReactSummernoteLite>),
  args: {
    id: 'sample2',
    popover: {
      air: [['color', ['color']], ['font', ['bold', 'underline', 'clear']]]
    }
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const L=["Popover","CustomPopover"];export{r as CustomPopover,o as Popover,L as __namedExportsOrder,h as default};
