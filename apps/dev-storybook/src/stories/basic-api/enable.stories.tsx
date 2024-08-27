import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/Enable',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const EnableComponent: React.FC = () => {
  const nodeRef = useRef<SummernoteJQueryInstance | null>(null);

  const doEnable = React.useCallback(() => {
    if (nodeRef.current) {
      nodeRef.current.summernote('enable');
    }
  }, []);

  return (
    <div style={defaultStyle}>
      <h1>Enable</h1>
      <p>If you want to enable editor again, call API with enable.</p>
      <pre>{`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            note.summernote('enable');
          }} 
        />
      `}</pre>
      <button onClick={doEnable}>Enable summernote</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          nodeRef.current = note;
        }}
      />
    </div>
  );
};

export const Enable: Story = {
  render: () => <EnableComponent />,
};
