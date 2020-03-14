import React from 'react'; 
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteShortcuts = () => {
    return (
      <div style={defaultStyle}>
        <h1>Shortcuts</h1>
        <p>You can disable custom shortcuts with the shortcuts option.</p>

      <pre>{`
  <ReactSummernoteLite id="sample" opt={{ 
    shortcuts: false
  }} />
      `}</pre>
        <ReactSummernoteLite id="sample" opt={{ 
          shortcuts: boolean('shortcuts', false)
        }} />
      </div>
    )
  }
  
  SummernoteShortcuts.story = {
    name: 'shortcuts',
    decorators: [withKnobs],
  }
  