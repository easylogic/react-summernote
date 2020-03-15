import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
export const LineHeightCommand = () => {
    let $note: any = null; 
    function doLineHeight () {
      if ($note) {
        $note.summernote('lineHeight', 1.2)
      }

    }
    return (
      <div style={defaultStyle}>
        <h1>LineHeight</h1>
        <p>Set line height.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
              note.summernote('LineHeight', 30);
            }
          }
        }} />
      `}</pre>
        <button onClick={doLineHeight}>LineHeight 1.2</button>
        <ReactSummernoteLite id="sample" opt={{ callbacks: { onInit: ({ note }: any ) => {
          $note = note
        }}}} />
      </div>
    )
  }
  
  LineHeightCommand.story = {
    name: 'lineHeight',
    decorators: [withKnobs],
  }
   