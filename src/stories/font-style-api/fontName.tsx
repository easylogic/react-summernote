import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';
export const FontNameCommand = () => {
    let $note: any = null; 
    function doFontName () {
      if ($note) {
        $note.summernote('fontName', 'Arial')
      }

    }
    return (
      <div style={defaultStyle}>
        <h1>fontName</h1>
        <p>Set font family.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('fontName', 'Arial');
        }} />                
      `}</pre>
        <button onClick={doFontName}>fontName Arial</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  FontNameCommand.story = {
    name: 'fontName',
    decorators: [withKnobs],
  }
   