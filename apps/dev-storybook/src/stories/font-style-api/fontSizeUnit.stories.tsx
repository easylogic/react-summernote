import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, SummernoteCallbackInitProps } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Font Style API/FontSizeUnit',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const FontSizeUnitTemplate: Story = {
  render: (args) => {
    const [note, setNote] = React.useState<any>(null);

    const doFontSizeUnit = () => {
      if (note) {
        note.summernote('fontSizeUnit', 'pt');
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>fontSizeUnit</h1>
        <p>글꼴 크기 단위 설정 - 기본값은 px</p>
        <pre>{`
          <ReactSummernoteLite 
            id="sample" 
            onInit={({ note } ) => {
              note.summernote('fontSizeUnit', 'pt');
            }} 
          />                
        `}</pre>
        <button onClick={doFontSizeUnit}>글꼴 크기 단위 pt로 설정</button>
        <ReactSummernoteLite
          {...args}
          id="sample"
          onInit={({ note }) => {
            setNote(note);
          }}
        />
      </div>
    );
  },
};

export const Default: Story = {
  ...FontSizeUnitTemplate,
};
