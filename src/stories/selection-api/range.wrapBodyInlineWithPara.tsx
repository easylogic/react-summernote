import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';

export const RangeWrapBodyInlineWithParaCommand = () => {
    let $note: any = null 

    function doWrapBodyInlineWithPara() {
      console.log($note.summernote('getLastRange').wrapBodyInlineWithPara())
    }
    return (
      <div style={defaultStyle}>
        <h1 >wrapBodyInlineWithPara()</h1>
        <p>wrap inline nodes which children of body with paragraph</p>
        <pre>{`
          const newRng = rng.WrapBodyInlineWithPara()
        `}
        </pre>        
  
        <button onClick={doWrapBodyInlineWithPara}>wrapBodyInlineWithPara</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />   
      </div>
    )
  }
  
  RangeWrapBodyInlineWithParaCommand.story = {
    name: 'range.wrapBodyInlineWithPara()',
    decorators: [withKnobs],
  }
   