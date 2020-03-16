import React from 'react'
import { defaultStyle, tableStyle, featureList } from '../util'
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite'

export const SummernoteToolbar = () => {

    return (
      <div style={defaultStyle}>
        <h1>Toolbar</h1>
  
          <pre>
            {`
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
            
            `}
          </pre>    
        <ReactSummernoteLite id="sample" />
  
        <h2>Custom Toolbar</h2>
          <pre>
            {`
    <ReactSummernoteLite id="sample2" toolbar={[
        ['group',['fontsize', 'color']]
    ]} />          
            `}
          </pre>
        <ReactSummernoteLite id="sample2" toolbar={[
            ['group',['fontsize', 'color']]
        ]} />
  
        <h2>Feature List</h2>
        <table style={tableStyle}>
          <tr><th>Name</th><th>Component</th><th>Description</th></tr>
  
          {featureList.map((it: any, index: number) => {
            return <tr key={index}><td>{it.name}</td>{it.component}<td>{it.description}</td></tr>
          })}
          
        </table>
      </div>
    )
  }
  
  SummernoteToolbar.story = {
    name: 'toolbar',
  }
   
  