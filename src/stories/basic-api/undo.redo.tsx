import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
export const UndoRedoCommand = () => {
    let $note: any = null; 
    function doUndo () {

      if ($note) {
        $note.summernote('undo')
      }

    }

    function doRedo () {

      if ($note) {
        $note.summernote('redo')
      }

    }    

    return (
      <div style={defaultStyle}>
        <h1>Undo & Redo</h1>
        <p>Undoes and Redoes the last command</p>
      <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
                note.summernote('undo')  
                note.summernote('redo')  
            }
          }
        }} />
      `}</pre>
        <button onClick={doUndo}>undo </button>
        <button onClick={doRedo}>redo </button>
        <ReactSummernoteLite id="sample" opt={{ callbacks: { onInit: ({ note }: any ) => {
          $note = note
        }}}} />
      </div>
    )
  }
  
  UndoRedoCommand.story = {
    name: 'undo,redo',
    decorators: [withKnobs],
  }
   