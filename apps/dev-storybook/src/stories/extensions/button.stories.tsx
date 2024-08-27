import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite, SummernoteButtonProps, createSummernoteButton } from '@easylogic/react-summernote-lite';

const MyButton = ({ context, options }: SummernoteButtonProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <button
      onClick={() => {
        context?.invoke?.('editor.insertText', `현재 시간: ${count}`);
      }}
    >
      {options.title} - {count}
    </button>
  );
};

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Extensions/Button',
  component: ReactSummernoteLite,

  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    toolbar: { control: 'object' },
    buttons: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const Template: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>Define React Button</h1>
      <ReactSummernoteLite {...args} />
    </div>
  ),
};

export const ButtonExtension: Story = {
  ...Template,
  args: {
    id: 'sample',
    toolbar: [['group', ['hello']]],
    buttons: {
      hello: createSummernoteButton({
        element: MyButton,
        props: {
          title: 'sample',
        },
        container: 'body',
        tooltip: 'yellow',
      }),
    },
  },
};

export const CodeExample: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>Define React Button</h1>
      <pre>{`
import React, { useState, useEffect } from 'react';
import { SummernoteButtonProps, createSummernoteButton } from '@easylogic/react-summernote-lite';

const MyButton = ({ context, options }: SummernoteButtonProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <button
      onClick={() => {
        context.invoke('editor.insertText', \`현재 시간: \${count}\`);
      }}
    >
      {options.title} - {count}
    </button>
  );
};

// 버튼 생성 및 사용
const myCustomButton = createSummernoteButton({
  element: MyButton,
  props: {
    title: 'sample'
  },
  container: 'body',
  tooltip: 'yellow'
});

// ReactSummernoteLite 컴포넌트에서 사용
<ReactSummernoteLite
  id="sample"
  toolbar={[['group', ['hello']]]}
  buttons={{
    hello: myCustomButton
  }}
/>
      `}</pre>
    </div>
  ),
};
