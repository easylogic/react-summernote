import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';

interface RangeToStringCommandProps {
  title: string;
  description: string;
}

const RangeToStringCommand: React.FC<RangeToStringCommandProps> = ({ title, description }) => {
  const [note, setNote] = React.useState<SummernoteJQueryInstance | null>(null);

  const doToString = () => {
    console.log(note?.summernote('getLastRange').toString());
  };

  return (
    <div style={defaultStyle}>
      <h1>{title}</h1>
      <p>{description}</p>
      <pre>
        {`
          const text = rng.toString()
        `}
      </pre>

      <button onClick={doToString}>toString</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          setNote(note);
        }}
      />
    </div>
  );
};

const meta: Meta<typeof RangeToStringCommand> = {
  title: 'Selection API/Range/toString',
  component: RangeToStringCommand,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof RangeToStringCommand>;

export const Default: Story = {
  args: {
    title: 'toString()',
    description: 'returns text in range',
  },
};
