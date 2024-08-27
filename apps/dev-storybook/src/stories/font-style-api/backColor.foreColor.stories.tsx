import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Font Style API/BackColor ForeColor',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const BackColorForeColorCommand: Story = {
  render: (args) => {
    const $note = React.useRef<any>(null);

    const doBackColor = () => {
      if ($note.current) {
        $note.current.summernote('backColor', 'yellow');
        action('backColor')('yellow');
      }
    };

    const doForeColor = () => {
      if ($note.current) {
        $note.current.summernote('foreColor', 'red');
        action('foreColor')('red');
      }
    };

    return (
      <div>
        <h1>backColor, foreColor</h1>
        <p>배경색 또는 전경색을 설정합니다.</p>
        <pre>{`
          <ReactSummernoteLite onInit={({ note }) => {
            note.summernote('backColor', 'yellow')  
            note.summernote('foreColor', 'red')  
          }} />                
        `}</pre>
        <button onClick={doBackColor}>배경색 노랑</button>
        <button onClick={doForeColor}>전경색 빨강</button>
        <ReactSummernoteLite
          {...args}
          onInit={({ note }) => {
            $note.current = note;
            action('onInit')(note);
          }}
        />
      </div>
    );
  },
  args: {
    id: 'sample',
  },
};
