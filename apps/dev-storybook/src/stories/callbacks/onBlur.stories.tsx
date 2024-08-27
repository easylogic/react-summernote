import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Callbacks/OnBlur',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const OnBlur: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>onBlur</h1>
      <pre>{`
      <ReactSummernoteLite id="sample" onBlur={(e: any) => {
          console.log('Editable area loses focus', e);
      }}
      `}</pre>

      <ReactSummernoteLite
        id="sample"
        onBlur={(e: any) => {
          console.log('Editable area loses focus', e);
        }}
      />
    </div>
  ),
};
