import React, { useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Font Style API/Advanced',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const FontStyleAdvancedCommand: Story = {
  render: () => {
    const nodeRef = useRef<SummernoteJQueryInstance | null>(null);

    const doSuperScript = () => {
      if (nodeRef.current) {
        nodeRef.current.summernote('superscript');
      }
    };

    const doSubScript = () => {
      if (nodeRef.current) {
        nodeRef.current.summernote('subscript');
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>superscript, subscript</h1>
        <p>위 첨자 또는 아래 첨자를 설정합니다.</p>
        <pre>{`
          <ReactSummernoteLite 
            id="sample" 
            onInit={({ note }) => {
              note.summernote('superscript');
              note.summernote('subscript');
            }} 
          />                
        `}</pre>
        <button onClick={doSuperScript}>위 첨자</button>
        <button onClick={doSubScript}>아래 첨자</button>
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

export const SuperscriptSubscript = FontStyleAdvancedCommand;
