import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite, SummernoteJQueryInstance } from '@easylogic/react-summernote-lite';

interface RangeWrapBodyInlineWithParaProps {
  title: string;
  description: string;
}

const RangeWrapBodyInlineWithPara: React.FC<RangeWrapBodyInlineWithParaProps> = ({ title, description }) => {
  const [note, setNote] = React.useState<SummernoteJQueryInstance | null>(null);

  const doWrapBodyInlineWithPara = () => {
    console.log(note?.summernote('getLastRange').wrapBodyInlineWithPara());
  };

  return (
    <div style={defaultStyle}>
      <h1>{title}</h1>
      <p>{description}</p>
      <pre>
        {`
          const newRng = rng.WrapBodyInlineWithPara()
        `}
      </pre>

      <button onClick={doWrapBodyInlineWithPara}>wrapBodyInlineWithPara</button>
      <ReactSummernoteLite
        id="sample"
        onInit={({ note }) => {
          setNote(note);
        }}
      />
    </div>
  );
};

const meta: Meta<typeof RangeWrapBodyInlineWithPara> = {
  title: 'Selection API/Range/wrapBodyInlineWithPara',
  component: RangeWrapBodyInlineWithPara,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof RangeWrapBodyInlineWithPara>;

export const Default: Story = {
  args: {
    title: 'wrapBodyInlineWithPara()',
    description: 'wrap inline nodes which children of body with paragraph',
  },
};
