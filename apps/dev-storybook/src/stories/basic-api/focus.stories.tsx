import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite, SummernoteCallbackInitProps } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/Focus',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const FocusTemplate: Story = {
  render: (args) => {
    let $note: any = null;
    function doFocus() {
      if ($note) {
        $note.summernote('Focus');
      }
    }

    return (
      <div style={defaultStyle}>
        <h1>Focus</h1>
        <p>Sets focus in current summernote</p>
        <pre>{`
          <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
            note.summernote('focus')
          }} />      
        `}</pre>
        <button onClick={doFocus}>Focus summernote</button>
        <ReactSummernoteLite
          {...args}
          id="sample"
          onInit={({ note }) => {
            $note = note;
          }}
        />
      </div>
    );
  },
};

export const Focus: Story = {
  ...FocusTemplate,
};
