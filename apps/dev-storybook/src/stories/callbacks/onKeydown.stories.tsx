import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Callbacks/OnKeydown',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

// ... 기존 코드 생략 ...

export const OnKeydownCallback: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>onKeydown</h1>
      <pre>{`
      <ReactSummernoteLite id="sample" 
        onKeydown={(e: any) => {
          console.log('Key is downed:', e.keyCode);
        }}
      />
      `}</pre>
      <ReactSummernoteLite {...args} />
    </div>
  ),
  args: {
    id: 'sample',
    onKeydown: (e) => {
      console.log('Key is downed:', e.keyCode);
    },
  },
};

// ... 기존 코드 생략 ...
