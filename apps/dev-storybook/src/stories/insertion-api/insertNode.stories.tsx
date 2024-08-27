import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Insertion API/InsertNode',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const InsertNodeCommand: Story = {
  render: () => {
    const [note, setNote] = React.useState<any>(null);

    const doInsertNode = () => {
      if (note) {
        const div = document.createElement('div');
        div.innerHTML = `<span>Hello, World</span>`;
        note.summernote('insertNode', div);
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>insertNode</h1>
        <p>insert a Node</p>
        <pre>{`
          <ReactSummernoteLite
            id="sample"
            onInit={({ note }) => {
              const div = document.createElement('div');
              div.innerHTML = \`<span>Hello, World</span>\`;
              note.summernote('insertNode', div);
            }}
          />
        `}</pre>
        <button onClick={doInsertNode}>insertNode Hello, World</button>
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            setNote(note);
          }}
        />
      </div>
    );
  },
};
