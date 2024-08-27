import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/Disable',
  component: ReactSummernoteLite,

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const DisableComponent: React.FC = () => {
  const nodeRef = useRef<SummernoteJQueryInstance | null>(null);

  const doDisable = React.useCallback(() => {
    if (nodeRef.current) {
      nodeRef.current.summernote('disable');
    }
  }, []);

  return (
    <div style={defaultStyle}>
      <h1>disable</h1>
      <p>You can disable editor by API.</p>
      <pre>{`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            note.summernote('disable');
          }} 
        />
      `}</pre>
      <button onClick={doDisable}>disable summernote</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          nodeRef.current = note;
        }}
      />
    </div>
  );
};

export const Disable: Story = {
  render: () => <DisableComponent />,
};
