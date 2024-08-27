import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Insertion API/CreateLink and Unlink',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const CreateLinkCommand: Story = {
  render: () => {
    const $noteRef = React.useRef<any>(null);

    const doCreateLink = () => {
      if ($noteRef.current) {
        $noteRef.current.summernote('createLink', {
          text: "This is the Summernote's Official Site",
          url: 'http://summernote.org',
          isNewWindow: true,
        });
      }
    };

    const doUnlink = () => {
      if ($noteRef.current) {
        $noteRef.current.summernote('unlink');
      }
    };

    return (
      <div style={defaultStyle}>
        <h1>createLink, unlink</h1>
        <p>Create link and unlink.</p>
        <pre>{`
          <ReactSummernoteLite
            id="sample"
            onInit={({ note }) => {
              note.summernote('createLink', {
                text: "This is the Summernote's Official Site",
                url: 'http://summernote.org',
                isNewWindow: true
              });
              
              note.summernote('unlink')  
            }}
          />        
        `}</pre>
        <button onClick={doCreateLink}>createLink https://summernote.org</button>
        <button onClick={doUnlink}>unlink</button>
        <ReactSummernoteLite
          id="sample"
          onInit={({ note }) => {
            $noteRef.current = note;
          }}
        />
      </div>
    );
  },
};
