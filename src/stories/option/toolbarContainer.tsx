import React from 'react'
import { defaultStyle } from '../util'
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite'

export const SummernoteToolbarContainer = () => {

    return (
      <div style={defaultStyle}>
        <h1>toolbarContainer</h1>
          <p>You can set a remote toolbar.</p>
          <pre>
            {`
                <ReactSummernoteLite id="sample2" toolbarContainer="#other-container" />
            `}
          </pre>
          <ReactSummernoteLite id="sample2" toolbarContainer="#other-container" />

          <pre>{`
          

          content 
          my content
        
          
          `}</pre>
          <div id="other-container"></div>
      </div>
    )
  }
  
  SummernoteToolbarContainer.story = {
    name: 'toolbarContainer',
  }
   
  