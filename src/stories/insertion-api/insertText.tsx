import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs, text } from '@storybook/addon-knobs';
export const InsertTextCommand = () => {
    let $note: any = null; 
    function doInsertText () {

      if ($note) {
        $note.summernote('insertText', text('my_text', 'Hello, World'))
      }

    }


    return (
      <div style={defaultStyle}>
        <h1>insertText</h1>
        <p>insert a Text</p>
      <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
              note.summernote('insertText','Hello, World')
            }
          }
        }} />
      `}</pre>
        <button onClick={doInsertText}>insertText Hello, World </button>
        <ReactSummernoteLite id="sample" opt={{ callbacks: { onInit: ({ note }: any ) => {
          $note = note
        }}}} />
      </div>
    )
  }
  
  InsertTextCommand.story = {
    name: 'insertText',
    decorators: [withKnobs],
  }
   