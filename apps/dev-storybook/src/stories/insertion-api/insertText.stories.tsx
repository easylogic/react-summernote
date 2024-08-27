import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Insertion API/InsertText',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const InsertTextTemplate: Story = {
  render: (args) => {
    const $noteRef = React.useRef<any>(null);

    function doInsertText() {
      if ($noteRef.current) {
        $noteRef.current.summernote('insertText', 'Hello, World');
      }
    }

    return (
      <div style={defaultStyle}>
        <h1>insertText</h1>
        <p>insert a Text</p>
        <pre>{`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('insertText','Hello, World')
          }} />                
        `}</pre>
        <button onClick={doInsertText}>insertText Hello, World</button>
        <ReactSummernoteLite
          {...args}
          id="sample"
          onInit={({ note }) => {
            $noteRef.current = note;
          }}
        />
      </div>
    );
  },
};

export const InsertText: Story = {
  ...InsertTextTemplate,
};
