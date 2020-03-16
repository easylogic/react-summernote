import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';

export const RangeDeleteContentsCommand = () => {
    let $note: any = null 

    function doDeleteContents() {
      console.log($note.summernote('getLastRange').deleteContents())
    }
    return (
      <div style={defaultStyle}>
        <h1 >deleteContents()</h1>
        <p>delete contents on range</p>
        <pre>{`
          const newRng = rng.deleteContents()
        `}
        </pre>        
  
        <button onClick={doDeleteContents}>deleteContents</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />   
      </div>
    )
  }
  
  RangeDeleteContentsCommand.story = {
    name: 'range.deleteContents()',
    decorators: [withKnobs],
  }
   