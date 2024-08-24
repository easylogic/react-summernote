import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';
export const AlignCommand = () => {
    let $note: any = null; 

    function doAlign (command: string) {
      return () => {
        if ($note) {
          $note.summernote(command) 
        }
      }

    }

    return (
      <div style={defaultStyle}>
        <h1>justify left, right and more</h1>
        <p>Set the alignment of a Paragraph.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('justifyLeft');
          note.summernote('justifyRight');
          note.summernote('justifyCenter');
          note.summernote('justifyFull');
        }} />                
      `}</pre>
        <button onClick={doAlign('justifyLeft')}>left</button>
        <button onClick={doAlign('justifyRight')}>right</button>
        <button onClick={doAlign('justifyCenter')}>center</button>
        <button onClick={doAlign('justifyFull')}>full</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  AlignCommand.story = {
    name: 'left, right and more',
    decorators: [withKnobs],
  }
   