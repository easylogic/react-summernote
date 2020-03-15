import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const OnInitCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >onInit({` { note }: any `})</h1>
        <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
              $note = note; 
              console.log('summernote is launched');
            }
          }
        }} />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
              console.log('summernote is launched', note);
            }
          }
        }} />
      </div>
    )
  }
  
  OnInitCallback.story = {
    name: 'onInit',
    decorators: [withKnobs],
  }
   