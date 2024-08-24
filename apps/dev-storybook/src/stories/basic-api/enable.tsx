import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';
export const EnableCommand = () => {
    let $note: any = null; 
    function doEnable () {

      if ($note) {
        $note.summernote('enable');
      }

    }

    return (
      <div style={defaultStyle}>
        <h1>Enable</h1>
        <p>If you want to enable editor again, call API with enable.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('enable');
        }} />
      `}</pre>
        <button onClick={doEnable}>Enable summernote</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note; 
        }} />
      </div>
    )
  }
  
  EnableCommand.story = {
    name: 'enable',
    decorators: [withKnobs],
  }
   