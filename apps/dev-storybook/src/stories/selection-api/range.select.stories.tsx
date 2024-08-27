import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Selection API/Range Select',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const RangeSelectCommand: Story = {
  render: () => {
    let $note: SummernoteJQueryInstance | null = null;
    return (
      <div style={defaultStyle}>
        <h1>select()</h1>
        <p>select update visible range</p>
        <pre>
          {`
          rng.select()
          `}
        </pre>

        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            $note = note;
          }}
          onChange={() => {
            $note?.summernote('getLastRange').select();
          }}
        />
      </div>
    );
  },
};

RangeSelectCommand.storyName = 'range.select()';
