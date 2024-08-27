import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const RangeGetWordsMatchRangeCommand = () => {
  let $note: any = null;

  function doGetWordsMatchRange() {
    const rng = $note.summernote('getLastRange').getWordsMatchRange(/@[a-z ]+/i);
    if (rng) {
      console.log(rng.toString());
    } else {
      console.log('text could not found');
    }
  }

  return (
    <div style={defaultStyle}>
      <h1>getWordsMatchRange(regex)</h1>
      <p>returns range for words before cursor that match with a Regex</p>
      <pre>
        {`
            // range : 'hi @Peter Pan'
            const rng = $note.summernote('getLastRange');

            const newRng = rng.getWordsMatchRange(/@[a-z ]+/i)
            if (newRnage) {
              console.log(newRng.toString())  // '@Peter Pan' 
            }
        `}
      </pre>

      <button onClick={doGetWordsMatchRange}>getWordsMatchRange</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          $note = note;
        }}
      />
    </div>
  );
};

const meta: Meta<typeof RangeGetWordsMatchRangeCommand> = {
  title: 'Selection API/Range/getWordsMatchRange',
  component: RangeGetWordsMatchRangeCommand,
};

export default meta;
type Story = StoryObj<typeof RangeGetWordsMatchRangeCommand>;

export const Default: Story = {};
