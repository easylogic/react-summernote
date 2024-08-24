import React, { useState, useEffect } from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite, { createSummernoteButton, createSummernotePlugin, SummernotePlugin, setSummernoteShortcut, setSummernoteLang } from 'src/summernote/ReactSummernoteLite';
import { SummernoteButtonProps, SummernoteContext } from 'types';

setSummernoteShortcut('CTRL+ENTER,CMD+ENTER', 'full-custom.externalCommand')

setSummernoteLang({
  'en-US': {
    'full-custom': {
      title: 'Full-Custom Summernote plugin'
    }
  },
  'ko-KR': {
    'full-custom': {
      title: '풀 커스텀 서머노트 플러그인'
    }
  }
})

createSummernotePlugin('full-custom', class extends SummernotePlugin {

  events = {
    'summernote.init' (we: any, e: any) {
        console.log('summernote initialized', we, e);
    },
    'summernote.change' (we: any, e: any) {
      console.log('summernote keyup', we, e);
    }
  }

  constructor (context: SummernoteContext, $: JQueryStatic) {
    super(context, $);

    this.createButtons();
  }

  initialize() {
    console.log('summernote is intialized ', this.context.options);
  } 

  // This methods will be called when editor is destroyed by $('..').summernote('destroy');
  // You should remove elements on `initialize`.        
  destroy() {

  }

  createButtons () {
    // button name: 'custom2' 
    this.context.memo('button.custom2', createSummernoteButton({
      title: this.lang['full-custom'].title,
      onClick: () => {
        this.context.invoke('full-custom.externalCommand'); // custom command call 
      }
    }))
  }

  // craete external command 
  externalCommand() {
    console.log('external command is called');
  }

  externalCommand2() {
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
import ReactSummernoteLite, { createSummernoteButton, createSummernotePlugin, SummernotePlugin, setSummernoteShortcut, setSummernoteLang  } from 'src/summernote/ReactSummernoteLite';


setSummernoteShortcut({
  pc: {
    'CTRL+ENTER': 'sample.externalCommand'
  },
  mac: {
    'CMD+ENTER': 'sample.externalCommand'
  }
})

setSummernoteLang({
  'en-US': {
    sample: {
      title: 'Full-Custom Summernote plugin'
    }
  },
  'ko-KR': {
    sample: {
      title: '풀 커스텀 서머노트 플러그인'
    }
  }
})

// plugin name : sample 
createSummernotePlugin('sample', class extends SummernotePlugin {

  events = {
    'summernote.init' (we: any, e: any) {
        console.log('summernote initialized', we, e);
    },
    'summernote.change' (we: any, e: any) {
      console.log('summernote keyup', we, e);
    }
  }

  constructor (context: SummernoteContext, $: JQueryStatic) {
    super(context, $);

    this.createButtons();
  }

  initialize() {
    console.log('summernote is intialized ', this.context.options);
  } 

  // This methods will be called when editor is destroyed by $('..').summernote('destroy');
  // You should remove elements on \`initialize\`.        
  destroy() {

  }

  createButtons () {
    // button name: 'custom2' 
    this.context.memo('button.custom2', createSummernoteButton({
      title: this.lang.sample.title,
      onClick: () => {
        this.context.invoke('full-custom.externalCommand'); // custom command call 
      }
    }))
  }

  // craete external command 
  externalCommand() {
    console.log('external command is called');
  }

  externalCommand2() {
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
            lang="ko-KR"
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
  