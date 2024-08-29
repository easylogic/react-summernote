import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/CreateRange',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const CreateRangeComponent: React.FC = () => {
  const nodeRef = useRef<SummernoteJQueryInstance | null>(null);

  const doCreateRange = React.useCallback(() => {
    if (nodeRef.current) {
      const range = nodeRef.current.summernote('createRange');
      console.log(range);
    }
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>createRange</h1>
      <p>You can create a range object using the API.</p>
      <pre>{`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            const range = note.summernote('createRange');
            console.log(range);
          }} 
        />
      `}</pre>
      <button onClick={doCreateRange}>Create Range</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          nodeRef.current = note;
        }}
      />
    </div>
  );
};

export const CreateRange: Story = {
  render: () => <CreateRangeComponent />,
};
