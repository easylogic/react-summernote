import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/Reset',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const ResetTemplate: Story = {
  render: (args) => {
    let $note: SummernoteJQueryInstance | null = null;

    function doReset() {
      if ($note) {
        $note.summernote('reset');
      }
    }

    return (
      <div style={defaultStyle}>
        <h1>reset</h1>
        <p>Clear the editor content and remove all stored history.</p>
        <pre>{`
          <ReactSummernoteLite id="sample" onInit={({ note } ) => {
            note.summernote('reset')
          }} />
        `}</pre>
        <button onClick={doReset}>reset</button>
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

export const Reset: Story = {
  ...ResetTemplate,
};
