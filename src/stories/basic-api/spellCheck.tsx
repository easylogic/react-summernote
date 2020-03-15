import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
export const SpellCheckCommand = () => {

    return (
      <div style={defaultStyle}>
        <h1>Disable Spellchecking</h1>
        <p>You can disable Spellchecking in the Editing area with the spellCheck option.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          spellCheck: true
        }} />
      `}</pre>

        <ReactSummernoteLite id="sample" opt={{ 
          spellCheck: true
        }} />
      </div>
    )
  }
  
  SpellCheckCommand.story = {
    name: 'spellCheck',
    decorators: [withKnobs],
  }
   