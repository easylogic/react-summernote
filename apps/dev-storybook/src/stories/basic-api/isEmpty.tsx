import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';
export const IsEmptyCommand = () => {
    let $note: any = null; 
    function doIsEmpty () {

      if ($note) {
        if ($note.summernote('isEmpty')) {
          console.log('summernote is empty')
        }
      }

    }

    return (
      <div style={defaultStyle}>
        <h1>isEmpty</h1>
        <p>Returns whether editor content is empty or not.
            The editing area needs {`<p><br></p>`} for focus, even if the editor content is empty. 
            So Summernote supports this method for helping to check if editor content is empty.
        </p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          if (note.summernote('isEmpty')) {
            console.log('summernote is empty')
          }
        }} />        
      `}</pre>
        <button onClick={doIsEmpty}>check isEmpty </button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note; 
        }} />
      </div>
    )
  }
  
  IsEmptyCommand.story = {
    name: 'isEmpty',
    decorators: [withKnobs],
  }
   