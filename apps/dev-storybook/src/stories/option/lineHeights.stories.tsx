import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/LineHeights',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const LineHeightsTemplate: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>lineHeights</h1>
      <p>You can override the default list and specify a custom one.</p>
      <pre>{`
<ReactSummernoteLite 
  id="sample" 
  lineHeights={['0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.4', '1.5', '2.0', '3.0']}
  opt={{ 
    toolbar: [
      ['f', ['height']]
    ]    
  }} 
/>
      `}</pre>
      <ReactSummernoteLite {...args} />
    </div>
  ),
};

export const LineHeights: Story = {
  ...LineHeightsTemplate,
  args: {
    id: 'sample',
    lineHeights: ['0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.4', '1.5', '2.0', '3.0'],
    opt: {
      toolbar: [['f', ['height']]],
    },
  },
};
