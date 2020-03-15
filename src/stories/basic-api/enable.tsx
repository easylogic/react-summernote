import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
export const EnableCommand = () => {
    let $note: any = null; 
    function doEnable () {

      if ($note) {
        $note.summernote('enable');
      }

    }

    return (
      <div style={defaultStyle}>
        <h1>Enable</h1>
        <p>If you want to enable editor again, call API with enable.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
                note.summernote('enable');
            }
          }
        }} />
      `}</pre>
        <button onClick={doEnable}>Enable summernote</button>
        <ReactSummernoteLite id="sample" opt={{ callbacks: { onInit: ({ note }: any ) => {
          $note = note
        }}}} />
      </div>
    )
  }
  
  EnableCommand.story = {
    name: 'enable',
    decorators: [withKnobs],
  }
   