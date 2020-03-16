import React, { useState, useEffect } from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite, { createSummernoteButton } from 'src/summernote/ReactSummernoteLite';
import { SummernoteButtonProps } from 'src';

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

return <span onClick={() => alert('aa')}>{value} - {props.title}</span>
}

export const ButtonExtension = () => {
    return (
      <div style={defaultStyle}>
        <h1>Define React Button</h1>
      <pre>{`
        import ReactSummernoteLite, { createSummernoteButton } from 'src/summernote/ReactSummernoteLite';

                
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

          return <span onClick={() => alert('aa')}>{value} - {props.title}</span>
        }

        <ReactSummernoteLite id="sample" 
            toolbar={[
              ['group', ['hello']]
            ]}
            buttons={{
              hello: createSummernoteButton({
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
              ['group', ['hello']]
            ]}
            buttons={{
              hello: createSummernoteButton({
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
  
  ButtonExtension.story = {
    name: 'react button',
    decorators: [withKnobs],
  }
  