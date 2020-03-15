import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
export const InsertParagraphCommand = () => {
    let $note: any = null; 
    function doInsertParagraph () {
        if ($note) {
          $note.summernote('insertParagraph') 
        }
    }

    return (
      <div style={defaultStyle}>
        <h1>insertParagraph</h1>
        <p>Insert a paragraph</p>
      <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
              note.summernote('insertParagraph');
            }
          }
        }} />
      `}</pre>
        <button onClick={doInsertParagraph}>insertParagraph</button>
        <ReactSummernoteLite id="sample" opt={{ callbacks: { onInit: ({ note }: any ) => {
          $note = note
        }}}} />
      </div>
    )
  }
  
  InsertParagraphCommand.story = {
    name: 'insertParagraph',
    decorators: [withKnobs],
  }
   