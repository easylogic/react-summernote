import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Callbacks/OnKeyup',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const Template: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>onKeyup</h1>
      <pre>{`
        <ReactSummernoteLite
          id="sample"
          onKeyup={(e: any) => {
            console.log('Key is released:', e.keyCode);
          }}
          {...args}
        />
      `}</pre>
      <ReactSummernoteLite
        onKeyup={(e: any) => {
          console.log('Key is released:', e.keyCode);
        }}
        {...args}
      />
    </div>
  ),
};

export const OnKeyup: Story = {
  ...Template,
};
