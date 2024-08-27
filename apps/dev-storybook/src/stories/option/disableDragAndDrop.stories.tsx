import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/DisableDragAndDrop',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const DisableDragAndDrop: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>disableDragAndDrop</h1>
      <p>You can disable drag and drop with the disableDragAndDrop option.</p>
      <pre>{`
<ReactSummernoteLite id="sample" disableDragAndDrop={true} />
      `}</pre>
      <ReactSummernoteLite id="sample" disableDragAndDrop={true} />
    </div>
  ),
};
