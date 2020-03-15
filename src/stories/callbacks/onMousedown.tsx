import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const OnMousedownCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >onMousedown</h1>
        <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: {
            onMousedown: function(e: any) {
              console.log('mousedown event is fired', e );
            }
          }
        }} />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: {
            onMousedown: function(e: any) {
              console.log('mousedown event is fired', e );
            }
          }
        }} />
      </div>
    )
  }
  
  OnMousedownCallback.story = {
    name: 'onMousedown',
    decorators: [withKnobs],
  }
   