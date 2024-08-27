import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Selection API/getLastRange',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const getLastRange: Story = {
  render: () => {
    let $note: any = null;
    return (
      <div style={defaultStyle}>
        <p>summernote is saving a range object(WrappedRange) on current cursor.</p>
        <pre>{`
        const $note: any = null;
        <ReactSummernoteLite id="sample" 
          onInit={({ note }: any ) => {
            console.log(note.summernote('getLastRange'))
            $note = note; 
          }}

          onChange={(value: string) => {
            console.log(value, $note.summernote('getLastRange'))
          }}

          onMouseup={() => {
            console.log($note.summernote('getLastRange'))
          }}
        />
      `}</pre>
        <blockquote>
          <h4 id="when-summernote-save-a-range-with-dom-event">when summernote save a range with dom event</h4>
          <ul>
            <li>keydown</li>
            <li>keyup</li>
            <li>focus</li>
            <li>mouseup</li>
            <li>paste</li>
          </ul>
        </blockquote>
        <blockquote>
          <h4 id="when-summernote-save-a-range-with-api">when summernote save a range with api</h4>
          <ul>
            <li>
              <code>editor.insertImage</code> -&gt; Image
            </li>
            <li>
              <code>editor.insertNode</code> -&gt; Node
            </li>
            <li>
              <code>editor.insertText</code> -&gt; TextNode
            </li>
            <li>
              <code>editor.pasteHTML</code> -&gt; last Node of contents
            </li>
            <li>
              <code>editor.insertHorizontalRule</code> -&gt; next sibling node of hr node
            </li>
            <li>
              <code>editor.createLink</code> -&gt; link node
            </li>
          </ul>
        </blockquote>
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            console.log(note.summernote('getLastRange'));
            $note = note;
          }}
          onChange={(value) => {
            console.log(value, $note.summernote('getLastRange'));
          }}
          onMouseup={() => {
            console.log($note.summernote('getLastRange'));
          }}
        />
      </div>
    );
  },
};
