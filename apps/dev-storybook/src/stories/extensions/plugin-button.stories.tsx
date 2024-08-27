import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  ReactSummernoteLite,
  createSummernoteButton,
  createSummernotePlugin,
  SummernotePlugin,
  SummernoteContext,
} from '@easylogic/react-summernote-lite';

// 플러그인 정의 (변경 없음)
createSummernotePlugin(
  'sample3-button',
  class extends SummernotePlugin {
    constructor(context, $) {
      super(context, $);

      context.memo(
        'button.hello3',
        createSummernoteButton({
          title: 'hello',
          onClick: () => {
            context.invoke('insertText', 'hello');
          },
        }),
      );
    }
  },
);

// 컴포넌트 정의
const ButtonPlugin = () => {
  return (
    <div>
      <h1>Define a button in plugin</h1>
      <pre>{`
// 코드 예제 (변경 없음)
      `}</pre>
      <ReactSummernoteLite id="sample" toolbar={[['group', ['hello3']]]} />
    </div>
  );
};

// 메타 데이터 정의
const meta: Meta<typeof ButtonPlugin> = {
  title: 'Extensions/Plugin Button',
  component: ButtonPlugin,
};

export default meta;

// 스토리 정의
type Story = StoryObj<typeof ButtonPlugin>;

export const Default: Story = {};

Default.storyName = 'Custom Button Plugin';
