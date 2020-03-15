import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
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
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
                const range = note.summernote('createRange');
            }
          }
        }} />
      `}</pre>
        <button onClick={doCreateRange}>create range</button>
        <ReactSummernoteLite id="sample" opt={{ callbacks: { onInit: ({ note }: any ) => {
          $note = note
        }}}} />
      </div>
    )
  }
  
  CreateRangeCommand.story = {
    name: 'createRange',
    decorators: [withKnobs],
  }
   