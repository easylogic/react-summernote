import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/Placeholder',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const Template: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>placeholder</h1>
      <p>You can define a placeholder with the placeholder option.</p>
      <pre>{`
<ReactSummernoteLite id="sample" placeholder='write here...' />
      `}</pre>
      <ReactSummernoteLite {...args} />
    </div>
  ),
};

export const Placeholder: Story = {
  ...Template,
  args: {
    id: 'sample',
    placeholder: 'write here...',
  },
};
