import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/InsertTableMaxSize',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const InsertTableMaxSize: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>insertTableMaxSize: {`{ row: 2, col: 20 }`}</h1>
      <pre>{`
        <ReactSummernoteLite id="sample" insertTableMaxSize={{row: 2, col: 20}} />
      `}</pre>
      <ReactSummernoteLite id="sample" insertTableMaxSize={{ row: 2, col: 20 }} />
    </div>
  ),
};
