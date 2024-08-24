import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';
export const CreateRangeCommand = () => {
    let $note: any = null; 
    function doCreateRange () {

      if ($note) {
        const range = $note.summernote('createRange');
        console.log(range);
      }

    }

    return (
      <div style={defaultStyle}>
        <h1>codeview.toggle</h1>
        <p>You can toggle editable/codable view by API.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note
        }} />
      `}</pre>
        <button onClick={doCreateRange}>create range</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note
        }} />
      </div>
    )
  }
  
  CreateRangeCommand.story = {
    name: 'createRange',
    decorators: [withKnobs],
  }
   