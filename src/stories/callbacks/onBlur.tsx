import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const OnBlurCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >onBlur</h1>
        <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onBlur: () => {
              console.log('Editable area loses focus');
            }
          }
        }} />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onBlur: () => {
              console.log('Editable area loses focus');
            }
          }
        }} />
      </div>
    )
  }
  
  OnBlurCallback.story = {
    name: 'onBlur',
    decorators: [withKnobs],
  }
   