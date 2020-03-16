import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';

export const RangeGetClientRectsCommand = () => {
    let $note: any = null 

    function doGetClientRects() {
      console.log($note.summernote('getLastRange').getClientRects())
    }
    return (
      <div style={defaultStyle}>
        <h1 >getClientRects(): DOMRectList</h1>
        <p>returns a list of DOMRect objects representing the area of the screen occupied by the range.</p>

        <h2>refer to Range.getClientRects()</h2>
        <p>https://developer.mozilla.org/en-US/docs/Web/API/Range/getClientRects</p>

        <pre>{`
            const rect = $note.summernote('getLastRange').getClientRects();
        `}
        </pre>        
  
        <button onClick={doGetClientRects}>getClientRects</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />   
      </div>
    )
  }
  
  RangeGetClientRectsCommand.story = {
    name: 'range.getClientRects()',
    decorators: [withKnobs],
  }
   