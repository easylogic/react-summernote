import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Paragraph API/Align',
  component: ReactSummernoteLite,

  argTypes: {
    id: { control: 'text' },
    onInit: { action: 'initialized' },
  },
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const AlignCommand: Story = {
  render: (args) => {
    const [note, setNote] = React.useState<any>(null);

    const doAlign = (command: string) => () => {
      if (note) {
        note.summernote(command);
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>justify left, right and more</h1>
        <p>Set the alignment of a Paragraph.</p>
        <pre>{`
          <ReactSummernoteLite id="sample" onInit={({ note }) => {
            note.summernote('justifyLeft');
            note.summernote('justifyRight');
            note.summernote('justifyCenter');
            note.summernote('justifyFull');
          }} />                
        `}</pre>
        <button onClick={doAlign('justifyLeft')}>left</button>
        <button onClick={doAlign('justifyRight')}>right</button>
        <button onClick={doAlign('justifyCenter')}>center</button>
        <button onClick={doAlign('justifyFull')}>full</button>
        <ReactSummernoteLite
          {...args}
          id="sample"
          onInit={({ note }) => {
            setNote(note);
            args.onInit?.({ note });
          }}
        />
      </div>
    );
  },
  args: {
    id: 'sample',
  },
};

AlignCommand.storyName = 'left, right and more';

export const JustifyLeft: Story = {
  ...AlignCommand,
  args: {
    ...AlignCommand.args,
    onInit: ({ note }) => {
      note.summernote('justifyLeft');
    },
  },
};

export const JustifyRight: Story = {
  ...AlignCommand,
  args: {
    ...AlignCommand.args,
    onInit: ({ note }) => {
      note.summernote('justifyRight');
    },
  },
};

export const JustifyCenter: Story = {
  ...AlignCommand,
  args: {
    ...AlignCommand.args,
    onInit: ({ note }) => {
      note.summernote('justifyCenter');
    },
  },
};

export const JustifyFull: Story = {
  ...AlignCommand,
  args: {
    ...AlignCommand.args,
    onInit: ({ note }) => {
      note.summernote('justifyFull');
    },
  },
};
