import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteBS4 } from '@easylogic/react-summernote-bs4';

const meta: Meta<typeof ReactSummernoteBS4> = {
  title: 'React Summernote/React Summernote BS4',
  component: ReactSummernoteBS4,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteBS4>;

export const Bootstrap4: Story = {
  render: () => (
    <div style={{ padding: '10px 40px' }}>
      <h2>Bootstrap v4</h2>
      <div>
        <pre>
          {`
import {ReactSummernoteBS4} from '@easylogic/react-summernote-bs4';

<ReactSummernoteBS4 id="bootstrap" opt={{ ... }}/>
          `}
        </pre>
        <ReactSummernoteBS4 id="bs4" />
      </div>
    </div>
  ),
};
