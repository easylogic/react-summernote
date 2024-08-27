import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { defaultStyle } from '../util';
import { ReactSummernoteLite, createSummernotePlugin, SummernotePlugin } from '@easylogic/react-summernote-lite';

createSummernotePlugin(
  'sample-events',
  class extends SummernotePlugin {
    // 이 이벤트들은 에디터가 초기화될 때 연결됩니다.
    events = {
      // 모듈이 초기화된 후 호출됩니다.
      'summernote.init': (we: any, e: any) => {
        console.log('summernote initialized', this.context, we, e);
      },
      // 사용자가 편집 가능한 영역에서 키를 놓을 때 호출됩니다.
      'summernote.keyup': (we: any, e: any) => {
        console.log('summernote keyup', we, e);
      },
    };
  },
);

const EventPlugin: React.FC = () => {
  return (
    <div style={defaultStyle}>
      <h1>Define Custom Plugin</h1>
      <pre>{`
import ReactSummernoteLite, { createSummernotePlugin } from '@easylogic/react-summernote-lite';

// 플러그인 이름: sample 
createSummernotePlugin('sample', function (context: SummernoteContext) {

  // 이 이벤트들은 에디터가 초기화될 때 연결됩니다.
  this.events = {
    // 모듈이 초기화된 후 호출됩니다.
    'summernote.init': function(we: any, e: any) {
      console.log('summernote initialized', we, e);
    },
    // 사용자가 편집 가능한 영역에서 키를 놓을 때 호출됩니다.
    'summernote.keyup': function(we: any, e: any) {
      console.log('summernote keyup', we, e);
    },
  };      

})

<ReactSummernoteLite id="sample" />
      `}</pre>
      <ReactSummernoteLite id="sample" />
    </div>
  );
};

const meta: Meta<typeof EventPlugin> = {
  title: 'Extensions/Plugin Event',
  component: EventPlugin,
};

export default meta;
type Story = StoryObj<typeof EventPlugin>;

export const PluginEvent: Story = {};
