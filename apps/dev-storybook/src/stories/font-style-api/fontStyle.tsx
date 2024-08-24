import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';
export const FontStyleCommand = () => {
    let $note: any = null; 
    function doItalic () {
      if ($note) {
        $note.summernote('italic')
      }

    }

    function doBold () {
      if ($note) {
        $note.summernote('bold')
      }

    }

    function doUnderline () {
      if ($note) {
        $note.summernote('underline')
      }

    }
    
    function doStrikeThrough () {
      if ($note) {
        $note.summernote('strikethrough')
      }

    }    

    return (
      <div style={defaultStyle}>
        <h1>bold, italic, underline, strikethrough</h1>
        <p>Set font style.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('bold');
          note.summernote('italic');
          note.summernote('underline');
          note.summernote('strikethrough');
        }} />                
      `}</pre>
        <button onClick={doBold}>bold</button>
        <button onClick={doItalic}>italic </button>
        <button onClick={doUnderline}>underline </button>
        <button onClick={doStrikeThrough}>strikethrough</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  FontStyleCommand.story = {
    name: 'italic,bold,underline,strikethrough',
    decorators: [withKnobs],
  }
   