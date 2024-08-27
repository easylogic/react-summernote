import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';

const RangeSplitTextCommand = () => {
  let $note: SummernoteJQueryInstance | null = null;

  function doSplitText() {
    console.log($note?.summernote('getLastRange').splitText());
  }

  return (
    <div style={defaultStyle}>
      <h1>splitText()</h1>
      <p>splitText on range</p>
      <pre>
        {`
        const textRng = rng.splitText()
        `}
      </pre>

      <button onClick={doSplitText}>splitText</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          $note = note;
        }}
      />
    </div>
  );
};

const meta: Meta<typeof RangeSplitTextCommand> = {
  title: 'Selection API/Range/splitText',
  component: RangeSplitTextCommand,
};

export default meta;
type Story = StoryObj<typeof RangeSplitTextCommand>;

export const Default: Story = {};
