import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Callbacks/OnInit',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const OnInit: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>onInit({` { note }: SummernoteCallbackInitProps `})</h1>
      <pre>
        {`
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            console.log('summernote is launched', note);
          }}
        />        
        `}
      </pre>
      <ReactSummernoteLite {...args} />
    </div>
  ),
  args: {
    id: 'sample',
    onInit: ({ note }) => {
      console.log('summernote is launched', note);
    },
  },
};
