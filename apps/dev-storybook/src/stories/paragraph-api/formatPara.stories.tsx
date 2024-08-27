import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

interface FormatParaProps {
  initialContent: string;
}

const FormatParaComponent: React.FC<FormatParaProps> = ({ initialContent }) => {
  const [note, setNote] = React.useState<SummernoteJQueryInstance | null>(null);

  const doFormatPara = () => {
    if (note) {
      note.summernote('formatPara');
    }
  };

  return (
    <div style={defaultStyle}>
      <h1>formatPara</h1>
      <p>현재 단락을 {`<p>`} 태그로 변경합니다.</p>
      <pre>{`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            note.summernote('formatPara');
          }} 
        />                
      `}</pre>
      <button onClick={doFormatPara}>formatPara</button>
      <ReactSummernoteLite id="sample" onInit={({ note }) => setNote(note)} value={initialContent} />
    </div>
  );
};

const meta: Meta<typeof FormatParaComponent> = {
  title: 'Paragraph API/FormatPara',
  component: FormatParaComponent,
  argTypes: {
    initialContent: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof FormatParaComponent>;

export const Default: Story = {
  args: {
    initialContent: '여기에 초기 내용을 입력하세요. 이 텍스트를 선택하고 formatPara 버튼을 클릭해보세요.',
  },
};

export const WithFormattedContent: Story = {
  args: {
    initialContent: '<h1>제목</h1><p>이것은 단락입니다.</p><div>이것은 div입니다.</div>',
  },
};

export const EmptyContent: Story = {
  args: {
    initialContent: '',
  },
};
