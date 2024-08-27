import type { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import React, { useRef } from 'react';
import { defaultStyle } from '../util';

const PasteHTMLComponent = ({ htmlContent }: { htmlContent: string }) => {
  const nodeRef = useRef<SummernoteJQueryInstance | null>(null);

  const doPasteHTML = () => {
    if (nodeRef.current) {
      nodeRef.current.summernote('pasteHTML', htmlContent);
    }
  };

  return (
    <div style={defaultStyle}>
      <h1>pasteHTML</h1>
      <p>HTML 문자열 붙여넣기.</p>
      <pre>{`
        <ReactSummernoteLite 
          id="sample" 
          opt={{ 
            callbacks: { 
              onInit: ({ note }: any ) => {
                note.summernote('pasteHTML', '${htmlContent}')
              }
            }
          }} 
        />
      `}</pre>
      <button onClick={doPasteHTML}>pasteHTML {htmlContent}</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          nodeRef.current = note;
        }}
      />
    </div>
  );
};

const meta: Meta<typeof PasteHTMLComponent> = {
  title: 'Insertion API/PasteHTML',
  component: PasteHTMLComponent,
  argTypes: {
    htmlContent: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof PasteHTMLComponent>;

export const Default: Story = {
  args: {
    htmlContent: '<span style="font-size:30px">30px 크기의 Hello, world</span>',
  },
};
