import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/Hint',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const Hint: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>Hint</h1>
      <p>
        Summernote supports autocomplete features, hint to help typing. You can define custom hints with options. Hint
        options can be an object or array for multiple hints.
      </p>
      {/* 테이블 내용은 그대로 유지 */}
      <pre>{`
<ReactSummernoteLite 
  id="sample" 
  hint={{
    words: ['apple', 'orange', 'watermelon', 'lemon'],
    match: /\b(\w{1,})$/,
    search: function (keyword: string, callback: Function) {
      callback($.grep(this.words, function (item: string) {
        return item.indexOf(keyword) === 0;
      }));
    }
  }} 
  value="sample text" 
  placeholder="type with apple, orange, watermelon, lemon" 
/>
      `}</pre>
      <p style={{ border: '1px solid #ececec' }}>
        <ReactSummernoteLite {...args} />
      </p>
    </div>
  ),
  args: {
    id: 'sample',
    hint: {
      words: ['apple', 'orange', 'watermelon', 'lemon'],
      match: /\b(\w{1,})$/,
      search: function (keyword: string, callback: Function) {
        callback(
          $.grep(this.words, function (item: string) {
            return item.indexOf(keyword) === 0;
          }),
        );
      },
    },
    value: 'sample text',
    placeholder: 'type with apple, orange, watermelon, lemon',
  },
};
