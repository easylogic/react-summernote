import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite, { createSummernoteButton } from 'src/summernote/ReactSummernoteLite';

export const NativeButtonExtension = () => {
    return (
      <div style={defaultStyle}>
        <h1>Define Native button</h1>
      <pre>{`
        import ReactSummernoteLite, { createSummernoteButton } from 'src/summernote/ReactSummernoteLite';

        <ReactSummernoteLite id="sample" 
          toolbar={[
            ['group', ['default']]
          ]}
          buttons={{
            default: createSummernoteButton({
              title: 'default button',
              onClick: (context: any) => {
                context.invoke('insertText', 'default');
              }
            })
          }}  
        />
      `}</pre>
        <ReactSummernoteLite id="sample" 
            toolbar={[
              ['group', ['default']]
            ]}
            buttons={{
              default: createSummernoteButton({
                title: 'default button',
                onClick: (context: any) => {
                  context.invoke('insertText', 'default');
                }
              })
            }}  
          />
      </div>
    )
  }
  
  NativeButtonExtension.story = {
    name: 'native button',
    decorators: [withKnobs],
  }
  