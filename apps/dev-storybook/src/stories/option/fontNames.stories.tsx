import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/FontNames',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const SummernoteFontNames: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>fontnames</h1>
      <p>You can define fontNames items with the fontNames option.</p>
      <pre>{`
{ 
  fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New']
}
      `}</pre>
      <pre>{`
<ReactSummernoteLite id="sample" fontNames={['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New']}/>
      `}</pre>
      <ReactSummernoteLite id="sample" fontNames={['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New']} />
    </div>
  ),
};
