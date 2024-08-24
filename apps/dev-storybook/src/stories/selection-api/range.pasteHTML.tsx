import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';

export const RangePasteHTMLCommand = () => {
    let $note: any = null 

    function doPasteHTML() {
      console.log($note.summernote('getLastRange').pasteHTML('<div>summernote</div>'))
    }
    return (
      <div style={defaultStyle}>
        <h1 >pasteHTML(markup)</h1>
        <div>insert html at current cursor</div>
        <pre>{`
          const nodes = rng.pasteHTML('<div>summernote</div>')
        `}
        </pre>        
  
        <button onClick={doPasteHTML}>pasteHTML</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />   
      </div>
    )
  }
  
  RangePasteHTMLCommand.story = {
    name: 'range.pasteHTML()',
    decorators: [withKnobs],
  }
   