import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteLineHeights = () => {
    return (
      <div style={defaultStyle}>
        <h1>lineHeights</h1>
        <p>You can override the default list and specify a custom one.</p>

      <pre>{`
  <ReactSummernoteLite id="sample" 
    lineHeights={['0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.4', '1.5', '2.0', '3.0']}
    opt={{ 

    toolbar: [
      ['f', ['height']]
    ]    
  }} />
      `}</pre>
        <ReactSummernoteLite id="sample" 
          lineHeights={['0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.4', '1.5', '2.0', '3.0']}
          opt={{ 
          toolbar: [
            ['f', ['height']]
          ]
        }} />
      </div>
    )
  }
  
  SummernoteLineHeights.story = {
    name: 'lineHeights',
    decorators: [withKnobs],
  }
  