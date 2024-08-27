import React, { useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Font Style API/Remove Format',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const RemoveFormatTemplate: Story = {
  render: (args) => {
    const nodeRef = useRef<SummernoteJQueryInstance | null>(null);

    const doRemoveFormat = () => {
      if (nodeRef.current) {
        nodeRef.current.summernote('removeFormat');
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>removeFormat</h1>
        <p>스타일을 제거합니다.</p>
        <pre>{`
          <ReactSummernoteLite
            id="sample"
            onInit={({ note }) => {
              note.summernote('removeFormat');
            }}
          />
        `}</pre>
        <button onClick={doRemoveFormat}>removeFormat</button>
        <ReactSummernoteLite
          {...args}
          id="sample"
          onInit={({ note }) => {
            nodeRef.current = note;
          }}
        />
      </div>
    );
  },
};

export const RemoveFormat: Story = {
  ...RemoveFormatTemplate,
};
