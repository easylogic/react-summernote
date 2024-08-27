import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/TabDisable',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const TabDisable: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>TabDisable</h1>
      <p>
        You can disable TAB/Shift+Tab interaction with the tabDisable option. This will allow tabbing through fields in
        Forms.
      </p>
      <pre>{`<ReactSummernoteLite id="sample" tabDisable={false}/>`}</pre>
      <ReactSummernoteLite id="sample" tabDisable={false} />
    </div>
  ),
};
