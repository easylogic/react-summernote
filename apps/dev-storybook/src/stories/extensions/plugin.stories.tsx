import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';

import {
  ReactSummernoteLite,
  createSummernoteButton,
  createSummernotePlugin,
  SummernotePlugin,
  setSummernoteShortcut,
  setSummernoteLang,
  SummernoteContext,
  SummernoteButtonProps,
} from '@easylogic/react-summernote-lite';

setSummernoteShortcut('CTRL+ENTER,CMD+ENTER', 'full-custom.externalCommand');

setSummernoteLang({
  'en-US': {
    'full-custom': {
      title: 'Full-Custom Summernote plugin',
    },
  },
  'ko-KR': {
    'full-custom': {
      title: '풀 커스텀 서머노트 플러그인',
    },
  },
});

createSummernotePlugin(
  'full-custom',
  class extends SummernotePlugin {
    events = {
      'summernote.init'(we: any, e: any) {
        console.log('summernote initialized', we, e);
      },
      'summernote.change'(we: any, e: any) {
        console.log('summernote keyup', we, e);
      },
    };

    constructor(context: SummernoteContext, $: JQueryStatic) {
      super(context, $);
      this.createButtons();
    }

    initialize() {
      console.log('summernote is initialized ', this.context.options);
    }

    destroy() {}

    createButtons() {
      this.context.memo(
        'button.custom2',
        createSummernoteButton({
          title: this.lang['full-custom'].title,
          onClick: () => {
            this.context.invoke('full-custom.externalCommand');
          },
        }),
      );
    }

    externalCommand() {
      console.log('external command is called');
    }

    externalCommand2() {
      console.log('external command2 is called');
    }
  },
);

function MyButton(props: SummernoteButtonProps) {
  const [value, setValue] = useState('my button');
  const div = document.createElement('div');

  function handleChangeValue(_: any, content: string) {
    div.innerHTML = content;
    setValue(div.textContent || '');
  }

  useEffect(() => {
    props.context.$note.on('summernote.change', handleChangeValue);
    return () => {
      props.context.$note.off('summernote.change', handleChangeValue);
    };
  }, []);

  return (
    <span onClick={() => props.context.invoke('sample.externalCommand2')}>
      {value} - {props.title}
    </span>
  );
}

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Extensions/Custom Plugin',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const CustomPlugin: Story = {
  args: {
    id: 'sample',
    lang: 'ko-KR',
    toolbar: [['group', ['custom', 'custom2']]],
    buttons: {
      custom: createSummernoteButton({
        element: MyButton,
        props: {
          title: 'sample',
        },
        container: 'body',
        tooltip: 'yellow',
      }),
    },
  },
  render: (args) => (
    <div>
      <h1>Define Custom Plugin</h1>
      <ReactSummernoteLite {...args} />
    </div>
  ),
};
