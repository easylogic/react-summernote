import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';

export const RangeNativeRangeCommand = () => {
    let $note: any = null 

    function doNativeRange() {
      console.log($note.summernote('getLastRange').nativeRange())
    }
    return (
      <div style={defaultStyle}>
        <h1 >nativeRange()</h1>
        <p>return native range instance at browser</p>

        <h2>refer to Range</h2>
        <p><a target="_range" href="https://developer.mozilla.org/en-US/docs/Web/API/Range">https://developer.mozilla.org/en-US/docs/Web/API/Range</a></p>

        <pre>{`
            const range = $note.summernote('getLastRange').nativeRange();
        `}
        </pre>        
  
        <button onClick={doNativeRange}>nativeRange</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />   
      </div>
    )
  }
  
  RangeNativeRangeCommand.story = {
    name: 'range.nativeRange()',
    decorators: [withKnobs],
  }
   