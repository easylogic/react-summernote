import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite, { createSummernotePlugin } from 'src/summernote/ReactSummernoteLite';
import { SummernoteContext } from 'src';


createSummernotePlugin('sample', function (context: SummernoteContext) {
  const options = context.options;    // options 
  this.initialize = function () {
    console.log('summernote is intialized ', options);
  }


})

export const InitializePlugin = () => {

    return (
      <div style={defaultStyle}>
        <h1>Initialize Plugin</h1>
      <pre>{`
import ReactSummernoteLite, { createSummernotePlugin } from 'src/summernote/ReactSummernoteLite';

// plugin name : sample 
createSummernotePlugin('sample', function (context: SummernoteContext) {

  const options = context.options;    // options 
  this.initialize = function () {
    console.log('summernote is intialized ', options);
  }

})

<ReactSummernoteLite id="sample" />

      `}</pre>
          <ReactSummernoteLite id="sample" />
      </div>
    )
  }
  
  InitializePlugin.story = {
    name: 'plugin - initialize',
    decorators: [withKnobs],
  }
  