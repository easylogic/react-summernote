import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';
export const RemoveFormatCommand = () => {
    let $note: any = null; 
    function doRemoveFormat () {
      if ($note) {
        $note.summernote('removeFormat')
      }

    }
    return (
      <div style={defaultStyle}>
        <h1>removeFormat</h1>
        <p>Clean a style.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('removeFormat');
        }} />                
      `}</pre>
        <button onClick={doRemoveFormat}>removeFormat</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  RemoveFormatCommand.story = {
    name: 'removeFormat',
    decorators: [withKnobs],
  }
   