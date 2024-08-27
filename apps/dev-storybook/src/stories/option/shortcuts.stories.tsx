import React from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/Shortcuts',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const Template: StoryFn<typeof ReactSummernoteLite> = (args) => (
  <div style={defaultStyle}>
    <h1>Shortcuts</h1>
    <p>You can disable custom shortcuts with the shortcuts option.</p>
    <pre>{`
<ReactSummernoteLite id="sample" shortcuts={false} />
    `}</pre>
    <ReactSummernoteLite {...args} />
  </div>
);

export const Shortcuts: Story = {
  ...Template,
  args: {
    id: 'sample',
    shortcuts: false,
  },
};
