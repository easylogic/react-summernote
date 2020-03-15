import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const OnImageUpdateCallback = () => {
    let $note: any = null; 
    return (
      <div style={defaultStyle}>
        <h1 >onImageUpdate</h1>
        <div>
          Override image upload handler(default: base64 dataURL on IMG tag). You can upload image to server or AWS S3: <a href="https://github.com/summernote/summernote/issues/72">more…</a>
        </div>
        <pre>{`
        let $note: any = null; 

        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: {
            onInit: ({ note }: any) => {
              $note = note; 
            },
            onImageUpload: function(files: any) {
              // upload image to server and create imgNode...
              console.log(files);
              // $note.summernote('insertNode', imgNode);
            }
          }
        }} />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: {
            onInit: ({ note }: any) => {
              $note = note; 
            },
            onImageUpload: function(files: any) {
              // upload image to server and create imgNode...
              console.log(files);
              // $note.summernote('insertNode', imgNode);
              console.log($note);
            }
          }
        }} />
      </div>
    )
  }
  
  OnImageUpdateCallback.story = {
    name: 'onImageUpdate',
    decorators: [withKnobs],
  }
   