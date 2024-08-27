import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Callbacks/OnPaste',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const OnPasteCallback: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>onPaste</h1>
      <pre>{`
      <ReactSummernoteLite
        id="sample"
        onPaste={(e: any) => {
          console.log('Called event paste', e);
        }}
      />
      `}</pre>
      <ReactSummernoteLite {...args} />
    </div>
  ),
  args: {
    id: 'sample',
    onPaste: (e: any) => {
      console.log('Called event paste', e);
    },
  },
};
