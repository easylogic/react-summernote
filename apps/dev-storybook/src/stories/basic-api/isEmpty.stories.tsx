import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite, SummernoteCallbackInitProps } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/isEmpty',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const IsEmptyCommand: Story = {
  render: () => {
    const [note, setNote] = React.useState<any>(null);

    const doIsEmpty = () => {
      if (note) {
        if (note.summernote('isEmpty')) {
          console.log('summernote is empty');
        }
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>isEmpty</h1>
        <p>
          Returns whether editor content is empty or not. The editing area needs {`<p><br></p>`} for focus, even if the
          editor content is empty. So Summernote supports this method for helping to check if editor content is empty.
        </p>
        <pre>{`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            if (note.summernote('isEmpty')) {
              console.log('summernote is empty')
            }
          }} />        
        `}</pre>
        <button onClick={doIsEmpty}>check isEmpty</button>
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            setNote(note);
          }}
        />
      </div>
    );
  },
};
