import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const OnKeyupCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >onKeyup</h1>
        <pre>{`
          <ReactSummernoteLite id="sample"
            onKeyup={(e: any) => {
              console.log('Key is released:', e.keyCode);
            }}
          />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample"
          onKeyup={(e: any) => {
            console.log('Key is released:', e.keyCode);
          }}
        />
      </div>
    )
  }
  
  OnKeyupCallback.story = {
    name: 'onKeyup',
    decorators: [withKnobs],
  }
   