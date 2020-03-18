import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';
export const InsertOrderedListCommand = () => {
    let $note: any = null; 
    function doInsertOrderedList () {
        if ($note) {
          $note.summernote('insertOrderedList') 
        }
    }

    function doInsertUnorderedList () {
      if ($note) {
        $note.summernote('insertUnorderedList') 
      }
    }    

    return (
      <div style={defaultStyle}>
        <h1>insertOrderedList, insertUnorderedList</h1>
        <p>Toggle ordered list or unordered list</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('insertOrderedList');
          note.summernote('insertUnorderedList');
        }} />                
      `}</pre>
        <button onClick={doInsertOrderedList}>insertOrderedList</button>
        <button onClick={doInsertUnorderedList}>insertUnorderedList</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  InsertOrderedListCommand.story = {
    name: 'insertOrderedList',
    decorators: [withKnobs],
  }
   