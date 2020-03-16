import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite, { createSummernoteButton, createSummernotePlugin } from 'src/summernote/ReactSummernoteLite';
import { SummernoteContext } from 'src';


createSummernotePlugin('sample3', function (context: SummernoteContext) {
  // button name: 'hello' 
  context.memo('button.hello3', createSummernoteButton({
    title:'hello',
    onClick: () => {
      context.invoke('insertText', 'hello'); // custom command call 
    }
  }))

})

export const ButtonPlugin = () => {

    return (
      <div style={defaultStyle}>
        <h1>Define a button in plugin</h1>
      <pre>{`
import ReactSummernoteLite, { createSummernoteButton, createSummernotePlugin } from 'src/summernote/ReactSummernoteLite';

// plugin name : sample 
createSummernotePlugin('sample', function (context: SummernoteContext) {
  // button create 
  context.memo('button.hello', createSummernoteButton({
    title:'hello',
    onClick: () => {
      context.invoke('insertText', 'hello'); // custom command call 
    }
  }))
})

<ReactSummernoteLite id="sample" 
  toolbar={[
    ['group', ['hello']]
  ]}
/>

      `}</pre>
          <ReactSummernoteLite id="sample" 
            toolbar={[
              ['group', ['hello3']]
            ]}
          />
      </div>
    )
  }
  
  ButtonPlugin.story = {
    name: 'plugin - custom button',
    decorators: [withKnobs],
  }
  