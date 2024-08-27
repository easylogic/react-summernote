import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { defaultStyle } from '../util';
import { ReactSummernoteLite, createSummernotePlugin, SummernotePlugin } from '@easylogic/react-summernote-lite';

createSummernotePlugin(
  'sample-initialize',
  class extends SummernotePlugin {
    initialize() {
      console.log('summernote is initialized ', this.context.options);
    }
  },
);

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Extensions/Plugin Initialize',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const InitializePlugin: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>Initialize Plugin</h1>
      <pre>{`
import ReactSummernoteLite, { createSummernotePlugin } from '@easylogic/react-summernote-lite';

// plugin name : sample 
createSummernotePlugin('sample', function (context: SummernoteContext) {

  const options = context.options;    // options 
  this.initialize = function () {
    console.log('summernote is initialized ', options);
  }

})

<ReactSummernoteLite id="sample" />
      `}</pre>
      <ReactSummernoteLite id="sample" />
    </div>
  ),
};
