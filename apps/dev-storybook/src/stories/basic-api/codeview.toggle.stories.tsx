import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const CodeViewToggleCommand = () => {
  return (
    <div style={defaultStyle}>
      <h1>codeview.toggle</h1>
      <p>You can toggle editable/codable view by API.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" onInit={({ note }: any ) => {
          note.summernote('codeview.toggle');
        }} />
      `}</pre>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }: any) => {
          note.summernote('codeview.toggle');
        }}
      />
    </div>
  );
};

const meta: Meta<typeof CodeViewToggleCommand> = {
  title: 'Basic API/CodeView Toggle',
  component: CodeViewToggleCommand,
};

export default meta;
type Story = StoryObj<typeof CodeViewToggleCommand>;

export const Default: Story = {};
