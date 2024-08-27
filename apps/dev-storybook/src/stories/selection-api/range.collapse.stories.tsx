import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';

const RangeCollapseCommand = () => {
  let $note: SummernoteJQueryInstance | null = null;

  function doRangeCollapseTrue() {
    $note?.summernote('getLastRange').collapse(true);
  }

  function doRangeCollapseFalse() {
    $note?.summernote('getLastRange').collapse();
  }

  return (
    <div style={defaultStyle}>
      <h1>collapse(isCollapseToStart: boolean = false)</h1>
      <p>select update visible range</p>
      <pre>
        {`
        const newRng = rng.collapse(true);   // to start rng  

        or 
        
        const newRng = rng.collapse();  // to end rng 
        `}
      </pre>

      <button onClick={doRangeCollapseTrue}>range.collapse(true)</button>
      <button onClick={doRangeCollapseFalse}>range.collapse()</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          $note = note;
        }}
      />
    </div>
  );
};

const meta: Meta<typeof RangeCollapseCommand> = {
  title: 'Selection API/Range Collapse',
  component: RangeCollapseCommand,
};

export default meta;
type Story = StoryObj<typeof RangeCollapseCommand>;

export const Default: Story = {};
