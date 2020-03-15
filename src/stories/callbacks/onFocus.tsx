import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const OnFocusCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >onFocus</h1>
        <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onFocus: () => {
              console.log('Editable area is focused');
            }
          }
        }} />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onFocus: () => {
              console.log('Editable area is focused');
            }
          }
        }} />
      </div>
    )
  }
  
  OnFocusCallback.story = {
    name: 'onFocus',
    decorators: [withKnobs],
  }
   