import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/No Toolbar',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const No_Toolbar: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>No Toolbar</h1>
      <pre>{`<ReactSummernoteLite id="sample2" toolbar={false} />`}</pre>
      <ReactSummernoteLite id="sample2" toolbar={false} />
    </div>
  ),
};
