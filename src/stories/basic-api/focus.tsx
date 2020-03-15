import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
export const FocusCommand = () => {
    let $note: any = null; 
    function doFocus () {

      if ($note) {
        $note.summernote('Focus');
      }

    }

    return (
      <div style={defaultStyle}>
        <h1>Focus</h1>
        <p>Sets focus in current summernote</p>
      <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
                note.summernote('focus');
            }
          }
        }} />
      `}</pre>
        <button onClick={doFocus}>Focus summernote</button>
        <ReactSummernoteLite id="sample" opt={{ callbacks: { onInit: ({ note }: any ) => {
          $note = note
        }}}} />
      </div>
    )
  }
  
  FocusCommand.story = {
    name: 'focus',
    decorators: [withKnobs],
  }
   