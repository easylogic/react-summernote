import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';
export const FontSizeUnitCommand = () => {
    let $note: any = null; 
    function doFontSizeUnit () {
      if ($note) {
        $note.summernote('fontSizeUnit', 'pt')
      }

    }
    return (
      <div style={defaultStyle}>
        <h1>fontSizeUnit</h1>
        <p>Set font size unit. - defaults to px</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('fontSizeUnit', 'pt');
        }} />                
      `}</pre>
        <button onClick={doFontSizeUnit}>fontSizeUnit pt</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  FontSizeUnitCommand.story = {
    name: 'fontSizeUnit',
    decorators: [withKnobs],
  }
   