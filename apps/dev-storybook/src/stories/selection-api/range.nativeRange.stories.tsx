import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Selection API/Range/nativeRange()',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const RangeNativeRangeCommand: Story = {
  render: () => {
    let $note: SummernoteJQueryInstance | null = null;

    function doNativeRange() {
      console.log($note?.summernote('getLastRange').nativeRange());
    }

    return (
      <div style={defaultStyle}>
        <h1>nativeRange()</h1>
        <p>return native range instance at browser</p>

        <h2>refer to Range</h2>
        <p>
          <a target="_range" href="https://developer.mozilla.org/en-US/docs/Web/API/Range">
            https://developer.mozilla.org/en-US/docs/Web/API/Range
          </a>
        </p>

        <pre>
          {`
const range = $note.summernote('getLastRange').nativeRange();
          `}
        </pre>

        <button onClick={doNativeRange}>nativeRange</button>
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

export const Default = RangeNativeRangeCommand;
