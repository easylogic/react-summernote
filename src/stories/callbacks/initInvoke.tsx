import React from 'react'; 
import { defaultStyle } from '../util';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from '@storybook/addon-knobs';

export const InitInvokeCallback = () => {
    return (
      <div style={defaultStyle}>
        <h1 >initInvoke</h1>
        <pre>{`
          <ReactSummernoteLite id="sample" initInvoke={invoke => invoke('insertText', 'aaaa')} />
        `}
        </pre>        
        <ReactSummernoteLite id="sample" initInvoke={invoke => invoke('insertText', 'aaaa')} />
      </div>
    )
  }
  
  InitInvokeCallback.story = {
    name: 'initInvoke',
    decorators: [withKnobs],
  }
   