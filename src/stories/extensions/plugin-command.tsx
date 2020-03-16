import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite, { createSummernoteButton, createSummernotePlugin } from 'src/summernote/ReactSummernoteLite';
import { SummernoteButtonProps, SummernoteContext } from 'src';


createSummernotePlugin('sample2', function (context: SummernoteContext) {
 
  this.externalCommand = function () {
    console.log('external command is called', context);
  }

})


function MyButton(props: SummernoteButtonProps) {

  // call plugin command 
  return <span onClick={() => props.context.invoke('sample2.externalCommand') }>{props.title}</span>
}

export const CommandPlugin = () => {

    return (
      <div style={defaultStyle}>
        <h1>Define Custom Command</h1>
      <pre>{`
import ReactSummernoteLite, { createSummernotePlugin } from 'src/summernote/ReactSummernoteLite';

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
      </div>
    )
  }
  
  CommandPlugin.story = {
    name: 'plugin - command',
    decorators: [withKnobs],
  }
  