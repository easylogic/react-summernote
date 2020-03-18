import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';
export const DisableCommand = () => {
    let $note: any = null; 
    function doDisable () {

      if ($note) {
        $note.summernote('disable');
      }

    }

    return (
      <div style={defaultStyle}>
        <h1>disable</h1>
        <p>You can disable editor by API.

</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('disable');
        }} />
      `}</pre>
        <button onClick={doDisable}>disable summernote</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note
        }} />
      </div>
    )
  }
  
  DisableCommand.story = {
    name: 'disable',
    decorators: [withKnobs],
  }
   