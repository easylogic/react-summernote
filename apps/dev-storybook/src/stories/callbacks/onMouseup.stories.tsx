import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Callbacks/OnMouseup',
  component: ReactSummernoteLite,
  argTypes: {
    onMouseup: { action: 'mouseup' },
  },
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const OnMouseupCallback: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>onMouseup</h1>
      <pre>{`
        <ReactSummernoteLite
          id="sample"
          onMouseup={(e) => console.log('mouseup event is fired', e)}
        />
      `}</pre>
      <ReactSummernoteLite {...args} />
    </div>
  ),
  args: {
    id: 'sample',
    onMouseup: (e: any) => console.log('mouseup event is fired', e),
  },
};
