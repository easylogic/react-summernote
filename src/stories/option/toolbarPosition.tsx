import React from 'react'
import { defaultStyle } from '../util'
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite'

export const SummernoteToolbarPosition = () => {

    return (
      <div style={defaultStyle}>
        <h1> Toolbar Position - top, bottom</h1>
          <pre>
            {`

    <ReactSummernoteLite id="sample2" toolbarPosition="bottom" />          
            `}
          </pre>
        <ReactSummernoteLite id="sample2" toolbarPosition="bottom" />
  
      </div>
    )
  }
  
  SummernoteToolbarPosition.story = {
    name: 'toolbarPosition',
  }
   
  