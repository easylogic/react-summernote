import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite, { createSummernotePlugin, SummernotePlugin } from 'src/summernote/ReactSummernoteLite';

createSummernotePlugin('sample-destroy', class extends SummernotePlugin {
  destroy() {
    console.log('summernote is destroyed ', this.context.options);
  }
})

export const DestoryPlugin = () => {

    return (
      <div style={defaultStyle}>
        <h1>Destory Plugin</h1>
      <pre>{`
import ReactSummernoteLite, { createSummernotePlugin } from 'src/summernote/ReactSummernoteLite';

// plugin name : sample 
createSummernotePlugin('sample', function (context: SummernoteContext) {

  this.destroy = function () {
    console.log('summernote is destroyed ');
  }

})

<ReactSummernoteLite id="sample" />

      `}</pre>
          <ReactSummernoteLite id="sample" />
      </div>
    )
  }
  
  DestoryPlugin.story = {
    name: 'plugin - destroy',
    decorators: [withKnobs],
  }
  