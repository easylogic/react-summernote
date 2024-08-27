import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite, createSummernoteButton } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Extensions/Native Button',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const NativeButtonExtension: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>Define Native button</h1>
      <pre>{`
        import ReactSummernoteLite, { createSummernoteButton } from '@easylogic/react-summernote-lite';

        <ReactSummernoteLite id="sample" 
          toolbar={[
            ['group', ['default']]
          ]}
          buttons={{
            default: createSummernoteButton({
              title: 'default button',
              onClick: (context: any) => {
                context.invoke('insertText', 'default');
              }
            })
          }}  
        />
      `}</pre>
      <ReactSummernoteLite
        id="sample"
        toolbar={[['group', ['default']]]}
        buttons={{
          default: createSummernoteButton({
            title: 'default button',
            onClick: (context: any) => {
              context.invoke('insertText', 'default');
            },
          }),
        }}
      />
    </div>
  ),
};
