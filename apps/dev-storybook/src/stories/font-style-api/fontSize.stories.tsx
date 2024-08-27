import React, { useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Font Style API/Font Size',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const FontSizeTemplate: Story = {
  render: (args) => {
    const nodeRef = useRef<SummernoteJQueryInstance | null>(null);

    const doFontSize = () => {
      if (nodeRef.current) {
        nodeRef.current.summernote('fontSize', 30);
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>fontSize</h1>
        <p>글꼴 크기를 설정합니다.</p>
        <pre>{`
          <ReactSummernoteLite 
            id="sample" 
            onInit={({ note }) => {
              note.summernote('fontSize', 30);
            }} 
          />                
        `}</pre>
        <button onClick={doFontSize}>글꼴 크기 30px</button>
        <ReactSummernoteLite
          {...args}
          onInit={({ note }) => {
            nodeRef.current = note;
          }}
        />
      </div>
    );
  },
};

export const FontSize: Story = {
  ...FontSizeTemplate,
  args: {
    id: 'sample',
  },
};
