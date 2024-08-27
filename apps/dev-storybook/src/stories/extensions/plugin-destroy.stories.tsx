import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { defaultStyle } from '../util';
import { ReactSummernoteLite, createSummernotePlugin, SummernotePlugin } from '@easylogic/react-summernote-lite';

// 플러그인 정의
createSummernotePlugin(
  'sample-destroy',
  class extends SummernotePlugin {
    destroy() {
      console.log('summernote is destroyed ', this.context.options);
    }
  },
);

// 메타 객체 정의
const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Extensions/Plugin Destroy',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

// 스토리 정의
export const DestroyPlugin: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>Destroy Plugin</h1>
      <pre>{`
import ReactSummernoteLite, { createSummernotePlugin } from '@easylogic/react-summernote-lite';

// plugin name : sample-destroy 
createSummernotePlugin('sample-destroy', function (context: SummernoteContext) {
  this.destroy = function () {
    console.log('summernote is destroyed ');
  }
})

<ReactSummernoteLite id="sample" />
      `}</pre>
      <ReactSummernoteLite id="sample" />
    </div>
  ),
};

// 스토리 이름 설정 (선택사항)
DestroyPlugin.storyName = 'Plugin - Destroy';
