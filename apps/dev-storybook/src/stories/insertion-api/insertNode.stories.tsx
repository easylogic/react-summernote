import React, { useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Insertion API/InsertNode',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const InsertNodeCommand: Story = {
  render: () => {
    const nodeRef = useRef<SummernoteJQueryInstance | null>(null);

    const doInsertNode = () => {
      if (nodeRef.current) {
        const div = document.createElement('div');
        div.innerHTML = `<span>안녕하세요, 세계</span>`;
        nodeRef.current.summernote('insertNode', div);
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>insertNode</h1>
        <p>노드 삽입</p>
        <pre>{`
          <ReactSummernoteLite
            id="sample"
            onInit={({ note }) => {
              const div = document.createElement('div');
              div.innerHTML = \`<span>안녕하세요, 세계</span>\`;
              note.summernote('insertNode', div);
            }}
          />
        `}</pre>
        <button onClick={doInsertNode}>insertNode 안녕하세요, 세계</button>
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            nodeRef.current = note;
          }}
        />
      </div>
    );
  },
};
