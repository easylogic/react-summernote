import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/DialogsInBody',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const DialogsInBody: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>dialogsInBody</h1>
      <p>
        Dialogs can be placed in body, not within Summernote. If you're using Summernote within a modal dialog, please
        set this option as true.
      </p>
      <pre>{`<ReactSummernoteLite id="sample" dialogsInBody={true} />`}</pre>
      <ReactSummernoteLite id="sample" dialogsInBody={true} />
    </div>
  ),
};
