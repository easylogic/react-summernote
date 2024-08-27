import type { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import React from 'react';
import { defaultStyle } from '../util';

const PasteHTMLComponent = ({ htmlContent }: { htmlContent: string }) => {
  const [note, setNote] = React.useState<any>(null);

  const doPasteHTML = () => {
    if (note) {
      note.summernote('pasteHTML', htmlContent);
    }
  };

  return (
    <div style={defaultStyle}>
      <h1>pasteHTML</h1>
      <p>Paste HTML string.</p>
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
          setNote(note);
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
    htmlContent: '<span style="font-size:30px">Hello, world for 30px</span>',
  },
};
