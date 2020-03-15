import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const OnEnterCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >onEnter</h1>
        <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onEnter: (e: any) => {
              console.log('Enter/Return key pressed, shift is ', e.shiftKey);
            }
          }
        }} />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onEnter: (e: any) => {
              console.log('Enter/Return key pressed, shift is ', e.shiftKey);
            }
          }
        }} />
      </div>
    )
  }
  
  OnEnterCallback.story = {
    name: 'onEnter',
    decorators: [withKnobs],
  }
   