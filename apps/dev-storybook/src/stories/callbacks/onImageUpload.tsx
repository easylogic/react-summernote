import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'types';

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


        <ReactSummernoteLite id="sample" 
            onInit ={({ note }: SummernoteCallbackInitProps) => {
              $note = note; 
            }}
            onImageUpload={(files: File[]) => {
              // upload image to server and create imgNode...
              console.log(files);
              // $note.summernote('insertNode', imgNode);
              console.log($note);
            }} />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample" 
            onInit ={({ note }: SummernoteCallbackInitProps) => {
              $note = note; 
            }}
            onImageUpload={(files: File[]) => {
              // upload image to server and create imgNode...
              console.log(files);
              // $note.summernote('insertNode', imgNode);
              console.log($note);
            }} />
      </div>
    )
  }
  
  OnImageUpdateCallback.story = {
    name: 'onImageUpdate',
    decorators: [withKnobs],
  }
   