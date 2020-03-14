import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteFontSizeUnits = () => {
    return (
      <div style={defaultStyle}>
        <h1>fontSizeUnits</h1>
        <p>You can set the available font size units with the fontSizeUnits option.</p>

      <pre>{`
  <ReactSummernoteLite id="sample" opt={{ 
    fontSizeUnits: ['px', 'pt'],
    toolbar: [
      ['f', ['fontsize', 'fontsizeunit']]
    ]    
  }} />
      `}</pre>
        <ReactSummernoteLite id="sample" opt={{ 
          fontSizeUnits: ['px', 'pt'],
          toolbar: [
            ['f', ['fontsize', 'fontsizeunit']]
          ]
        }} />
      </div>
    )
  }
  
  SummernoteFontSizeUnits.story = {
    name: 'fontSizeUnits',
    decorators: [withKnobs],
  }
  