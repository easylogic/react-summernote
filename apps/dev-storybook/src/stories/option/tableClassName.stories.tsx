import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/TableClassName',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const TableClassName: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>tableClassName</h1>
      <pre>{`
<ReactSummernoteLite id="sample" tableClassName="table table-bordered my-table-class" />
      `}</pre>
      <ReactSummernoteLite id="sample" tableClassName="table table-bordered my-table-class" />
    </div>
  ),
};
