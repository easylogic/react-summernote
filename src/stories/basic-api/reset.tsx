import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';
export const ResetCommand = () => {
    let $note: any = null; 
    function doReset () {

      if ($note) {
        $note.summernote('reset')
      }

    }

    return (
      <div style={defaultStyle}>
        <h1>reset</h1>
        <p>Clear the editor content and remove all stored history.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('reset')
        }} />
      `}</pre>
        <button onClick={doReset}>reset </button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note; 
        }} />
      </div>
    )
  }
  
  ResetCommand.story = {
    name: 'reset',
    decorators: [withKnobs],
  }
   