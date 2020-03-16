import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs, text } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';
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
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('insertText','Hello, World')
        }} />                
      `}</pre>
        <button onClick={doInsertText}>insertText Hello, World </button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  InsertTextCommand.story = {
    name: 'insertText',
    decorators: [withKnobs],
  }
   