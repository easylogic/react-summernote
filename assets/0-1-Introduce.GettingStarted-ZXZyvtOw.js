import{j as e}from"./jsx-runtime-C-FJrwGG.js";import{useMDXComponents as o}from"./index-lVbNM92D.js";import{ae as i,af as s}from"./index-C3MVvYEX.js";import"./chunk-HLWAVYOI-BFzVycC9.js";import{Lite as a}from"./0-2-Introduce.Editor.stories-Bw1RKos8.js";import"./index-CyuyzGzS.js";import"./iframe-t5cqoft5.js";import"../sb-preview/runtime.js";import"./index-Cpnl9FGv.js";import"./index-Cu4lwwaE.js";import"./index-Dkt4J_BZ.js";import"./index-DrFu-skq.js";import"./react-18-BGSGWmJe.js";import"./client-vtXVjOFi.js";import"./ReactSummernoteLite-BDzohGId.js";import"./Summernote-94-QudP_.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"React Summernote/Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:"React Extension for Summernote (with all features)"}),`
`,e.jsx(n.h2,{id:"install",children:"Install"}),`
`,e.jsx(n.p,{children:"Add to your project:"}),`
`,e.jsx(n.h3,{id:"for-lite-version",children:"For lite version"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install jquery @easylogic/react-summernote @easylogic/react-summernote-lite
`})}),`
`,e.jsx(n.h3,{id:"for-bootstrap4-version",children:"For bootstrap4 version"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install jquery bootstrap popper.js @easylogic/react-summernote @easylogic/react-summernote-bs4
`})}),`
`,e.jsx(n.h3,{id:"reactsummernotelite",children:"ReactSummernoteLite"}),`
`,e.jsx(n.p,{children:"Here's how to use the lite version:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const EditorComponent = () => {
  return (
    <ReactSummernoteLite
      id="sample"
      initInvoke={(invoke) => {
        invoke('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>');
      }}
    />
  );
};

export default EditorComponent;
`})}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h3,{id:"reactsummernotebs4",children:"ReactSummernoteBS4"}),`
`,e.jsx(n.p,{children:"Here's how to use the Bootstrap 4 version:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ReactSummernoteBS4 } from '@easylogic/react-summernote-bs4';

const EditorComponent = () => {
  return (
    <ReactSummernoteBS4
      id="sample"
      initInvoke={(invoke) => {
        invoke('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>');
      }}
    />
  );
};

export default EditorComponent;
`})}),`
`,e.jsx(n.h2,{id:"build",children:"Build"}),`
`,e.jsx(n.h3,{id:"vite-after-v090",children:"vite (after v0.9.0)"}),`
`,e.jsx(n.p,{children:"current build"}),`
`,e.jsx(n.h3,{id:"webpack-settings-before-v090",children:"Webpack settings (before v0.9.0)"}),`
`,e.jsx(n.p,{children:"You need to add the following to your Webpack configuration:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // ... other config
  plugins: [
    // ... other plugins
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
`})})]})}function S(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{S as default};
