import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Callbacks/OnMousedown',
  component: ReactSummernoteLite,
  argTypes: {
    onMousedown: { action: 'mousedown' },
  },
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const OnMousedownCallback: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>onMousedown</h1>
      <pre>{`
        <ReactSummernoteLite
          id="sample"
          onMousedown={(e) => {
            console.log('mousedown event is fired', e);
          }}
        />
      `}</pre>
      <ReactSummernoteLite {...args} />
    </div>
  ),
  args: {
    id: 'sample',
    onMousedown: (e: any) => {
      console.log('mousedown event is fired', e);
    },
  },
};
