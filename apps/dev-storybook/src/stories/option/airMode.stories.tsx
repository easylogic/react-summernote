import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/AirMode',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const AirMode: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>AirMode</h1>
      <p>
        Air-mode는 툴바 없이 인터페이스를 제공합니다. 수정하려는 텍스트를 선택하면 팝오버 툴바가 나타납니다. airMode를
        켜고 텍스트에 집중하세요.
      </p>
      <pre>{`<ReactSummernoteLite id="sample" airMode={true} />`}</pre>
      <p style={{ border: '1px solid #ececec' }}>
        <ReactSummernoteLite id="sample" airMode={true} value="샘플 텍스트" />
      </p>
    </div>
  ),
};
