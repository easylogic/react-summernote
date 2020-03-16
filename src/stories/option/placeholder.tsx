import React from 'react'; 
import { withKnobs, text } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernotePlaceholder = () => {
    return (
      <div style={defaultStyle}>
        <h1>placeholder</h1>
        <p>You can define a placeholder with the placeholder option.</p>

      <pre>{`
  <ReactSummernoteLite id="sample" placeholder='write here...' />
      `}</pre>
        <ReactSummernoteLite id="sample" placeholder={text('placeholder', 'write here...')} />
      </div>
    )
  }
  
  SummernotePlaceholder.story = {
    name: 'placeholder',
    decorators: [withKnobs],
  }
  