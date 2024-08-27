import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Paragraph API/InsertParagraph',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const InsertParagraphCommand: Story = {
  render: (args) => {
    const $note = React.useRef<SummernoteJQueryInstance | null>(null);

    const doInsertParagraph = () => {
      if ($note.current) {
        $note.current.summernote('insertParagraph');
        action('insertParagraph')('단락이 삽입되었습니다');
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>insertParagraph</h1>
        <p>단락 삽입하기</p>
        <pre>{`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('insertParagraph');
          }} />                
        `}</pre>
        <button onClick={doInsertParagraph}>insertParagraph</button>
        <ReactSummernoteLite
          {...args}
          id="sample"
          onInit={({ note }) => {
            $note.current = note;
            action('onInit')('에디터가 초기화되었습니다');
          }}
        />
      </div>
    );
  },
  args: {
    height: 200,
  },
  argTypes: {
    height: {
      control: { type: 'number' },
      description: '에디터의 높이',
    },
  },
};
