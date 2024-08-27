import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const RangeGetClientRectsCommand = () => {
  let $note: any = null;

  function doGetClientRects() {
    console.log($note.summernote('getLastRange').getClientRects());
  }

  return (
    <div style={defaultStyle}>
      <h1>getClientRects(): DOMRectList</h1>
      <p>returns a list of DOMRect objects representing the area of the screen occupied by the range.</p>

      <h2>refer to Range.getClientRects()</h2>
      <p>https://developer.mozilla.org/en-US/docs/Web/API/Range/getClientRects</p>

      <pre>
        {`
            const rect = $note.summernote('getLastRange').getClientRects();
        `}
      </pre>

      <button onClick={doGetClientRects}>getClientRects</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          $note = note;
        }}
      />
    </div>
  );
};

const meta: Meta<typeof RangeGetClientRectsCommand> = {
  title: 'Selection API/Range/getClientRects',
  component: RangeGetClientRectsCommand,
};

export default meta;
type Story = StoryObj<typeof RangeGetClientRectsCommand>;

export const getClientRects: Story = {};
