import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
export const DisableGrammarCommand = () => {

    return (
      <div style={defaultStyle}>
        <h1>Disable Grammarly Browser Addon</h1>
        <p>You can disable the Grammarly Browser Addon (currently researching other Grammar Addons for their disabling options) by using the disableGrammar option.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" disableGrammar={false} />
      `}</pre>

        <ReactSummernoteLite id="sample" disableGrammar={false} />
      </div>
    )
  }
  
  DisableGrammarCommand.story = {
    name: 'disableGrammar',
    decorators: [withKnobs],
  }
   