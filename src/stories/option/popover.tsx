import React from 'react';
import { defaultStyle, tableStyle, featureList } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';

export const SummernotePopover = () => {

    return (
      <div style={defaultStyle}>
        <h1>Popover</h1>
  
          <pre>
            {`
  // default default 
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
            
            `}
          </pre>    
        <ReactSummernoteLite id="sample" />
  
        <h2>Custom popover</h2>
          <pre>
            {`
    <ReactSummernoteLite id="sample2" popover={{
        air: [
          ['color', ['color']],
          ['font', ['bold', 'underline', 'clear']]
        ]
    }} />          
            `}
          </pre>
        <ReactSummernoteLite id="sample2" popover={{
          air: [
            ['color', ['color']],
            ['font', ['bold', 'underline', 'clear']]
          ]
        }} />
  
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
  
SummernotePopover.story = {
    name: 'popover',
}
   
   