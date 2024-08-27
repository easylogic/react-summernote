import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/ToolbarPosition',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const Bottom: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>Toolbar Position - bottom</h1>
      <pre>{`<ReactSummernoteLite id="sample2" toolbarPosition="bottom" />`}</pre>
      <ReactSummernoteLite id="sample2" toolbarPosition="bottom" />
    </div>
  ),
};

export const Top: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>Toolbar Position - top</h1>
      <pre>{`<ReactSummernoteLite id="sample1" toolbarPosition="top" />`}</pre>
      <ReactSummernoteLite id="sample1" toolbarPosition="top" />
    </div>
  ),
};
