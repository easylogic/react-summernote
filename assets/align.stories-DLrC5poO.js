import{r as J,R as n}from"./index-RYns6xqu.js";import{d as k}from"./util-jfGB622S.js";import{R as E}from"./ReactSummernoteLite-Chf2t645.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";import"./Summernote-D81Bv8uQ.js";const Q={title:"Paragraph API/Align",component:E,argTypes:{id:{control:"text"},onInit:{action:"initialized"}}},e={render:t=>{const u=J.useRef(null),r=o=>()=>{u.current&&u.current.summernote(o)};return n.createElement("div",{style:k},n.createElement("h1",null,"justify left, right and more"),n.createElement("p",null,"Set the alignment of a Paragraph."),n.createElement("pre",null,`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('justifyLeft');
            note.summernote('justifyRight');
            note.summernote('justifyCenter');
            note.summernote('justifyFull');
          }} />                
        `),n.createElement("button",{onClick:r("justifyLeft")},"left"),n.createElement("button",{onClick:r("justifyRight")},"right"),n.createElement("button",{onClick:r("justifyCenter")},"center"),n.createElement("button",{onClick:r("justifyFull")},"full"),n.createElement(E,{...t,id:"sample",onInit:({note:o})=>{var l;u.current=o,(l=t.onInit)==null||l.call(t,{note:o})}}))},args:{id:"sample"}};e.storyName="left, right and more";const s={...e,args:{...e.args,onInit:({note:t})=>{t.summernote("justifyLeft")}}},i={...e,args:{...e.args,onInit:({note:t})=>{t.summernote("justifyRight")}}},a={...e,args:{...e.args,onInit:({note:t})=>{t.summernote("justifyCenter")}}},m={...e,args:{...e.args,onInit:({note:t})=>{t.summernote("justifyFull")}}};var c,f,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const nodeRef = useRef<SummernoteJQueryInstance | null>(null);
    const doAlign = (command: string) => () => {
      if (nodeRef.current) {
        nodeRef.current.summernote(command);
      }
    };
    return <div style={defaultStyle}>
        <h1>justify left, right and more</h1>
        <p>Set the alignment of a Paragraph.</p>
        <pre>{\`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('justifyLeft');
            note.summernote('justifyRight');
            note.summernote('justifyCenter');
            note.summernote('justifyFull');
          }} />                
        \`}</pre>
        <button onClick={doAlign('justifyLeft')}>left</button>
        <button onClick={doAlign('justifyRight')}>right</button>
        <button onClick={doAlign('justifyCenter')}>center</button>
        <button onClick={doAlign('justifyFull')}>full</button>
        <ReactSummernoteLite {...args} id="sample" onInit={({
        note
      }) => {
        nodeRef.current = note;
        args.onInit?.({
          note
        });
      }} />
      </div>;
  },
  args: {
    id: 'sample'
  }
}`,...(d=(f=e.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};var g,p,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...AlignCommand,
  args: {
    ...AlignCommand.args,
    onInit: ({
      note
    }) => {
      note.summernote('justifyLeft');
    }
  }
}`,...(y=(p=s.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var j,C,R;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...AlignCommand,
  args: {
    ...AlignCommand.args,
    onInit: ({
      note
    }) => {
      note.summernote('justifyRight');
    }
  }
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var h,A,I;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...AlignCommand,
  args: {
    ...AlignCommand.args,
    onInit: ({
      note
    }) => {
      note.summernote('justifyCenter');
    }
  }
}`,...(I=(A=a.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var S,b,L;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...AlignCommand,
  args: {
    ...AlignCommand.args,
    onInit: ({
      note
    }) => {
      note.summernote('justifyFull');
    }
  }
}`,...(L=(b=m.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const T=["AlignCommand","JustifyLeft","JustifyRight","JustifyCenter","JustifyFull"];export{e as AlignCommand,a as JustifyCenter,m as JustifyFull,s as JustifyLeft,i as JustifyRight,T as __namedExportsOrder,Q as default};
