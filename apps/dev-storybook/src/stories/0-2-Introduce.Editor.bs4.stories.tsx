import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteBS4 as BS4 } from '@easylogic/react-summernote-bs4';

const meta: Meta<typeof BS4> = {
  title: 'React Summernote/React Summernote BS4',
  component: BS4,
};

export default meta;
type Story = StoryObj<typeof BS4>;

export const ReactSummernoteBS4: Story = {
  render: () => (
    <div style={{ padding: '10px 10px' }}>
      <h2>Bootstrap v4</h2>
      <div>
        <pre>
          {`
import { ReactSummernoteBS4 } from '@easylogic/react-summernote-bs4';

<ReactSummernoteBS4 id="bootstrap" opt={{ ... }}/>
          `}
        </pre>
        <BS4 id="bs4" />
      </div>
    </div>
  ),
};
