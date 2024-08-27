import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Callbacks/OnFocus',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const OnFocus: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>onFocus</h1>
      <pre>{`
        <ReactSummernoteLite
          id="sample"
          onFocus={() => {
            console.log('Editable area is focused');
          }}
        />
      `}</pre>
      <ReactSummernoteLite {...args} />
    </div>
  ),
  args: {
    id: 'sample',
    onFocus: () => {
      console.log('Editable area is focused');
    },
  },
};
