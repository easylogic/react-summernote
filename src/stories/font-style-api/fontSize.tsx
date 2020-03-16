import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';
export const FontSizeCommand = () => {
    let $note: any = null; 
    function doFontSize () {
      if ($note) {
        $note.summernote('fontSize', 30)
      }

    }
    return (
      <div style={defaultStyle}>
        <h1>fontSize</h1>
        <p>Set font size.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('fontSize', 30);
        }} />                
      `}</pre>
        <button onClick={doFontSize}>fontSize 30px</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  FontSizeCommand.story = {
    name: 'fontSize',
    decorators: [withKnobs],
  }
   