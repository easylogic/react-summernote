import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs, text } from '@storybook/addon-knobs';
export const InsertNodeCommand = () => {
    let $note: any = null; 
    function doInsertNode () {

      if ($note) {
        const div = document.createElement('div')
        div.innerHTML = `<span>${text('my_text', 'Hello, World')}</span>`
        $note.summernote('insertNode', div)
      }

    }


    return (
      <div style={defaultStyle}>
        <h1>insertNode</h1>
        <p>insert an Node</p>
      <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
              const div = document.createElement('div')
              div.innerHTML = \`<span>${text('my_text', 'Hello, World')}</span>\`
              note.summernote('insertNode', div)
            }
          }
        }} />
      `}</pre>
        <button onClick={doInsertNode}>insertNode Hello, World </button>
        <ReactSummernoteLite id="sample" opt={{ callbacks: { onInit: ({ note }: any ) => {
          $note = note
        }}}} />
      </div>
    )
  }
  
  InsertNodeCommand.story = {
    name: 'insertNode',
    decorators: [withKnobs],
  }
   