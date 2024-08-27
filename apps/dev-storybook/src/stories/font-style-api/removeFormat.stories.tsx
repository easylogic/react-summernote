import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Font Style API/Remove Format',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const RemoveFormatTemplate: Story = {
  render: (args) => {
    const [note, setNote] = React.useState<any>(null);

    const doRemoveFormat = () => {
      if (note) {
        note.summernote('removeFormat');
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>removeFormat</h1>
        <p>Clean a style.</p>
        <pre>{`
          <ReactSummernoteLite
            id="sample"
            onInit={({ note }) => {
              note.summernote('removeFormat');
            }}
          />
        `}</pre>
        <button onClick={doRemoveFormat}>removeFormat</button>
        <ReactSummernoteLite
          {...args}
          id="sample"
          onInit={({ note }) => {
            setNote(note);
          }}
        />
      </div>
    );
  },
};

export const RemoveFormatCommand: Story = {
  ...RemoveFormatTemplate,
};
