import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/Undo & Redo',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const UndoRedoCommand: Story = {
  render: (args) => {
    const $note = React.useRef<any>(null);

    const doUndo = () => {
      if ($note.current) {
        $note.current.summernote('undo');
        action('undo')();
      }
    };

    const doRedo = () => {
      if ($note.current) {
        $note.current.summernote('redo');
        action('redo')();
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
            action('onInit')(note);
          }}
        />
      </div>
    );
  },
  args: {
    id: 'sample',
  },
};
