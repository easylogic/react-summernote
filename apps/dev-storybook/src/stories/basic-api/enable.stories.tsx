import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite, SummernoteCallbackInitProps } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Summernote/EnableCommand',
  component: ReactSummernoteLite,

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const EnableComponent: React.FC = () => {
  const [note, setNote] = React.useState<any>(null);

  const doEnable = React.useCallback(() => {
    if (note) {
      note.summernote('enable');
    }
  }, [note]);

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
      <ReactSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps) => setNote(note)} />
    </div>
  );
};

export const Enable: Story = {
  render: () => <EnableComponent />,
};
