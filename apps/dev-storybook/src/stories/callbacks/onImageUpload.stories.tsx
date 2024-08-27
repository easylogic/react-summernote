import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite, SummernoteCallbackInitProps } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const OnImageUpdateCallback = ({ onImageUpload }: { onImageUpload: (files: File[]) => void }) => {
  let $note: any = null;

  return (
    <div style={defaultStyle}>
      <h1>onImageUpdate</h1>
      <div>
        Override image upload handler(default: base64 dataURL on IMG tag). You can upload image to server or AWS S3:{' '}
        <a href="https://github.com/summernote/summernote/issues/72">more…</a>
      </div>
      <pre>{`
      // 코드 예시...
      `}</pre>

      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          $note = note;
        }}
        onImageUpload={onImageUpload}
      />
    </div>
  );
};

const meta: Meta<typeof OnImageUpdateCallback> = {
  title: 'Callbacks/OnImageUpdate',
  component: OnImageUpdateCallback,
};

export default meta;
type Story = StoryObj<typeof OnImageUpdateCallback>;

export const Default: Story = {
  args: {
    onImageUpload: (files: File[]) => {
      // upload image to server and create imgNode...
      console.log(files);
      // $note.summernote('insertNode', imgNode);
      console.log('$note is not accessible here');
    },
  },
};
