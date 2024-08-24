import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteDialogsInBody = () => {
    return (
      <div style={defaultStyle}>
        <h1>dialogsInBody</h1>
        <p>Dialogs can be placed in body, not within Summernote. If you’re using Summernote within a modal dialog, please set this option as true.</p>

      <pre>{`
  <ReactSummernoteLite id="sample" dialogsInBody={true} />
      `}</pre>
        <ReactSummernoteLite id="sample" dialogsInBody={true} />
      </div>
    )
  }
  
  SummernoteDialogsInBody.story = {
    name: 'dialogsInBody',
    decorators: [withKnobs],
  }
  