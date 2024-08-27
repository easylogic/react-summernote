import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Callbacks/OnChange',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const OnChange: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>onChange(contents, $editable)</h1>
      <ul>
        <li>IE9-10: DOMCharacterDataModified, DOMSubtreeModified, DOMNodeInserted</li>
        <li>Chrome, FF: input</li>
      </ul>
      <pre>
        {`
      <ReactSummernoteLite id="sample" onChange={(contents: string, $editable: any) => {
        console.log('onChange:', contents, $editable);
      }}
  />
      `}
      </pre>
      <ReactSummernoteLite
        id="sample"
        onChange={(contents, $editable: any) => {
          console.log('onChange:', contents, $editable);
        }}
      />
    </div>
  ),
};
