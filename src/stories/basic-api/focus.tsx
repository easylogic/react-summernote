import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';
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
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('focus')
        }} />      
      `}</pre>
        <button onClick={doFocus}>Focus summernote</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note; 
        }} />
      </div>
    )
  }
  
  FocusCommand.story = {
    name: 'focus',
    decorators: [withKnobs],
  }
   