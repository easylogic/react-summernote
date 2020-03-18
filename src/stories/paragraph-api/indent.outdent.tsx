import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';
export const IndentOutdentCommand = () => {
    let $note: any = null; 
    function doIndent () {

      if ($note) {
        $note.summernote('indent')
      }

    }

    function doOutdent () {

      if ($note) {
        $note.summernote('outdent')
      }

    }    

    return (
      <div style={defaultStyle}>
        <h1>indent, outdent</h1>
        <p>Indent or Outdent on current paragraph.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('indent')  
          note.summernote('outdent')  
        }} />                
      `}</pre>
        <button onClick={doIndent}>indent </button>
        <button onClick={doOutdent}>outdent</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  IndentOutdentCommand.story = {
    name: 'indent,outdent',
    decorators: [withKnobs],
  }
   