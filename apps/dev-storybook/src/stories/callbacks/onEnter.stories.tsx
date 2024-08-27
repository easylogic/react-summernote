import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Callbacks/OnEnter',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const OnEnterCallback: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>onEnter</h1>
      <pre>
        {`
      <ReactSummernoteLite id="sample"
          onEnter={(e: any) => {
            console.log('Enter/Return key pressed, shift is ', e.shiftKey);
          }}
      />
      `}
      </pre>
      <ReactSummernoteLite
        id="sample"
        onEnter={(e: any) => {
          console.log('Enter/Return key pressed, shift is ', e.shiftKey);
        }}
      />
    </div>
  ),
};
