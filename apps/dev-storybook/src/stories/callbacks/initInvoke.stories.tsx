import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Callbacks/InitInvoke',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const InitInvokeCallback: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>initInvoke</h1>
      <pre>
        {`
        <ReactSummernoteLite id="sample" initInvoke={invoke => invoke('insertText', 'aaaa')} />
      `}
      </pre>
      <ReactSummernoteLite id="sample" initInvoke={(invoke) => invoke('insertText', 'aaaa')} />
    </div>
  ),
};
