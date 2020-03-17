import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite, { createSummernotePlugin, SummernotePlugin } from 'src/summernote/ReactSummernoteLite';


<<<<<<< HEAD
createSummernotePlugin('sample-events', class extends SummernotePlugin {
=======
createSummernotePlugin('sample', function (context: SummernoteContext) {

  console.log(this);
  // you must define  to call event callback  
  this.initialized = function () {

  }
>>>>>>> 60b0c47991e55d487692e2f64398364587bdbd16

  // This events will be attached when editor is initialized.
  events = {
    // This will be called after modules are initialized.
    'summernote.init': (we: any, e: any) => {
      console.log('summernote initialized', this.context, we, e);
    },
    // This will be called when user releases a key on editable.
    'summernote.keyup': (we: any, e: any) => {
      console.log('summernote keyup', we, e);
    },
<<<<<<< HEAD
  }  
=======
  };      

>>>>>>> 60b0c47991e55d487692e2f64398364587bdbd16


})


export const EventPlugin = () => {

    return (
      <div style={defaultStyle}>
        <h1>Define Custom Plugin</h1>
      <pre>{`
import ReactSummernoteLite, { createSummernotePlugin } from 'src/summernote/ReactSummernoteLite';

// plugin name : sample 
createSummernotePlugin('sample', function (context: SummernoteContext) {

  // This events will be attached when editor is initialized.
  this.events = {
    // This will be called after modules are initialized.
    'summernote.init': function(we: any, e: any) {
      console.log('summernote initialized', we, e);
    },
    // This will be called when user releases a key on editable.
    'summernote.keyup': function(we: any, e: any) {
      console.log('summernote keyup', we, e);
    },
  };      

})

<ReactSummernoteLite id="sample" />

      `}</pre>
          <ReactSummernoteLite id="sample" />
      </div>
    )
  }
  
  EventPlugin.story = {
    name: 'plugin - event',
    decorators: [withKnobs],
  }
  