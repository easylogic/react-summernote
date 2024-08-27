import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Paragraph API/Insert List',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const InsertOrderedListCommand: Story = {
  render: (args) => {
    let $note: SummernoteJQueryInstance | null = null;

    const doInsertOrderedList = () => {
      if ($note) {
        $note.summernote('insertOrderedList');
        action('insertOrderedList')();
      }
    };

    const doInsertUnorderedList = () => {
      if ($note) {
        $note.summernote('insertUnorderedList');
        action('insertUnorderedList')();
      }
    };

    return (
      <div>
        <h1>insertOrderedList, insertUnorderedList</h1>
        <p>Toggle ordered list or unordered list</p>
        <button onClick={doInsertOrderedList}>insertOrderedList</button>
        <button onClick={doInsertUnorderedList}>insertUnorderedList</button>
        <ReactSummernoteLite
          {...args}
          onInit={({ note }) => {
            $note = note;
            action('onInit')();
          }}
        />
      </div>
    );
  },
  args: {
    id: 'sample',
  },
};

InsertOrderedListCommand.storyName = 'Insert Ordered/Unordered List';
