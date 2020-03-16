import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';

export const RangeCollapseCommand = () => {
    let $note: any = null 

    function doRangeCollapseTrue() {
      $note.summernote('getLastRange').collapse(true);
    }

    function doRangeCollapseFalse() {
      $note.summernote('getLastRange').collapse();
    }    

    return (
      <div style={defaultStyle}>
        <h1 >collapse(isCollapseToStart: boolean = false)</h1>
        <p>select update visible range</p>
        <pre>{`
        const newRng = rng.collapse(true);   // to start rng  

        or 
        
        const newRng = rng.collapse();  // to end rng 
        `}
        </pre>        
  
        <button onClick={doRangeCollapseTrue}>range.collapse(true)</button>
        <button onClick={doRangeCollapseFalse}>range.collapse()</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />   
      </div>
    )
  }
  
  RangeCollapseCommand.story = {
    name: 'range.collapse()',
    decorators: [withKnobs],
  }
   