import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/FontSizeUnits',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const SummernoteFontSizeUnits: Story = {
  args: {
    id: 'sample',
    fontSizeUnits: ['px', 'pt'],
    opt: {
      toolbar: [['f', ['fontsize', 'fontsizeunit']]],
    },
  },
  render: (args) => (
    <div style={defaultStyle}>
      <h1>fontSizeUnits</h1>
      <p>You can set the available font size units with the fontSizeUnits option.</p>
      <pre>{`
<ReactSummernoteLite id="sample" fontSizeUnits={['px', 'pt']} />
      `}</pre>
      <ReactSummernoteLite {...args} />
    </div>
  ),
};
