import React from 'react'
import { defaultStyle } from '../util'
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite'

export const SummernoteNoToolbar = () => {

    return (
      <div style={defaultStyle}>
        <h1>No Toolbar</h1>
          <pre>
            {`
    <ReactSummernoteLite id="sample2" toolbar={false} />          
            `}
          </pre>
        <ReactSummernoteLite id="sample2" toolbar={false} />
  
      </div>
    )
  }
  
  SummernoteNoToolbar.story = {
    name: 'no toolbar',
  }
   
  