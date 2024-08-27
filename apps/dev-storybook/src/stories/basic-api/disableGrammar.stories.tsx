import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Basic API/DisableGrammar',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const DisableGrammarComponent: React.FC = () => {
  return (
    <div style={defaultStyle}>
      <h1>Disable Grammarly Browser Addon</h1>
      <p>
        You can disable the Grammarly Browser Addon (currently researching other Grammar Addons for their disabling
        options) by using the disableGrammar option.
      </p>
      <pre>{`
        <ReactSummernoteLite id="sample" disableGrammar={false} />
      `}</pre>
      <ReactSummernoteLite id="sample" disableGrammar={false} />
    </div>
  );
};

export const DisableGrammar: Story = {
  render: () => <DisableGrammarComponent />,
};
