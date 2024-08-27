import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/Following Toolbar',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const Following_Toolbar: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>Following Toolbar</h1>
      <pre>{`<ReactSummernoteLite id="sample2" followingToolbar={true} />`}</pre>
      <ReactSummernoteLite id="sample2" followingToolbar={true} />
    </div>
  ),
};
