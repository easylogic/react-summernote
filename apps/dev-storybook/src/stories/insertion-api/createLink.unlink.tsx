import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';
export const CreateLinkCommand = () => {
    let $note: any = null; 
    function doCreateLink () {

      if ($note) {
        $note.summernote('createLink', {
          text: "This is the Summernote's Official Site",
          url: 'http://summernote.org',
          isNewWindow: true
        })
      }

    }

    function doUnlink () {

      if ($note) {
        $note.summernote('unlink')
      }

    }    

    return (
      <div style={defaultStyle}>
        <h1>createLink, unlink</h1>
        <p>Create link and unlink.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('createLink', {
            text: "This is the Summernote's Official Site",
            url: 'http://summernote.org',
            isNewWindow: true
          });
          
          note.summernote('unlink')  
        }} />        

      `}</pre>
        <button onClick={doCreateLink}>createLink https://summernote.org </button>
        <button onClick={doUnlink}>unlink</button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  CreateLinkCommand.story = {
    name: 'createLink, unlink',
    decorators: [withKnobs],
  }
   