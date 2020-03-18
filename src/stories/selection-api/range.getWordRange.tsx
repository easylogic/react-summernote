import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';

export const RangeGetWordRangeCommand = () => {
    let $note: any = null 

    function doGetWordRange() {
      console.log('before cursor', $note.summernote('getLastRange').getWordRange().toString())
      console.log('after cursor', $note.summernote('getLastRange').getWordRange(true).toString())
    }
    return (
      <div style={defaultStyle}>
        <h1 >getWordRange(findAfter: boolean = false)</h1>
        <p>returns range for word before(or after) cursor</p>
        <pre>{`
          const newRng = rng.getWordRange();   // before cursor 

          // or 
          
          const newRng = rng.getWordRange(true);   // after cursor 
        `}
        </pre>        
  
        <button onClick={doGetWordRange}>getWordRange</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />   
      </div>
    )
  }
  
  RangeGetWordRangeCommand.story = {
    name: 'range.getWordRange()',
    decorators: [withKnobs],
  }
   