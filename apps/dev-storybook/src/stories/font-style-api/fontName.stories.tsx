import React, { useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Font Style API/fontName',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const FontNameCommand: Story = {
  render: () => {
    const nodeRef = useRef<SummernoteJQueryInstance | null>(null);

    const doFontName = () => {
      if (nodeRef.current) {
        nodeRef.current.summernote('fontName', 'Arial');
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>fontName</h1>
        <p>글꼴 패밀리를 설정합니다.</p>
        <pre>{`
          <ReactSummernoteLite 
            onInit={({ note }) => {
              note.summernote('fontName', 'Arial');
            }} 
          />                
        `}</pre>
        <button onClick={doFontName}>fontName Arial</button>
        <ReactSummernoteLite
          onInit={({ note }) => {
            nodeRef.current = note;
          }}
        />
      </div>
    );
  },
};

FontNameCommand.storyName = 'fontName';
