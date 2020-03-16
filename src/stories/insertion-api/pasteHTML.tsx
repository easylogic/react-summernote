import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs, text } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';
export const PasteHTMLCommand = () => {
    let $note: any = null; 
    function doPasteHTML () {

      if ($note) {
        const htmlValue = text('my_html', '<span style="font-size:30px">Hello, world for 30px</span>')
        $note.summernote('pasteHTML', htmlValue)
      }

    }


    return (
      <div style={defaultStyle}>
        <h1>pasteHTML</h1>
        <p>Paste HTML string.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
              $note.summernote('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>')
            }
          }
        }} />
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          console.log('summernote is launched', note);
          note.summernote('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>')
        }} />                
      `}</pre>
        <button onClick={doPasteHTML}>pasteHTML {`<span style="font-size:30px">Hello, world for 30px</span>`} </button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  PasteHTMLCommand.story = {
    name: 'pasteHTML',
    parameters: {
      knobs: {
        escapeHTML: false 
      }
    },
    decorators: [withKnobs],
  }
   