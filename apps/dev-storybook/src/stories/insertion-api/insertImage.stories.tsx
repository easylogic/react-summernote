import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Insertion API/InsertImage',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const InsertImageTemplate: Story = {
  render: (args) => {
    let $note: any = null;

    function doInsertImage() {
      if ($note) {
        $note.summernote('insertImage', 'https://summernote.org/img/img_main_picture-big.jpg', function ($image: any) {
          console.log($image);
        });
      }
    }

    return (
      <div style={defaultStyle}>
        <h1>insertImage</h1>
        <p>insert an image</p>
        <pre>{`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
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
        <button onClick={doInsertImage}>insertImage https://summernote.org/img/img_main_picture-big.jpg</button>
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            $note = note;
          }}
          {...args}
        />
      </div>
    );
  },
};

export const InsertImage: Story = {
  ...InsertImageTemplate,
};
