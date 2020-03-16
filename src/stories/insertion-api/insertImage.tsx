import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs, text } from '@storybook/addon-knobs';
import { SummernoteCallbackInitProps } from 'src';
export const InsertImageCommand = () => {
    let $note: any = null; 
    function doInsertImage () {

      if ($note) {
        $note.summernote('insertImage', text('image_url', 'https://summernote.org/img/img_main_picture-big.jpg'), function ($image: any) {
          console.log($image);
        })
      }

    }


    return (
      <div style={defaultStyle}>
        <h1>insertImage</h1>
        <p>insert an image</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          // default insert image 
              note.summernote('insertImage', 'https://summernote.org/img/img_main_picture-big.jpg')

              // append alt text 
              note.summernote('insertImage', 'https://summernote.org/img/img_main_picture-big.jpg', 'SummernoteLog')

              // You can modify image with passing callback as second argument.
              note.summernote('insertImage', 'https://summernote.org/img/img_main_picture-big.jpg', function ($image) {
                $image.css('width', $image.width() / 3);
                $image.attr('data-filename', 'retriever');
              })
        }} />                
      `}</pre>
        <button onClick={doInsertImage}>insertImage https://summernote.org/img/img_main_picture-big.jpg </button>
        <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          $note = note;
        }} />        
      </div>
    )
  }
  
  InsertImageCommand.story = {
    name: 'insertImage',
    decorators: [withKnobs],
  }
   