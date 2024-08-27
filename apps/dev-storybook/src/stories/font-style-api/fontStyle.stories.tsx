import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Font Style API/Font Style Command',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const FontStyleCommandTemplate: Story = {
  render: (args) => {
    const $noteRef = React.useRef<any>(null);

    const applyStyle = (style: string) => {
      if ($noteRef.current) {
        $noteRef.current.summernote(style);
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>bold, italic, underline, strikethrough</h1>
        <p>Set font style.</p>
        <pre>{`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('bold');
            note.summernote('italic');
            note.summernote('underline');
            note.summernote('strikethrough');
          }} />                
        `}</pre>
        <button onClick={() => applyStyle('bold')}>bold</button>
        <button onClick={() => applyStyle('italic')}>italic</button>
        <button onClick={() => applyStyle('underline')}>underline</button>
        <button onClick={() => applyStyle('strikethrough')}>strikethrough</button>
        <ReactSummernoteLite
          {...args}
          onInit={({ note }) => {
            $noteRef.current = note;
          }}
        />
      </div>
    );
  },
};

export const Default: Story = {
  ...FontStyleCommandTemplate,
  args: {
    id: 'sample',
  },
};
