import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite, SummernoteCallbackInitProps } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/Disable',
  component: ReactSummernoteLite,

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const DisableComponent: React.FC = () => {
  const [note, setNote] = React.useState<any>(null);

  const doDisable = React.useCallback(() => {
    if (note) {
      note.summernote('disable');
    }
  }, [note]);

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
      <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps) => setNote(note)} />
    </div>
  );
};

export const Disable: Story = {
  render: () => <DisableComponent />,
};
