import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteFontNames = () => {
    return (
      <div style={defaultStyle}>
        <h1>fontnames</h1>
        <p>You can define fontNames items with the fontNames option.</p>
<pre>{`
{ 
  fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New']
}
`}
</pre>

      <pre>{`
  <ReactSummernoteLite id="sample" fontNames={['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New']}/>
      `}</pre>
        <ReactSummernoteLite id="sample" fontNames={['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New']}/>
      </div>
    )
  }
  
  SummernoteFontNames.story = {
    name: 'fontNames',
    decorators: [withKnobs],
  }
  