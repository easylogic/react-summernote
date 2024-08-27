import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Paragraph API/Format Header',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const FormatHeaderTemplate: Story = {
  render: (args) => {
    let $note: SummernoteJQueryInstance | null = null;
    function doFormatHeader(header: string) {
      return () => {
        if ($note) {
          $note.summernote('format' + header);
        }
      };
    }

    return (
      <div style={defaultStyle}>
        <h1>formatH1-H6</h1>
        <p>Change current paragraph as a {`<h1> ~ <h6>`}.</p>
        <button onClick={doFormatHeader('H1')}>formatH1</button>
        <button onClick={doFormatHeader('H2')}>formatH2</button>
        <button onClick={doFormatHeader('H3')}>formatH3</button>
        <button onClick={doFormatHeader('H4')}>formatH4</button>
        <button onClick={doFormatHeader('H5')}>formatH5</button>
        <button onClick={doFormatHeader('H6')}>formatH6</button>
        <ReactSummernoteLite
          {...args}
          onInit={({ note }) => {
            $note = note;
          }}
        />
      </div>
    );
  },
};

export const FormatHeaderCommand: Story = {
  ...FormatHeaderTemplate,
  args: {
    id: 'sample',
  },
};

FormatHeaderCommand.storyName = 'formatH1~H6';
