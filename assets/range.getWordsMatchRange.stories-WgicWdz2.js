import{R as e}from"./index-CyuyzGzS.js";import{d as g}from"./util-jfGB622S.js";import{R as l}from"./ReactSummernoteLite-BDzohGId.js";import"./jsx-runtime-C-FJrwGG.js";import"./client-vtXVjOFi.js";import"./index-Cpnl9FGv.js";import"./Summernote-94-QudP_.js";const m=()=>{let o=null;function c(){const t=o.summernote("getLastRange").getWordsMatchRange(/@[a-z ]+/i);console.log(t?t.toString():"text could not found")}return e.createElement("div",{style:g},e.createElement("h1",null,"getWordsMatchRange(regex)"),e.createElement("p",null,"returns range for words before cursor that match with a Regex"),e.createElement("pre",null,`
            // range : 'hi @Peter Pan'
            const rng = $note.summernote('getLastRange');

            const newRng = rng.getWordsMatchRange(/@[a-z ]+/i)
            if (newRnage) {
              console.log(newRng.toString())  // '@Peter Pan' 
            }
        `),e.createElement("button",{onClick:c},"getWordsMatchRange"),e.createElement(l,{id:"sample",onInit:({note:t})=>{o=t}}))},E={title:"Selection API/Range/getWordsMatchRange",component:m},n={};var r,a,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const M=["Default"];export{n as Default,M as __namedExportsOrder,E as default};
