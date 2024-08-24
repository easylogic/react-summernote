import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';

export const OnInitCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >onInit({` { note }: SummernoteCallbackInitProps `})</h1>
        <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          console.log('summernote is launched', note);
        }} />        
        `}
        </pre>        
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          console.log('summernote is launched', note);
        }} />        
      </div>
    )
  }
  
  OnInitCallback.story = {
    name: 'onInit',
    decorators: [withKnobs],
  }
   