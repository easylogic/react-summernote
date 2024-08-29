import{R as m,r}from"./index-CyuyzGzS.js";import{s as p,b as x,a as f,c,S as C}from"./Summernote-BFqpfptl.js";import{R as d}from"./ReactSummernoteLite-Ck5Kd2ss.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";p("CTRL+ENTER,CMD+ENTER","full-custom.externalCommand");x({"en-US":{"full-custom":{title:"Full-Custom Summernote plugin"}},"ko-KR":{"full-custom":{title:"풀 커스텀 서머노트 플러그인"}}});f("full-custom",class extends C{constructor(e,s){super(e,s),this.events={"summernote.init"(n,t){console.log("summernote initialized",n,t)},"summernote.change"(n,t){console.log("summernote keyup",n,t)}},this.createButtons()}initialize(){console.log("summernote is initialized ",this.context.options)}destroy(){}createButtons(){this.context.memo("button.custom2",c({title:this.lang["full-custom"].title,onClick:()=>{this.context.invoke("full-custom.externalCommand")}}))}externalCommand(){console.log("external command is called")}externalCommand2(){console.log("external command2 is called")}});function h(e){const[s,n]=r.useState("my button"),t=document.createElement("div");function l(S,g){t.innerHTML=g,n(t.textContent||"")}return r.useEffect(()=>(e.context.$note.on("summernote.change",l),()=>{e.context.$note.off("summernote.change",l)}),[]),m.createElement("span",{onClick:()=>e.context.invoke("sample.externalCommand2")},s," - ",e.title)}const P={title:"Extensions/Custom Plugin",component:d},o={args:{id:"sample",lang:"ko-KR",toolbar:[["group",["custom","custom2"]]],buttons:{custom:c({element:h,props:{title:"sample"},container:"body",tooltip:"yellow"})}},render:e=>m.createElement("div",null,m.createElement("h1",null,"Define Custom Plugin"),m.createElement(d,{...e}))};var a,u,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    id: 'sample',
    lang: 'ko-KR',
    toolbar: [['group', ['custom', 'custom2']]],
    buttons: {
      custom: createSummernoteButton({
        element: MyButton,
        props: {
          title: 'sample'
        },
        container: 'body',
        tooltip: 'yellow'
      })
    }
  },
  render: args => <div>
      <h1>Define Custom Plugin</h1>
      <ReactSummernoteLite {...args} />
    </div>
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const B=["CustomPlugin"];export{o as CustomPlugin,B as __namedExportsOrder,P as default};
