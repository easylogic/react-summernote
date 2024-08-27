import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Callbacks/OnBlurCodeview',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const OnBlurCodeview: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>onBlurCodeview</h1>
      <pre>
        {`
      <ReactSummernoteLite id="sample" 
        onBlurCodeview={() => {
          console.log('Codeview area loses focus');
        }}
      />
      `}
      </pre>

      <ReactSummernoteLite
        id="sample"
        onBlurCodeview={() => {
          console.log('Codeview area loses focus');
        }}
      />
    </div>
  ),
};
