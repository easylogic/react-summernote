import{R as e}from"./index-RYns6xqu.js";import{d as i}from"./util-jfGB622S.js";import{c as a,S as u}from"./Summernote-C2VawFWZ.js";import{R as l}from"./ReactSummernoteLite-B5zbsaz-.js";import"./jsx-runtime-DEdD30eg.js";import"./client-ngufn95y.js";import"./index-D16Yfzz8.js";import"jQuery";a("sample-events",class extends u{constructor(){super(...arguments),this.events={"summernote.init":(n,o)=>{console.log("summernote initialized",this.context,n,o)},"summernote.keyup":(n,o)=>{console.log("summernote keyup",n,o)}}}});const c=()=>e.createElement("div",{style:i},e.createElement("h1",null,"Define Custom Plugin"),e.createElement("pre",null,`
import ReactSummernoteLite, { createSummernotePlugin } from '@easylogic/react-summernote-lite';

// 플러그인 이름: sample 
createSummernotePlugin('sample', function (context: SummernoteContext) {

  // 이 이벤트들은 에디터가 초기화될 때 연결됩니다.
  this.events = {
    // 모듈이 초기화된 후 호출됩니다.
    'summernote.init': function(we: any, e: any) {
      console.log('summernote initialized', we, e);
    },
    // 사용자가 편집 가능한 영역에서 키를 놓을 때 호출됩니다.
    'summernote.keyup': function(we: any, e: any) {
      console.log('summernote keyup', we, e);
    },
  };      

})

<ReactSummernoteLite id="sample" />
      `),e.createElement(l,{id:"sample"})),v={title:"Extensions/Plugin Event",component:c},t={};var m,r,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const x=["PluginEvent"];export{t as PluginEvent,x as __namedExportsOrder,v as default};
