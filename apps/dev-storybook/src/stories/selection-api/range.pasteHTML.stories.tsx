import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const RangePasteHTMLCommand = () => {
  let $note: SummernoteJQueryInstance | null = null;

  function doPasteHTML() {
    console.log($note?.summernote('getLastRange').pasteHTML('<div>summernote</div>'));
  }

  return (
    <div style={defaultStyle}>
      <h1>pasteHTML(markup)</h1>
      <div>insert html at current cursor</div>
      <pre>
        {`
          const nodes = rng.pasteHTML('<div>summernote</div>')
        `}
      </pre>

      <button onClick={doPasteHTML}>pasteHTML</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          $note = note;
        }}
      />
    </div>
  );
};

const meta: Meta<typeof RangePasteHTMLCommand> = {
  title: 'Selection API/Range/pasteHTML',
  component: RangePasteHTMLCommand,
};

export default meta;
type Story = StoryObj<typeof RangePasteHTMLCommand>;

export const Default: Story = {};
