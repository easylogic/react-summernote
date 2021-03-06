import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const OnKeydownCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >onKeydown</h1>
        <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: {
            onKeydown: function(e: any) {
              console.log('Key is downed:', e.keyCode);
            }
          }
        }} />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample"
            onKeydown={(e: any) => {
              console.log('Key is downed:', e.keyCode);
            }}
        />
      </div>
    )
  }
  
  OnKeydownCallback.story = {
    name: 'onKeydown',
    decorators: [withKnobs],
  }
   