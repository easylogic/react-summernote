import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';
export const FullScreenToggleCommand = () => {

    let $note: any = null; 
    function doFullScreen () {

      if ($note) {
        $note.summernote('fullscreen.toggle');
      }

    }


    return (
      <div style={defaultStyle}>
        <h1>FullScreen.toggle</h1>
        <p>You can toggle editable/codable view by API.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('fullscreen.toggle');
        }} />      
      `}</pre>
      <button onClick={doFullScreen}>Fullscreen </button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note; 
        }} />
      </div>
    )
  }
  
  FullScreenToggleCommand.story = {
    name: 'fullscreen.toggle',
    decorators: [withKnobs],
  }
   