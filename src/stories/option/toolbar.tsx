import React from 'react'
import { defaultStyle } from '../util'
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite'

export const SummernoteToolbar = () => {

    return (
      <div style={defaultStyle}>
        <h1>Toolbar</h1>
        <a href="?path=/docs/api-feature-list--page"> &gt;&gt; Feature List</a>
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
      </div>
    )
  }
  
  SummernoteToolbar.story = {
    name: 'toolbar',
  }
   
  