import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/IsEmpty',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const IsEmpty: Story = {
  render: () => {
    const nodeRef = useRef<SummernoteJQueryInstance | null>(null);

    const doIsEmpty = () => {
      if (nodeRef.current) {
        if (nodeRef.current.summernote('isEmpty')) {
          console.log('summernote가 비어 있습니다');
        }
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>isEmpty</h1>
        <p>
          에디터 내용이 비어 있는지 여부를 반환합니다. 편집 영역은 포커스를 위해 {`<p><br></p>`}가 필요하며, 에디터
          내용이 비어 있어도 마찬가지입니다. 따라서 Summernote는 에디터 내용이 비어 있는지 확인하는 데 도움이 되는 이
          메서드를 지원합니다.
        </p>
        <pre>{`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            if (note.summernote('isEmpty')) {
              console.log('summernote가 비어 있습니다')
            }
          }} />        
        `}</pre>
        <button onClick={doIsEmpty}>isEmpty 확인</button>
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            nodeRef.current = note;
          }}
        />
      </div>
    );
  },
};