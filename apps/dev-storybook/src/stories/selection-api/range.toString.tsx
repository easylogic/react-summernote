import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';

export const RangeToStringCommand = () => {
    let $note: any = null 

    function doToString() {
      console.log($note.summernote('getLastRange').toString())
    }
    return (
      <div style={defaultStyle}>
        <h1 >toString()</h1>
        <p>returns text in range</p>
        <pre>{`
          const text = rng.toString()
        `}
        </pre>        
  
        <button onClick={doToString}>toString</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />   
      </div>
    )
  }
  
  RangeToStringCommand.story = {
    name: 'range.toString()',
    decorators: [withKnobs],
  }
   