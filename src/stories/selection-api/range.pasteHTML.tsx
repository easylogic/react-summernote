import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const RangePasteHTMLCommand = () => {
    let $note: any = null 

    function doPasteHTML() {
      console.log($note.summernote('getLastRange').pasteHTML('<div>summernote</div>'))
    }
    return (
      <div style={defaultStyle}>
        <h1 >pasteHTML(markup)</h1>
        <p>insert html at current cursor</p>
        <pre>{`
          const nodes = rng.pasteHTML('<div>summernote</div>')
        `}
        </pre>        
  
        <button onClick={doPasteHTML}>pasteHTML</button>
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
              $note = note; 
            }
          }
        }} />
      </div>
    )
  }
  
  RangePasteHTMLCommand.story = {
    name: 'range.pasteHTML()',
    decorators: [withKnobs],
  }
   