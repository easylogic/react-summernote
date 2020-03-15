import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const OnBlurCodeviewCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >onBlurCodeview</h1>
        <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onBlurCodeview: () => {
              console.log('Codeview area loses focus');
            }
          }
        }} />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onBlurCodeview: () => {
              console.log('Codeview area loses focus');
            }
          }
        }} />
      </div>
    )
  }
  
  OnBlurCodeviewCallback.story = {
    name: 'onBlurCodeview',
    decorators: [withKnobs],
  }
   