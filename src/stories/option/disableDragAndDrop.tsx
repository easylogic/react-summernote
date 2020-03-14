import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteDisableDragAndDrop = () => {
    return (
      <div style={defaultStyle}>
        <h1>disableDragAndDrop</h1>
        <p>You can disable drag and drop with the disableDragAndDrop option.</p>

      <pre>{`
  <ReactSummernoteLite id="sample" opt={{ 
    disableDragAndDrop: true

  }} />
      `}</pre>
        <ReactSummernoteLite id="sample" opt={{ 
          disableDragAndDrop: true
        }} />
      </div>
    )
  }
  
  SummernoteDisableDragAndDrop.story = {
    name: 'disableDragAndDrop',
    decorators: [withKnobs],
  }
  