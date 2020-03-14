import React from 'react'; 
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteFocusOption = () => {
    return (
      <div style={defaultStyle}>
        <h1>Focus</h1>
        <p>포커스를 줍니다.</p>
      <pre>{`
  <ReactSummernoteLite id="sample" opt={{ focus: true }} />    
      `}</pre>
        <ReactSummernoteLite id="sample" opt={{ focus: boolean('focus', true) }} />
      </div>
    )
  }
  
  SummernoteFocusOption.story = {
    name: 'Focus',
    decorators: [withKnobs],
    parameters: {
      info: { inline: true},
    },
  }
  