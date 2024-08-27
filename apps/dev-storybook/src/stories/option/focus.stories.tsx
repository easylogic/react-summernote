import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/Focus',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const Focus: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>Focus</h1>
      <p>포커스를 줍니다.</p>
      <pre>{`
<ReactSummernoteLite id="sample" focus={true} />    
      `}</pre>
      <ReactSummernoteLite id="sample" focus={true} />
    </div>
  ),
};
