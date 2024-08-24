import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs, boolean } from '@storybook/addon-knobs';
export const SpellCheckCommand = () => {

    return (
      <div style={defaultStyle}>
        <h1>Disable Spellchecking</h1>
        <p>You can disable Spellchecking in the Editing area with the spellCheck option.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" spellCheck={true} />
      `}</pre>

        <ReactSummernoteLite id="sample" spellCheck={boolean('spellCheck', true)} />
      </div>
    )
  }
  
  SpellCheckCommand.story = {
    name: 'spellCheck',
    decorators: [withKnobs],
  }
   