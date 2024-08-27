import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/Colors',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const Colors: Story = {
  args: {
    id: 'sample',
    colors: [['red', 'black']],
    colorsName: [['red', 'black']],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <h1>colors</h1>
        <p>change colors for summernote color palette</p>
        <pre>{`
<ReactSummernoteLite id="sample" colors={[
  ['red', 'black']
]} colorsName={[
  ['red', 'black']
]} />
        `}</pre>
        <Story />
      </div>
    ),
  ],
};
