import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Font Style API/Advanced',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const FontStyleAdvancedCommand: Story = {
  render: () => {
    const [note, setNote] = React.useState<any>(null);

    const doSuperScript = () => {
      if (note) {
        note.summernote('superscript');
      }
    };

    const doSubScript = () => {
      if (note) {
        note.summernote('subscript');
      }
    };

    return (
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <h1>superscript, subscript</h1>
        <p>Set superscript or subscript.</p>
        <pre>{`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('superscript');
            note.summernote('subscript');
          }} />                
        `}</pre>
        <button onClick={doSuperScript}>superscript</button>
        <button onClick={doSubScript}>subscript</button>
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            setNote(note);
          }}
        />
      </div>
    );
  },
};

export const SuperscriptSubscript = FontStyleAdvancedCommand;
