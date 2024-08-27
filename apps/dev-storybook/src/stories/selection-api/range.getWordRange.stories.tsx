import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const RangeGetWordRangeCommand: React.FC = () => {
  let $note: any = null;

  function doGetWordRange() {
    console.log('before cursor', $note.summernote('getLastRange').getWordRange().toString());
    console.log('after cursor', $note.summernote('getLastRange').getWordRange(true).toString());
  }

  return (
    <div style={defaultStyle}>
      <h1>getWordRange(findAfter: boolean = false)</h1>
      <p>returns range for word before(or after) cursor</p>
      <pre>
        {`
          const newRng = rng.getWordRange();   // before cursor 

          // or 
          
          const newRng = rng.getWordRange(true);   // after cursor 
        `}
      </pre>

      <button onClick={doGetWordRange}>getWordRange</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          $note = note;
        }}
      />
    </div>
  );
};

const meta: Meta<typeof RangeGetWordRangeCommand> = {
  title: 'Selection API/range.getWordRange()',
  component: RangeGetWordRangeCommand,
};

export default meta;
type Story = StoryObj<typeof RangeGetWordRangeCommand>;

export const Default: Story = {
  render: () => <RangeGetWordRangeCommand />,
};
