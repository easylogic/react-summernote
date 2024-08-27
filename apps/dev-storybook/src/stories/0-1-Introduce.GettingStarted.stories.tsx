import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

// Replace your-framework with the name of your framework
const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'React Summernote/Examples',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const LiteEditor: Story = {
  render: () => {
    return (
      <ReactSummernoteLite
        initInvoke={(invoke) => {
          invoke('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>');
        }}
      />
    );
  },
};
