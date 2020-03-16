import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const OnChangeCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >onChange(contents, $editable)</h1>

        <ul>
          <li>IE9-10: DOMCharacterDataModified, DOMSubtreeModified, DOMNodeInserted</li>
          <li>Chrome, FF: input</li>
        </ul>
        <pre>{`
        <ReactSummernoteLite id="sample" onChange={(contents: string, $editable: any) => {
          console.log('onChange:', contents, $editable);
        }}
    />
        `}
        </pre>        
  
        <ReactSummernoteLite id="sample" onChange={(contents: string, $editable: any) => {
              console.log('onChange:', contents, $editable);
            }}
        />
      </div>
    )
  }
  
  OnChangeCallback.story = {
    name: 'onChange',
    decorators: [withKnobs],
  }
   