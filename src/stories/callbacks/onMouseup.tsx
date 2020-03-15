import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const OnMouseupCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >onMouseup</h1>
        <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: {
            onMouseup: function(e: any) {
              console.log('mouseup event is fired', e );
            }
          }
        }} />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: {
            onMouseup: function(e: any) {
              console.log('mouseup event is fired', e);
            }
          }
        }} />
      </div>
    )
  }
  
  OnMouseupCallback.story = {
    name: 'onMouseup',
    decorators: [withKnobs],
  }
   