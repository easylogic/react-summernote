import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

// 메타 객체 정의
const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/Language',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

// 스토리 정의
export const Language: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>Language - ko-KR</h1>

      <pre>
        {`
  import { ReactSummernoteLite } from "@easylogic/react-summernote-lite";
  import 'jquery'
  import 'summernote/dist/lang/summernote-ko-KR';
  
  <ReactSummernoteLite id="sample" lang="ko-KR" />
        `}
      </pre>

      <a href="https://github.com/summernote/summernote/tree/master/lang" target="_win">
        More languages
      </a>
      <ReactSummernoteLite id="sample" lang="ko-KR" />
    </div>
  ),
};
