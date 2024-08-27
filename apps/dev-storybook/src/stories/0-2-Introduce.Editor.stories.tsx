import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'React Summernote/React Summernote Lite',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const Lite: Story = {
  render: () => (
    <div style={{ padding: '10px 40px' }}>
      <h2>Lite</h2>
      <p>
        <pre>
          {`
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

<ReactSummernoteLite id="lite" opt={{ ... }}/>
          `}
        </pre>
      </p>
      <ReactSummernoteLite id="lite" />
    </div>
  ),
};
