import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { defaultStyle } from '../util';
import {
  ReactSummernoteLite,
  createSummernoteButton,
  createSummernotePlugin,
  SummernotePlugin,
  SummernoteButtonProps,
} from '@easylogic/react-summernote-lite';

createSummernotePlugin(
  'sample2-command',
  class extends SummernotePlugin {
    externalCommand() {
      console.log('external command is called', this.context);
    }
  },
);

const MyButton: React.FC<SummernoteButtonProps> = (props) => {
  return <span onClick={() => props.context.invoke('sample2.externalCommand')}>{props.title}</span>;
};

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Extensions/Plugin Command',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const CommandPlugin: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>Define Custom Command</h1>
      <pre>{`
import ReactSummernoteLite, { createSummernotePlugin } from '@easylogic/react-summernote-lite';

// plugin name : sample 
createSummernotePlugin('sample2', function (context: SummernoteContext) {
  this.externalCommand = function () {
    console.log('external command is called');
  }

})

function MyButton(props: SummernoteButtonProps) {

  // call plugin command 
  return <span onClick={() => props.context.invoke('sample2.externalCommand') }>{props.title}</span>
}

<ReactSummernoteLite id="sample" 
  toolbar={[
    ['group', ['hello2']]
  ]}
  buttons={{
    hello2: createSummernoteButton({
      element: MyButton,
      props: {
        title: 'sample'
      },
      container: 'body',
      tooltip: 'yellow'
    })
  }}
/>
      `}</pre>
      <ReactSummernoteLite
        id="sample"
        toolbar={[['group', ['hello2']]]}
        buttons={{
          hello2: createSummernoteButton({
            element: MyButton,
            props: {
              title: 'sample',
            },
            container: 'body',
            tooltip: 'yellow',
          }),
        }}
      />
    </div>
  ),
};

CommandPlugin.storyName = 'Plugin - Command';
