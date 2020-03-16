import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';

export const RangeSplitTextCommand = () => {
    let $note: any = null 

    function doSplitText() {
      console.log($note.summernote('getLastRange').splitText())
    }
    return (
      <div style={defaultStyle}>
        <h1 >splitText()</h1>
        <p>splitText on range</p>
        <pre>{`
        const textRng = rng.splitText()
        `}
        </pre>        
  
        <button onClick={doSplitText}>splitText</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />   
      </div>
    )
  }
  
  RangeSplitTextCommand.story = {
    name: 'range.splitText()',
    decorators: [withKnobs],
  }
   