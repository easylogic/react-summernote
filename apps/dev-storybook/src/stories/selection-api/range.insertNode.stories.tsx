import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Selection API/Range/insertNode',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const RangeInsertNodeCommand: Story = {
  render: () => {
    let $note: SummernoteJQueryInstance | null = null;

    function doInsertNode() {
      console.log($note?.summernote('getLastRange').insertNode(document.createElement('div')));
    }

    return (
      <div style={defaultStyle}>
        <h1>insertNode(node)</h1>
        <p>insert node at current cursor</p>
        <pre>
          {`
            const newRng = rng.insertNode(document.createElement('div'))
          `}
        </pre>

        <button onClick={doInsertNode}>insertNode</button>
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            $note = note;
          }}
        />
      </div>
    );
  },
};

export const InsertNode = RangeInsertNodeCommand;
