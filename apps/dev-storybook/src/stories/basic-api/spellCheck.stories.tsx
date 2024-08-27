import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/SpellCheck',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const SpellCheck: Story = {
  args: {
    id: 'sample',
    spellCheck: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <h1>맞춤법 검사 비활성화</h1>
        <p>spellCheck 옵션을 사용하여 편집 영역에서 맞춤법 검사를 비활성화할 수 있습니다.</p>
        <pre>{`<ReactSummernoteLite id="sample" spellCheck={true} />`}</pre>
        <Story />
      </div>
    ),
  ],
};
