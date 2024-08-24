import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';
export const BackColorForeColorCommand = () => {
    let $note: any = null; 
    function doBackColor () {

      if ($note) {
        $note.summernote('backColor', 'yellow')
      }

    }

    function doForeColor () {

      if ($note) {
        $note.summernote('foreColor', 'red')
      }

    }    

    return (
      <div style={defaultStyle}>
        <h1>backColor, foreColor</h1>
        <p>Set the Background or Foreground color.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('backColor', 'yellow')  
          note.summernote('foreColor', 'red')  
        }} />                
      `}</pre>
        <button onClick={doBackColor}>backColor yellow </button>
        <button onClick={doForeColor}>foreColor red </button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  BackColorForeColorCommand.story = {
    name: 'backColor,foreColor',
    decorators: [withKnobs],
  }
   