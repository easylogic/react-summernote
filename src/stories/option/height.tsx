import React from 'react';
import { number, withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';

export const SummernoteHeightOption = () => {
    const height = number('height', 300)
    return (
      <div style={defaultStyle}>
        <h1>Height</h1>
        <p>높이를 조정합니다. knobs 탭에서 숫자를 조정해보세요.</p>
      <pre>{`
    <ReactSummernoteLite id="sample" opt={{ height: 300 }} />    
      `}</pre>
        <ReactSummernoteLite id="sample" opt={{ height }} />
      </div>
    )
  }
  
  SummernoteHeightOption.story = {
    name: 'height',
    decorators: [withKnobs],
    parameters: {
      info: { inline: true},
    },
  }
   
  