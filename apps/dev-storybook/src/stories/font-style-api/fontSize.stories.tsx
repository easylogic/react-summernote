import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Font Style API/Font Size',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const FontSizeTemplate: Story = {
  render: (args) => {
    const [note, setNote] = React.useState<any>(null);

    const doFontSize = () => {
      if (note) {
        note.summernote('fontSize', 30);
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>fontSize</h1>
        <p>Set font size.</p>
        <pre>{`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('fontSize', 30);
          }} />                
        `}</pre>
        <button onClick={doFontSize}>fontSize 30px</button>
        <ReactSummernoteLite
          {...args}
          onInit={({ note }) => {
            setNote(note);
          }}
        />
      </div>
    );
  },
};

export const FontSizeCommand: Story = {
  ...FontSizeTemplate,
  args: {
    id: 'sample',
  },
};
