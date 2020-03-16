import React from 'react'; 
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteAirModeOption = () => {
    return (
      <div style={defaultStyle}>
        <h1>AirMode</h1>
        <p>
          Air-mode give an interface without the Toolbar. To reveal popover Toolbar, select a text where you want to modify. Simply turn on airMode and just focus on text.
        </p>
      <pre>{`
  <ReactSummernoteLite id="sample" airMode={true} />    
      `}</pre>
        <p style={{
          border: '1px solid #ececec'
        }}>
          <ReactSummernoteLite id="sample" airMode={boolean('airMode', true)} value="sample text" />
        </p>
      </div>
    )
  }
  
  SummernoteAirModeOption.story = {
    name: 'airMode',
    decorators: [withKnobs],
  }
  