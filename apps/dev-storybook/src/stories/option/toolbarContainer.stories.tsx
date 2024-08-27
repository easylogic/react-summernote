import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/ToolbarContainer',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const ToolbarContainer: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>toolbarContainer</h1>
      <p>You can set a remote toolbar.</p>
      <pre>{`<ReactSummernoteLite id="sample2" toolbarContainer="#other-container" />`}</pre>
      <ReactSummernoteLite id="sample2" toolbarContainer="#other-container" />
      <pre>{`
      
      
      content 
      my content
    
      
      `}</pre>
      <div id="other-container"></div>
    </div>
  ),
};
