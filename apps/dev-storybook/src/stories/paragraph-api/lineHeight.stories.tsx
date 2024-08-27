import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Paragraph API/Line Height',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<
  typeof ReactSummernoteLite & {
    lineHeight: number;
  }
>;

const LineHeightExample = ({ lineHeight = 1.2 }: { lineHeight?: number }) => {
  const [note, setNote] = React.useState<SummernoteJQueryInstance | null>(null);

  const doLineHeight = () => {
    if (note) {
      note.summernote('lineHeight', lineHeight);
    }
  };

  return (
    <div>
      <h1>Line Height</h1>
      <p>Set line height.</p>
      <pre>{`
        <ReactSummernoteLite onInit={({ note }) => {
          note.summernote('lineHeight', ${lineHeight});
        }} />                
      `}</pre>
      <button onClick={doLineHeight}>Line Height {lineHeight}</button>
      <ReactSummernoteLite onInit={({ note }) => setNote(note)} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <LineHeightExample />,
};
