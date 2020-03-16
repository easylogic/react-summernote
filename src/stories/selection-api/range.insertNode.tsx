import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';

export const RangeInsertNodeCommand = () => {
    let $note: any = null 

    function doInsertNode() {
      console.log($note.summernote('getLastRange').insertNode(document.createElement('div')))
    }
    return (
      <div style={defaultStyle}>
        <h1 >insertNode(node)</h1>
        <p>insert node at current cursor</p>
        <pre>{`
          const newRng = rng.insertNode(document.createElement('div'))
        `}
        </pre>        
  
        <button onClick={doInsertNode}>insertNode</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />   
      </div>
    )
  }
  
  RangeInsertNodeCommand.story = {
    name: 'range.insertNode()',
    decorators: [withKnobs],
  }
   