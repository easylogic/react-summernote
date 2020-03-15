import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';
export const CodeViewToggleCommand = () => {
    return (
      <div style={defaultStyle}>
        <h1>codeview.toggle</h1>
        <p>You can toggle editable/codable view by API.</p>
      <pre>{`
        <ReactSummernoteLite id="sample" opt={{ 
          callbacks: { 
            onInit: ({ note }: any ) => {
                note.summernote('codeview.toggle');
            }
          }
        }} />
      `}</pre>
        <ReactSummernoteLite id="sample" opt={{ callbacks: { onInit: ({ note }: any ) => {
          note.summernote('codeview.toggle');
        }}}} />
      </div>
    )
  }
  
  CodeViewToggleCommand.story = {
    name: 'codeview.toggle',
    decorators: [withKnobs],
  }
   