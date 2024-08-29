import{R as e}from"./index-CyuyzGzS.js";import{d as i}from"./util-jfGB622S.js";import{R as n}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./Summernote-BFqpfptl.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";const b={title:"Option/BlockquoteBreakingLevel",component:n},t={render:a=>e.createElement("div",{style:i},e.createElement("h1",null,"blockquoteBreakingLevel"),e.createElement("p",null,"You can set blockquote breaking level with blockquoteBreakingLevel option."),e.createElement("p",null,"Each configurable breaking level means:"),e.createElement("p",null,"0 - No break, the new paragraph remains inside the quote."),e.createElement("p",null,"1 - Break the first blockquote in the ancestors list."),e.createElement("p",null,"2 - Break all blockquotes, so that the new paragraph is not quoted. (default)"),e.createElement("pre",null,`<ReactSummernoteLite id="sample" blockquoteBreakingLevel={${a.blockquoteBreakingLevel}} />`),e.createElement(n,{...a})),args:{id:"sample",blockquoteBreakingLevel:2}};var r,o,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <div style={defaultStyle}>
      <h1>blockquoteBreakingLevel</h1>
      <p>You can set blockquote breaking level with blockquoteBreakingLevel option.</p>
      <p>Each configurable breaking level means:</p>
      <p>0 - No break, the new paragraph remains inside the quote.</p>
      <p>1 - Break the first blockquote in the ancestors list.</p>
      <p>2 - Break all blockquotes, so that the new paragraph is not quoted. (default)</p>
      <pre>{\`<ReactSummernoteLite id="sample" blockquoteBreakingLevel={\${args.blockquoteBreakingLevel}} />\`}</pre>
      <ReactSummernoteLite {...args} />
    </div>,
  args: {
    id: 'sample',
    blockquoteBreakingLevel: 2
  }
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const d=["BlockquoteBreakingLevel"];export{t as BlockquoteBreakingLevel,d as __namedExportsOrder,b as default};
