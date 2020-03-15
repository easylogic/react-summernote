import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const OnPasteCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >onPaste</h1>
        <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: {
            onPaste: function(e: any) {
              console.log('Called event paste', e);
            }
          }
        }} />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: {
            onPaste: function(e: any) {
              console.log('Called event paste', e);
            }
          }
        }} />
      </div>
    )
  }
  
  OnPasteCallback.story = {
    name: 'onPaste',
    decorators: [withKnobs],
  }
   