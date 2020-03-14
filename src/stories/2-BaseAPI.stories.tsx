import React from 'react';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from "@storybook/addon-knobs";
import { defaultStyle } from './util'

export default {
  title: 'Basic API',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};

export const DestroyCommand = () => {
  return (
    <div style={defaultStyle}>
      <h1>Destroy</h1>
      <p>Summernote 를 메모리에서 지웁니다.</p>
    <pre>{`
      <ReactSummernoteLite id="sample" opt={{ 
        callbacks: { 
          onInit: ({ note }: any ) => {
            note.summernote('destroy');
          }
        }
      }} />
    `}</pre>
      <ReactSummernoteLite id="sample" opt={{ callbacks: { onInit: ({ note }: any ) => {
        note.summernote('destroy');
      }}}} />
    </div>
  )
}

DestroyCommand.story = {
  name: 'Destroy',
  decorators: [withKnobs],
}
 



export const GetCommand = () => {

  return (
    <div style={defaultStyle}>
      <h1>Get </h1>
      <p>Summernote 의 값 출력하기</p>
    <pre>{`
      <ReactSummernoteLite id="sample" opt={{
        callbacks: { 
          onChange: (value: any ) => {
            console.log(value);
          }
        }
      }} />
    `}</pre>
      <ReactSummernoteLite id="sample" opt={{
        callbacks: { 
          onChange: (value: any ) => {
            console.log(value);
          }
        }
      }} />
    </div>
  )
}

GetCommand.story = {
  name: 'Get a html',
  decorators: [withKnobs],
}
 



export const CodeCommand = () => {

  let $note: any = null

  return (
    <div style={defaultStyle}>
      <h1>Code </h1>
      <p>Summernote 의 값 출력하기</p>
    <pre>{`
let $note: any = null

<button onClick={() => console.log($note?.summernote('code'))}>print</button>
<ReactSummernoteLite id="sample" opt={{
  callbacks: { 
    onInit: (summernote: any) => {
      $note = summernote.note;
    }
  }
}} />
    `}</pre>
      <button onClick={() => console.log($note?.summernote('code'))}>console.log html string</button>
      <ReactSummernoteLite id="sample" opt={{
        callbacks: { 
          onInit: (summernote: any) => {
            $note = summernote.note;
          }
        }
      }} />
    </div>
  )
}

CodeCommand.story = {
  name: 'code',
  decorators: [withKnobs],
}


export const SetCommand = () => {

  let $note: any = null

  return (
    <div style={defaultStyle}>
      <h1>Set a html </h1>
    <pre>{`
let $note: any = null

<button onClick={() => $note?.summernote('code', 'Hello, world')}>set a html string</button>
<ReactSummernoteLite id="sample" opt={{
  callbacks: { 
    onInit: (summernote: any) => {
      $note = summernote.note;
    }
  }
}} />
    `}</pre>
      <button onClick={() => $note?.summernote('code', 'Hello, world')}>set a html string</button>
      <ReactSummernoteLite id="sample" opt={{
        callbacks: { 
          onInit: (summernote: any) => {
            $note = summernote.note;
          }
        }
      }} />
    </div>
  )
}

SetCommand.story = {
  name: 'Set a html',
  decorators: [withKnobs],
}