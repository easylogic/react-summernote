import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const RangeSelectCommand = () => {
    let $note: any = null 
    return (
      <div style={defaultStyle}>
        <h1 >select()</h1>
        <p>select update visible range</p>
        <pre>{`
        rng.select()
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
              $note = note; 
            },
            onChange: () => {
              $note.summernote('getLastRange').select()
            }
          }
        }} />
      </div>
    )
  }
  
  RangeSelectCommand.story = {
    name: 'range.select()',
    decorators: [withKnobs],
  }
   