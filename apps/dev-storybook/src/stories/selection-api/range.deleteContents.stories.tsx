import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';

const RangeDeleteContentsCommand = () => {
  let $note: SummernoteJQueryInstance | null = null;

  function doDeleteContents() {
    console.log($note?.summernote('getLastRange').deleteContents());
  }

  return (
    <div style={defaultStyle}>
      <h1>deleteContents()</h1>
      <p>delete contents on range</p>
      <pre>
        {`
          const newRng = rng.deleteContents()
        `}
      </pre>

      <button onClick={doDeleteContents}>deleteContents</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          $note = note;
        }}
      />
    </div>
  );
};

const meta: Meta<typeof RangeDeleteContentsCommand> = {
  title: 'Selection API/Range/deleteContents',
  component: RangeDeleteContentsCommand,
};

export default meta;
type Story = StoryObj<typeof RangeDeleteContentsCommand>;

export const Default: Story = {};
