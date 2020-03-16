import React from 'react'; 
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteTabDisable = () => {
    return (
      <div style={defaultStyle}>
        <h1>TabDisable</h1>
        <p>You can disable TAB/Shift+Tab intereaction with the tabDisable option. This will allow tabbing through fields in Forms.</p>

      <pre>{`
  <ReactSummernoteLite id="sample" tabDisable={false}/>
      `}</pre>
        <ReactSummernoteLite id="sample" tabDisable={boolean('tabDisable', false)} />
      </div>
    )
  }
  
  SummernoteTabDisable.story = {
    name: 'tabDisable',
    decorators: [withKnobs],
  }
  