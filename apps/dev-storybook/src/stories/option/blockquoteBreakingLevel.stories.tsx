import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/BlockquoteBreakingLevel',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const Default: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>blockquoteBreakingLevel</h1>
      <p>You can set blockquote breaking level with blockquoteBreakingLevel option.</p>
      <p>Each configurable breaking level means:</p>
      <p>0 - No break, the new paragraph remains inside the quote.</p>
      <p>1 - Break the first blockquote in the ancestors list.</p>
      <p>2 - Break all blockquotes, so that the new paragraph is not quoted. (default)</p>
      <pre>{`<ReactSummernoteLite id="sample" blockquoteBreakingLevel={${args.blockquoteBreakingLevel}} />`}</pre>
      <ReactSummernoteLite {...args} />
    </div>
  ),
  args: {
    id: 'sample',
    blockquoteBreakingLevel: 2,
  },
};
