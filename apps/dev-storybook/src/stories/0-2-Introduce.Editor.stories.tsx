import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Editors/React Summernote',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const Bootstrap4: Story = {
  render: () => (
    <div style={{ padding: '10px 40px' }}>
      <h2>Bootstrap v4</h2>
      <div>
        <pre>
          {`
import ReactSummernoteBS4 from '@easylogic/react-summernote/summernote-bs4';
import '@easylogic/react-summernote/summernote-bs4.css';

<ReactSummernoteBS4 id="bootstrap" opt={{ ... }}/>
          `}
        </pre>
      </div>
    </div>
  ),
};

export const Lite: Story = {
  render: () => (
    <div style={{ padding: '10px 40px' }}>
      <h2>Lite</h2>
      <p>
        <pre>
          {`
import ReactSummernoteLite from '@easylogic/react-summernote/summernote-lite';
import '@easylogic/react-summernote/summernote-lite.css';

<ReactSummernoteLite id="lite" opt={{ ... }}/>
          `}
        </pre>
      </p>
      <ReactSummernoteLite id="lite" />
    </div>
  ),
};
