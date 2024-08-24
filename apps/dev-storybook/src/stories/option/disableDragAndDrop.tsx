import React from 'react'; 
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteDisableDragAndDrop = () => {
    return (
      <div style={defaultStyle}>
        <h1>disableDragAndDrop</h1>
        <p>You can disable drag and drop with the disableDragAndDrop option.</p>

      <pre>{`
  <ReactSummernoteLite id="sample" disableDragAndDrop={true} />
      `}</pre>
        <ReactSummernoteLite id="sample" disableDragAndDrop={boolean('disableDragAndDrop', true)} />
      </div>
    )
  }
  
  SummernoteDisableDragAndDrop.story = {
    name: 'disableDragAndDrop',
    decorators: [withKnobs],
  }
  