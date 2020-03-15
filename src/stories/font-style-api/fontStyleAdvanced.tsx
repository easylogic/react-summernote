import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
export const FontStyleAdvancedCommand = () => {
    let $note: any = null; 
    function doSuperScript () {
      if ($note) {
        $note.summernote('superscript')
      }

    }

    function doSubScript () {
      if ($note) {
        $note.summernote('subscript')
      }

    }
    return (
      <div style={defaultStyle}>
        <h1>superscript,subscript</h1>
        <p>Set superscript or subscript.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
              note.summernote('superscript');
              note.summernote('subscript');
            }
          }
        }} />
      `}</pre>
        <button onClick={doSuperScript}>superscript</button>
        <button onClick={doSubScript}>subscript </button>
        <ReactSummernoteLite id="sample" opt={{ callbacks: { onInit: ({ note }: any ) => {
          $note = note
        }}}} />
      </div>
    )
  }
  
  FontStyleAdvancedCommand.story = {
    name: 'superscript,subscript',
    decorators: [withKnobs],
  }
   