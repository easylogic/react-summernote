import React, { useState, useEffect } from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite, { createSummernoteButton, createSummernotePlugin } from 'src/summernote/ReactSummernoteLite';
import { SummernoteButtonProps, SummernoteContext } from 'src';


createSummernotePlugin('sample', function (context: SummernoteContext) {
  // button name: 'custom2' 
  context.memo('button.custom2', createSummernoteButton({
    title:'custom2',
    onClick: () => {
      context.invoke('sample.externalCommand'); // custom command call 
    }
  }))

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

  const options = context.options;    // options 
  this.initialize = function () {
    console.log('summernote is intialized ', options);
  }

  // This methods will be called when editor is destroyed by $('..').summernote('destroy');
  // You should remove elements on `initialize`.      
  this.destroy = function () {

  }

  this.externalCommand = function () {
    console.log('external command is called');
  }

  this.externalCommand2 = function () {
    console.log('external command2 is called');
  }

})


function MyButton(props: SummernoteButtonProps) {

  const [value, setValue] = useState('my button');
  const div = document.createElement('div');

  function handleChangeValue (_: any, content: string) {
    div.innerHTML = content;
    setValue(div.textContent);
  }

  useEffect(() => {
    props.context.$note.on('summernote.change', handleChangeValue) 
    return () => {
      props.context.$note.off('summernote.change', handleChangeValue) 
    }
  }, [])

  // call plugin command 
  return <span onClick={() => props.context.invoke('sample.externalCommand2') }>{value} - {props.title}</span>
}

export const CustomPlugin = () => {

    return (
      <div style={defaultStyle}>
        <h1>Define Custom Plugin</h1>
      <pre>{`
import ReactSummernoteLite, { createSummernoteButton, createSummernotePlugin } from 'src/summernote/ReactSummernoteLite';

// plugin name : sample 
createSummernotePlugin('sample', function (context: SummernoteContext) {
  // button create 
  context.memo('button.custom2', createSummernoteButton({
    title:'custom2',
    onClick: () => {
      context.invoke('sample.externalCommand'); // custom command call 
    }
  }))

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

  const options = context.options;    // options 
  this.initialize = function () {
    console.log('summernote is intialized ', options);
  }

  // This methods will be called when editor is destroyed by $('..').summernote('destroy');
  // You should remove elements on \`initialize\`.      
  this.destroy = function () {

  }

  this.externalCommand = function () {
    console.log('external command is called');
  }

  this.externalCommand2 = function () {
    console.log('external command2 is called');
  }

})

<ReactSummernoteLite id="sample" 
  toolbar={[
    ['group', ['custom', 'custom2']]
  ]}
  buttons={{
    custom: createSummernoteButton({
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
              ['group', ['custom', 'custom2']]
            ]}
            buttons={{
              custom: createSummernoteButton({
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
  
  CustomPlugin.story = {
    name: 'full custom plugin ',
    decorators: [withKnobs],
  }
  