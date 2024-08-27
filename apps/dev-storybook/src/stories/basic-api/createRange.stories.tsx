import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite, SummernoteCallbackInitProps } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/CreateRange',
  component: ReactSummernoteLite,

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const CreateRangeComponent: React.FC = () => {
  const [note, setNote] = React.useState<any>(null);

  const doCreateRange = React.useCallback(() => {
    if (note) {
      const range = note.summernote('createRange');
      console.log(range);
    }
  }, [note]);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>createRange</h1>
      <p>You can create a range object using the API.</p>
      <pre>{`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => setNote(note)} 
        />
      `}</pre>
      <button onClick={doCreateRange}>Create Range</button>
      <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps) => setNote(note)} />
    </div>
  );
};

export const CreateRange: Story = {
  render: () => <CreateRangeComponent />,
};
