import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
export const FormatParaCommand = () => {
    let $note: any = null; 
    function doFormatPara () {
        if ($note) {
          $note.summernote('formatPara') 
        }
    }

    return (
      <div style={defaultStyle}>
        <h1>formatPara</h1>
        <p>Change current paragraph as a {`<p>`}.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
              note.summernote('formatPara');
            }
          }
        }} />
      `}</pre>
        <button onClick={doFormatPara}>formatPara</button>
        <ReactSummernoteLite id="sample" opt={{ callbacks: { onInit: ({ note }: any ) => {
          $note = note
        }}}} />
      </div>
    )
  }
  
  FormatParaCommand.story = {
    name: 'formatPara',
    decorators: [withKnobs],
  }
   