import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite as Lite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof Lite> = {
  title: 'React Summernote/React Summernote Lite',
  component: Lite,
};

export default meta;
type Story = StoryObj<typeof Lite>;

export const ReactSummernoteLite: Story = {
  render: () => (
    <div style={{ padding: '10px 10px' }}>
      <h2>Lite</h2>
      <p>
        <pre>
          {`
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

<ReactSummernoteLite id="lite" opt={{ ... }}/>
          `}
        </pre>
      </p>
      <Lite id="lite" />
    </div>
  ),
};
