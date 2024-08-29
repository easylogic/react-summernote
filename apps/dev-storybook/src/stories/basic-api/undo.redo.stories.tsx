import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/Undo And Redo',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const UndoAndRedo: Story = {
  render: (args) => {
    const $note = React.useRef<any>(null);

    const doUndo = () => {
      if ($note.current) {
        $note.current.summernote('undo');
      }
    };

    const doRedo = () => {
      if ($note.current) {
        $note.current.summernote('redo');
      }
    };

    return (
      <div>
        <h1>Undo & Redo</h1>
        <p>Undoes and Redoes the last command</p>
        <button onClick={doUndo}>undo</button>
        <button onClick={doRedo}>redo</button>
        <ReactSummernoteLite
          {...args}
          onInit={({ note }) => {
            $note.current = note;
          }}
        />
      </div>
    );
  },
  args: {
    id: 'sample',
  },
};
