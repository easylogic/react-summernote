import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/Height',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const Height: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>Height</h1>
      <pre>{`<ReactSummernoteLite id="sample" height={300} />`}</pre>
      <ReactSummernoteLite id="sample" height={300} />
    </div>
  ),
};
