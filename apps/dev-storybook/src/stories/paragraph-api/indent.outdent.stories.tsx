import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Paragraph API/Indent Outdent',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const IndentOutdentCommand: Story = {
  render: () => {
    const [note, setNote] = React.useState<SummernoteJQueryInstance | null>(null);

    const doIndent = () => note?.summernote('indent');
    const doOutdent = () => note?.summernote('outdent');

    return (
      <div style={defaultStyle}>
        <h1>indent, outdent</h1>
        <p>Indent or Outdent on current paragraph.</p>
        <pre>{`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('indent')  
            note.summernote('outdent')  
          }} />                
        `}</pre>
        <button onClick={doIndent}>indent</button>
        <button onClick={doOutdent}>outdent</button>
        <ReactSummernoteLite id="sample" onInit={({ note }) => setNote(note)} />
      </div>
    );
  },
};

export const Default = IndentOutdentCommand;
