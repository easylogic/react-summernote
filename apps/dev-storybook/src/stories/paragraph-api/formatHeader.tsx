import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';
export const FormatHeaderCommand = () => {
    let $note: any = null; 
    function doFormatHeader (header: string) {

      return () => {
        if ($note) {
          $note.summernote('format' + header) 
        }
      }

    }

    return (
      <div style={defaultStyle}>
        <h1>formatH1-H6</h1>
        <p>Change current paragraph as a {`<h1> ~ <h6>`}.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('formatH1');
          note.summernote('formatH2');
          note.summernote('formatH3');
          note.summernote('formatH4');
          note.summernote('formatH5');
          note.summernote('formatH6');
        }} />                
      `}</pre>
        <button onClick={doFormatHeader('H1')}>formatH1</button>
        <button onClick={doFormatHeader('H2')}>formatH2</button>
        <button onClick={doFormatHeader('H3')}>formatH3</button>
        <button onClick={doFormatHeader('H4')}>formatH4</button>
        <button onClick={doFormatHeader('H5')}>formatH5</button>
        <button onClick={doFormatHeader('H6')}>formatH6</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  FormatHeaderCommand.story = {
    name: 'formatH1~H6',
    decorators: [withKnobs],
  }
   